import type { Industry } from "@/data/industries";
import type { Capability } from "@/data/capabilities";
import { breadcrumbSchema, buildSeo, faqSchema, professionalServiceSchema } from "@/lib/seo";

export function industryHead(industry: Industry) {
  return buildSeo(
    {
      title: industry.seo.title,
      description: industry.seo.description,
      path: industry.path,
      type: "website",
    },
    [
      professionalServiceSchema({
        name: industry.name,
        description: industry.seo.description,
        path: industry.path,
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: industry.shortName, path: industry.path },
      ]),
      faqSchema(industry.faqs),
    ],
  );
}

export function capabilityHead(capability: Capability) {
  return buildSeo(
    {
      title: capability.seo.title,
      description: capability.seo.description,
      path: capability.path,
      type: "website",
    },
    [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/capabilities" },
        { name: capability.name, path: capability.path },
      ]),
      faqSchema(capability.faqs),
    ],
  );
}
