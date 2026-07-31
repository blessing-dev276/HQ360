import { Link, createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section, SectionHeading } from "@/components/site/Primitives";
import { POSTS } from "@/data/site";

const title = "Insights on Publishing and Personal Brand | House of Synergy";
const description =
  "Practical writing on book marketing, retail ranking, reviews, press and building a professional name that lasts beyond one launch.";

export const Route = createFileRoute("/blog/")({
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
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Insights"
        title="The studio journal."
        intro="What we have learned running launches and building names. No listicles."
      />
      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 hover:border-primary/60 hover:shadow-lift"
            >
              <Eyebrow>{p.category}</Eyebrow>
              <h2 className="mt-3 font-serif text-2xl leading-snug">{p.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <span className="mt-6 text-xs text-muted-foreground">
                {p.date} &middot; {p.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
