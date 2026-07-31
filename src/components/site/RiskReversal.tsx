import { Link } from "@tanstack/react-router";

const POINTS = [
  "Written scope and a fixed price before any work starts",
  "Thirty days notice to pause or stop, no exit fee",
  "A named strategist and a reply within one working day",
  "You own every asset we create, during and after",
];

export function RiskReversal({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
      <h3 className="font-serif text-lg">Your risk, removed</h3>
      <ul className="mt-4 space-y-2.5">
        {POINTS.map((p) => (
          <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span aria-hidden="true" className="text-primary">
              &#10003;
            </span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-muted-foreground">
        We do not promise lists or rankings. Read exactly what we do and do not promise on the{" "}
        <Link to="/guarantee" className="text-primary underline underline-offset-4">
          guarantee page
        </Link>
        .
      </p>
    </div>
  );
}
