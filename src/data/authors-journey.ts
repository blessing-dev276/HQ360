/**
 * The Authors & Publishers page is a single 8-stage author journey rather
 * than a service list. This is its data: the lifecycle, the "where are you
 * now" selector, and the growth-plan diagnostic. Real proof (Sanman Thapa)
 * stays in `industries.ts` / `launch.ts`; this file is the journey itself.
 *
 * No promised sales, rankings or bestseller status anywhere in this content.
 */

export type AuthorStageId =
  "idea" | "write" | "prepare" | "publish" | "launch" | "sell" | "retain" | "scale";

export type ServiceGroup = { name: string; items: string[] };

export type AuthorStage = {
  id: AuthorStageId;
  number: string;
  label: string;
  /** Shown on the orbit when this stage is hovered/selected. */
  orbitLine: string;
  /** Section headline. */
  headline: string;
  /** One short paragraph — the stage in plain language. */
  body: string;
  outcome: string;
  serviceGroups: ServiceGroup[];
  /** The connective line leading into the next stage. */
  transition: string;
};

export const AUTHOR_STAGES: AuthorStage[] = [
  {
    id: "idea",
    number: "01",
    label: "Idea",
    orbitLine: "Turn the idea into a commercially positioned concept.",
    headline: "Build the right book before writing the wrong one.",
    body: "A concept that knows its reader, its category and its promise is easier to write, easier to position and easier to sell later. This is where that gets decided.",
    outcome: "A commercially positioned concept with a reader, a category and a promise.",
    serviceGroups: [
      {
        name: "Concept",
        items: [
          "Hook architecture",
          "Commercial positioning blueprint",
          "Core promise & reader transformation",
          "Nonfiction monetization strategy",
          "Fiction series architecture",
        ],
      },
      {
        name: "Research",
        items: [
          "Comparative title analysis",
          "Reader avatar deep dive",
          "Market gap & demand analysis",
          "Keyword & category mapping",
          "Converting title formulation",
          "Multi-book series modeling",
        ],
      },
      {
        name: "Planning",
        items: [
          "Milestone & writing roadmaps",
          "Book proposal preparation (nonfiction)",
          "Scene-by-beat sheet (fiction)",
          "Structural outline engineering",
          "Fiction narrative & universe blueprinting",
          "Chapter purpose & reader progression mapping",
        ],
      },
    ],
    transition: "Your concept is ready. Next: turn it into a manuscript.",
  },
  {
    id: "write",
    number: "02",
    label: "Write",
    orbitLine: "Turn the concept into a strong manuscript.",
    headline: "Turn the concept into a manuscript worth publishing.",
    body: "Writing support HQ360 delivers directly, plus editing coordinated through vetted specialists where a project needs it — never claimed as in-house if it isn't.",
    outcome: "A publication-ready manuscript, structurally sound and edited.",
    serviceGroups: [
      {
        name: "Writing strategy",
        items: [
          "Ghostwriting & manuscript architecture",
          "Chapter pacing & scene optimization",
          "Author accountability coaching & milestones",
          "Voice & tone development",
          "Draft review & developmental feedback",
        ],
      },
      {
        name: "Editing strategy",
        items: [
          "Substantive & structural overhauls",
          "Line-by-line polish & stylistic editing",
          "Target-demographic beta testing",
          "Final galley proofreading & compliance review",
          "Continuity & consistency review",
        ],
      },
    ],
    transition: "Your manuscript is taking shape. Next: prepare it for the market.",
  },
  {
    id: "prepare",
    number: "03",
    label: "Prepare",
    orbitLine: "Edit, design and package the book professionally.",
    headline: "Turn the manuscript into a professional publishing product.",
    body: "Production, cover and author brand work happen together so the finished book reads as one professional object, not three separate vendors.",
    outcome: "A professionally packaged book and an author brand to put behind it.",
    serviceGroups: [
      {
        name: "Editorial production",
        items: [
          "Interior book design",
          "Digital & print format production",
          "Algorithmic metadata & SEO asset preparation",
          "Global print fulfillment & POD architecture",
        ],
      },
      {
        name: "Creative",
        items: [
          "Conversion-focused print & digital cover design",
          "Multi-volume series brand architecture",
          "Cinematic launch trailers & social motion assets",
          "Book mockup & campaign creative suite",
        ],
      },
      {
        name: "Author brand",
        items: [
          "Commercial identity & bio engineering",
          "Author positioning & authority strategy",
          "Digital HQ: author website architecture",
          "Media & speaker kit development",
        ],
      },
    ],
    transition: "The book looks ready. Next: publish it properly.",
  },
  {
    id: "publish",
    number: "04",
    label: "Publish",
    orbitLine: "Get the book into the market.",
    headline: "Turn the finished manuscript into a book correctly positioned and available to buy.",
    body: "Metadata, categories and pricing decide whether a good book gets found. We set these up correctly rather than leaving them at platform defaults. Registration support is practical guidance, not legal advice — that comes from an actual specialist where a project needs one.",
    outcome: "The book properly positioned and available where readers buy.",
    serviceGroups: [
      {
        name: "Infrastructure",
        items: [
          "Retail platform infrastructure deployment",
          "Algorithmic indexing & taxonomy optimization",
          "Global monetization & price modeling",
          "Imprint setup & publishing registration support",
        ],
      },
      {
        name: "Listing",
        items: [
          "Conversion-engineered sales copywriting",
          "Premium brand showcasing & A+ visual layouts",
          "Sequential funnel & series architecture linkage",
          "Retail page conversion optimization",
        ],
      },
      {
        name: "Distribution",
        items: [
          "Global retail & library syndication networks",
          "Direct-to-reader (D2C) revenue ecosystems",
          "Wholesale & institutional distribution strategy",
        ],
      },
    ],
    transition: "The infrastructure is ready. Next: launch with momentum.",
  },
  {
    id: "launch",
    number: "05",
    label: "Launch",
    orbitLine: "Create momentum around release.",
    headline: "Don't just publish. Launch.",
    body: "A dated plan working backward from release — preorders, reviewer outreach, media and paid visibility stacked so week one compounds instead of fading quietly. No launch service here promises a bestseller badge or guaranteed media placement — those depend on the book and the market as much as the campaign.",
    outcome: "A dated launch plan built to create real momentum at release.",
    serviceGroups: [
      {
        name: "Launch strategy",
        items: [
          "High-velocity launch strategy & marketing",
          "Category momentum & bestseller positioning strategy",
          "Advance review copy (ARC) campaign management",
          "High-conversion launch asset suite",
        ],
      },
      {
        name: "Media & authority",
        items: [
          "Podcast guest placement",
          "Press & literary media outreach",
          "Author interview placement",
          "Book review outreach",
          "Thought-leadership positioning",
          "Media kit & press asset development",
        ],
      },
      {
        name: "Audience & influencers",
        items: [
          "Newsletter swaps & influencer outreach",
          "BookTok / Bookstagram creator outreach",
          "ARC team mobilization",
        ],
      },
      {
        name: "Paid visibility",
        items: ["Paid visibility & ad funnel scaling"],
      },
    ],
    transition: "The book is in motion. Next: turn attention into sales.",
  },
  {
    id: "sell",
    number: "06",
    label: "Sell",
    orbitLine: "Turn attention into readers and buyers.",
    headline: "Turn attention into readers and readers into buyers.",
    body: "A repeatable acquisition system — a digital HQ, search and AI discovery, content and paid channels working together — rather than a launch spike that fades.",
    outcome: "A repeatable reader-acquisition system, not a one-week spike.",
    serviceGroups: [
      {
        name: "Digital HQ & funnels",
        items: [
          "Digital HQ: conversion-optimized author hubs",
          "Automated reader-acquisition funnels",
          "Direct-to-reader (D2C) high-margin stores",
          "Book launch & campaign landing pages",
        ],
      },
      {
        name: "Discovery",
        items: [
          "Omnichannel discovery & authority indexing",
          "Goodreads discovery & Listopia strategy",
          "AI search & generative discovery optimization",
          "A/B testing & conversion rate optimization (CRO)",
        ],
      },
      {
        name: "Content & acquisition",
        items: [
          "Short-form video traffic engines",
          "Book trailer & cinematic content distribution",
          "Author thought-leadership content systems",
          "Multi-platform paid acquisition campaigns",
          "Advanced retargeting & reader retention funnels",
        ],
      },
    ],
    transition: "Readers are arriving. Next: keep them.",
  },
  {
    id: "retain",
    number: "07",
    label: "Retain",
    orbitLine: "Build a reader audience you can reach again.",
    headline: "Don't lose the reader after one purchase.",
    body: "A reader network you own — onboarding, social proof and a superfan layer — so the next release doesn't start from zero.",
    outcome: "A reader audience and reader network you own and can reach again.",
    serviceGroups: [
      {
        name: "Reader network",
        items: [
          "First-party reader network architecture",
          "Automated reader onboarding & nurture funnels",
          "Reader lifetime value modeling",
        ],
      },
      {
        name: "Social proof & retention",
        items: [
          "Automated social proof engines",
          "Pre-launch pipeline & priority waitlist systems",
          "Superfan ecosystem & ARC team mobilization",
          "Reader community & ambassador programs",
        ],
      },
    ],
    transition: "Your audience is growing. Next: scale the author business.",
  },
  {
    id: "scale",
    number: "08",
    label: "Scale",
    orbitLine: "Grow the catalogue, audience and author business.",
    headline: "Turn one book into a larger author business.",
    body: "Once the loop works for one book, the same system compounds across a catalogue — more titles, formats and revenue lines feeding the same owned audience.",
    outcome: "A catalogue and author business built on what already works.",
    serviceGroups: [
      {
        name: "Catalogue & IP",
        items: [
          "IP & series expansion strategy",
          "Multi-format & transmedia localization strategy",
        ],
      },
      {
        name: "Business expansion",
        items: [
          "High-ticket keynote & corporate speaking funnels",
          "Digital product & masterclass architecture",
          "Sub-rights & licensing pitch decks",
          "Film / TV / adaptation pitch materials",
          "Author partnership & sponsorship strategy",
        ],
      },
      {
        name: "Optimization",
        items: [
          "Catalogue yield & reader LTV optimization",
          "Performance analytics & growth intelligence",
          "Omnichannel brand consolidation",
        ],
      },
    ],
    transition: "Now the book becomes an ecosystem.",
  },
];

export const getAuthorStage = (id: AuthorStageId) => AUTHOR_STAGES.find((s) => s.id === id)!;

/* ------------------------------------------------- "where are you now?" */

export type WhereNowOption = {
  id: string;
  label: string;
  stage: AuthorStageId;
  /** The short recommended-path chain shown after selection. */
  path: string[];
};

export const WHERE_NOW_OPTIONS: WhereNowOption[] = [
  {
    id: "idea-only",
    label: "I only have an idea",
    stage: "idea",
    path: ["Idea", "Market research", "Positioning", "Outline", "Writing roadmap"],
  },
  {
    id: "writing",
    label: "I'm currently writing",
    stage: "write",
    path: ["Manuscript development", "Editing", "Beta readers", "Proofreading"],
  },
  {
    id: "manuscript-done",
    label: "My manuscript is finished",
    stage: "prepare",
    path: ["Production & formatting", "Cover design", "Author brand", "Metadata"],
  },
  {
    id: "preparing",
    label: "I'm preparing to publish",
    stage: "publish",
    path: ["Platform setup", "Categories & keywords", "Pricing", "Listing"],
  },
  {
    id: "published",
    label: "My book is already published",
    stage: "launch",
    path: ["Launch plan", "Reviewer outreach", "Launch content", "Email sequence"],
  },
  {
    id: "selling",
    label: "I'm selling but want more readers",
    stage: "sell",
    path: ["Author website", "Book SEO", "Content & ads", "Reader acquisition system"],
  },
  {
    id: "scaling",
    label: "I already have traction and want to scale",
    stage: "scale",
    path: ["Catalogue strategy", "Retention system", "Advanced acquisition", "Author business"],
  },
];

/* ------------------------------------------------------- growth-plan diagnostic */

export type AuthorGoal = {
  id: string;
  label: string;
  recommended: string;
  stack: string[];
};

export const AUTHOR_GOALS: AuthorGoal[] = [
  {
    id: "finish",
    label: "Finish the book",
    recommended: "Write & Prepare",
    stack: ["Manuscript development", "Editing", "Production & cover"],
  },
  {
    id: "publish-well",
    label: "Publish professionally",
    recommended: "Prepare & Publish",
    stack: ["Cover & formatting", "Metadata & categories", "Platform setup"],
  },
  {
    id: "launch-well",
    label: "Launch successfully",
    recommended: "Launch System",
    stack: ["Launch timeline", "Reviewer outreach", "Launch content & email"],
  },
  {
    id: "more-readers",
    label: "Get more readers",
    recommended: "Reader Acquisition System",
    stack: ["Website / funnel", "Book SEO", "Content", "Paid acquisition"],
  },
  {
    id: "email-list",
    label: "Build an email audience",
    recommended: "Reader Capture System",
    stack: ["Reader magnet", "Capture page", "Welcome sequence"],
  },
  {
    id: "more-sales",
    label: "Increase book sales",
    recommended: "Sell & Retain System",
    stack: ["Listing rebuild", "Ads & content", "Retention flows"],
  },
  {
    id: "series",
    label: "Grow a series / catalogue",
    recommended: "Catalogue Growth",
    stack: ["Series strategy", "Cross-title retention", "Wider distribution"],
  },
  {
    id: "scale-business",
    label: "Scale an existing author business",
    recommended: "Author Business System",
    stack: ["Advanced acquisition", "Analytics & CRO", "Business diversification"],
  },
];

export const AUTHOR_ASSETS = [
  "Manuscript",
  "Cover",
  "Website",
  "Email list",
  "Social audience",
  "Published book",
  "None yet",
];
