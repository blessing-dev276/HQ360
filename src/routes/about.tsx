import { createFileRoute } from "@tanstack/react-router";
import {
  PrimaryCta,
  Section,
  SectionHeading,
  StatRow,
} from "@/components/site/Primitives";
import { TeamAvatar } from "@/components/site/TeamAvatar";
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
          title="Five specialists who got tired of watching good work get lost."
          intro="We are not a book shop and we are not an agency that fills seats. We are people who each ran one part of this work on our own: launches, listings, press, design, reporting. We kept meeting on the same projects and kept seeing the same gap."
        />
        <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            The idea started in 2020. A client would pay one person for a cover, another for
            reviews, another for press, and nobody owned the result. We said we would fix it by
            working as one team. For the next few years we tested that quietly on real projects,
            with our own money and our own reputations on the line.
          </p>
          <p>
            In 2024 we stopped calling it a side arrangement and built HQ360. Same five people, one
            plan, one point of contact, one report. The work is the same whether you are publishing
            a book, launching a company or trying to be the name people mention in a room you are
            not in. Be found. Be believed. Be remembered.
          </p>
          <p>
            We take a small number of clients at a time because the work is hands on. Every
            engagement has a named lead, a written plan and a weekly update. Nobody gets passed to
            a junior after the call.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
          <span className="text-sm text-muted-foreground">
            Fifteen minutes, straight answer on whether we can help.
          </span>
        </div>
        <div className="mt-14">
          <StatRow />
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading
          eyebrow="Our story"
          title="Four years of testing before we put a name on it."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              year: "2020",
              title: "The idea",
              body: "Five freelancers on the same projects, watching clients pay four people and still miss the result. We sketched what one joined up team would look like.",
            },
            {
              year: "2021 to 2022",
              title: "Quiet testing",
              body: "We ran the model on friends, first authors and small founders. No brand, no website, just the process and honest feedback when it did not work.",
            },
            {
              year: "2023",
              title: "The playbook",
              body: "We wrote down what repeated: the audit, the listing work, the review engine, the press list, the reporting. That became the system we run today.",
            },
            {
              year: "2024",
              title: "HQ360 opens",
              body: "One team, one plan, one report. We put our names on it and started taking a limited number of clients each month.",
            },
          ].map((item) => (
            <li key={item.year} className="rounded-2xl border border-border bg-card p-7">
              <span className="text-fire font-serif text-2xl font-semibold">{item.year}</span>
              <h3 className="mt-3 font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who we work with"
          title="If one of these is you, the call is worth taking."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Authors with a finished book",
              body: "You have the manuscript and the cover, and the launch is the part nobody prepared you for.",
            },
            {
              title: "Founders and experts",
              body: "Your name opens doors or it does not. You want press, a profile and proof that stands up when people search you.",
            },
            {
              title: "Publishers and small presses",
              body: "You need a team that can run launches and review campaigns across several titles without dropping any of them.",
            },
          ].map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <h3 className="font-serif text-xl">Who we say no to</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Unfinished manuscripts, covers that are not ready, and anyone asking for paid or fake
            reviews. We will say it on the first call and save you the money. Roughly one in four
            inquiries becomes a client.
          </p>
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
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {TEAM.map((m) => (
            <li key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <TeamAvatar name={m.name} initials={m.initials} photo={m.photo} />
              <h3 className="mt-5 font-serif text-lg">{m.name}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{m.role}</p>
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
