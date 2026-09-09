/**
 * Admin media upload.
 *
 * Fast path: shrink big images in the browser, then PUT the file straight to
 * Supabase Storage with a signed URL (no streaming through the server function).
 * Falls back to the buffered /api/admin/upload route if the signed flow fails.
 */

export type AdminBucket = "portfolio" | "team" | "work";
export type UploadResult = { url: string; mediaType: "image" | "video" };

const COMPRESSIBLE = /^image\/(png|jpe?g|webp)$/;
const MAX_DIMENSION = 2000;
const WEBP_QUALITY = 0.82;

async function compressImage(file: File): Promise<{ blob: Blob; type: string } | null> {
  if (typeof document === "undefined" || !COMPRESSIBLE.test(file.type)) return null;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    // Nothing to gain: already small and already webp.
    if (scale === 1 && file.type === "image/webp") {
      bitmap.close?.();
      return null;
    }
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/webp", WEBP_QUALITY),
    );
    return blob ? { blob, type: "image/webp" } : null;
  } catch {
    return null;
  }
}

async function fallbackUpload(
  file: Blob,
  name: string,
  bucket: AdminBucket,
): Promise<UploadResult> {
  const fd = new FormData();
  fd.append("file", file instanceof File ? file : new File([file], name, { type: file.type }));
  fd.append("bucket", bucket);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const body = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    url?: string;
    mediaType?: "image" | "video";
    error?: string;
  };
  if (!res.ok || !body.ok || !body.url) throw new Error(body.error || "upload_failed");
  return { url: body.url, mediaType: body.mediaType ?? "image" };
}

export async function uploadAdminMedia(file: File, bucket: AdminBucket): Promise<UploadResult> {
  const mediaType: "image" | "video" = file.type.startsWith("video/") ? "video" : "image";

  let payload: Blob = file;
  let contentType = file.type;
  const compressed = await compressImage(file);
  if (compressed && compressed.blob.size < file.size) {
    payload = compressed.blob;
    contentType = compressed.type;
  }

  try {
    const res = await fetch("/api/admin/upload-url", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ bucket, contentType }),
    });
    const body = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      uploadUrl?: string;
      publicUrl?: string;
      error?: string;
    };
    if (!res.ok || !body.ok || !body.uploadUrl || !body.publicUrl) {
      throw new Error(body.error || "upload_url_failed");
    }

    const put = await fetch(body.uploadUrl, {
      method: "PUT",
      headers: { "content-type": contentType, "x-upsert": "false" },
      body: payload,
    });
    if (!put.ok) throw new Error("upload_failed");

    return { url: body.publicUrl, mediaType };
  } catch {
    // Signed upload unavailable (e.g. storage misconfig) — use the buffered route.
    return fallbackUpload(payload, file.name || "upload", bucket);
  }
}
