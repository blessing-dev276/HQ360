import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/site/Primitives";
import { TeamGrid } from "@/components/site/TeamGrid";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { GrowthFrameworkStrip } from "@/components/site/GrowthFrameworkStrip";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { PRINCIPLES } from "@/data/process";
import { BRAND, CTAS } from "@/config/brand";
import { buildSeo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo(
      {
        title: "About HQ360 | Multi-Industry Growth Agency",
        description:
          "Why HQ360 exists, why fragmented marketing systems fail, and how a single multidisciplinary team builds growth that connects.",
        path: "/about",
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="About"
          title="Growth that connects, from one team"
          intro="HQ360 exists because most businesses are told to solve growth by hiring more specialists — and end up with five vendors, five dashboards and nobody accountable for the result."
        />
        <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            When brand, website, advertising, CRM and content are split across separate teams, each
            one optimises for its own metric. Leads arrive that the follow-up was never designed
            for. A redesign breaks the tracking the ads depended on. A brand refresh lands months
            after the campaign that needed it. Everyone did their job. The system still leaks.
          </p>
          <p>
            We built HQ360 to close those seams. One plan, one set of shared metrics, and one team
            responsible for the whole path from spend to signed customer — across strategy,
            creative, technology and marketing.
          </p>
          <p>
            {BRAND.name} grew out of {BRAND.formerlyKnownAs}, which did this work for authors and
            personal brands. That practice is now our Authors &amp; Publishers vertical, and the
            same approach runs across real estate, home services, coaching, professional services,
            creators and local business.
          </p>
        </div>
      </Section>

      <Section tone="carbon">
        <SectionHeader
          tone="light"
          eyebrow="The approach"
          title="One system, six connected stages"
          intro="We work the whole loop, not a slice of it."
        />
        <div className="mt-12">
          <GrowthFrameworkStrip tone="light" />
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeader eyebrow="Principles" title="What we do not bend on" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="The team"
          title="The people on your account"
          intro="A small multidisciplinary team. Every engagement has a named lead who stays with it."
        />
        <TeamGrid />
      </Section>

      <Section tone="raised">
        <SectionHeader eyebrow="How we run it" title="The same six steps, every engagement" />
        <ProcessTimeline />
      </Section>

      <Section>
        <Container className="px-0">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl">Worldwide, US-friendly</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              The team works remotely across time zones. A large share of our clients are in the
              United States, and calls are scheduled to your working hours. We do not operate
              physical offices, and we will never claim one we do not have.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="See what we would build for you"
        body="Start a project and we will map a first phase for your specific situation."
        primary={CTAS.primary}
        secondary={CTAS.work}
      />
    </>
  );
}
