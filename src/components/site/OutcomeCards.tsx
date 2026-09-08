import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function OutcomeCards({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((o, i) => (
        <li key={o}>
          <Reveal delay={i * 30}>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[oklch(0.42_0.16_42)]"
              >
                <Check className="size-3.5" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{o}</span>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
