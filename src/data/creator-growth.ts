export type CreatorStage = {
  number: string;
  slug: string;
  verb: string;
  category: string;
  headline: string;
  description: string;
  result: string;
  services: string[];
  bridge: string;
};

export type CreatorWebsiteOption = {
  title: string;
  label: string;
  description: string;
  features: string[];
};

export type CreatorContentPillar = {
  number: string;
  title: string;
  description: string;
  examples: string[];
};

export type CreatorGrowthFaq = { q: string; a: string };

export const CREATOR_TYPES = [
  "UGC creators",
  "Short-form video creators",
  "Influencers",
  "Beauty creators",
  "Fashion creators",
  "Fitness creators",
  "Food creators",
  "Travel creators",
  "Tech and SaaS creators",
  "Lifestyle creators",
  "Micro creators",
  "Personal-brand creators",
] as const;

export const CREATOR_STAGES: CreatorStage[] = [
  {
    number: "01",
    slug: "position",
    verb: "Position",
    category: "Brand & Creative",
    headline: "Look like a creator brands want representing them.",
    description:
      "Turn your niche, creative ability and commercial understanding into a creator brand that makes the right opportunity feel obvious.",
    result: "Creator → Professional brand → Credibility → Brand confidence → Serious inquiry",
    services: [
      "UGC creator positioning and niche strategy",
      "Personal brand, voice, tagline and bio development",
      "Creator offer and brand-partnership positioning",
      "Visual identity, templates and profile direction",
      "UGC media kit, rate card and pitch deck",
      "UGC service packaging: demos, unboxings, testimonials, ads and monthly packages",
    ],
    bridge: "A clear position gives your best work a commercial context.",
  },
  {
    number: "02",
    slug: "showcase",
    verb: "Showcase & Convert",
    category: "Website & Funnel",
    headline: "Turn your best work into a portfolio that helps brands say yes.",
    description:
      "Your portfolio should act like a 24/7 sales representative: show relevant work quickly, explain what brands can hire you for, and make the next step easy.",
    result: "Attention → Portfolio → Confidence → Inquiry → Collaboration",
    services: [
      "UGC portfolio website with fast video browsing",
      "Professional creator website for a wider personal brand",
      "Canva portfolio website for a streamlined start",
      "Brand inquiry forms, calendar booking and media-kit downloads",
      "Portfolio structure, service packages and proof architecture",
      "Mobile-first conversion paths and partnership landing pages",
    ],
    bridge: "A useful portfolio gives discovery somewhere credible to land.",
  },
  {
    number: "03",
    slug: "discover",
    verb: "Get Discovered",
    category: "SEO",
    headline: "Be easier to find when brands search for creators like you.",
    description:
      "Creator SEO connects your type, niche, content style and relevant location to the searches that signal real partnership intent, without filling your site with thin pages.",
    result: "Brand searches → Creator appears → Profile visit → Evaluation → Inquiry",
    services: [
      "Creator and UGC keyword research by search intent",
      "Portfolio on-page, technical, image and video SEO",
      "Profile, metadata, indexing, analytics and Search Console setup",
      "Niche landing pages where there is legitimate work to support them",
      "TikTok, Instagram, YouTube and relevant social search optimization",
      "Case-study structure, schema and portfolio performance improvements",
    ],
    bridge: "Search discovery works best when the profile and portfolio agree.",
  },
  {
    number: "04",
    slug: "authority",
    verb: "Build Authority",
    category: "Social Media Marketing",
    headline: "Make your own content prove what you can create for brands.",
    description:
      "Your social presence can be a live portfolio. The aim is not a follower-count contest; it is visible creative ability, consistency, niche relevance and brand suitability.",
    result: "Content → Visibility → Authority → Profile visit → Portfolio",
    services: [
      "Creator social strategy and five-pillar content planning",
      "Profile optimization, captions, covers and short-form formats",
      "TikTok, Instagram, YouTube Shorts and platform-specific strategy",
      "Video editing, repurposing, content calendars and trend research",
      "Portfolio-content and personal-brand development",
      "Performance review focused on useful signals, not vanity metrics",
    ],
    bridge: "Authority creates a reason for the right brand to start a conversation.",
  },
  {
    number: "05",
    slug: "win-retain",
    verb: "Win & Retain Clients",
    category: "Digital Marketing",
    headline: "Stop waiting for brands to discover you.",
    description:
      "Build a targeted, professional client-acquisition system: research the right brands, pitch thoughtfully, track every opportunity and follow up until the relationship has a next step.",
    result: "Prospecting → Conversation → Collaboration → Delivery → Repeat client → Retainer",
    services: [
      "Ideal brand profiling and relevant prospect research",
      "Personalized pitch development, email templates and DM frameworks",
      "Creator CRM setup with opportunity stages and reminders",
      "Partnership landing pages, proposals and follow-up workflows",
      "Newsletter and owned-audience funnels where they fit the business",
      "Rebooking, monthly package and past-client reactivation systems",
    ],
    bridge: "A well-run delivery becomes the starting point for repeat work.",
  },
];

export const CREATOR_WEBSITE_OPTIONS: CreatorWebsiteOption[] = [
  {
    title: "UGC Portfolio Website",
    label: "Primary route for UGC creators",
    description: "A fast, focused evaluation path for brand managers who need to decide quickly.",
    features: [
      "Featured UGC and video portfolio",
      "Niche and service filters",
      "Proof, packages and inquiry CTA",
      "Media-kit download and booking",
    ],
  },
  {
    title: "Professional Creator Website",
    label: "For a broader personal brand",
    description:
      "A larger home for creators combining UGC, influence, affiliate work, products, coaching or speaking.",
    features: [
      "Home, About, Portfolio and Services",
      "Brand partnerships and case studies",
      "Insights, resources and newsletter",
      "Multiple conversion paths",
    ],
  },
  {
    title: "Canva Portfolio Website",
    label: "A streamlined start",
    description:
      "A polished, mobile-friendly Canva portfolio for creators who need to begin pitching quickly.",
    features: [
      "Custom visual branding",
      "Video embeds and organized work",
      "Testimonials and media-kit integration",
      "Reusable update templates",
    ],
  },
];

export const CREATOR_CONTENT_PILLARS: CreatorContentPillar[] = [
  {
    number: "01",
    title: "Portfolio content",
    description: "Show what you can make for a brand.",
    examples: ["UGC samples", "Spec ads", "Product demos", "Hooks and variations"],
  },
  {
    number: "02",
    title: "Behind the scenes",
    description: "Show brands how you work.",
    examples: [
      "Setups and lighting",
      "Scripts and filming",
      "Editing workflow",
      "Raw versus final",
    ],
  },
  {
    number: "03",
    title: "Creator authority",
    description: "Demonstrate the thinking behind the content.",
    examples: ["Ad hooks", "Creative breakdowns", "Storytelling", "Platform insights"],
  },
  {
    number: "04",
    title: "Personal brand",
    description: "Help the right partner understand the person behind the camera.",
    examples: ["Personality", "Creator journey", "Values and interests", "Niche perspective"],
  },
  {
    number: "05",
    title: "Social proof",
    description: "Use verified evidence to build trust without inventing results.",
    examples: ["Testimonials", "Approved campaigns", "Repeat clients", "Case studies"],
  },
];

export const CREATOR_PIPELINE = [
  "Prospect",
  "Contacted",
  "Replied",
  "Interested",
  "Brief received",
  "Proposal sent",
  "Negotiation",
  "Won",
  "Content production",
  "Delivered",
  "Follow-up",
  "Repeat client",
] as const;

export const CREATOR_FLYWHEEL = [
  { label: "Position", detail: "Brand · Niche · Media kit · Offer" },
  { label: "Showcase", detail: "Portfolio · UGC samples · Case studies" },
  { label: "Get discovered", detail: "SEO · Social search · Organic content" },
  { label: "Attract", detail: "Authority · Personal brand · Social proof" },
  { label: "Pitch", detail: "Brand research · Outreach · Portfolio" },
  { label: "Convert", detail: "Inquiry · Brief · Proposal · Collaboration" },
  { label: "Deliver", detail: "Content · Communication · Experience" },
  { label: "Retain", detail: "Follow-up · Retainer · Monthly content" },
] as const;

export const CREATOR_FAQS: CreatorGrowthFaq[] = [
  {
    q: "Do I need a portfolio website as a UGC creator?",
    a: "You need a credible place for a brand to evaluate your work and contact you. That can be a focused website, a professional creator site or a well-structured Canva portfolio, depending on your stage.",
  },
  {
    q: "Can HQ360 build my UGC portfolio in Canva?",
    a: "Yes. We can structure and design a mobile-friendly Canva portfolio with your positioning, work, services, proof and brand inquiry path.",
  },
  {
    q: "Do I need a large following to work with brands?",
    a: "No. UGC is often purchased for the quality, relevance and usability of the content, not the creator's audience size. A clear offer and strong portfolio make that distinction easier to understand.",
  },
  {
    q: "Can you help organize my brand outreach?",
    a: "Yes. We can help define a relevant prospecting approach, create personalized pitch frameworks and set up a pipeline so opportunities do not live only in scattered DMs and email threads.",
  },
  {
    q: "Can HQ360 set up a CRM for my collaborations?",
    a: "Yes. A creator CRM can track prospects, briefs, proposals, production, delivery, follow-up and rebooking without making your outreach robotic or spammy.",
  },
  {
    q: "Do you guarantee brand deals or search rankings?",
    a: "No. We build the positioning, discovery and acquisition systems intended to improve your ability to generate and convert opportunities. Outcomes depend on your work, market, offer and execution.",
  },
  {
    q: "Can you help turn one-off collaborations into repeat work?",
    a: "Yes. We can map feedback, testimonial, follow-up, new-idea and rebooking moments into a repeat-client or retainer workflow.",
  },
  {
    q: "Can you work with creators outside the USA?",
    a: "Yes. The system is designed for creators and brands working across markets. Location, language, platform and commercial requirements are considered during planning.",
  },
];
