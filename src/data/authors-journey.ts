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
          "Book idea development",
          "Target reader definition",
          "Genre / category direction",
          "Book promise & positioning",
        ],
      },
      {
        name: "Research",
        items: ["Market & competitive research", "Title & subtitle direction", "Series potential"],
      },
      {
        name: "Planning",
        items: [
          "Chapter / outline planning",
          "Nonfiction: framework & authority angle",
          "Fiction: story concept & world planning support",
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
    body: "Writing support HQ360 delivers directly, plus editorial work coordinated through vetted specialists where a project needs it — never claimed as in-house if it isn't.",
    outcome: "A publication-ready manuscript, structurally sound and edited.",
    serviceGroups: [
      {
        name: "Writing strategy",
        items: ["Manuscript development", "Chapter refinement", "Research & fact-checking support"],
      },
      {
        name: "Editing (HQ360-managed)",
        items: [
          "Developmental & structural editing",
          "Copy editing",
          "Proofreading",
          "Beta-reader coordination",
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
    headline: "Make the book look ready before asking anyone to buy it.",
    body: "Production, cover and author brand work happen together so the finished book reads as one professional object, not three separate vendors.",
    outcome: "A professionally packaged book and an author brand to put behind it.",
    serviceGroups: [
      {
        name: "Editorial production",
        items: ["Ebook & print formatting", "Front / back matter", "Metadata preparation"],
      },
      {
        name: "Creative",
        items: [
          "Cover design (ebook, paperback, hardcover)",
          "Series visual system",
          "Promotional graphics & mockups",
        ],
      },
      {
        name: "Author brand",
        items: ["Author identity & bio", "Media / press kit", "Author photography direction"],
      },
    ],
    transition: "The book looks ready. Next: publish it properly.",
  },
  {
    id: "publish",
    number: "04",
    label: "Publish",
    orbitLine: "Get the book into the market.",
    headline: "Turn the finished manuscript into a book people can actually buy.",
    body: "Metadata, categories and pricing decide whether a good book gets found. We set these up correctly rather than leaving them at platform defaults.",
    outcome: "The book properly positioned and available where readers buy.",
    serviceGroups: [
      {
        name: "Setup",
        items: [
          "Amazon KDP / ebook & print setup",
          "Categories & keywords",
          "Pricing strategy",
          "ISBN guidance",
        ],
      },
      {
        name: "Listing",
        items: ["Book description", "Author Central & A+ Content where eligible", "Series setup"],
      },
      {
        name: "Reach",
        items: ["Wider distribution planning", "Direct-sale strategy where appropriate"],
      },
    ],
    transition: "The book is live. Next: don't just publish — launch.",
  },
  {
    id: "launch",
    number: "05",
    label: "Launch",
    orbitLine: "Create momentum around release.",
    headline: "Don't just publish. Launch.",
    body: "A dated plan working backward from release — preorders, a launch team, reviewer outreach and promotion stacked so week one compounds instead of fading quietly.",
    outcome: "A dated launch plan built to create real momentum at release.",
    serviceGroups: [
      {
        name: "Plan",
        items: [
          "Launch timeline & preorder strategy",
          "Waitlist & reader magnet",
          "Launch landing page",
        ],
      },
      {
        name: "Outreach",
        items: [
          "ARC / reviewer outreach",
          "BookTok & Bookstagram support",
          "Podcast & blog outreach",
        ],
      },
      {
        name: "Creative",
        items: ["Book trailer", "Launch social content", "Email launch sequence"],
      },
    ],
    transition: "Launch week is running. Next: turn attention into readers.",
  },
  {
    id: "sell",
    number: "06",
    label: "Sell",
    orbitLine: "Turn attention into readers and buyers.",
    headline: "Turn attention into readers and readers into buyers.",
    body: "A repeatable acquisition system — website, search visibility, content and paid channels working together — rather than a launch spike that fades.",
    outcome: "A repeatable reader-acquisition system, not a one-week spike.",
    serviceGroups: [
      {
        name: "Website & funnel",
        items: ["Author / book website", "Free-chapter funnel", "Direct-sale & retailer pages"],
      },
      {
        name: "Discovery",
        items: ["Author & book SEO", "Amazon SEO & keyword research"],
      },
      {
        name: "Content & ads",
        items: ["BookTok / Bookstagram / Reels", "Meta, Google & Amazon Ads", "Retargeting"],
      },
    ],
    transition: "Readers are arriving. Next: don't lose them after one purchase.",
  },
  {
    id: "retain",
    number: "07",
    label: "Retain",
    orbitLine: "Build a reader audience you can reach again.",
    headline: "Don't lose the reader after one purchase.",
    body: "A reader list you own — welcome sequence, review requests, next-book notifications — so the next release doesn't start from zero.",
    outcome: "A reader audience and email list you own and can reach again.",
    serviceGroups: [
      {
        name: "Capture & nurture",
        items: ["Reader email list & CRM", "Welcome sequence", "Segmentation"],
      },
      {
        name: "Keep them close",
        items: ["Review requests", "Next-book & launch waitlists", "Reader community"],
      },
    ],
    transition: "You have an audience. Next: grow beyond one book.",
  },
  {
    id: "scale",
    number: "08",
    label: "Scale",
    orbitLine: "Grow the catalogue, audience and author business.",
    headline: "Turn one book into a bigger author business.",
    body: "Once the loop works for one book, the same system compounds across a catalogue — more titles, formats and channels feeding the same owned audience.",
    outcome: "A catalogue and author business built on what already works.",
    serviceGroups: [
      {
        name: "Catalogue",
        items: [
          "Multi-book & series strategy",
          "Audiobook strategy",
          "Translation / localisation strategy",
        ],
      },
      {
        name: "Business",
        items: ["Speaking funnels", "Courses / resources for nonfiction", "Direct sales & bundles"],
      },
      {
        name: "Optimisation",
        items: [
          "Advanced paid acquisition",
          "Analytics & conversion optimisation",
          "Reader lifetime value",
        ],
      },
    ],
    transition: "The system repeats — the next book starts with an audience already waiting.",
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
