import { Link, createFileRoute } from "@tanstack/react-router";
import { PrimaryCta, Section, SectionHeading } from "@/components/site/Primitives";
import { SERVICES } from "@/data/site";

const title = "Services | HQ360";
const description =
  "Listing optimization, launch campaigns, press placement, review campaigns, funnels, personal brand strategy and speaking placement for authors and founders.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Everything a name needs to be found and believed."
          intro="Ten services that work as one engine or stand on their own. Each detail page lists deliverables, who it suits and how quickly results usually appear."
        />
      </Section>
      <Section tone="raised" className="pt-0 lg:pt-0">
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-editorial hover:border-primary/60 hover:shadow-lift"
              >
                <span className="text-fire font-serif text-3xl font-semibold">{s.number}</span>
                <h2 className="mt-4 font-serif text-xl leading-snug">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span className="mt-6 text-xs tracking-wider text-muted-foreground uppercase">
                  For {s.audience}
                </span>
                <span className="mt-3 text-sm font-semibold text-primary">View service</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl">Not sure which pieces you need?</h2>
            <p className="mt-3 text-muted-foreground">
              Book a call and we will tell you what to start with, and what to skip for now.
            </p>
          </div>
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
