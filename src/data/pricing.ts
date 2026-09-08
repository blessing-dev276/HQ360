/**
 * Engagement models. HQ360 does not publish one flat price for every industry.
 *
 * `priceHint` figures are INDICATIVE PLACEHOLDERS for layout. Confirm real
 * numbers before publishing, or remove the hints and keep "custom scope".
 */

export type Engagement = {
  slug: string;
  name: string;
  forWho: string;
  summary: string;
  /** Indicative starting figure — placeholder. */
  priceHint: string;
  priceNote: string;
  includes: string[];
  bestFor: string;
  cta: { label: string; to: string };
  featured?: boolean;
};

export const ENGAGEMENTS: Engagement[] = [
  {
    slug: "project",
    name: "Project",
    forWho: "A defined piece of work with a clear finish line.",
    summary:
      "A brand system, a website, a funnel, a CRM build or a launch. Fixed scope, fixed timeline, delivered and handed over.",
    priceHint: "from $3,000",
    priceNote: "Placeholder. Scoped per project.",
    includes: [
      "Written scope with deliverables and dates",
      "A named lead for the engagement",
      "Design, build and QA",
      "Handover, documentation and training",
      "30 days of post-launch support",
    ],
    bestFor: "Businesses that know the specific thing they need built.",
    cta: { label: "Scope a project", to: "/contact" },
  },
  {
    slug: "growth-system",
    name: "Growth System",
    forWho: "A business ready to build the whole engine at once.",
    summary:
      "Brand, site, funnels, CRM and automation designed and connected as one system, then launched. The fastest path from fragmented to working.",
    priceHint: "from $9,000",
    priceNote: "Placeholder. Scoped to goals and existing infrastructure.",
    includes: [
      "Everything in Project, across multiple capabilities",
      "Growth strategy and measurement plan",
      "Cross-capability build: brand, web, funnel, CRM, automation",
      "Coordinated launch across channels",
      "Reporting dashboard and 60 days of optimisation",
    ],
    bestFor: "Businesses replacing several disconnected tools and vendors.",
    cta: { label: "Design my growth system", to: "/contact" },
    featured: true,
  },
  {
    slug: "growth-partnership",
    name: "Growth Partnership",
    forWho: "Ongoing growth once the system is in place.",
    summary:
      "A monthly retainer covering advertising, content, optimisation and reporting, with the team that built the system continuing to run it.",
    priceHint: "from $3,500 / month",
    priceNote: "Placeholder. Retainer scoped to channels and scale.",
    includes: [
      "Advertising and campaign management",
      "Content and creative production",
      "Continuous optimisation and testing",
      "Weekly written reporting and a live dashboard",
      "Quarterly strategy review",
    ],
    bestFor: "Businesses with a working system that want to scale it.",
    cta: { label: "Talk about a partnership", to: "/contact" },
  },
];

export const PRICING_PRINCIPLES: string[] = [
  "Custom scope based on your goals, existing infrastructure and growth requirements.",
  "You own every account, asset and automation we build.",
  "Advertising budget is paid by you directly to the platforms.",
  "Month-to-month on partnerships, with 30 days' notice.",
  "No long-term contracts and no exit fees.",
];

export const PRICING_FAQS: { q: string; a: string }[] = [
  {
    q: "Why don't you list fixed prices?",
    a: "Because the work varies. A funnel for a solo consultant and a growth system for a multi-location home services company are not the same job. We scope from a conversation about your goals and what already exists.",
  },
  {
    q: "How do the three models fit together?",
    a: "Most engagements start as a Project or a Growth System to build the foundation, then move to a Growth Partnership to run and scale it. You can also start with a single Project and expand.",
  },
  {
    q: "Is ad spend included?",
    a: "No. You pay the platforms directly so you keep full ownership and visibility of the accounts and data.",
  },
  {
    q: "Do you offer payment plans?",
    a: "For larger engagements, yes. Payments can be split across the delivery period.",
  },
  {
    q: "What happens if we stop?",
    a: "Give 30 days' notice on a partnership. We finish work in flight, hand over everything, and remove our access. Nothing switches off.",
  },
];
