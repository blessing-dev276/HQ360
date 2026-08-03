import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CompareSlider } from "@/components/site/CompareSlider";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import {
  Eyebrow,
  PlaceholderNote,
  PrimaryCta,
  SecondaryCta,
  Section,
  SectionHeading,
  StatRow,
} from "@/components/site/Primitives";
import { Logo } from "@/components/Logo";
import { AwardsSection } from "@/components/site/AwardsSection";
import { FeaturedAuthor } from "@/components/site/FeaturedAuthor";
import { ProofSection } from "@/components/site/ProofSection";
import { RiskReversal } from "@/components/site/RiskReversal";
import { TeamAvatar } from "@/components/site/TeamAvatar";
import { TeamSocials } from "@/components/site/TeamSocials";

import {
  BRAND,
  CASES,
  COMPARISON,
  DIFFERENTIATORS,
  FAQ_GROUPS,
  PLATFORMS,
  POSTS,
  PRICING_ALACARTE,
  PRICING_FLAGSHIP,
  PROCESS,
  RESOURCES,
  SERVICES,
  TEAM,
  TESTIMONIALS,
} from "@/data/site";
import { LAUNCH, LAUNCH_GALLERY } from "@/data/launch";

const title = "HQ360 | Book Marketing and Personal Brand Agency";
const description =
  "A full service studio for authors and founders. Listing optimization, launch campaigns, press placement and personal brand strategy, with weekly reporting.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ProofSection />
      <FeaturedAuthor />
      <LaunchPreview />
      <AwardsSection />
      <SocialProof />
      <WhoWeAre />
      <ServicesGrid />
      <CaseCarousel />
      <Results />
      <ProcessTimeline />
      <Team />
      <Testimonials />
      <Comparison />
      <PricingPreview />
      <GuaranteeCallout />
      <Faqs />
      <Resources />
      <BlogPreview />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-16 lg:px-8 lg:pt-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              <Logo markOnly size={18} />
              Featured Author of the Year
            </span>
            <h1 className="mt-8 text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Sanman Thapa, our Featured Author of the Year.
            </h1>
            <div className="rule-fire mt-5" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Two titles, a full signing room and a launch day that sold through the table. From the
              Window: The City of What Ifs and A Fight for a Cup of Chai were carried from
              manuscript to shelf with Arti Facts Publishing and a launch campaign built by HQ360.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "2", label: "Titles in print" },
                { value: "1 day", label: "Sold out signing" },
                { value: "5 star", label: "Reader reviews" },
              ].map((item) => (
                <li key={item.label} className="rounded-xl border border-border bg-card px-5 py-4">
                  <span className="block font-serif text-2xl font-semibold text-primary">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryCta to="/contact">Get Your Book Featured</PrimaryCta>
              <SecondaryCta to="/book-launch">See the Launch Story</SecondaryCta>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-editorial">
            <img
              src={heroAuthor.url}
              alt="Sanman Thapa holding From the Window: The City of What Ifs at his signing table"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <StatRow />
        </div>
      </div>
    </section>
  );
}

function LaunchPreview() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Book launch"
        title={`${LAUNCH.author} launch day`}
        intro={LAUNCH.intro}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LAUNCH_GALLERY.slice(0, 3).map((shot) => (
          <li key={shot.src} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="px-5 py-4 text-sm text-muted-foreground">{shot.caption}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <PrimaryCta to="/book-launch">See the Full Launch Gallery</PrimaryCta>
      </div>
    </Section>
  );
}


function SocialProof() {
  return (
    <section className="border-y border-border bg-[oklch(0.955_0.011_82)] px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Where we get clients seen
        </h2>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {PLATFORMS.map((p) => (
            <li
              key={p}
              className="font-serif text-lg text-foreground/70 sm:text-xl"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Who we are"
          title="A studio built for people whose name is the product."
          intro="HQ360 started as a book marketing shop and grew into something wider. Publishing a book, launching a company and building a reputation all run on the same engine: be found, be believed, be remembered. We run that engine for a small number of clients at a time."
        />
        <ul className="grid gap-5">
          {DIFFERENTIATORS.map((d) => (
            <li
              key={d.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-editorial hover:border-primary/50"
            >
              <h3 className="font-serif text-xl">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16">
        <StatRow />
      </div>
    </Section>
  );
}

function ServicesGrid() {
  return (
    <Section tone="raised" id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Ten services, one coordinated engine."
        intro="Take the whole engagement or a single piece. Every service below has its own detail page with deliverables and typical timelines."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.slug}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-editorial hover:border-primary/60 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <span className="text-fire font-serif text-3xl font-semibold">{s.number}</span>
              <h3 className="mt-4 font-serif text-xl leading-snug">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-border bg-background p-4 text-xs">
                <div>
                  <span className="block tracking-wider text-muted-foreground uppercase">
                    Before
                  </span>
                  <span className="mt-1 block font-medium">{s.before}</span>
                </div>
                <span aria-hidden="true" className="text-primary">
                  &rarr;
                </span>
                <div>
                  <span className="block tracking-wider text-muted-foreground uppercase">
                    After
                  </span>
                  <span className="mt-1 block font-medium">{s.after}</span>
                </div>
              </div>
              <span className="mt-5 text-sm font-semibold text-primary">View service</span>
            </Link>
          </li>
        ))}
      </ul>
      <PlaceholderNote>Placeholder metrics for layout. Replace with client data.</PlaceholderNote>
    </Section>
  );
}

function CaseCarousel() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(CASES.map((c) => c.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const shown = active === "All" ? CASES : CASES.filter((c) => c.category === active);

  return (
    <Section>
      <SectionHeading
        eyebrow="Featured campaigns"
        title="Filter the work by category."
        intro="Six sample engagements across fiction, nonfiction and personal brand clients. Scroll the row sideways to see them all."
      />
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={
              active === c
                ? "rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-[oklch(0.97_0.008_85)]"
                : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary hover:text-foreground"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {shown.map((c) => (
          <li key={c.slug} className="w-[19rem] shrink-0 snap-start sm:w-[23rem]">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-editorial">
              <Eyebrow>{c.category}</Eyebrow>
              <h3 className="mt-3 font-serif text-xl leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.client}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.summary}
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
                <div>
                  <span className="block text-xs tracking-wider text-muted-foreground uppercase">
                    {c.beforeLabel}
                  </span>
                  <span className="font-serif text-2xl">{c.before}</span>
                </div>
                <span aria-hidden="true" className="pb-1 text-primary">
                  &rarr;
                </span>
                <div className="text-right">
                  <span className="block text-xs tracking-wider text-muted-foreground uppercase">
                    {c.afterLabel}
                  </span>
                  <span className="text-fire font-serif text-2xl font-semibold">{c.after}</span>
                </div>
              </div>
              <Link
                to="/results"
                className="mt-5 text-sm font-semibold text-primary hover:underline"
              >
                Read the case study
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Results() {
  return (
    <Section tone="dark">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            dark
            eyebrow="Results"
            title="Numbers we can show you the source for."
            intro="Every campaign gets a live dashboard. The comparison beside this is a sample ranking movement from a thriller launch, drawn from marketplace data across a twenty six day window."
          />
          <div className="mt-10">
            <StatRow dark />
          </div>
          <div className="mt-8">
            <SecondaryCta to="/results" dark>
              See all case studies
            </SecondaryCta>
          </div>
        </div>
        <CompareSlider
          beforeLabel="Before campaign"
          beforeValue="#41,220"
          beforeNote="Category rank on day one, no reviews inside ninety days."
          afterLabel="After campaign"
          afterValue="#118"
          afterNote="Category rank on day twenty six with 610 verified reviews."
        />
      </div>
    </Section>
  );
}

function ProcessTimeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How we work"
        title="Six steps, in this order, every time."
        intro="No campaign starts before the audit is written and approved. That discipline is why we can quote realistic outcomes."
      />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROCESS.map((p, i) => (
          <li
            key={p.step}
            className="relative rounded-2xl border border-border bg-card p-7 shadow-editorial"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-fire font-serif text-3xl font-semibold">{p.step}</span>
              <span className="text-xs tracking-wider text-muted-foreground uppercase">
                Step {i + 1} of {PROCESS.length}
              </span>
            </div>
            <div
              className="mt-4 h-1 rounded-full bg-secondary"
              role="presentation"
            >
              <div
                className="bg-fire h-1 rounded-full"
                style={{ width: `${((i + 1) / PROCESS.length) * 100}%` }}
              />
            </div>
            <h3 className="mt-5 font-serif text-xl">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Team() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="The people"
        title="You will know exactly who is working on your name."
        intro="A small team, no rotating juniors. The strategist on your first call stays on your account."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {TEAM.map((m) => (
          <li key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
            <TeamAvatar name={m.name} initials={m.initials} photo={m.photo} />
            <h3 className="mt-5 font-serif text-lg">{m.name}</h3>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
              “{m.quote}”
            </blockquote>
            <TeamSocials name={m.name} socials={m.socials} />
          </li>
        ))}
      </ul>

    </Section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i]!;

  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Client words"
        title="What people say when the campaign is over."
      />
      <figure className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-editorial">
        <blockquote className="font-serif text-2xl leading-snug text-balance sm:text-3xl">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8 flex flex-col items-center gap-3">
          <span
            aria-hidden="true"
            className="bg-fire flex size-14 items-center justify-center rounded-full font-serif text-lg font-semibold text-white"
          >
            {t.initials}
          </span>
          <span className="font-semibold">{t.name}</span>
          <span className="text-sm text-muted-foreground">{t.title}</span>
        </figcaption>
      </figure>
      <div className="mt-8 flex items-center justify-center gap-3">
        {TESTIMONIALS.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={idx === i}
            className={
              idx === i
                ? "size-3 rounded-full bg-primary"
                : "size-3 rounded-full border border-border bg-card hover:border-primary"
            }
          />
        ))}
      </div>
      <PlaceholderNote>Placeholder testimonials for demonstration only.</PlaceholderNote>
    </Section>
  );
}

function Comparison() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Why HQ360"
        title="The honest comparison."
        intro="Three ways to get this work done. Here is where we differ from a typical agency and from handling it alone."
      />
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse overflow-hidden rounded-2xl border border-border bg-card text-left">
          <caption className="sr-only">
            Comparison of HQ360, a typical agency and doing it yourself
          </caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-border px-6 py-5 text-sm font-semibold">
                Compared on
              </th>
              {COMPARISON.columns.map((c, idx) => (
                <th
                  key={c}
                  scope="col"
                  className={
                    idx === 0
                      ? "border-b border-border bg-[oklch(0.955_0.02_60)] px-6 py-5 font-serif text-base text-primary"
                      : "border-b border-border px-6 py-5 text-sm font-semibold text-muted-foreground"
                  }
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((row) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="border-b border-border px-6 py-5 text-sm font-medium text-foreground"
                >
                  {row.label}
                </th>
                {row.values.map((v, idx) => (
                  <td
                    key={v + idx}
                    className={
                      idx === 0
                        ? "border-b border-border bg-[oklch(0.975_0.012_60)] px-6 py-5 text-sm font-medium"
                        : "border-b border-border px-6 py-5 text-sm text-muted-foreground"
                    }
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="One flagship engagement, or pick your pieces."
        intro="Everything is month to month. Ad spend is separate and paid by you directly to the platform."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <article className="rounded-3xl border-2 border-primary bg-card p-9 shadow-lift">
          <Eyebrow>Most chosen</Eyebrow>
          <h3 className="mt-3 font-serif text-3xl">{PRICING_FLAGSHIP.name}</h3>
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

        <div>
          <h3 className="font-serif text-2xl">Services on their own</h3>
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
          <p className="mt-5 text-sm text-muted-foreground">
            Full breakdown, payment plans and what is excluded live on the{" "}
            <Link to="/pricing" className="text-primary underline underline-offset-4">
              pricing page
            </Link>
            .
          </p>
        </div>
      </div>
      <RiskReversal className="mt-8" />
      <PlaceholderNote>Placeholder prices. Confirm final rates before publishing.</PlaceholderNote>
    </Section>
  );
}

function GuaranteeCallout() {
  return (
    <Section tone="dark">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <Eyebrow dark>Straight talk</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            We put our guarantees in writing, including the ones we will not make.
          </h2>
          <p className="mt-4 text-[oklch(0.83_0.012_80)]">
            Nobody can guarantee a list placement. We can guarantee process, reporting, response
            times and the work itself. Read exactly where the line sits.
          </p>
        </div>
        <SecondaryCta to="/guarantee" dark>
          Read our guarantee
        </SecondaryCta>
      </div>
    </Section>
  );
}

function Faqs() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Questions"
        title="The things people ask on the first call."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {FAQ_GROUPS.map((group) => (
          <div key={group.group}>
            <h3 className="font-serif text-xl">{group.group}</h3>
            <Accordion type="single" collapsible className="mt-3">
              {group.items.map((item, idx) => (
                <AccordionItem key={item.q} value={`${group.group}-${idx}`}>
                  <AccordionTrigger className="text-left font-sans text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Resources() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Free resources"
        title="Start with something free."
        intro="Three tools we give away. No call required, no card, no sequence of pitches afterwards."
      />
      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <li key={r.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl">{r.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            <Link
              to="/resources"
              className="mt-6 inline-flex w-fit rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
            >
              {r.cta}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function BlogPreview() {
  return (
    <Section tone="raised">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Insights" title="From the studio journal." />
        <SecondaryCta to="/blog">Read all articles</SecondaryCta>
      </div>
      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 hover:border-primary/60 hover:shadow-lift"
            >
              <Eyebrow>{p.category}</Eyebrow>
              <h3 className="mt-3 font-serif text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <span className="mt-6 text-xs text-muted-foreground">
                {p.date} &middot; {p.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section>
      <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 shadow-lift lg:grid-cols-2 lg:items-center lg:p-14">
        <div>
          <Eyebrow>Next step</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl">Book your free strategy call.</h2>
          <div className="rule-fire mt-5" />
          <p className="mt-5 text-muted-foreground">
            Thirty minutes, no pitch deck. We will look at your listing or your presence live and
            tell you the three things we would fix first, whether or not you hire us.
          </p>
          <ul className="mt-7 space-y-2 text-sm text-muted-foreground">
            <li>Average client rating of 4.9 out of 5 across 210 reviews</li>
            <li>No long term contracts, thirty days notice at any point</li>
            <li>Written audit within five working days of the call</li>
          </ul>
          <PrimaryCta to="/contact" className="mt-9">
            Book Your Free Strategy Call
          </PrimaryCta>
        </div>
        <div className="rounded-2xl border border-dashed border-border bg-background p-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Calendar booking widget
          </p>
          <p className="mt-4 font-serif text-2xl">Embed your scheduling tool here</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Placeholder area sized for a standard scheduling embed. Drop in the booking script and
            this block will fill the same space.
          </p>
          <div className="mt-6">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </Section>
  );
}
