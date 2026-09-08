import { BRAND } from "@/config/brand";

type MetaTag = Record<string, string>;
type LinkTag = Record<string, string>;
type ScriptTag = { type: string; children: string };

export type SeoInput = {
  title: string;
  description: string;
  /** Absolute path beginning with "/" — used for canonical + og:url. */
  path: string;
  type?: "website" | "article" | "profile";
  /** Absolute or root-relative image URL for social cards. */
  image?: string;
  noindex?: boolean;
};

function absolute(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BRAND.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build a consistent head config for a route: title, description, canonical,
 * Open Graph and Twitter tags. Optionally attaches JSON-LD structured data.
 */
export function buildSeo(
  input: SeoInput,
  structuredData?: unknown | unknown[],
): { meta: MetaTag[]; links: LinkTag[]; scripts?: ScriptTag[] } {
  const url = absolute(input.path);
  const image = absolute(input.image ?? "/favicon.png");
  const fullTitle = input.title.includes("HQ360") ? input.title : `${input.title} | HQ360`;

  const meta: MetaTag[] = [
    { title: fullTitle },
    { name: "description", content: input.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: BRAND.name },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
  ];

  if (input.noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  const links: LinkTag[] = [{ rel: "canonical", href: url }];

  const result: { meta: MetaTag[]; links: LinkTag[]; scripts?: ScriptTag[] } = { meta, links };

  if (structuredData) {
    const blocks = Array.isArray(structuredData) ? structuredData : [structuredData];
    result.scripts = blocks.map((block) => ({
      type: "application/ld+json",
      children: JSON.stringify(block),
    }));
  }

  return result;
}

/** Organization schema — safe to include site-wide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.siteUrl,
    description: BRAND.positioning,
    slogan: BRAND.tagline,
    email: BRAND.email,
    areaServed: "Worldwide",
  };
}

/** ProfessionalService schema for an industry landing page. */
export function professionalServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${BRAND.name} — ${input.name}`,
    description: input.description,
    url: absolute(input.path),
    parentOrganization: { "@type": "Organization", name: BRAND.name, url: BRAND.siteUrl },
    areaServed: "Worldwide",
    provider: { "@type": "Organization", name: BRAND.name },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}
