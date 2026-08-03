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
import heroAuthor from "@/assets/featured-author-sanman.jpg.asset.json";
import { AwardsSection } from "@/components/site/AwardsSection";
import { ProofSection } from "@/components/site/ProofSection";
import { RiskReversal } from "@/components/site/RiskReversal";
import { TeamAvatar } from "@/components/site/TeamAvatar";
import { TeamSocials } from "@/components/site/TeamSocials";

import {
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
      <WhoWeAre />
      <ServicesGrid />
      <CaseCarousel />
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
