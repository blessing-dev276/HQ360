import { Reveal } from "@/components/site/Reveal";

export function PainPoints({
  items,
  holdingBack,
}: {
  items: { title: string; body: string }[];
  holdingBack?: string[];
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 30} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span aria-hidden="true" className="rule-brand" />
                <h3 className="mt-4 font-display text-base">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {holdingBack && holdingBack.length > 0 ? (
        <div className="rounded-2xl border border-border bg-secondary/60 p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            What is usually holding it back
          </p>
          <ul className="mt-4 space-y-2.5">
            {holdingBack.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-foreground">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
