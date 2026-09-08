import { Reveal } from "@/components/site/Reveal";

/**
 * A connected sequence of steps describing an example growth system for a
 * niche. Vertical on mobile, stepped on wider screens.
 */
export function GrowthSystemSteps({
  steps,
}: {
  steps: { step: string; title: string; body: string }[];
}) {
  return (
    <ol className="relative space-y-4 lg:space-y-0">
      {steps.map((s, i) => (
        <li key={s.step}>
          <Reveal delay={i * 45}>
            <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7">
              <span className="text-brand-gradient font-display text-2xl font-semibold sm:text-3xl">
                {s.step}
              </span>
              <div>
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
