/**
 * The HQ360 Author & Publisher catalogue, structured as a seven-stage sales
 * growth flow — not a flat service list.
 *
 * Core positioning: we do not just promote books. We build the growth system
 * that turns discovery into readers, readers into buyers, and buyers into an
 * audience the author can sell to again.
 *
 * Legacy author services (Amazon optimisation, Goodreads, bestseller launches,
 * media kits, PR, review campaigns, email funnels, personal-brand strategy,
 * speaking) are folded into the stage where they belong rather than deleted.
 */

export const AUTHOR_POSITIONING =
  "We do not just promote books. We build the growth system that turns discovery into readers, readers into buyers, and buyers into an audience you can sell to again.";

export type AuthorFlowGroup = { title: string; items: string[] };

export type AuthorFlowChain = { name: string; steps: string[] };

export type AuthorFlowStage = {
  number: string;
  /** POSITION, CONVERT, GET DISCOVERED, … */
  stageLabel: string;
  slug: string;
  category: string;
  /** lucide icon key, mapped in the component */
  icon: "palette" | "route" | "search" | "clapperboard" | "users" | "megaphone" | "smartphone";
  headline: string;
  /** What HQ360 does at this stage. */
  description: string;
  /** One-line business outcome. */
  salesOutcome: string;
  /** Why this matters specifically for authors and publishers. */
  whyItMatters: string;
  /** How this stage contributes to book sales. */
  salesContribution: string;
  /** The reader-value chain this stage produces (rendered A → B → C). */
  progression: string[];
  /** 4–6 headline services shown as always-visible cards. */
  featured: string[];
  /** The full catalogue for this stage, grouped. Behind a disclosure. */
  groups: AuthorFlowGroup[];
  /** Optional explicit micro-flow for stages that have one. */
  salesFlow?: string[];
  /** Stage 6 only: the two acquisition models. */
  models?: AuthorFlowChain[];
  /** Stage 6 only: example email sequences. */
  sequences?: AuthorFlowChain[];
  /** Optional caveat shown under the stage. */
  note?: string;
  /** Category name of the previous / next stage (for the connectors). */
  flowFrom: string | null;
  flowTo: string | null;
  /** One sentence linking this stage to the next. */
  flowToNote: string;
  cta: { label: string; to: string };
};

const INQUIRY = "#author-inquiry";

export const AUTHOR_FLOW: AuthorFlowStage[] = [
  /* ---------------------------------------------------------- 01 POSITION */
  {
    number: "01",
    stageLabel: "POSITION",
    slug: "brand-creative",
    category: "Brand & Creative",
    icon: "palette",
    headline: "Build a book and author brand readers trust before you ask them to buy.",
    description:
      "HQ360 gives the author and every book one consistent visual identity, plus the press-ready assets a launch runs on. Every place a reader lands — retail page, profile, ad, feed — looks like the same credible operation.",
    salesOutcome:
      "Readers recognise the author on sight and reach the buy button already half-convinced.",
    whyItMatters:
      "Readers decide in seconds whether a book looks professionally published. A mismatched cover, headshot and social feed quietly cost sales the rest of the marketing then has to pay to win back.",
    salesContribution:
      "Stronger visual credibility lifts click-through on ads and social, and raises the share of book-page visitors who actually buy.",
    progression: ["Credibility", "Recognition", "Trust", "Click-through", "Purchase confidence"],
    featured: [
      "Author & publisher brand identity",
      "Book campaign visual identity",
      "Author & book media kit",
      "3D book mockups & cover adaptations",
      "Social visual system & templates",
      "Launch campaign creative direction",
    ],
    groups: [
      {
        title: "Identity",
        items: [
          "Author brand identity",
          "Publisher brand identity",
          "Book campaign visual identity",
          "Author logo / monogram",
          "Brand colours and typography",
          "Author social media visual system",
        ],
      },
      {
        title: "Promotional assets",
        items: [
          "Book promotional graphics",
          "Book launch & announcement graphics",
          "Amazon promotional graphics",
          "Goodreads campaign graphics",
          "Book mockups & 3D book mockups",
          "Book cover promotional adaptations",
          "Quote, review & reader testimonial graphics",
          "Bestseller / milestone graphics",
          "Social media templates",
        ],
      },
      {
        title: "Author positioning",
        items: [
          "Author media kit & book media kit",
          "Press kit",
          "Speaker kit",
          "Author biography optimisation",
          "Professional author profile positioning",
        ],
      },
      {
        title: "Creative direction",
        items: ["Book trailer visual direction", "Launch campaign creative direction"],
      },
    ],
    flowFrom: null,
    flowTo: "Website & Funnel",
    flowToNote:
      "A credible brand is wasted if it points nowhere. Next, every asset drives to a page built to convert.",
    cta: { label: "Plan my book campaign", to: INQUIRY },
  },

  /* ----------------------------------------------------------- 02 CONVERT */
  {
    number: "02",
    stageLabel: "CONVERT",
    slug: "website-funnel",
    category: "Website & Funnel",
    icon: "route",
    headline: "Turn interest in the author into purchases, subscribers, and repeat readers.",
    description:
      "HQ360 builds the author or publisher site as a reader-conversion system: a home for the brand, a conversion-focused page for every book, and funnels that capture an email before the sale so you can sell again later.",
    salesOutcome:
      "Traffic becomes leads, leads become readers, and readers become an email list you own.",
    whyItMatters:
      "A retailer page gives you a sale and nothing else — no email, no way to reach that reader for book two. Your own site and funnels keep the relationship.",
    salesContribution:
      "Dedicated book landing pages convert paid and social traffic better than a cold retailer link, and email capture turns one-time buyers into a list you can launch to.",
    progression: ["Traffic", "Leads", "Readers", "Buyers", "Repeat readers"],
    featured: [
      "Author & publisher website",
      "Conversion-focused book pages",
      "Book launch & pre-order funnels",
      "Free-chapter / reader-magnet funnels",
      "Newsletter & email capture",
      "CRM, automation & retargeting setup",
    ],
    groups: [
      {
        title: "Website",
        items: [
          "Author website design & publisher website development",
          "Homepage, about, books / series",
          "Individual book pages",
          "Reviews, media / press, events, speaking",
          "Blog & reader newsletter",
          "Free chapter / reader magnet",
        ],
      },
      {
        title: "Book page anatomy",
        items: [
          "Cover + strong hook",
          "Description + who it is for",
          "Reviews & social proof",
          "Book trailer embed",
          "Author message",
          "Retail buttons: Amazon, Barnes & Noble, Apple Books, Kobo and more",
        ],
      },
      {
        title: "Funnels",
        items: [
          "Book landing pages",
          "Book launch funnels",
          "Reader acquisition funnels",
          "Lead magnet & free-chapter funnels",
          "Newsletter signup systems",
          "Book pre-order funnels",
          "Book series funnels",
          "Event registration & speaking inquiry pages",
        ],
      },
      {
        title: "Integration & automation",
        items: [
          "Retailer integration & Amazon links",
          "Goodreads integration",
          "Email capture & CRM integration",
          "Email automation & reader segmentation",
          "Follow-up automation",
          "Retargeting setup",
          "Conversion tracking",
        ],
      },
    ],
    salesFlow: [
      "Ad / social post",
      "Book landing page",
      "Free chapter / bonus",
      "Email capture",
      "Reader nurture",
      "Book purchase",
      "Review request",
      "Next book / series",
    ],
    flowFrom: "Brand & Creative",
    flowTo: "SEO",
    flowToNote:
      "Now that every visitor converts, the job is to send more of the right visitors. Search is where readers look first.",
    cta: { label: "Build my author growth system", to: INQUIRY },
  },

  /* ----------------------------------------------------- 03 GET DISCOVERED */
  {
    number: "03",
    stageLabel: "GET DISCOVERED",
    slug: "seo",
    category: "SEO",
    icon: "search",
    headline: "Be the book readers find when they are already searching for one like it.",
    description:
      "HQ360 targets the searches a reader actually makes — genre, theme, the problem the book solves, comparable titles and series — across the author's site and inside Amazon, so the book surfaces at the moment of intent.",
    salesOutcome:
      "Readers searching for a book like yours land on your book page instead of a competitor's.",
    whyItMatters:
      "Ranking the author's own name only reaches people who already know them. The buyers you do not have yet are searching by genre, topic and 'books like ___'.",
    salesContribution:
      "Organic and Amazon discovery is compounding, low-cost traffic that keeps sending buyers long after a paid campaign ends.",
    progression: ["Search", "Discovery", "Book page", "Interest", "Purchase"],
    featured: [
      "Reader search-intent & keyword research",
      "Author & book landing-page SEO",
      "Technical & on-page SEO + schema",
      "Amazon keyword & category strategy",
      "Amazon Author Central & A+ Content strategy",
      "Blog strategy & content clusters",
    ],
    groups: [
      {
        title: "Website & content SEO",
        items: [
          "Keyword & reader search-intent research",
          "Author website & book landing-page SEO",
          "Technical SEO, on-page SEO & metadata",
          "Schema markup & internal linking",
          "Author biography SEO",
          "Google indexing, Search Console & analytics",
          "Backlink strategy",
          "Blog strategy & content clusters",
          "Publisher SEO & book launch SEO",
          "Local SEO for speaking authors where relevant",
        ],
      },
      {
        title: "Amazon book SEO",
        items: [
          "Amazon keyword research",
          "Book title / subtitle analysis",
          "Book description optimisation",
          "Category research & backend keyword strategy",
          "Amazon Author Central optimisation",
          "A+ Content strategy & author page optimisation",
          "Series positioning",
          "Competitor book research",
        ],
      },
    ],
    flowFrom: "Website & Funnel",
    flowTo: "Video & Book Content Production",
    flowToNote:
      "Search brings readers who are ready. To reach the ones who are not looking yet, you need content that stops them.",
    cta: { label: "Get an author growth audit", to: INQUIRY },
  },

  /* --------------------------------------------------- 04 CREATE ATTENTION */
  {
    number: "04",
    stageLabel: "CREATE ATTENTION",
    slug: "video-content",
    category: "Video & Book Content Production",
    icon: "clapperboard",
    headline: "Turn the book into content people watch, understand, and want to read.",
    description:
      "HQ360 produces book trailers, short-form video and repurposed long-form content that carries the hook of the book to readers scrolling social feeds. AI-assisted where it speeds production, never at the cost of the story.",
    salesOutcome:
      "A steady stream of scroll-stopping content that sends warm viewers to the book page.",
    whyItMatters:
      "Most readers now meet a book through a fifteen-second video, not a review. Without video the author is invisible on the platforms where discovery happens.",
    salesContribution:
      "Video creates the curiosity a book description cannot, and gives paid campaigns creative that actually converts.",
    progression: ["Attention", "Curiosity", "Book interest", "Retail page", "Purchase"],
    featured: [
      "Book trailers by genre",
      "Short-form video for TikTok, Reels & Shorts",
      "AI-assisted cinematic book visualisation",
      "Animated book covers & motion graphics",
      "Long-form repurposing engine",
      "Ad creative production",
    ],
    groups: [
      {
        title: "Book trailers",
        items: ["Fiction — romance, thriller, fantasy", "Memoir", "Self-help", "Business books"],
      },
      {
        title: "Short-form content",
        items: [
          "TikTok, Instagram Reels, YouTube Shorts, Facebook Reels",
          "Book quotes & plot hooks",
          "Character introductions & story teasers",
          "Author commentary & storytelling",
          "Reader reactions & reviews",
          "Book lessons & recommendations",
          "Why I wrote this book / behind the scenes",
        ],
      },
      {
        title: "AI-assisted creative",
        items: [
          "Cinematic book visualisation",
          "Character & environment concepts",
          "Book scene visualisation",
          "Animated book covers",
          "Motion graphics",
          "Voiceover videos & promotional clips",
        ],
      },
      {
        title: "Long-form editing & repurposing",
        items: [
          "Podcasts, author interviews, livestreams",
          "Book launches, webinars, speaking engagements",
          "One long video → short clips → quote posts → story content → email content → ad creative",
        ],
      },
    ],
    flowFrom: "SEO",
    flowTo: "Social Media Marketing",
    flowToNote:
      "Content earns a view. A social presence turns those views into followers who come back.",
    cta: { label: "Plan my book campaign", to: INQUIRY },
  },

  /* -------------------------------------------------- 05 BUILD AN AUDIENCE */
  {
    number: "05",
    stageLabel: "BUILD AN AUDIENCE",
    slug: "social-media",
    category: "Social Media Marketing",
    icon: "users",
    headline: "Build an audience around the author, not a feed that only says 'buy my book'.",
    description:
      "HQ360 runs the author's social presence as a reader community — content pillars, a sustainable calendar, engagement and outreach into BookTok and Bookstagram — with separate playbooks for fiction and non-fiction.",
    salesOutcome:
      "A growing, engaged following that trusts the author and turns out for every launch.",
    whyItMatters:
      "An audience you have built is the cheapest launch channel you will ever have. Rented reach from ads disappears the moment you stop paying.",
    salesContribution:
      "An engaged following lowers the cost of every future launch and feeds the email list that drives repeat sales.",
    progression: [
      "Content",
      "Follower",
      "Trust",
      "Book discovery",
      "Email subscriber",
      "Buyer",
      "Fan",
    ],
    featured: [
      "Social strategy & content calendar",
      "Content & caption production",
      "Fiction & non-fiction content pillars",
      "BookTok & Bookstagram outreach",
      "Book launch & giveaway campaigns",
      "Community engagement & profile optimisation",
    ],
    groups: [
      {
        title: "Fiction content pillars",
        items: [
          "Story world & characters",
          "Quotes & tropes",
          "Reader reactions",
          "Behind the scenes & writing process",
          "Book recommendations",
          "Author personality & book teasers",
        ],
      },
      {
        title: "Non-fiction content pillars",
        items: [
          "Education & insights",
          "Frameworks & book extracts",
          "Personal stories & authority content",
          "Industry commentary & case studies",
          "Reader transformation",
          "Speaking clips",
        ],
      },
      {
        title: "Production",
        items: [
          "Social strategy & content calendar",
          "Content creation & caption writing",
          "Graphic & video content",
          "Hashtag / topic research",
        ],
      },
      {
        title: "Channels",
        items: [
          "TikTok, Instagram, Facebook",
          "YouTube Shorts",
          "LinkedIn for business authors",
          "Pinterest where relevant",
          "Profile optimisation",
        ],
      },
      {
        title: "Campaigns & outreach",
        items: [
          "Book launch campaigns",
          "Giveaway strategy",
          "Reader engagement campaigns",
          "Influencer, BookTok & Bookstagram outreach",
          "Community engagement strategy",
        ],
      },
    ],
    flowFrom: "Video & Book Content Production",
    flowTo: "Digital Marketing",
    flowToNote:
      "Organic reach is finite. Paid acquisition puts the book in front of buyers your audience does not include yet — measurably.",
    cta: { label: "Build my author growth system", to: INQUIRY },
  },

  /* -------------------------------------------------------- 06 DRIVE SALES */
  {
    number: "06",
    stageLabel: "DRIVE SALES",
    slug: "digital-marketing",
    category: "Digital Marketing",
    icon: "megaphone",
    headline: "Put the book in front of more likely buyers, with a system you can measure.",
    description:
      "HQ360 runs paid acquisition and email as one engine — ads to book pages and lead magnets, sequences that nurture and launch, and the research, retargeting and reporting that make spend accountable.",
    salesOutcome:
      "A repeatable acquisition system where you can see what a reader and a sale actually cost.",
    whyItMatters:
      "Hope-and-post marketing cannot be scaled or improved. A measured system can have budget added to what works and cut from what does not.",
    salesContribution:
      "Paid traffic converts against a known cost per sale; email turns the readers it captures into repeat buyers for every future book.",
    progression: ["Qualified traffic", "Conversion", "Retargeting", "Purchase", "Repeat purchase"],
    featured: [
      "Meta, Google, YouTube, Amazon & TikTok ads",
      "Direct-sale & reader-acquisition ad models",
      "New-reader, launch & existing-reader email sequences",
      "Review & launch campaigns",
      "Book blogger, podcast & Goodreads outreach",
      "Analytics & reporting",
    ],
    models: [
      {
        name: "Model A — Direct book sale",
        steps: ["Advertisement", "Book page", "Amazon / retailer", "Purchase"],
      },
      {
        name: "Model B — Reader acquisition",
        steps: [
          "Advertisement",
          "Free chapter / lead magnet",
          "Email capture",
          "Reader nurture",
          "Book purchase",
          "Repeat promotion",
        ],
      },
    ],
    sequences: [
      {
        name: "New reader sequence",
        steps: [
          "Deliver free chapter",
          "Introduce author / story",
          "Why the book was written",
          "Reviews & social proof",
          "Purchase invitation",
        ],
      },
      {
        name: "Book launch sequence",
        steps: [
          "Announcement",
          "Cover reveal",
          "Pre-order",
          "Behind the scenes",
          "Launch day",
          "Reviews",
          "Final campaign",
        ],
      },
      {
        name: "Existing reader sequence",
        steps: ["Book 1 reader", "Book 2 announcement", "Pre-order", "Launch", "Review request"],
      },
    ],
    groups: [
      {
        title: "Paid advertising",
        items: [
          "Meta / Facebook / Instagram ads",
          "Google ads",
          "YouTube ads",
          "Amazon ads",
          "TikTok ads where appropriate",
        ],
      },
      {
        title: "Email & messaging",
        items: [
          "New-reader, launch and existing-reader sequences",
          "Newsletter management",
          "SMS campaigns where appropriate",
        ],
      },
      {
        title: "Research & positioning",
        items: [
          "Reader audience research",
          "Competitor research",
          "Market positioning",
          "Audience segmentation",
        ],
      },
      {
        title: "Campaigns & outreach",
        items: [
          "Retargeting",
          "Book blogger & podcast outreach",
          "Goodreads strategy",
          "Reader community campaigns",
          "Launch campaigns",
          "Review acquisition campaigns",
          "Affiliate / partner strategy",
          "Influencer outreach",
        ],
      },
      {
        title: "Measurement",
        items: ["Conversion optimisation", "Analytics and reporting"],
      },
    ],
    note: "No guaranteed sales, rankings or reviews. We report what each channel actually returns and move budget accordingly.",
    flowFrom: "Social Media Marketing",
    flowTo: "Book Mobile App Development",
    flowToNote:
      "Once sales are flowing, the last step is ownership — a place readers keep coming back to that no platform can take away.",
    cta: { label: "Plan my book campaign", to: INQUIRY },
  },

  /* -------------------------------------------------- 07 OWN THE AUDIENCE */
  {
    number: "07",
    stageLabel: "OWN THE AUDIENCE",
    slug: "book-app",
    category: "Book Mobile App Development",
    icon: "smartphone",
    headline: "Turn an author's audience into an owned reader ecosystem.",
    description:
      "HQ360 designs and builds a branded reader app — library, audio, community, exclusive content, events and push notifications — as a premium step for authors and publishers with an established audience or a series.",
    salesOutcome:
      "A direct channel to your most engaged readers that you control, plus revenue beyond the book.",
    whyItMatters:
      "Social platforms and retailers own the relationship with your readers today. An app makes that relationship yours, with a notification you can send for every launch.",
    salesContribution:
      "Push notifications drive launch-day and pre-order spikes at near-zero cost, and the app opens course, membership and event revenue on top of book sales.",
    progression: [
      "Reader",
      "Book",
      "App",
      "Community",
      "Additional books",
      "Course / event / membership",
      "Long-term customer",
    ],
    featured: [
      "Branded book library & previews",
      "Integrated audiobook playback",
      "Reader community & book clubs",
      "Exclusive & bonus content",
      "Push notifications for launches & events",
      "Courses & premium content for non-fiction",
    ],
    groups: [
      {
        title: "Reader library & audio",
        items: ["Books, chapters, previews", "Bonus content", "Integrated audiobook playback"],
      },
      {
        title: "Community",
        items: ["Discussion, groups, comments", "Book clubs"],
      },
      {
        title: "Exclusive content",
        items: [
          "Bonus chapters & deleted scenes",
          "Character profiles",
          "Downloadable resources",
          "Behind-the-scenes content",
        ],
      },
      {
        title: "Push notifications",
        items: [
          "New book launch",
          "Pre-order opening",
          "New chapter / content",
          "Live events",
          "Special promotions",
        ],
      },
      {
        title: "Events & sales",
        items: [
          "Event registration, reminders, tickets, livestream access",
          "Book sales via Amazon, Apple Books, Kobo",
          "Publisher shop & direct commerce where appropriate",
        ],
      },
      {
        title: "Courses / premium content",
        items: [
          "Book → app → course → community → coaching",
          "For business, education and self-help authors",
        ],
      },
    ],
    note: "Not every author needs this. It is for established authors, publishers, large communities, series, and educational, business, coaching or children's authors.",
    flowFrom: "Digital Marketing",
    flowTo: null,
    flowToNote:
      "Owned readers re-enter the system at every stage — they are the audience your next book launches to.",
    cta: { label: "Talk to HQ360 about my book", to: INQUIRY },
  },
];

/* ------------------------------------------------------------- Flywheel */

export type FlywheelPhase = {
  key: string;
  title: string;
  channels: string;
  body: string;
};

export const AUTHOR_FLYWHEEL: FlywheelPhase[] = [
  {
    key: "discover",
    title: "Discover",
    channels: "SEO · Social · Ads · PR",
    body: "Readers who do not know the author yet find the book at the moment of intent.",
  },
  {
    key: "engage",
    title: "Engage",
    channels: "Video · Content · Book hooks",
    body: "The book's hook lands as something worth watching and sharing.",
  },
  {
    key: "capture",
    title: "Capture",
    channels: "Website · Landing page · Free chapter",
    body: "Interest becomes an email address you own.",
  },
  {
    key: "nurture",
    title: "Nurture",
    channels: "Email · Retargeting · Reader community",
    body: "Warm readers are moved toward the buy decision.",
  },
  {
    key: "sell",
    title: "Sell",
    channels: "Amazon · Retailers · Direct purchase",
    body: "The reader buys, on the retailer that suits them.",
  },
  {
    key: "retain",
    title: "Retain",
    channels: "Newsletter · App · Community",
    body: "The buyer stays connected instead of disappearing.",
  },
  {
    key: "sell-again",
    title: "Sell again",
    channels: "Next book · Series · Audiobook · Course · Event",
    body: "The audience is sold to again — and re-enters the cycle.",
  },
];

export const AUTHOR_FLYWHEEL_NOTE =
  "Each turn of the wheel lowers the cost of the next. Discovery you paid for once keeps producing readers; readers you captured once keep buying. That compounding loop is the 360.";
