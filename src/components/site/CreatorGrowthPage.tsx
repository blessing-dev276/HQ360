import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Globe2,
  Mail,
  Megaphone,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react";
import {
  CREATOR_FAQS,
  CREATOR_FLYWHEEL,
  CREATOR_PIPELINE,
  CREATOR_STAGES,
  CREATOR_TYPES,
  CREATOR_WEBSITE_OPTIONS,
  CREATOR_CONTENT_PILLARS,
} from "@/data/creator-growth";
import {
  Container,
  Eyebrow,
  Section,
  SectionHeader,
  ButtonLink,
} from "@/components/site/Primitives";
import { OrbitGraphic } from "@/components/brand/OrbitGraphic";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { ProjectInquiryForm } from "@/components/site/ProjectInquiryForm";
import { cn } from "@/lib/utils";

const stageIcons = [Sparkles, Globe2, Search, Camera, BriefcaseBusiness];
const creatorHelpOptions = [
  "Brand & Creative",
  "UGC Portfolio Website",
  "Professional Creator Website",
  "Canva Portfolio Website",
  "SEO",
  "Social Media Marketing",
  "Client Acquisition / Digital Marketing",
  "Complete Creator Growth System",
];

export function CreatorGrowthPage() {
  return (
    <>
      <CreatorHero />
      <AudienceSection />
      <JourneySection />
      <ShowcaseSection />
      <AuthoritySection />
      <AcquisitionSection />
      <FlywheelSection />
      <FaqSectionBlock />
      <CreatorCta />
    </>
  );
}

function CreatorHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-carbon text-[oklch(0.96_0.003_95)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-24 hidden h-[36rem] w-[36rem] text-white/[0.08] lg:block"
      >
        <OrbitGraphic />
      </span>
      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-[oklch(0.8_0.03_60)]">
            <span className="size-2 rounded-full bg-brand" />
            <Eyebrow tone="light">
              For UGC creators, content creators and creator-led brands
            </Eyebrow>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            From portfolio to paid partnership.
          </h1>
          <div className="rule-brand mt-7" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[oklch(0.82_0.01_80)] sm:text-xl">
            Don&apos;t just build an audience. Build a creator business brands can discover, trust,
            hire and come back to.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[oklch(0.68_0.01_80)]">
            HQ360 builds the brand, portfolio, visibility and client-acquisition system behind your
            UGC business.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="#start"
              variant="primary"
              size="lg"
              className="bg-brand text-white hover:bg-brand-strong"
            >
              Build my creator growth system <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#services" variant="light" size="lg">
              Explore creator services
            </ButtonLink>
          </div>
        </div>
        <div className="mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["Position", "Become commercially recognizable"],
            ["Showcase", "Turn work into a portfolio that sells"],
            ["Win & retain", "Build opportunity into repeat work"],
          ].map(([title, text]) => (
            <div key={title} className="bg-white/[0.04] p-5">
              <p className="text-sm font-semibold text-brand">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[oklch(0.76_0.01_80)]">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AudienceSection() {
  return (
    <Section tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:items-start">
        <SectionHeader
          eyebrow="Built for the business behind the content"
          title="UGC is the core. The system grows with the creator."
          intro="You do not need a huge audience to be valuable to a brand. You need a clear offer, credible work and a professional path from discovery to delivery."
        />
        <div className="flex flex-wrap gap-2.5">
          {CREATOR_TYPES.map((type, index) => (
            <Reveal key={type} delay={index * 25}>
              <span
                className={cn(
                  "inline-flex rounded-full border px-4 py-2.5 text-sm",
                  index === 0
                    ? "border-brand bg-brand-soft font-semibold text-foreground"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                {type}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function JourneySection() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="The creator growth journey"
        title="Five connected services. One creator business."
        intro="These are not five disconnected cards. Each stage gives the next stage something stronger to work with."
      />
      <div className="mt-14 space-y-5">
        {CREATOR_STAGES.map((stage, index) => {
          const Icon = stageIcons[index];
          return (
            <Reveal key={stage.slug} delay={index * 40}>
              <article className="group grid gap-7 rounded-3xl border border-border bg-card p-6 shadow-editorial transition-colors hover:border-brand/50 sm:p-8 lg:grid-cols-[4.5rem_0.85fr_1.1fr] lg:items-start">
                <div className="flex items-center gap-4 lg:block">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-carbon text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="mt-3 block font-mono text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    {stage.number}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                    {stage.verb} · {stage.category}
                  </p>
                  <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">{stage.headline}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {stage.description}
                  </p>
                  <p className="mt-5 border-l-2 border-brand pl-4 text-sm font-medium leading-relaxed text-foreground">
                    {stage.result}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    What gets built
                  </p>
                  <ul className="mt-4 grid gap-2.5">
                    {stage.services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium text-brand">{stage.bridge}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function ShowcaseSection() {
  return (
    <Section tone="carbon" id="portfolio-options">
      <SectionHeader
        tone="light"
        eyebrow="Website & Funnel · Showcase & Convert"
        title="Choose the portfolio that fits your next stage."
        intro="A portfolio is not an online biography. It is the fastest way for a brand to see relevant work, understand what it can hire you for and take the next step."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {CREATOR_WEBSITE_OPTIONS.map((option, index) => (
          <Reveal key={option.title} delay={index * 50}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {option.label}
              </p>
              <h3 className="mt-3 font-display text-2xl text-white">{option.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[oklch(0.78_0.01_80)]">
                {option.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {option.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-[oklch(0.88_0.006_90)]">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 grid gap-5 rounded-2xl border border-brand/30 bg-brand/[0.08] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-brand">The conversion path</p>
          <p className="mt-3 text-base leading-relaxed text-[oklch(0.9_0.006_90)]">
            Brand discovers creator{" "}
            <ArrowRight className="mx-1 inline size-4 text-brand" aria-hidden="true" /> relevant
            work <ArrowRight className="mx-1 inline size-4 text-brand" aria-hidden="true" />{" "}
            services and proof{" "}
            <ArrowRight className="mx-1 inline size-4 text-brand" aria-hidden="true" /> inquiry{" "}
            <ArrowRight className="mx-1 inline size-4 text-brand" aria-hidden="true" /> qualified
            opportunity.
          </p>
        </div>
        <Link to="/contact" className="text-sm font-semibold text-brand hover:text-white">
          Plan the portfolio <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

function AuthoritySection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Social Media Marketing · Build Authority"
        title="Make your own content prove what you can create for brands."
        intro="A creator's social profile can function as a live portfolio. We build authority around quality, positioning, consistency and niche relevance, not follower counts alone."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CREATOR_CONTENT_PILLARS.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 35}>
            <article className="h-full rounded-2xl border border-border bg-card p-5">
              <span className="font-mono text-xs font-semibold text-brand">{pillar.number}</span>
              <h3 className="mt-5 font-display text-lg leading-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {pillar.examples.map((example) => (
                  <li key={example} className="text-xs text-foreground/80">
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-secondary p-6 text-center text-sm font-semibold sm:gap-5">
        <span>Content</span>
        <ArrowRight className="size-4 text-brand" aria-hidden="true" />
        <span>Visibility</span>
        <ArrowRight className="size-4 text-brand" aria-hidden="true" />
        <span>Authority</span>
        <ArrowRight className="size-4 text-brand" aria-hidden="true" />
        <span>Portfolio</span>
        <ArrowRight className="size-4 text-brand" aria-hidden="true" />
        <span>Brand inquiry</span>
      </div>
    </Section>
  );
}

function AcquisitionSection() {
  return (
    <Section tone="raised" id="client-acquisition">
      <SectionHeader
        eyebrow="Digital Marketing · Win & Retain Clients"
        title="Build a system for finding and converting opportunities."
        intro="For many UGC creators, targeted outreach, portfolio conversion, organic authority and search discovery come before paid acquisition. The system stays relevant to the creator's actual stage."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.35fr]">
        <div className="rounded-3xl bg-carbon p-7 text-[oklch(0.94_0.003_95)] sm:p-9">
          <div className="flex items-center gap-3">
            <Megaphone className="size-5 text-brand" aria-hidden="true" />
            <h3 className="font-display text-2xl">Targeted prospecting</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[oklch(0.78_0.01_80)]">
            Beauty UGC creator → relevant beauty, skincare, cosmetics, haircare and wellness brands
            → researched contacts → personalized pitch → useful follow-up.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Ideal brand profiling",
              "Decision-maker research",
              "Pitch and email frameworks",
              "Relevant lead-list strategy",
              "Partnership landing pages",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Creator CRM pipeline
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Operate like a real business instead of managing every opportunity through random DMs
            and email threads.
          </p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {CREATOR_PIPELINE.map((step, index) => (
              <li key={step} className="relative rounded-xl border border-border bg-card p-3">
                <span className="font-mono text-[10px] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block text-xs font-semibold">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-7 rounded-2xl border border-brand/30 bg-brand-soft p-5">
            <p className="text-sm font-semibold">Repeat-client system</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Project delivered{" "}
              <ArrowRight className="mx-1 inline size-3.5 text-brand" aria-hidden="true" /> feedback{" "}
              <ArrowRight className="mx-1 inline size-3.5 text-brand" aria-hidden="true" />{" "}
              testimonial{" "}
              <ArrowRight className="mx-1 inline size-3.5 text-brand" aria-hidden="true" /> new
              content idea{" "}
              <ArrowRight className="mx-1 inline size-3.5 text-brand" aria-hidden="true" /> monthly
              package or retainer.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FlywheelSection() {
  return (
    <Section tone="carbon" id="flywheel">
      <SectionHeader
        tone="light"
        align="center"
        eyebrow="The HQ360 Creator Client Flywheel"
        title="Build the commercial infrastructure behind your creator business."
        intro="Position, showcase, discover, attract, pitch, convert, deliver and retain. Then repeat with more evidence and less friction."
        className="mx-auto"
      />
      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="pointer-events-none absolute inset-8 hidden rounded-full border border-brand/30 lg:block" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CREATOR_FLYWHEEL.map((stage, index) => (
            <Reveal key={stage.label} delay={index * 35}>
              <article className="relative h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 lg:min-h-36">
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-white">{stage.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[oklch(0.76_0.01_80)]">
                  {stage.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-8 flex size-28 flex-col items-center justify-center rounded-full border border-brand bg-brand/10 text-center text-brand">
          <RotateCcw className="size-5" aria-hidden="true" />
          <span className="mt-2 text-xs font-bold tracking-[0.16em] uppercase">Repeat</span>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="#start"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white"
        >
          Map my creator flywheel <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

function FaqSectionBlock() {
  return (
    <Section tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
        <SectionHeader
          eyebrow="Creator questions"
          title="Practical answers before you build."
          intro="The right system depends on your work, market and stage. There is no follower-count or brand-deal shortcut."
        />
        <FaqSection faqs={CREATOR_FAQS} idPrefix="creator" />
      </div>
    </Section>
  );
}

function CreatorCta() {
  return (
    <section id="start" className="scroll-mt-24 bg-carbon text-[oklch(0.95_0.006_90)]">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Free creator growth audit</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-balance text-white sm:text-5xl">
              Find the gap between making content and being easy to hire.
            </h2>
            <div className="rule-brand mt-6" />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[oklch(0.8_0.01_80)]">
              Send your current portfolio, profile or idea. HQ360 will review your positioning,
              portfolio, discoverability, authority and inquiry journey manually, then reply with
              where we would start.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-[oklch(0.82_0.01_80)] sm:grid-cols-2">
              {[
                "Positioning",
                "Portfolio",
                "Discoverability",
                "Social authority",
                "Client acquisition",
                "Repeat work",
              ].map((item) => (
                <span key={item} className="flex gap-2">
                  <Check className="size-4 text-brand" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-[oklch(0.68_0.01_80)]">
              <Mail className="size-4 text-brand" aria-hidden="true" /> No automated audit claim. A
              real review from the HQ360 team.
            </p>
          </div>
          <ProjectInquiryForm
            defaultIndustry="Content Creators"
            sourceIndustry="Content Creators"
            helpOptions={creatorHelpOptions}
          />
        </div>
      </Container>
    </section>
  );
}
