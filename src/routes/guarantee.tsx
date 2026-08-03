import { createFileRoute } from "@tanstack/react-router";
import { PrimaryCta, Section, SectionHeading } from "@/components/site/Primitives";

const title = "What We Guarantee | HQ360";
const description =
  "The promises we put in writing, the ones we refuse to make, and what happens if we miss. Clear terms on reviews, rankings, press and refunds.";

export const Route = createFileRoute("/guarantee")({
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
  component: GuaranteePage,
});

const willGuarantee = [
  "A written audit within five working days of your first call",
  "A named strategist who stays on your account for the engagement",
  "A weekly written update and a live dashboard, without asking",
  "Every deliverable in your scope, delivered on the agreed dates",
  "A reply to any message within one working day",
  "Reviews sourced only from real readers who received the book",
  "Full ownership of every asset we create for you",
  "Thirty days notice to pause or end, with no exit fee",
];

const willNotGuarantee = [
  "A place on any bestseller list, national or category",
  "A specific ranking number on any retail platform",
  "A minimum number of reviews or a minimum star rating",
  "Placement in a named publication, podcast or festival",
  "A sales figure, revenue target or return on ad spend",
  "Follower counts or engagement rates on any platform",
];

function GuaranteePage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Our guarantee"
          title="What we promise, and what nobody honestly can."
          intro="Marketing outcomes depend on the market. Process does not. So we guarantee the process completely and refuse to guarantee the outcome at all."
        />
      </Section>

      <Section tone="raised" className="pt-0 lg:pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-card p-8">
            <h2 className="font-serif text-2xl">What we guarantee</h2>
            <ul className="mt-6 space-y-3">
              {willGuarantee.map((g) => (
                <li key={g} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="text-primary">
                    &#10003;
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl">What we will never guarantee</h2>
            <ul className="mt-6 space-y-3">
              {willNotGuarantee.map((g) => (
                <li key={g} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="text-muted-foreground">
                    &times;
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl">If we miss a commitment</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            If a guaranteed deliverable is late by more than five working days for a reason within
            our control, that month is credited in full. If it happens twice in one engagement, you
            may end the agreement immediately and we refund any unused portion. You do not need to
            argue for it. We track our own dates and raise it first.
          </p>
          <h2 className="mt-12 font-serif text-3xl">Why we will not promise a list</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Bestseller lists apply editorial discretion, weigh retailers differently and change
            thresholds without notice. Any agency promising a placement is either buying units in a
            way that risks your account or defining bestseller so narrowly the claim is hollow. We
            will tell you honestly what your realistic ceiling looks like and let you decide.
          </p>
          <div className="mt-10">
            <PrimaryCta to="/contact">Ask us anything on a call</PrimaryCta>
          </div>
          <p className="mt-8 text-xs tracking-wide text-muted-foreground/80 uppercase">
            Placeholder terms for demonstration. Have counsel review before publishing.
          </p>
        </div>
      </Section>
    </>
  );
}
