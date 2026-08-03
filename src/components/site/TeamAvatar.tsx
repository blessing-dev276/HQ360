import blessing from "@/assets/team-blessing.jpg.asset.json";
import zainab from "@/assets/team-zainab.jpg.asset.json";
import emmanuel from "@/assets/team-emmanuel.jpg.asset.json";
import richard from "@/assets/team-richard.jpg.asset.json";
import ebenezer from "@/assets/team-ebenezer.jpg.asset.json";

const PHOTOS: Record<string, string> = {
  blessing: blessing.url,
  zainab: zainab.url,
  emmanuel: emmanuel.url,
  richard: richard.url,
  ebenezer: ebenezer.url,
};

export function TeamAvatar({
  name,
  initials,
  photo,
}: {
  name: string;
  initials: string;
  photo?: string;
}) {
  const src = photo ? PHOTOS[photo] : undefined;

  if (!src) {
    return (
      <span
        aria-hidden="true"
        className="bg-fire mx-auto flex aspect-square w-full max-w-[15rem] items-center justify-center rounded-3xl font-serif text-4xl font-semibold text-white"
      >
        {initials}
      </span>
    );
  }

  return (
    <span className="bg-fire mx-auto block aspect-square w-full max-w-[15rem] rounded-3xl p-[3px]">
      <img
        src={src}
        alt={`Portrait of ${name}`}
        width={800}
        height={800}
        loading="lazy"
        className="bg-background size-full rounded-[1.35rem] object-cover object-top"
      />
    </span>
  );
}
