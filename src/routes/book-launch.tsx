import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PrimaryCta, Section, SectionHeading } from "@/components/site/Primitives";
import { LAUNCH, LAUNCH_COVERS, LAUNCH_GALLERY } from "@/data/launch";

const title = "Sanman Thapa Book Launch | House of Synergy";
const description =
  "Photographs and cover reveal film from the launch of From the Window: The City of What Ifs by Sanman Thapa, published with Arti Facts Publishing.";

export const Route = createFileRoute("/book-launch")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/book-launch" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book-launch" }],
  }),
  component: BookLaunchPage,
});

function BookLaunchPage() {
  return (
    <>
      <FeaturedAuthor />
      <Section>
        <SectionHeading
          eyebrow="Book launch"
          title="Sanman Thapa book launch."
          intro={LAUNCH.intro}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-charcoal shadow-editorial">
              <video
                src={LAUNCH.video.src}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-charcoal"
              >
                Your browser does not support embedded video.
              </video>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{LAUNCH.video.title}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-editorial">
            <Eyebrow>The title</Eyebrow>
            <h2 className="mt-3 font-serif text-2xl leading-snug">{LAUNCH.book}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {LAUNCH.author} &middot; {LAUNCH.publisher}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A novella about attention, silence and the fragile architecture of longing, set in
              1990s Kathmandu.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading eyebrow="The book" title="Cover and print." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LAUNCH_COVERS.map((c) => (
            <li key={c.src} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={c.src} alt={c.alt} loading="lazy" className="w-full object-cover" />
              <p className="px-6 py-4 text-sm text-muted-foreground">{c.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Launch day" title="Photographs from the room." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {LAUNCH_GALLERY.map((g) => (
            <li
              key={g.src}
              className={
                g.wide
                  ? "overflow-hidden rounded-2xl border border-border bg-card md:col-span-2"
                  : "overflow-hidden rounded-2xl border border-border bg-card"
              }
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover" />
              <p className="px-6 py-4 text-sm text-muted-foreground">{g.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">
            Want a launch day that looks like this?
          </h2>
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
