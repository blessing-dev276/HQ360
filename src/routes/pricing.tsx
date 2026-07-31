import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Eyebrow,
  PlaceholderNote,
  PrimaryCta,
  SecondaryCta,
  Section,
  SectionHeading,
} from "@/components/site/Primitives";
import { RiskReversal } from "@/components/site/RiskReversal";
import { PRICING_ALACARTE, PRICING_FAQS, PRICING_FLAGSHIP } from "@/data/site";

const title = "Pricing | Synergy Pubs";
const description =
  "One flagship launch engagement at a flat campaign rate, plus every service priced on its own. Month to month, no long contracts, ad spend separate.";

export const Route = createFileRoute("/pricing")({
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
  component: PricingPage,
});

const included = [
  "A named strategist on every call",
  "Weekly written updates and a live dashboard",
  "All research, reporting and creative direction",
  "Thirty days notice to pause or stop",
];

const excluded = [
  "Advertising budget, paid by you to the platform",
  "Editing, cover design and interior layout",
  "Printing, distribution and fulfilment",
  "Third party review service fees",
];

export function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Flat rates, written scope, month to month."
          intro="You will always know the price before work starts and what happens if we stop. Prices below are placeholder figures for demonstration."
        />
      </Section>

      <Section tone="raised" className="pt-0 lg:pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
          <article className="rounded-3xl border-2 border-primary bg-card p-9 shadow-lift">
            <Eyebrow>Flagship bundle</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl">{PRICING_FLAGSHIP.name}</h2>
            <p className="mt-4">
              <span className="text-fire font-serif text-5xl font-semibold">
                {PRICING_FLAGSHIP.price}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {PRICING_FLAGSHIP.cadence}
              </span>
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {PRICING_FLAGSHIP.summary}
            </p>
            <ul className="mt-7 space-y-3">
              {PRICING_FLAGSHIP.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <span aria-hidden="true" className="text-primary">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <PrimaryCta to="/contact" className="mt-9 w-full">
              Book a Free Strategy Call
            </PrimaryCta>
          </article>
          <RiskReversal className="mt-6" />
          </div>



          <div>
            <h2 className="font-serif text-2xl">Services on their own</h2>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {PRICING_ALACARTE.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-6 px-6 py-4">
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="text-right">
                    <span className="block font-serif text-lg">{p.price}</span>
                    <span className="block text-xs text-muted-foreground">{p.note}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg">Always included</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {included.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg">Never included</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {excluded.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Payment plans are available above three thousand dollars. See what we do and do not
              promise on the{" "}
              <Link to="/guarantee" className="text-primary underline underline-offset-4">
                guarantee page
              </Link>
              .
            </p>
          </div>
        </div>
        <PlaceholderNote>Placeholder pricing. Confirm rates before publishing.</PlaceholderNote>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Bundle eligibility"
          title="How services can be combined and what changes in timelines."
          intro="The flagship bundle is the simplest path, but you can also build a smaller bundle from the services above."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-lg">What can be bundled</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Any ongoing service can be combined with any other ongoing service. Launch campaigns
              are treated as a single project and can sit alongside monthly retainers such as
              press, review outreach or email marketing.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-lg">What cannot be bundled</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              One time work such as listing optimization, media kits and positioning reports are
              scoped separately. If they are part of a launch, they are already included inside the
              flagship bundle.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-lg">How timelines change</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Adding services usually shortens the overall timeline because work runs in parallel.
              A single service may take six to eight weeks; the full launch runs twelve to sixteen
              weeks because everything is coordinated around one date.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg">Pricing one pager</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A single page PDF with bundle rules, everything included, service rates and how
              timelines shift.
            </p>
          </div>
          <a
            href="/resources/synergy-pubs-pricing-one-pager.pdf"
            download
            className="shrink-0 rounded-full bg-fire px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Download the PDF
          </a>
        </div>
      </Section>


      <Section tone="raised">
        <SectionHeading
          eyebrow="Pricing FAQs"
          title="What is included, how long it takes, and how we measure success."
          intro="Straight answers to the questions we hear most often before a client signs."
        />
        <Accordion type="single" collapsible className="mt-10">
          {PRICING_FAQS.map((item, idx) => (
            <AccordionItem key={item.q} value={`pricing-faq-${idx}`}>
              <AccordionTrigger className="text-left font-sans text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl">Not sure what your budget should buy?</h2>
            <p className="mt-3 text-muted-foreground">
              We will tell you what to spend first and what can wait a quarter.
            </p>
          </div>
          <SecondaryCta to="/contact">Talk it through</SecondaryCta>
        </div>
      </Section>
    </>
  );
}
