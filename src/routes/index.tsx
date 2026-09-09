import { createFileRoute } from "@tanstack/react-router";
import { HomeExperience } from "@/components/site/home/HomeExperience";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      title: "HQ360 — Strategy, Creative, Technology & Growth",
      description:
        "HQ360 connects brand, websites, automation, marketing, content and visibility into one growth system for ambitious businesses and personal brands.",
      path: "/",
    }),
  component: HomeExperience,
});
