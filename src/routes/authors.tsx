import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { IndustryPageV2 } from "@/components/site/IndustryPageV2";
import { FeaturedAuthor } from "@/components/site/FeaturedAuthor";

const industry = getIndustry("authors")!;

export const Route = createFileRoute("/authors")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPageV2 industry={industry} beforeCta={<FeaturedAuthor />} />;
}
