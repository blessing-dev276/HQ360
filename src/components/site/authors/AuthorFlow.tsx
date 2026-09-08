import {
  ArrowDown,
  ArrowRight,
  Clapperboard,
  Megaphone,
  Palette,
  Route,
  RotateCcw,
  Search,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AUTHOR_FLOW, type AuthorFlowChain, type AuthorFlowStage } from "@/data/author-flow";
import { Reveal } from "@/components/site/Reveal";

const ICONS: Record<AuthorFlowStage["icon"], LucideIcon> = {
  palette: Palette,
  route: Route,
  search: Search,
  clapperboard: Clapperboard,
  users: Users,
  megaphone: Megaphone,
  smartphone: Smartphone,
};

/** Pills joined by arrows; wraps on small screens. */
function FlowChain({ steps, tone = "muted" }: { steps: string[]; tone?: "muted" | "brand" }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <li key={`${step}-${i}`} className="flex items-center gap-1.5">
          <span
            className={cn(
              "inline-block rounded-full border px-3 py-1 text-xs font-medium",
              tone === "brand"
                ? "border-brand/30 bg-brand-soft text-[oklch(0.42_0.16_42)]"
                : "border-border bg-background text-foreground/80",
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function NamedChain({ chain }: { chain: AuthorFlowChain }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
        {chain.name}
      </p>
      <div className="mt-2.5">
        <FlowChain steps={chain.steps} />
      </div>
    </div>
  );
}

function Stage({ stage, last }: { stage: AuthorFlowStage; last: boolean }) {
  const Icon = ICONS[stage.icon];

  return (
    <li className="relative">
      <div className="grid gap-6 lg:grid-cols-[7rem_1fr] lg:gap-10">
        {/* Rail */}
        <div className="flex items-center gap-4 lg:flex-col lg:items-stretch lg:gap-0">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <div className="lg:mt-4 lg:flex lg:flex-1 lg:justify-center">
            <span
              aria-hidden="true"
              className="hidden w-px flex-1 bg-gradient-to-b from-border to-transparent lg:block"
            />
          </div>
        </div>

        {/* Content */}
        <Reveal className="pb-4 lg:pb-10">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-editorial sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              <span className="font-mono">{stage.number}</span> — {stage.stageLabel}
              <span className="text-muted-foreground"> · {stage.category}</span>
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug sm:text-2xl">{stage.headline}</h3>

            <p className="mt-4 border-l-2 border-brand pl-4 text-sm font-medium text-foreground sm:text-base">
              {stage.salesOutcome}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {stage.description}
            </p>

            {/* Featured services */}
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {stage.featured.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* Full catalogue */}
            <details className="group mt-4 rounded-xl border border-border bg-background">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold">
                Full {stage.category} catalogue
                <ArrowDown
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="grid gap-5 border-t border-border px-4 py-4 sm:grid-cols-2">
                {stage.groups.map((g) => (
                  <div key={g.title}>
                    <p className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">
                      {g.title}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-brand/70"
                          />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>

            {/* Optional explicit flows */}
            {stage.salesFlow ? (
              <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  The sales flow this builds
                </p>
                <div className="mt-3">
                  <FlowChain steps={stage.salesFlow} tone="brand" />
                </div>
              </div>
            ) : null}

            {stage.models ? (
              <div className="mt-6 grid gap-5 rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Two acquisition models
                </p>
                {stage.models.map((m) => (
                  <NamedChain key={m.name} chain={m} />
                ))}
              </div>
            ) : null}

            {stage.sequences ? (
              <div className="mt-4 grid gap-5 rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Example email sequences
                </p>
                {stage.sequences.map((s) => (
                  <NamedChain key={s.name} chain={s} />
                ))}
              </div>
            ) : null}

            {/* Why + How */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Why it matters for authors
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.whyItMatters}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  How it drives book sales
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.salesContribution}
                </p>
                <div className="mt-3">
                  <FlowChain steps={stage.progression} />
                </div>
              </div>
            </div>

            {stage.note ? (
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">{stage.note}</p>
            ) : null}

            {/* Connector to next stage */}
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              {last ? (
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RotateCcw className="size-4 text-brand" aria-hidden="true" />
                  {stage.flowToNote}
                </p>
              ) : (
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowDown className="size-4 text-brand" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-foreground">Next — {stage.flowTo}: </span>
                    {stage.flowToNote}
                  </span>
                </p>
              )}
              <a
                href={stage.cta.to}
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                {stage.cta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </li>
  );
}

export function AuthorFlow() {
  return (
    <ol className="space-y-2">
      {AUTHOR_FLOW.map((stage, i) => (
        <Stage key={stage.slug} stage={stage} last={i === AUTHOR_FLOW.length - 1} />
      ))}
    </ol>
  );
}
