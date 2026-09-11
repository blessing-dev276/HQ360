import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { AuthorsJourney } from "@/components/site/AuthorsJourney";
import { FeaturedAuthor } from "@/components/site/FeaturedAuthor";
import { LaunchFilm } from "@/components/site/LaunchFilm";

const industry = getIndustry("authors")!;

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
        </>
      }
    />
  );
}
