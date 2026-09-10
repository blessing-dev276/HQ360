import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { IndustryPage } from "@/components/site/IndustryPage";
import { FeaturedAuthor } from "@/components/site/FeaturedAuthor";
import { LaunchFilm } from "@/components/site/LaunchFilm";

const industry = getIndustry("authors")!;

export const Route = createFileRoute("/authors")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <IndustryPage
      industry={industry}
      beforeCta={
        <>
          <LaunchFilm />
          <FeaturedAuthor />
        </>
      }
    />
  );
}
