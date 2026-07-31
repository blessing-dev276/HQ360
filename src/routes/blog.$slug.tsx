import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Eyebrow, PrimaryCta, Section } from "@/components/site/Primitives";
import { POSTS, type Post } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Synergy Pubs" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.post.title} | Synergy Pubs`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };

  return (
    <>
      <Section>
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/blog" className="hover:text-primary">
            Insights
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-foreground">{post.category}</span>
        </nav>
        <article className="mx-auto mt-10 max-w-3xl">
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="mt-4 text-4xl leading-tight text-balance sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {post.date} &middot; {post.readTime}
          </p>
          <div className="rule-fire mt-8" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Section>

      <Section tone="raised">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl font-serif text-3xl">
            Want this applied to your book or your name?
          </h2>
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
