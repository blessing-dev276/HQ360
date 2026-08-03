import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section, SectionHeading } from "@/components/site/Primitives";
import { RiskReversal } from "@/components/site/RiskReversal";
import { BRAND, SERVICES } from "@/data/site";

const title = "Book a Free Strategy Call | HQ360";
const description =
  "Thirty minutes, no pitch deck. We review your listing or your presence live and name the three things we would fix first, whether or not you hire us.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Book a call"
              title="Thirty minutes. No pitch deck."
              intro="Tell us what you are working on. We will look at it live on the call and name the three things we would fix first, whether or not you hire us."
            />
            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <li>Average client rating of 4.9 out of 5 across 210 reviews</li>
              <li>No long term contracts, thirty days notice at any point</li>
              <li>Written audit within five working days of the call</li>
            </ul>
            <p className="mt-8 text-sm">
              Prefer email?{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-primary underline underline-offset-4"
              >
                {BRAND.email}
              </a>
            </p>

            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Calendar booking widget
              </p>
              <p className="mt-4 font-serif text-2xl">Embed your scheduling tool here</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Placeholder area sized for a standard scheduling embed.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-editorial lg:p-10">
            <Eyebrow>Request a call</Eyebrow>
            {sent ? (
              <p role="status" className="mt-6 font-serif text-2xl">
                Thank you. We reply to every request within one working day.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-5">
                <Field id="name" label="Full name" type="text" autoComplete="name" />
                <Field id="email" label="Email address" type="email" autoComplete="email" />
                <Field id="project" label="Book title or brand name" type="text" />
                <div className="grid gap-2">
                  <label htmlFor="interest" className="text-sm font-medium">
                    What do you need most?
                  </label>
                  <select
                    id="interest"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>Not sure yet</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell us where you are
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Publication date, current results, what you have tried."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-fire px-7 py-3.5 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Book Your Free Strategy Call
                </button>
                <p className="text-xs text-muted-foreground">
                  Placeholder form for demonstration. Connect it to your scheduling or email tool
                  before launch.
                </p>
              </form>
            )}
            <RiskReversal className="mt-8" />
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string | undefined;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
