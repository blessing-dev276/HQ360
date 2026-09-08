import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { IndustryPage } from "@/components/site/IndustryPage";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("local-business")!;

export const Route = createFileRoute("/local-business")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPage industry={industry} />;
}
