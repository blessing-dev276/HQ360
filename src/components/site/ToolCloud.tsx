import { cn } from "@/lib/utils";

/**
 * The platforms HQ360 builds on. These are tools we use, not clients or media
 * mentions — so no logos, no implied endorsement, just an honest capability
 * signal rendered as a quiet marquee.
 */
const PLATFORMS = [
  "GoHighLevel",
  "HubSpot",
  "Meta Ads",
  "Google Ads",
  "Webflow",
  "Framer",
  "Shopify",
  "WordPress",
  "Klaviyo",
  "Zapier",
  "Make",
  "Google Business Profile",
  "Notion",
  "Airtable",
];

export function ToolCloud({
  className,
  heading = "We build on the platforms your business already runs on",
}: {
  className?: string;
  heading?: string;
}) {
  const doubled = [...PLATFORMS, ...PLATFORMS];
  return (
    <div className={cn("border-y border-border bg-secondary/50 py-10", className)}>
      <p className="px-5 text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:px-6">
        {heading}
      </p>
      <div
        className="group mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <ul className="hq-marquee-track flex w-max items-center gap-3">
          {doubled.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <p className="sr-only">Platforms HQ360 works in: {PLATFORMS.join(", ")}.</p>
    </div>
  );
}
