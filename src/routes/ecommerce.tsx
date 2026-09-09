import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { IndustryPage } from "@/components/site/IndustryPage";
import { EcommerceSections } from "@/components/site/EcommerceSections";

const industry = getIndustry("ecommerce")!;

export const Route = createFileRoute("/ecommerce")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <IndustryPage industry={industry} beforeCta={<EcommerceSections />} />;
}
