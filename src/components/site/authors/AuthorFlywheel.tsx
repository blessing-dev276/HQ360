import { ArrowDown, RotateCcw } from "lucide-react";
import { AUTHOR_FLYWHEEL, AUTHOR_FLYWHEEL_NOTE } from "@/data/author-flow";
import { OrbitGraphic } from "@/components/brand/OrbitGraphic";
import { Container, Eyebrow } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function AuthorFlywheel() {
  return (
    <section className="bg-carbon text-[oklch(0.95_0.006_90)]">
      <Container className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow tone="light">The 360</Eyebrow>
          <h2 className="mt-3 text-3xl leading-tight text-balance text-[oklch(0.97_0.006_90)] sm:text-4xl lg:text-[2.75rem]">
            The HQ360 Author Sales Flywheel
          </h2>
          <div className="rule-brand mt-5" />
          <p className="mt-6 text-base leading-relaxed text-[oklch(0.82_0.01_80)] sm:text-lg">
            Every stage of the catalogue is one turn of the same wheel. Discovery feeds engagement,
            engagement feeds capture, capture feeds sales — and retained readers feed discovery
            again for the next book.
          </p>
        </div>

        {/* Circular view — large screens */}
        <div className="mt-16 hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-2xl">
            <span aria-hidden="true" className="absolute inset-0 text-white/50">
              <OrbitGraphic />
            </span>
            <div className="absolute left-1/2 top-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-center">
              <span className="text-brand-gradient font-display text-3xl font-semibold">360</span>
              <span className="mt-1 px-4 text-[0.7rem] leading-tight text-[oklch(0.72_0.01_80)]">
                a compounding loop, not a funnel
              </span>
            </div>
            {AUTHOR_FLYWHEEL.map((phase, i) => {
              const angle = (i / AUTHOR_FLYWHEEL.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + 45 * Math.cos(angle);
              const y = 50 + 45 * Math.sin(angle);
              return (
                <div
                  key={phase.key}
                  className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/12 bg-[oklch(0.2_0.008_247)] px-3 py-2.5 text-center shadow-lift"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="font-mono text-[0.65rem] text-[oklch(0.66_0.01_80)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 block font-display text-sm text-[oklch(0.97_0.006_90)]">
                    {phase.title}
                  </span>
                  <span className="mt-1 block text-[0.65rem] leading-tight text-[oklch(0.7_0.01_80)]">
                    {phase.channels}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stepped view — all screens (primary on mobile, detail on desktop) */}
        <ol className="mt-14 grid gap-3 lg:mt-16">
          {AUTHOR_FLYWHEEL.map((phase, i) => (
            <li key={phase.key}>
              <Reveal delay={i * 35}>
                <div className="grid gap-3 rounded-2xl border border-white/12 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:gap-5">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                    <span className="font-mono text-xs text-[oklch(0.66_0.01_80)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-[oklch(0.97_0.006_90)]">
                      {phase.title}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-[oklch(0.74_0.03_60)] uppercase">
                      {phase.channels}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[oklch(0.82_0.01_80)]">
                      {phase.body}
                    </p>
                  </div>
                </div>
              </Reveal>
              {i < AUTHOR_FLYWHEEL.length - 1 ? (
                <div className="flex justify-center py-1.5" aria-hidden="true">
                  <ArrowDown className="size-4 text-brand" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-brand/25 bg-brand/[0.06] p-4 text-sm text-[oklch(0.88_0.01_80)]">
          <RotateCcw className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          <p>
            <span className="font-semibold text-[oklch(0.96_0.006_90)]">Back into the cycle. </span>
            {AUTHOR_FLYWHEEL_NOTE}
          </p>
        </div>
      </Container>
    </section>
  );
}
