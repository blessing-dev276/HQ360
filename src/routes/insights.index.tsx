import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { INSIGHTS } from "@/data/insights";
import { buildSeo, breadcrumbSchema } from "@/lib/seo";
import { CTAS } from "@/config/brand";

export const Route = createFileRoute("/insights/")({
  head: () =>
    buildSeo(
      {
        title: "Insights on Growth, Automation & Brand | HQ360",
        description:
          "Practical writing on growth systems, automation, websites, lead generation, brand and industry playbooks from the HQ360 team.",
        path: "/insights",
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights" },
      ]),
    ),
  component: InsightsPage,
});

function InsightsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(INSIGHTS.map((p) => p.category)))],
    [],
  );
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? INSIGHTS : INSIGHTS.filter((p) => p.category === cat);

  return (
    <>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Insights"
          title="What we have learned building growth systems"
          intro="No listicles. Working notes on what moves the number and what quietly wastes budget."
        />
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                cat === c
                  ? "border-transparent bg-charcoal text-[oklch(0.97_0.006_90)]"
                  : "border-border bg-card text-muted-foreground hover:border-brand hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 35} className="h-full">
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lift"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
                    {p.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl leading-snug">{p.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 text-xs text-muted-foreground">
                    {p.date} &middot; {p.readTime}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Prefer this applied to your business?"
        body="Start a project and we will turn the thinking into a plan for your specific situation."
        primary={CTAS.primary}
        secondary={CTAS.industries}
      />
    </>
  );
}
