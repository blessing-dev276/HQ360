import { PROCESS } from "@/data/process";
import { Reveal } from "@/components/site/Reveal";

export function ProcessTimeline() {
  return (
    <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {PROCESS.map((p, i) => (
        <li key={p.step}>
          <Reveal delay={i * 40} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <span className="text-brand-gradient font-display text-3xl font-semibold">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
