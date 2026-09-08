import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { CreatorGrowthPage } from "@/components/site/CreatorGrowthPage";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("creators")!;

export const Route = createFileRoute("/creators")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <CreatorGrowthPage />;
}
