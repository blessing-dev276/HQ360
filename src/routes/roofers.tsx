import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { IndustryPageV2 } from "@/components/site/IndustryPageV2";
import { industryHead } from "@/lib/page-heads";

const industry = getIndustry("roofers")!;

export const Route = createFileRoute("/roofers")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPageV2 industry={industry} />;
}
