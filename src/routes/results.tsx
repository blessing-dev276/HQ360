import { createFileRoute } from "@tanstack/react-router";
import { CompareSlider } from "@/components/site/CompareSlider";
import {
  Eyebrow,
  PlaceholderNote,
  PrimaryCta,
  Section,
  SectionHeading,
  StatRow,
} from "@/components/site/Primitives";
import { CASES } from "@/data/site";

const title = "Results and Case Studies | HQ360";
const description =
  "Sample campaigns across thriller, self help, business, memoir and personal brand clients, with before and after movement on the metrics that mattered.";

export const Route = createFileRoute("/results")({
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
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Results"
          title="What the work looks like once it lands."
          intro="Six engagements, each with the metric the client actually cared about. Every figure on this page is placeholder content for demonstration."
        />
        <div className="mt-12">
          <StatRow />
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Drag to compare</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Twenty six days of ranking movement.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A debut thriller with no list, no press and twenty two reviews. Listing rebuild,
              verified review campaign and stacked promotion around a fixed launch date.
            </p>
          </div>
          <CompareSlider
            beforeLabel="Day one"
            beforeValue="#41,220"
            beforeNote="Category rank before the campaign began."
            afterLabel="Day twenty six"
            afterValue="#118"
            afterNote="Category rank at the close of the launch window."
          />
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl">Case studies</h2>
        <ul className="mt-10 grid gap-8 lg:grid-cols-2">
          {CASES.map((c) => (
            <li key={c.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-editorial">
                <Eyebrow>{c.category}</Eyebrow>
                <h3 className="mt-3 font-serif text-2xl leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.client}</p>
                <p className="mt-5 flex-1 leading-relaxed text-muted-foreground">{c.summary}</p>
                <div className="mt-7 flex items-end justify-between gap-4 border-y border-border py-5">
                  <div>
                    <span className="block text-xs tracking-wider text-muted-foreground uppercase">
                      {c.beforeLabel}
                    </span>
                    <span className="font-serif text-3xl">{c.before}</span>
                  </div>
                  <span aria-hidden="true" className="pb-2 text-primary">
                    &rarr;
                  </span>
                  <div className="text-right">
                    <span className="block text-xs tracking-wider text-muted-foreground uppercase">
                      {c.afterLabel}
                    </span>
                    <span className="text-fire font-serif text-3xl font-semibold">{c.after}</span>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-3 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs tracking-wider text-muted-foreground uppercase">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ul>
        <PlaceholderNote>
          Placeholder case studies. Replace with approved client results and permissions.
        </PlaceholderNote>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">
            Want to know what your ceiling realistically looks like?
          </h2>
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
