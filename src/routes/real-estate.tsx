import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { IndustryPage } from "@/components/site/IndustryPage";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("real-estate")!;

export const Route = createFileRoute("/real-estate")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPage industry={industry} />;
}
