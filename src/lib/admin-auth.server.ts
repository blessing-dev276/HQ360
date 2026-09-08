// Lightweight passphrase gate for /admin.
//
// Set ADMIN_PASSWORD in the environment. This is a single shared secret for an
// internal team tool — it is NOT multi-user auth. If you need per-user accounts,
// move this behind Supabase Auth and the requireSupabaseAuth middleware.

const COOKIE = "hq360_admin";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length >= 6);
}

async function tokenFor(password: string): Promise<string> {
  const data = new TextEncoder().encode(`hq360-admin-v1::${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected || !password) return false;
  // constant-ish time compare
  if (password.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= password.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export async function sessionCookie(): Promise<string> {
  const token = await tokenFor(process.env.ADMIN_PASSWORD ?? "");
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}`;
}

export function clearCookie(): string {
  return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

function readCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

export async function isAdminRequest(request: Request): Promise<boolean> {
  if (!adminConfigured()) return false;
  const got = readCookie(request.headers.get("cookie"), COOKIE);
  if (!got) return false;
  const expected = await tokenFor(process.env.ADMIN_PASSWORD ?? "");
  return got === expected;
}
