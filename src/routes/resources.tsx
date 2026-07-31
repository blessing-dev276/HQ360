import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { RESOURCES } from "@/data/site";

const title = "Free Resources for Authors and Founders | House of Synergy";
const description =
  "Three free tools: a written brand and book audit, a one page positioning report, and the ninety day launch checklist we run internally.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

function ResourceForm({ id, cta }: { id: string; cta: string }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p role="status" className="mt-6 text-sm font-medium text-primary">
        Request received. Check your inbox within five working days.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
      <label htmlFor={id} className="text-xs tracking-wider text-muted-foreground uppercase">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <button
        type="submit"
        className="rounded-full bg-fire px-5 py-3 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {cta}
      </button>
    </form>
  );
}

function ResourcesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Free resources"
          title="Useful before you ever pay us anything."
          intro="Each of these is genuinely free. We do not put you into a pitch sequence for requesting one."
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <li key={r.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl leading-snug">{r.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              <ResourceForm id={`resource-${i}`} cta={r.cta} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl">Notes from the studio</h2>
            <p className="mt-3 text-[oklch(0.83_0.012_80)]">
              One letter a month on publishing, press and building a name. Unsubscribe in one click.
            </p>
          </div>
          <NewsletterSignup variant="dark" />
        </div>
      </Section>
    </>
  );
}
