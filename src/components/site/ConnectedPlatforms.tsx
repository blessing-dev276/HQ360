import { Link } from "@tanstack/react-router";

const PLATFORMS = [
  { name: "Amazon", abbr: "AM" },
  { name: "Goodreads", abbr: "GR" },
  { name: "BookBub", abbr: "BB" },
  { name: "Apple Books", abbr: "AB" },
  { name: "Google Play", abbr: "GP" },
  { name: "IngramSpark", abbr: "IS" },
  { name: "Barnes & Noble", abbr: "BN" },
  { name: "Kobo", abbr: "KO" },
  { name: "NetGalley", abbr: "NG" },
  { name: "StoryOrigin", abbr: "SO" },
];

function PlatformBadge({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-editorial">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal font-sans text-xs font-bold text-[oklch(0.97_0.008_85)]"
      >
        {abbr}
      </span>
      <span className="whitespace-nowrap font-serif text-base font-medium">{name}</span>
    </div>
  );
}

export function ConnectedPlatforms() {
  const track = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

  return (
    <section className="border-y border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Connected platforms
            </p>
            <h2 className="mt-1 font-serif text-xl sm:text-2xl">
              We run campaigns where your readers already are.
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-primary hover:underline"
          >
            See how we use each platform
          </Link>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
        />
        <div className="marquee-track flex w-max gap-4 pr-4">
          {track.map((platform, i) => (
            <PlatformBadge key={`${platform.name}-${i}`} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
