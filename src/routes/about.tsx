import { createFileRoute } from "@tanstack/react-router";
import { AboutExperience } from "@/components/site/AboutExperience";
import { buildSeo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo(
      {
        title: "About HQ360 | Multi-Industry Growth Agency",
        description:
          "Why HQ360 exists, why fragmented marketing systems fail, and how a single multidisciplinary team builds growth that connects.",
        path: "/about",
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ),
  component: AboutPage,
});

function AboutPage() {
  return <AboutExperience />;
}
