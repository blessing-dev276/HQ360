import { createFileRoute } from "@tanstack/react-router";
import { getIndustry } from "@/data/industries";
import { industryHead } from "@/lib/page-heads";
import { AuthorsPage } from "@/components/site/authors/AuthorsPage";

const industry = getIndustry("authors")!;

export const Route = createFileRoute("/authors")({
  head: () => industryHead(industry),
  component: RouteComponent,
});

function RouteComponent() {
  return <AuthorsPage industry={industry} />;
}
