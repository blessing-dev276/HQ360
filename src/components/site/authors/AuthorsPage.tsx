import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import { PRINCIPLES } from "@/data/process";
import { getCaseStudy } from "@/data/work";
import { AUTHOR_FLOW, AUTHOR_POSITIONING } from "@/data/author-flow";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { OrbitGraphic } from "@/components/brand/OrbitGraphic";
import { Reveal } from "@/components/site/Reveal";
import { PainPoints } from "@/components/site/PainPoints";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FaqSection } from "@/components/site/FaqSection";
import { ProjectInquiryForm } from "@/components/site/ProjectInquiryForm";
import { ProofStrip } from "@/components/site/ProofStrip";
import { PortfolioStrip } from "@/components/site/PortfolioStrip";
import { AuthorFlow } from "@/components/site/authors/AuthorFlow";
import { AuthorFlywheel } from "@/components/site/authors/AuthorFlywheel";

const INDUSTRY_NAME = "Authors & Publishers";

export function AuthorsPage({ industry }: { industry: Industry }) {
  const project = getCaseStudy("sanman-thapa-book-launch");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 hidden h-[36rem] w-[36rem] text-foreground/[0.06] lg:block"
        >
          <OrbitGraphic />
        </span>
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/industries" className="hover:text-brand">
              Industries
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-foreground">Authors &amp; Publishers</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <Eyebrow>For authors, publishers and author-experts</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] text-balance sm:text-5xl lg:text-[3.4rem]">
              Turn your book into a brand readers discover, trust, and buy from.
            </h1>
            <div className="rule-brand mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              HQ360 combines brand, websites, SEO, content, social media, advertising, automation
              and reader technology into one connected growth system for authors and publishers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#author-inquiry"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Build My Author Growth System
              </a>
              <a
                href="#author-flow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                Explore Author Services
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="bg-carbon text-[oklch(0.95_0.006_90)]">
        <Container className="py-16 sm:py-20">
          <p className="max-w-4xl font-display text-2xl leading-snug text-[oklch(0.97_0.006_90)] sm:text-3xl lg:text-[2.25rem]">
            {AUTHOR_POSITIONING}
          </p>
          <ol className="mt-10 flex flex-wrap gap-2">
            {AUTHOR_FLOW.map((s) => (
              <li key={s.slug}>
                <a
                  href="#author-flow"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-[oklch(0.86_0.01_80)] hover:border-brand hover:text-brand"
                >
                  <span className="font-mono text-[oklch(0.66_0.01_80)]">{s.number}</span>
                  {s.stageLabel}
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Pain points */}
      <Section>
        <SectionHeader
          eyebrow="Sound familiar?"
          title="Where author and publisher growth usually stalls"
        />
        <div className="mt-12">
          <PainPoints items={industry.painPoints} holdingBack={industry.holdingBack} />
        </div>
      </Section>

      {/* The 7-stage flow */}
      <Section id="author-flow" tone="raised" className="scroll-mt-20">
        <SectionHeader
          eyebrow="The author growth system"
          title="From unknown to bought-from-again, in seven connected stages"
          intro="Each stage produces something the next stage needs. Position builds trust; the site converts it; search and content bring more of the right readers; social and ads scale it; the app makes the audience yours."
        />
        <div className="mt-14">
          <AuthorFlow />
        </div>
      </Section>

      {/* Flywheel */}
      <AuthorFlywheel />

      {/* Proof */}
      <Section>
        <SectionHeader
          eyebrow="Proof of work"
          title="Author work we have delivered"
          intro="Real projects and supplied client feedback only. No invented results."
        />
        {project ? (
          <Reveal className="mt-10">
            <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-editorial sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <Eyebrow>Recent author project</Eyebrow>
                <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/work/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Read the project
                  </Link>
                  <Link
                    to="/book-launch"
                    className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
                  >
                    See the launch day
                  </Link>
                </div>
              </div>
              <ul className="grid gap-2.5">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-10">
          <ProofStrip compact />
        </div>
      </Section>

      {/* Portfolio (managed from /admin) */}
      <PortfolioStrip industry={industry.slug} eyebrow="Selected work" title="Recent author work" />

      {/* Process */}
      <Section tone="raised">
        <SectionHeader eyebrow="How we run it" title="How an author engagement runs" />
        <ProcessTimeline />
      </Section>

      {/* Why HQ360 */}
      <Section>
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
      <Section tone="raised">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeader eyebrow="Questions" title="Authors & publishers, answered" />
          <FaqSection faqs={industry.faqs} idPrefix="authors" />
        </div>
      </Section>

      {/* Inquiry */}
      <section id="author-inquiry" className="scroll-mt-20 bg-carbon text-[oklch(0.95_0.006_90)]">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow tone="light">Start here</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-balance text-[oklch(0.97_0.006_90)] sm:text-4xl">
                Build my author growth system
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[oklch(0.82_0.01_80)]">
                Tell us about the book and where it is now. We will send back a first view of the
                growth system we would build and where we would start — no obligation.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[oklch(0.8_0.01_80)]">
                <li>A straight read on fit and what we would do first</li>
                <li>You own every account, asset and reader list we build</li>
                <li>Take the whole system or a single stage</li>
                <li>No guaranteed rankings, sales or reviews — we report what works</li>
              </ul>
            </div>
            <ProjectInquiryForm defaultIndustry={INDUSTRY_NAME} sourceIndustry={INDUSTRY_NAME} />
          </div>
        </Container>
      </section>
    </>
  );
}
