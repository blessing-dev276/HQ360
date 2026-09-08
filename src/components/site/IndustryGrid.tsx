import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES, INDUSTRY_CATEGORIES, industriesByCategory } from "@/data/industries";
import { Reveal } from "@/components/site/Reveal";

export function IndustryGrid({ grouped = true }: { grouped?: boolean }) {
  if (!grouped) {
    return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i, idx) => (
          <IndustryCardItem
            key={i.slug}
            slug={i.slug}
            name={i.shortName}
            path={i.path}
            blurb={i.outcome}
            idx={idx}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-14">
      {INDUSTRY_CATEGORIES.map((group) => {
        const items = industriesByCategory(group.category);
        if (items.length === 0) return null;
        return (
          <div key={group.category}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl">{group.category}</h3>
              <p className="text-sm text-muted-foreground">{group.blurb}</p>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((i, idx) => (
                <IndustryCardItem
                  key={i.slug}
                  slug={i.slug}
                  name={i.shortName}
                  path={i.path}
                  blurb={i.outcome}
                  idx={idx}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function IndustryCardItem({
  name,
  path,
  blurb,
  idx,
}: {
  slug: string;
  name: string;
  path: string;
  blurb: string;
  idx: number;
}) {
  return (
    <li>
      <Reveal delay={idx * 35} className="h-full">
        <Link
          to={path}
          className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div>
            <h4 className="font-display text-lg">{name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            See the {name} system
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </Reveal>
    </li>
  );
}
