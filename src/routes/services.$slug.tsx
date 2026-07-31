import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  Eyebrow,
  PlaceholderNote,
  PrimaryCta,
  SecondaryCta,
  Section,
} from "@/components/site/Primitives";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | House of Synergy" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} | House of Synergy`;
    const description = loaderData.service.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section>
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-foreground">{service.title}</span>
        </nav>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Service {service.number}</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight text-balance sm:text-5xl">
              {service.title}
            </h1>
            <div className="rule-fire mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.detail}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Best suited to: <span className="text-foreground">{service.audience}</span>
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
              <SecondaryCta to="/pricing">See pricing</SecondaryCta>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-8 shadow-editorial">
            <h2 className="font-serif text-xl">What you receive</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm">
                  <span aria-hidden="true" className="text-primary">
                    &#10003;
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-border bg-background p-4 text-xs">
              <div>
                <span className="block tracking-wider text-muted-foreground uppercase">Before</span>
                <span className="mt-1 block font-medium">{service.before}</span>
              </div>
              <span aria-hidden="true" className="text-primary">
                &rarr;
              </span>
              <div>
                <span className="block tracking-wider text-muted-foreground uppercase">After</span>
                <span className="mt-1 block font-medium">{service.after}</span>
              </div>
            </div>
            <PlaceholderNote>Placeholder sample outcome.</PlaceholderNote>
          </aside>
        </div>
      </Section>

      <Section tone="raised">
        <h2 className="font-serif text-2xl">Often paired with</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 hover:border-primary/60"
              >
                <span className="text-fire font-serif text-2xl font-semibold">{s.number}</span>
                <h3 className="mt-3 font-serif text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
