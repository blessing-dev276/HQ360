import { GROWTH_FRAMEWORK } from "@/data/process";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/**
 * The "360" — six stages arranged as a connected sequence. Renders on light or
 * dark sections.
 */
export function GrowthFrameworkStrip({ tone = "base" }: { tone?: "base" | "light" }) {
  const light = tone === "light";
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {GROWTH_FRAMEWORK.map((stage, i) => (
        <li key={stage.key}>
          <Reveal delay={i * 45} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-5",
                light ? "border-white/12 bg-white/5" : "border-border bg-card",
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs font-semibold",
                  light ? "text-[oklch(0.72_0.03_60)]" : "text-muted-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "mt-2 font-display text-lg",
                  light ? "text-[oklch(0.97_0.006_90)]" : "text-foreground",
                )}
              >
                {stage.title}
              </span>
              <span
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  light ? "text-[oklch(0.8_0.01_80)]" : "text-muted-foreground",
                )}
              >
                {stage.body}
              </span>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
