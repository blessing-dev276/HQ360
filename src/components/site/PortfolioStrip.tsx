import { useQuery } from "@tanstack/react-query";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CaseStudySkeleton } from "@/components/site/loading/RouteLoading";
import { fetchPublicContent } from "@/lib/public-content";

type PortfolioItem = {
  id: string;
  title: string;
  description: string | null;
  media_type: "image" | "video";
  media_url: string;
  thumbnail_url: string | null;
  external_link: string | null;
};

/**
 * Renders published portfolio items for an industry and/or a capability.
 * Managed from /admin. Renders nothing when there is nothing to show.
 */
export function PortfolioStrip({
  industry,
  capability,
  eyebrow = "Selected work",
  title = "Portfolio",
  tone = "base",
}: {
  industry?: string;
  capability?: string;
  eyebrow?: string;
  title?: string;
  tone?: "base" | "raised";
}) {
  const params = new URLSearchParams();
  if (industry) params.set("industry", industry);
  if (capability) params.set("capability", capability);
  const query = useQuery({
    queryKey: ["public", "portfolio", industry ?? "", capability ?? ""],
    queryFn: ({ signal }) =>
      fetchPublicContent<{ items: PortfolioItem[] }>(
        `/api/public/portfolio?${params.toString()}`,
        signal,
      ),
  });
  const items = query.data?.items;

  if (items?.length === 0) return null;

  return (
    <Section tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} />
      {query.isPending ? (
        <div role="status" aria-busy="true">
          <span className="sr-only">Loading selected work</span>
          <div aria-hidden="true">
            <CaseStudySkeleton cardsOnly />
          </div>
        </div>
      ) : !items && query.isError ? (
        <div className="public-content-error mt-10">
          <p>Selected work couldn’t load just now.</p>
          <button type="button" className="route-retry-button" onClick={() => void query.refetch()}>
            Try again
          </button>
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((it, i) => (
            <li key={it.id}>
              <Reveal delay={i * 35} className="h-full">
                <PortfolioCard item={it} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const body = (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
        {item.media_type === "video" ? (
          <video
            src={item.media_url}
            poster={item.thumbnail_url ?? undefined}
            controls
            playsInline
            preload="none"
            className="size-full object-cover"
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <img
            src={item.media_url}
            alt={item.title}
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
            className="size-full object-cover"
          />
        )}
      </div>
      <div className="p-5">
        <p className="font-display text-base leading-snug">{item.title}</p>
        {item.description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        ) : null}
      </div>
    </>
  );

  const className =
    "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-editorial";

  return item.external_link ? (
    <a
      href={item.external_link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lift`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
