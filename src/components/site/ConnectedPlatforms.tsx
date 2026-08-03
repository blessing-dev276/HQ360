import { Link } from "@tanstack/react-router";
import {
  AmazonLogo,
  AppleBooksLogo,
  BarnesNobleLogo,
  BookBubLogo,
  GooglePlayLogo,
  GoodreadsLogo,
  IngramSparkLogo,
  KoboLogo,
  NetGalleyLogo,
  StoryOriginLogo,
} from "./PlatformLogos";

const PLATFORMS = [
  { name: "Amazon", Logo: AmazonLogo },
  { name: "Goodreads", Logo: GoodreadsLogo },
  { name: "BookBub", Logo: BookBubLogo },
  { name: "Apple Books", Logo: AppleBooksLogo },
  { name: "Google Play", Logo: GooglePlayLogo },
  { name: "IngramSpark", Logo: IngramSparkLogo },
  { name: "Barnes & Noble", Logo: BarnesNobleLogo },
  { name: "Kobo", Logo: KoboLogo },
  { name: "NetGalley", Logo: NetGalleyLogo },
  { name: "StoryOrigin", Logo: StoryOriginLogo },
];

function PlatformBadge({ name, Logo }: { name: string; Logo: React.FC<{ className?: string }> }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-editorial">
      <span className="sr-only">{name}</span>
      <Logo className="h-6 w-auto text-foreground/90" />
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
