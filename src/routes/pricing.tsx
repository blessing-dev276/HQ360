import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { ENGAGEMENTS, PRICING_FAQS, PRICING_PRINCIPLES } from "@/data/pricing";
import { buildSeo, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { CTAS } from "@/config/brand";

export const Route = createFileRoute("/pricing")({
  head: () =>
    buildSeo(
      {
        title: "Pricing & Engagement Models | HQ360",
        description:
          "Three ways to work with HQ360: a defined Project, a full Growth System build, or an ongoing Growth Partnership. Custom scope, no long contracts.",
        path: "/pricing",
      },
      [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]),
        faqSchema(PRICING_FAQS),
      ],
    ),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Pricing"
          title="Three ways to work together"
          intro="No single flat price for every business. Scope is set from your goals, what you already have running, and how fast you want to move. Figures below are indicative starting points, marked as placeholders."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <li key={e.slug}>
              <Reveal delay={i * 50} className="h-full">
                <article
                  className={cn(
                    "flex h-full flex-col rounded-3xl border bg-card p-7 sm:p-8",
                    e.featured
                      ? "border-brand shadow-lift ring-1 ring-brand/20"
                      : "border-border shadow-editorial",
                  )}
                >
                  {e.featured ? (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide text-[oklch(0.42_0.16_42)] uppercase">
                      Most common
                    </span>
                  ) : null}
                  <h2 className="font-display text-2xl">{e.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{e.forWho}</p>
                  <p className="mt-5">
                    <span className="text-brand-gradient font-display text-3xl font-semibold">
                      {e.priceHint}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{e.priceNote}</span>
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {e.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 text-sm">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                        />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs tracking-wide text-muted-foreground uppercase">
                    Best for
                  </p>
                  <p className="mt-1 text-sm text-foreground">{e.bestFor}</p>
                  <Link
                    to={e.cta.to}
                    className={cn(
                      "mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                      e.featured
                        ? "bg-primary text-primary-foreground"
                        : "border border-foreground/20 text-foreground hover:border-brand hover:text-brand",
                    )}
                  >
                    {e.cta.label}
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs tracking-wide text-muted-foreground/80 uppercase">
          Indicative figures for layout. Confirm real numbers before publishing.
        </p>
      </Section>

      <Section tone="raised">
        <SectionHeader eyebrow="How it works" title="The same principles, whichever model" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {PRICING_PRINCIPLES.map((p) => (
            <li
              key={p}
              className="flex gap-2.5 rounded-2xl border border-border bg-card p-5 text-sm"
            >
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeader eyebrow="Questions" title="Pricing, answered" />
          <FaqSection faqs={PRICING_FAQS} idPrefix="pricing" />
        </div>
      </Section>

      <CtaBand
        title="Get a real number for your situation"
        body="Tell us your goals and what is already running. We will come back with a scoped first phase and a price."
        primary={CTAS.primary}
        secondary={CTAS.industries}
      />
    </>
  );
}
