import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { OrbitGraphic } from "@/components/brand/OrbitGraphic";
import { Reveal } from "@/components/site/Reveal";
import { ToolCloud } from "@/components/site/ToolCloud";
import { CapabilityGrid } from "@/components/site/CapabilityGrid";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { GrowthFrameworkStrip } from "@/components/site/GrowthFrameworkStrip";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ProofStrip } from "@/components/site/ProofStrip";
import { CtaBand } from "@/components/site/CtaBand";
import { PRINCIPLES } from "@/data/process";
import { CASE_STUDIES } from "@/data/work";
import { CaseStudyCard } from "@/components/site/WorkGrid";
import { CTAS } from "@/config/brand";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      title: "HQ360 — Growth Systems for Modern Businesses & Personal Brands",
      description:
        "HQ360 brings strategy, creative, technology and growth together so ambitious businesses and personal brands get seen, generate demand and convert it into customers.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ToolCloud />
      <FrameworkSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <WorkSection />
      <WhySection />
      <ProcessSection />
      <ProofSection />
      <CtaBand
        title="Your growth shouldn't depend on five different agencies"
        body="One team, one plan, one report. Tell us where the business is now and we will show you what we would build first."
        primary={CTAS.primary}
        secondary={CTAS.work}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[44rem] w-[44rem] text-foreground/[0.05]"
      >
        <OrbitGraphic />
      </span>
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Multi-industry growth agency</Eyebrow>
            <h1 className="mt-4 text-[2.6rem] leading-[1.04] text-balance sm:text-6xl lg:text-[4.1rem]">
              Everything your brand needs to grow.
            </h1>
            <div className="rule-brand mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              HQ360 brings strategy, creative, technology and marketing together so ambitious
              businesses and personal brands get seen, generate demand, convert more customers and
              scale — without stitching together five agencies to do it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={CTAS.primary.to}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {CTAS.primary.label}
              </Link>
              <Link
                to={CTAS.industries.to}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                Explore industries
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Working with ambitious businesses and brands worldwide.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-square rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-12">
              <div className="text-foreground/80">
                <OrbitGraphic label="The HQ360 growth loop: brand, build, attract, convert, retain, scale" />
              </div>
            </div>
            <ul className="pointer-events-none absolute inset-0 hidden lg:block">
              {["Brand", "Build", "Attract", "Convert", "Retain", "Scale"].map((label, i) => {
                const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 46 * Math.cos(angle);
                const y = 50 + 46 * Math.sin(angle);
                return (
                  <li
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-editorial"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FrameworkSection() {
  return (
    <Section tone="carbon">
      <SectionHeader
        tone="light"
        eyebrow="The 360"
        title="Six stages. One connected loop."
        intro="Growth is not one campaign. It is a system that takes a business from deciding what it stands for all the way to scaling what works — and back around."
      />
      <div className="mt-12">
        <GrowthFrameworkStrip tone="light" />
      </div>
    </Section>
  );
}

function CapabilitiesSection() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader
          eyebrow="Services"
          title="Eight services, run as one"
          intro="Most agencies sell one of these. HQ360 connects all eight."
        />
        <Link
          to="/capabilities"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:underline sm:inline-flex"
        >
          All services <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-12">
        <CapabilityGrid />
      </div>
    </Section>
  );
}

function IndustriesSection() {
  return (
    <Section tone="raised">
      <SectionHeader
        eyebrow="Who we help"
        title="Built around your industry"
        intro="Each of these is a real system, tuned to how that business actually wins — not a template with the name swapped."
      />
      <div className="mt-12">
        <IndustryGrid grouped />
      </div>
      <div className="mt-10">
        <Link to="/industries" className="text-sm font-semibold text-brand hover:underline">
          View all industries &rarr;
        </Link>
      </div>
    </Section>
  );
}

function WorkSection() {
  const featured = CASE_STUDIES.slice(0, 2);
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected work"
        title="How the work comes together"
        intro="A verified project and an illustrative engagement structure. Nothing here presents a number as a result unless it is real."
      />
      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {featured.map((c, i) => (
          <li key={c.slug}>
            <Reveal delay={i * 50} className="h-full">
              <CaseStudyCard study={c} />
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link to="/work" className="text-sm font-semibold text-brand hover:underline">
          See all work &rarr;
        </Link>
      </div>
    </Section>
  );
}

function WhySection() {
  return (
    <Section tone="raised">
      <SectionHeader eyebrow="Why HQ360" title="What working with us actually means" />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 40} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How we work"
        title="Discover, strategise, build, launch, optimise, scale"
        intro="The same six steps every engagement, so you always know what is happening and why."
      />
      <ProcessTimeline />
    </Section>
  );
}

function ProofSection() {
  return (
    <Section tone="raised">
      <SectionHeader
        eyebrow="Proof of work"
        title="From the people we have worked with"
        intro="Supplied by clients — video and review screenshots. No fabricated quotes or figures."
      />
      <div className="mt-10">
        <ProofStrip />
      </div>
    </Section>
  );
}
