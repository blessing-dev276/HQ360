/**
 * Homepage editorial configuration.
 *
 * The homepage teases; it does not teach. Detailed deliverables live on the
 * capability pages, industry strategies on the industry pages, full write-ups
 * on /work. Everything here is a short, outcome-first summary that points
 * somewhere deeper. Canonical facts (paths, names) come from the shared data
 * files where possible.
 */

import { getCapability, type CapabilitySlug } from "@/data/capabilities";
import { INDUSTRIES } from "@/data/industries";

function industryPath(slug: string): string {
  return INDUSTRIES.find((i) => i.slug === slug)?.path ?? `/${slug}`;
}
function industryName(slug: string): string {
  return INDUSTRIES.find((i) => i.slug === slug)?.shortName ?? slug;
}

/* ------------------------------------------------------------ industries */

export type HomeIndustry = {
  slug: string;
  label: string;
  category: string;
  /** One "turn X into Y" sentence. */
  outcome: string;
  /** 3–4 nodes for the flow visual. */
  flow: string[];
  path: string;
};

export const HOME_INDUSTRIES: HomeIndustry[] = [
  {
    slug: "ecommerce",
    label: industryName("ecommerce"),
    category: "Commerce & product brands",
    outcome: "Turn product interest into purchases and purchases into repeat customers.",
    flow: ["Product", "Store", "Purchase", "Repeat"],
    path: industryPath("ecommerce"),
  },
  {
    slug: "authors",
    label: industryName("authors"),
    category: "Personal brands & experts",
    outcome: "Turn discovery into readers, book sales and an audience you can reach again.",
    flow: ["Discover", "Read", "Review", "Re-reach"],
    path: industryPath("authors"),
  },
  {
    slug: "creators",
    label: industryName("creators"),
    category: "Personal brands & experts",
    outcome: "Turn content skills into paid brand opportunities and repeat collaborations.",
    flow: ["Get seen", "Get hired", "Deliver", "Rebooked"],
    path: industryPath("creators"),
  },
  {
    slug: "real-estate",
    label: industryName("real-estate"),
    category: "Sales & professional teams",
    outcome: "Turn inquiries into appointments, clients and referral opportunities.",
    flow: ["Inquiry", "Appointment", "Client", "Referral"],
    path: industryPath("real-estate"),
  },
  {
    slug: "home-services",
    label: industryName("home-services"),
    category: "Local & home services",
    outcome: "Turn local demand into booked jobs and repeat business.",
    flow: ["Search", "Call", "Booked job", "Review"],
    path: industryPath("home-services"),
  },
  {
    slug: "coaches",
    label: industryName("coaches"),
    category: "Personal brands & experts",
    outcome: "Turn expertise into qualified conversations and signed clients.",
    flow: ["Discover", "Apply", "Enroll", "Renew"],
    path: industryPath("coaches"),
  },
];

/* ----------------------------------------------------------- capabilities */

export type HomeCapability = {
  slug: CapabilitySlug;
  /** Homepage-facing group name. */
  label: string;
  /** Short label for the orbit / compact UI. */
  short: string;
  /** One imperative outcome line. */
  outcome: string;
  /** 4–6 sub-capabilities — an overview, not the full catalogue. */
  items: string[];
  path: string;
};

const cap = (slug: CapabilitySlug) => getCapability(slug)!;

export const HOME_CAPABILITIES: HomeCapability[] = [
  {
    slug: "brand-creative",
    label: "Brand & Creative",
    short: "Brand",
    outcome: "Position the business and make it worth noticing.",
    items: [
      "Brand strategy & identity",
      "Visual systems & design",
      "Social & campaign creative",
      "Media kits & sales decks",
    ],
    path: cap("brand-creative").path,
  },
  {
    slug: "websites-funnels",
    label: "Websites & Conversion",
    short: "Web",
    outcome: "Turn attention into action.",
    items: [
      "Business & portfolio websites",
      "Landing pages",
      "Sales funnels",
      "Conversion optimisation",
    ],
    path: cap("websites-funnels").path,
  },
  {
    slug: "visibility-reputation",
    label: "SEO & Discoverability",
    short: "SEO",
    outcome: "Help the right people find you.",
    items: [
      "Technical & content SEO",
      "Local SEO & Google Business",
      "Reviews & reputation",
      "Digital PR & authority",
    ],
    path: cap("visibility-reputation").path,
  },
  {
    slug: "lead-generation",
    label: "Marketing & Acquisition",
    short: "Growth",
    outcome: "Create qualified demand.",
    items: ["Paid advertising", "Lead capture & offers", "Retargeting", "Email & nurture"],
    path: cap("lead-generation").path,
  },
  {
    slug: "crm-automation",
    label: "CRM & Automation",
    short: "Automation",
    outcome: "Capture opportunities and keep follow-up moving.",
    items: [
      "CRM setup & pipelines",
      "Speed-to-lead automation",
      "Booking & reminders",
      "Database reactivation",
    ],
    path: cap("crm-automation").path,
  },
  {
    slug: "content-social",
    label: "Content & Social",
    short: "Content",
    outcome: "Build attention, authority and trust.",
    items: [
      "Content strategy",
      "Short-form video",
      "Social media management",
      "Creator & UGC campaigns",
    ],
    path: cap("content-social").path,
  },
];

/* -------------------------------------------------------- the HQ360 system */

export type SystemStage = {
  key: string;
  title: string;
  blurb: string;
  /** Capability hint shown under the stage. */
  capabilities: string;
};

export const HQ360_SYSTEM: SystemStage[] = [
  {
    key: "position",
    title: "Position",
    blurb:
      "Define the audience, the offer and the reason to choose you — before anything gets built.",
    capabilities: "Strategy · Brand · Messaging",
  },
  {
    key: "attract",
    title: "Attract",
    blurb:
      "Create demand with search, content, outreach and paid campaigns aimed at the right people.",
    capabilities: "SEO · Content · Advertising",
  },
  {
    key: "convert",
    title: "Convert",
    blurb:
      "Turn attention into action through websites, funnels and buying or enquiry journeys built for one next step.",
    capabilities: "Websites · Landing pages · Funnels",
  },
  {
    key: "automate",
    title: "Automate",
    blurb:
      "Capture every opportunity, organise it and keep follow-up moving without relying on manual chasing.",
    capabilities: "CRM · Pipelines · Automation",
  },
  {
    key: "retain",
    title: "Retain",
    blurb: "Bring customers, readers and clients back with nurture, reviews and reactivation.",
    capabilities: "Nurture · Reviews · Reactivation",
  },
  {
    key: "scale",
    title: "Scale",
    blurb:
      "Double down on what works, cut what doesn't, and add reach where the numbers justify it.",
    capabilities: "Reporting · Optimisation · Expansion",
  },
];

export const SYSTEM_POINT =
  "A website alone isn't the system. SEO alone isn't the system. Ads alone aren't the system. Growth happens when the right pieces work together — HQ360 identifies which pieces you need and connects them.";

/* --------------------------------------------------------- smart diagnostic */

export type DiagnosticGoal = {
  id: string;
  label: string;
  /** Real capability page this points toward (null = just talk to us). */
  capabilitySlug: CapabilitySlug | null;
  recommendationTitle: string;
  recommendationCopy: string;
};

export const DIAGNOSTIC_GOALS: DiagnosticGoal[] = [
  {
    id: "discovered",
    label: "Getting discovered",
    capabilitySlug: "visibility-reputation",
    recommendationTitle: "SEO & Discoverability",
    recommendationCopy:
      "We'd start by making you findable in search and local results, then look at the content and reviews that back it up.",
  },
  {
    id: "leads",
    label: "Generating leads",
    capabilitySlug: "lead-generation",
    recommendationTitle: "Marketing & Acquisition",
    recommendationCopy:
      "We'd build a qualified-demand engine — paid campaigns and lead capture — once the page they land on is ready to convert.",
  },
  {
    id: "conversion",
    label: "Website conversion",
    capabilitySlug: "websites-funnels",
    recommendationTitle: "Websites & Conversion",
    recommendationCopy:
      "We'd review the journey from first click to enquiry or purchase before recommending more traffic to it.",
  },
  {
    id: "sales",
    label: "Closing more sales",
    capabilitySlug: "crm-automation",
    recommendationTitle: "CRM & Automation",
    recommendationCopy:
      "We'd organise the pipeline and follow-up so fewer opportunities go cold between interest and decision.",
  },
  {
    id: "followup",
    label: "Follow-up & speed-to-lead",
    capabilitySlug: "crm-automation",
    recommendationTitle: "CRM & Automation",
    recommendationCopy:
      "We'd automate speed-to-lead replies and nurture so every enquiry gets a fast, consistent response.",
  },
  {
    id: "retention",
    label: "Customer retention",
    capabilitySlug: "crm-automation",
    recommendationTitle: "Retention systems",
    recommendationCopy:
      "We'd add nurture, review and reactivation systems that bring existing customers and clients back.",
  },
  {
    id: "brand",
    label: "Brand positioning",
    capabilitySlug: "brand-creative",
    recommendationTitle: "Brand & Creative",
    recommendationCopy:
      "We'd sharpen the position and identity so everything downstream has something clear to point at.",
  },
  {
    id: "content",
    label: "Content & visibility",
    capabilitySlug: "content-social",
    recommendationTitle: "Content & Social",
    recommendationCopy:
      "We'd build a publishing rhythm and short-form video system you can actually sustain.",
  },
  {
    id: "unsure",
    label: "I'm not sure",
    capabilitySlug: null,
    recommendationTitle: "A short conversation",
    recommendationCopy:
      "Tell us where you're trying to go and we'll help identify which part of the system to start with.",
  },
];

export type DiagnosticIndustry = { id: string; label: string; path: string };

export const DIAGNOSTIC_INDUSTRIES: DiagnosticIndustry[] = [
  ...HOME_INDUSTRIES.map((i) => ({ id: i.slug, label: i.label, path: i.path })),
  { id: "other", label: "Something else", path: "/industries" },
];

export type DiagnosticResult = {
  title: string;
  copy: string;
  capabilityLabel: string | null;
  capabilityPath: string | null;
  industryLabel: string;
  industryPath: string;
  /** Query string for /contact so the visitor never re-enters this. */
  contactSearch: {
    industry?: string | undefined;
    goal?: string | undefined;
    service?: string | undefined;
    source: string;
  };
  ctaLabel: string;
};

export function diagnose(goalId: string, industryId: string): DiagnosticResult | null {
  const goal = DIAGNOSTIC_GOALS.find((g) => g.id === goalId);
  const industry = DIAGNOSTIC_INDUSTRIES.find((i) => i.id === industryId);
  if (!goal || !industry) return null;

  const capability = goal.capabilitySlug ? getCapability(goal.capabilitySlug) : undefined;
  const specific = industry.id !== "other" && goal.id !== "unsure";

  return {
    title: goal.recommendationTitle,
    copy: goal.recommendationCopy,
    capabilityLabel: capability?.name ?? null,
    capabilityPath: capability?.path ?? null,
    industryLabel: industry.label,
    industryPath: industry.path,
    contactSearch: {
      industry: industry.id === "other" ? undefined : industry.label,
      goal: goal.id === "unsure" ? undefined : goal.label,
      service: capability?.name,
      source: "home-diagnostic",
    },
    ctaLabel: specific ? `Discuss your ${industry.label} plan` : "Discuss this with HQ360",
  };
}
