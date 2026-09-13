import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { AuthorsJourney } from "@/components/site/AuthorsJourney";
import { FeaturedAuthor } from "@/components/site/FeaturedAuthor";
import { LaunchFilm } from "@/components/site/LaunchFilm";
import { Container, Eyebrow } from "@/components/site/Primitives";
import { REVIEW_SHOTS } from "@/data/proof";

const industry = getIndustry("authors")!;
const listopiaReview = REVIEW_SHOTS.find((r) => r.alt.includes("Listopia"));

export const Route = createFileRoute("/authors")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthorsJourney
      industry={industry}
      proof={
        <>
          <LaunchFilm />
          <FeaturedAuthor />
          {listopiaReview ? (
            <section className="border-y border-border bg-secondary/40 py-14 sm:py-16">
              <Container size="narrow">
                <Eyebrow>Discovery proof</Eyebrow>
                <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center">
                  <img
                    src={listopiaReview.src}
                    alt={listopiaReview.alt}
                    loading="lazy"
                    className="rounded-2xl border border-border shadow-editorial"
                  />
                  <div>
                    <p className="text-base leading-relaxed text-foreground">
                      A verified reader review noting movement on Goodreads Listopia lists — the
                      kind of discovery signal Goodreads Discovery &amp; Listopia Strategy is built
                      to support.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {listopiaReview.caption}. We don&rsquo;t publish specific ranking numbers
                      without a verified before/after for that title.
                    </p>
                  </div>
                </div>
              </Container>
            </section>
          ) : null}
        </>
      }
    />
  );
}
