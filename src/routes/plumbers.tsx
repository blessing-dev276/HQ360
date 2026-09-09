import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { IndustryPageV2 } from "@/components/site/IndustryPageV2";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("plumbers")!;

export const Route = createFileRoute("/plumbers")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPageV2 industry={industry} />;
}
