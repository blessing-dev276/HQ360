import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import { capabilitiesFor } from "@/data/capabilities";
import { PRINCIPLES } from "@/data/process";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { OrbitGraphic } from "@/components/brand/OrbitGraphic";
import { Reveal } from "@/components/site/Reveal";
import { PainPoints } from "@/components/site/PainPoints";
import { OutcomeCards } from "@/components/site/OutcomeCards";
import { GrowthSystemSteps } from "@/components/site/GrowthSystemSteps";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FaqSection } from "@/components/site/FaqSection";
import { ProjectInquiryForm } from "@/components/site/ProjectInquiryForm";
import { PortfolioStrip } from "@/components/site/PortfolioStrip";
import { getCaseStudy } from "@/data/work";

export function IndustryPage({
  industry,
  beforeCta,
  hiddenSections = [],
}: {
  industry: Industry;
  /** Optional extra content rendered just before the closing enquiry section. */
  beforeCta?: ReactNode;
  hiddenSections?: Array<"howWeHelp" | "growthSystem" | "process">;
}) {
  const caps = capabilitiesFor(industry.recommendedCapabilities);
  const isSectionHidden = (section: "howWeHelp" | "growthSystem" | "process") =>
    hiddenSections.includes(section);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 hidden h-[30rem] w-[30rem] text-foreground/[0.06] lg:block"
        >
          <OrbitGraphic />
        </span>
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/industries" className="hover:text-brand">
              Industries
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-foreground">{industry.shortName}</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <Eyebrow>{industry.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[3.4rem]">
              {industry.headline}
            </h1>
            <div className="rule-brand mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {industry.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {industry.cta.label}
              </a>
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                See how the work is structured
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcome */}
      <Section tone="raised">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Eyebrow>The outcome</Eyebrow>
            <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
              {industry.outcome}
            </p>
          </div>
          <OutcomeCards items={industry.outcomes} />
        </div>
      </Section>

      {/* Pain points */}
      <Section>
        <SectionHeader
          eyebrow="Sound familiar?"
          title={`Where ${industry.shortName.toLowerCase()} growth usually stalls`}
        />
        <div className="mt-12">
          <PainPoints items={industry.painPoints} holdingBack={industry.holdingBack} />
        </div>
      </Section>

      {/* How we help */}
      {!isSectionHidden("howWeHelp") ? (
        <Section tone="carbon">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHeader
              tone="light"
              eyebrow="How HQ360 helps"
              title="One connected system, not another vendor to manage"
            />
            <div className="space-y-5">
              {industry.howWeHelp.map((p, i) => (
                <Reveal key={i} delay={i * 50}>
                  <p className="text-base leading-relaxed text-[oklch(0.84_0.01_80)]">{p}</p>
                </Reveal>
              ))}
              <ul className="mt-6 flex flex-wrap gap-2">
                {caps.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={c.path}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-sm font-medium text-[oklch(0.92_0.006_90)] hover:border-brand hover:text-brand"
                    >
                      {c.label}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ) : null}

      {/* Growth system */}
      {!isSectionHidden("growthSystem") ? (
        <Section>
          <SectionHeader
            eyebrow="Example growth system"
            title={`What a ${industry.shortName} engagement can look like`}
            intro="A representative build. The exact scope is set after we see what you already have running."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <GrowthSystemSteps steps={industry.growthSystem} />
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Services often included
              </p>
              <ul className="mt-4 space-y-2.5">
                {industry.services.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm text-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ) : null}

      {/* Proof */}
      {industry.proof && industry.proof.length > 0 ? (
        <Section tone="raised">
          <SectionHeader eyebrow="Proof" title="Related work" />
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {industry.proof.map((p, i) => {
              const study = p.slug ? getCaseStudy(p.slug) : undefined;
              return (
                <li key={i}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    {study ? (
                      <Link
                        to="/work/$slug"
                        params={{ slug: study.slug }}
                        className="mt-5 text-sm font-semibold text-brand"
                      >
                        View the project &rarr;
                      </Link>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      {/* Portfolio (managed from /admin) */}
      <PortfolioStrip industry={industry.slug} eyebrow="Selected work" title="Recent work" />

      {/* Process */}
      {!isSectionHidden("process") ? (
        <Section>
          <SectionHeader eyebrow="How we run it" title="The same six steps, every engagement" />
          <ProcessTimeline />
        </Section>
      ) : null}

      {/* Why HQ360 */}
      <Section tone="raised">
        <SectionHeader eyebrow="Why HQ360" title="What working with us actually means" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeader eyebrow="Questions" title={`${industry.shortName}, answered`} />
          <FaqSection faqs={industry.faqs} idPrefix={`ind-${industry.slug}`} />
        </div>
      </Section>

      {beforeCta}

      {/* Start / inquiry */}
      <section id="start" className="scroll-mt-24 bg-carbon text-[oklch(0.95_0.006_90)]">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow tone="light">Start here</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-balance text-[oklch(0.97_0.006_90)] sm:text-4xl">
                {industry.cta.label}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[oklch(0.82_0.01_80)]">
                {industry.cta.sub} No obligation, no pressure — a straight read on what we would do
                and whether we are the right fit.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[oklch(0.8_0.01_80)]">
                <li>We reply within one working day</li>
                <li>You own every account and asset we build</li>
                <li>Month-to-month on ongoing work, 30 days' notice</li>
              </ul>
            </div>
            <ProjectInquiryForm
              defaultIndustry={industry.shortName}
              sourceIndustry={industry.shortName}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
