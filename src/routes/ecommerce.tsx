import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { IndustryPageV2 } from "@/components/site/IndustryPageV2";

const industry = getIndustry("ecommerce")!;

export const Route = createFileRoute("/ecommerce")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPageV2 industry={industry} />;
}
