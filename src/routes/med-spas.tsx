import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { IndustryPage } from "@/components/site/IndustryPage";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("med-spas")!;

export const Route = createFileRoute("/med-spas")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPage industry={industry} />;
}
