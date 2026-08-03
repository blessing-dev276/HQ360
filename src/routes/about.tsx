import { createFileRoute } from "@tanstack/react-router";
import {
  PrimaryCta,
  Section,
  SectionHeading,
  StatRow,
} from "@/components/site/Primitives";
import { TeamAvatar } from "@/components/site/TeamAvatar";
import { TeamSocials } from "@/components/site/TeamSocials";
import { DIFFERENTIATORS, PROCESS, TEAM } from "@/data/site";


const title = "About and Team | HQ360";
const description =
  "A boutique studio of five people building visibility, credibility and press presence for authors, founders and experts. Meet the team and how we work.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About"
          title="We began with books. We stayed for the people behind them."
          intro="HQ360 opened in 2019 as a book marketing shop. Clients kept asking for the things around the book: the press, the profile, the speaking, the name. So we built those too."
        />
        <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            We take on a small number of clients at a time because the work is hands on. Every
            engagement has a named strategist, a written plan and a weekly update. No account is
            handed to a junior after the sales call.
          </p>
          <p>
            Our bias is toward slow, durable work. Verified reviews rather than purchased ones.
            Relevant press rather than volume. A position you can hold for a decade rather than a
            campaign that peaks in a week.
          </p>
        </div>
        <div className="mt-14">
          <StatRow />
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading eyebrow="How we operate" title="Three commitments we do not bend on." />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((d) => (
            <li key={d.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="The team" title="The people named on your account." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TEAM.map((m) => (
            <li key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <TeamAvatar name={m.name} initials={m.initials} photo={m.photo} />
              <h3 className="mt-5 font-serif text-lg">{m.name}</h3>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                “{m.quote}”
              </blockquote>
              <TeamSocials name={m.name} socials={m.socials} />
            </li>
          ))}
        </ul>
      </Section>


      <Section tone="raised">
        <SectionHeading eyebrow="Our process" title="Six steps, in this order, every time." />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROCESS.map((p) => (
            <li key={p.step} className="rounded-2xl border border-border bg-card p-7">
              <span className="text-fire font-serif text-3xl font-semibold">{p.step}</span>
              <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
