import { createFileRoute } from "@tanstack/react-router";
import { PrimaryCta, Section, SectionHeading } from "@/components/site/Primitives";
import { REVIEW_SHOTS, VIDEO_TESTIMONIALS } from "@/data/proof";
import { TESTIMONIALS } from "@/data/site";

const title = "Client Reviews and Proof of Work | HQ360";
const description =
  "Video testimonials, five star client reviews and campaign dashboards from authors and founders who worked with HQ360.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Reviews"
          title="Every review, in the words of the people who left it."
          intro="Video testimonials, written five star reviews and the dashboards behind them."
        />
        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {VIDEO_TESTIMONIALS.map((v) => (
            <li key={v.id}>
              <div className="overflow-hidden rounded-2xl border border-border bg-charcoal shadow-editorial">
                <video
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-charcoal"
                >
                  Your browser does not support embedded video.
                </video>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{v.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="raised">
        <SectionHeading eyebrow="Written reviews" title="Five star feedback from client platforms." />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {REVIEW_SHOTS.map((r) => (
            <li key={r.src} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={r.src} alt={r.alt} loading="lazy" className="w-full" />
              <p className="px-6 py-4 text-sm text-muted-foreground">{r.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="In their words" title="More from the studio inbox." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-serif text-xl leading-relaxed">{t.quote}</p>
              <p className="mt-5 text-sm font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.title}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
