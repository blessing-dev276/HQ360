import blessingPhoto from "@/assets/team-blessing.png";
import zainab from "@/assets/team-zainab.jpg.asset.json";
import emmanuel from "@/assets/team-emmanuel.jpg.asset.json";
import richard from "@/assets/team-richard.jpg.asset.json";
import ebenezer from "@/assets/team-ebenezer.jpg.asset.json";
import racheal from "@/assets/team-racheal.jpg.asset.json";

const PHOTOS: Record<string, string> = {
  blessing: blessingPhoto,
  zainab: zainab.url,
  emmanuel: emmanuel.url,
  richard: richard.url,
  ebenezer: ebenezer.url,
  racheal: racheal.url,
};

export function TeamAvatar({
  name,
  initials,
  photo,
  imageUrl,
}: {
  name: string;
  initials: string;
  /** key into the bundled PHOTOS map (fallback roster) */
  photo?: string | undefined;
  /** explicit portrait URL (admin-managed members); wins over `photo` */
  imageUrl?: string | undefined;
}) {
  const src = imageUrl || (photo ? PHOTOS[photo] : undefined);

  if (!src) {
    return (
      <span
        aria-hidden="true"
        className="mx-auto flex aspect-square w-full max-w-[12rem] items-center justify-center rounded-2xl bg-charcoal font-display text-4xl font-semibold text-[oklch(0.97_0.006_90)]"
      >
        {initials}
      </span>
    );
  }

  return (
    <span className="mx-auto block aspect-square w-full max-w-[12rem] overflow-hidden rounded-2xl border border-border">
      <img
        src={src}
        alt={`Portrait of ${name}`}
        width={1200}
        height={1200}
        loading="lazy"
        className="size-full object-cover object-center"
      />
    </span>
  );
}
