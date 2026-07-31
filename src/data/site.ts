/**
 * PLACEHOLDER CONTENT.
 * Every number, quote, name and case study below is illustrative sample copy
 * for layout purposes. Replace with verified client data before launch.
 */

export const BRAND = {
  name: "House of Synergy",
  tagline: "Where Your Story Meets Its Spark.",
  eyebrow: "Book marketing, brand building, and press for authors and creators",
  email: "hello@houseofsynergy.co",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Results", to: "/results" },
  { label: "Reviews", to: "/reviews" },
  { label: "Book Launch", to: "/book-launch" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "FAQs", to: "/faqs" },
] as const;

export const STATS = [
  { value: "480+", label: "Books and brands elevated" },
  { value: "12,400+", label: "Verified five star reviews generated" },
  { value: "310", label: "Clients served since 2019" },
  { value: "21", label: "Average days to visible results" },
];

export const AWARDS = [
  {
    title: "Verified Book Marketing Partner",
    year: "2024",
    body: "Recognized for consistent listing growth and ethical review generation across Amazon, Goodreads and Apple Books.",
  },
  {
    title: "Bestseller Launch Excellence",
    year: "2023",
    body: "Awarded for coordinated launch campaigns that drove multiple titles to category number one within the first week.",
  },
  {
    title: "Press and PR Placement Leader",
    year: "2025",
    body: "Honored for high quality podcast, blog and trade press bookings that matched authors with the right outlets.",
  },
];

export const PLATFORMS = [
  "Amazon",
  "Goodreads",
  "Apple Books",
  "Barnes & Noble",
  "Kobo",
  "Audible",
  "Forbes",
  "Publishers Weekly",
  "Podcast Networks",
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  before: string;
  after: string;
  detail: string;
  deliverables: string[];
  audience: string;
};

export const SERVICES: Service[] = [
  {
    slug: "listing-optimization",
    number: "01",
    title: "Amazon and Book Listing Optimization",
    short:
      "Category, keyword, cover positioning and description work that makes your listing findable and worth clicking.",
    before: "Buried on page 4 of category",
    after: "Top 10 in two categories",
    detail:
      "We rebuild your retail listing from the metadata up. That means category and keyword research grounded in live marketplace data, a description written to sell rather than summarize, A+ content direction, and pricing guidance across formats.",
    deliverables: [
      "Keyword and category research report",
      "Rewritten sales description with formatting",
      "A+ content and cover feedback",
      "Format and pricing recommendation",
      "Thirty day ranking tracker",
    ],
    audience: "Authors and publishers",
  },
  {
    slug: "goodreads-reader-lists",
    number: "02",
    title: "Goodreads and Reader List Placement",
    short:
      "Getting your title in front of active readers through curated lists, groups and reader communities.",
    before: "62 shelved readers",
    after: "3,900 shelved readers",
    detail:
      "Goodreads still drives discovery for serious readers. We build out your author profile, place your title on relevant lists, run giveaway strategy, and connect your book with reader groups that match your genre.",
    deliverables: [
      "Author profile buildout",
      "Listopia and shelf placement plan",
      "Giveaway strategy and setup",
      "Reader group outreach",
      "Monthly shelf growth report",
    ],
    audience: "Fiction and narrative nonfiction authors",
  },
  {
    slug: "bestseller-launch",
    number: "03",
    title: "Bestseller Launch Campaigns",
    short:
      "A dated, coordinated launch plan across retail, email, press and community so the first week actually compounds.",
    before: "Quiet launch week",
    after: "Category number one for nine days",
    detail:
      "We plan backward from your release date. Preorder sequencing, launch team recruitment, review timing, promotion stacking and daily monitoring during launch week so we can move budget where it is working.",
    deliverables: [
      "Ninety day launch calendar",
      "Launch team recruitment and briefing",
      "Promotion stack booking",
      "Daily launch week monitoring",
      "Post launch performance readout",
    ],
    audience: "Authors with a firm publication date",
  },
  {
    slug: "author-branding",
    number: "04",
    title: "Author Branding and Media Kit",
    short:
      "A coherent visual and verbal identity, plus the press ready kit editors and producers ask for.",
    before: "No usable press assets",
    after: "Full kit booked into 14 outlets",
    detail:
      "Positioning statement, bio suite in three lengths, headshot direction, one sheet, topic list, and a downloadable press kit that makes a producer's job easy.",
    deliverables: [
      "Positioning and messaging document",
      "Short, medium and long bios",
      "Designed one sheet and media kit",
      "Interview topic and question bank",
      "Headshot and asset direction",
    ],
    audience: "Authors and founders",
  },
  {
    slug: "press-and-pr",
    number: "05",
    title: "Press and PR Placement",
    short:
      "Podcasts, blogs and trade press pitched by hand to outlets that already cover your subject.",
    before: "Zero press mentions",
    after: "22 podcasts and 6 features",
    detail:
      "No spray and pray lists. We build a target outlet map, write custom pitches, manage the follow up, and prepare you for every booking with a briefing document.",
    deliverables: [
      "Target outlet map",
      "Custom pitch writing",
      "Outreach and follow up management",
      "Interview prep briefs",
      "Coverage report with links",
    ],
    audience: "Authors, founders and experts",
  },
  {
    slug: "review-campaigns",
    number: "06",
    title: "Verified Review and Social Proof Campaigns",
    short:
      "Ethical review generation from readers who actually received and read the book.",
    before: "18 reviews at 4.1 stars",
    after: "640 reviews at 4.7 stars",
    detail:
      "We recruit genuine readers, distribute review copies, and run compliant follow up. Nothing purchased, nothing incentivized in ways that break platform policy. Slower than the alternatives and far safer.",
    deliverables: [
      "Reader recruitment and vetting",
      "Review copy distribution",
      "Compliant follow up sequence",
      "Editorial review outreach",
      "Weekly review velocity report",
    ],
    audience: "Authors at any stage",
  },
  {
    slug: "email-funnels",
    number: "07",
    title: "Email Marketing and Launch Funnels",
    short:
      "List growth, welcome sequences and launch flows that turn readers into repeat buyers.",
    before: "1,100 subscribers, 12 percent open",
    after: "9,700 subscribers, 46 percent open",
    detail:
      "We build the reader magnet, the capture page, the welcome sequence and the launch flow, then maintain a sending rhythm that keeps your list warm between releases.",
    deliverables: [
      "Reader magnet and landing page",
      "Welcome and nurture sequences",
      "Launch and preorder flows",
      "Segmentation and deliverability setup",
      "Monthly performance review",
    ],
    audience: "Authors and personal brands",
  },
  {
    slug: "social-and-direct",
    number: "08",
    title: "Social and Direct to Audience Promotion",
    short:
      "Short form content, community posting and permission based direct messaging that reaches readers where they are.",
    before: "2,400 followers",
    after: "38,000 followers",
    detail:
      "Content pillars, a posting calendar you can sustain, and hands on production for the formats that convert in your niche. Direct outreach is always permission based.",
    deliverables: [
      "Content pillar strategy",
      "Monthly content calendar",
      "Short form production support",
      "Community and comment management",
      "Direct outreach templates",
    ],
    audience: "Authors and creators",
  },
  {
    slug: "personal-brand-strategy",
    number: "09",
    title: "Personal Brand Strategy",
    short:
      "Positioning, website and professional presence for founders and experts who are building a name, not only a book.",
    before: "Scattered profiles, unclear offer",
    after: "One clear position across channels",
    detail:
      "For clients whose product is their credibility. We define the position, rebuild the website narrative, and align every professional profile so people meet the same person everywhere they look.",
    deliverables: [
      "Positioning and audience research",
      "Website narrative and page copy",
      "Profile rewrite across channels",
      "Content thesis and pillars",
      "Quarterly strategy review",
    ],
    audience: "Founders, executives and experts",
  },
  {
    slug: "speaking-and-thought-leadership",
    number: "10",
    title: "Speaking and Thought Leadership Placement",
    short:
      "Speaker bureau introductions, panel submissions and guest expert bookings that put you on stage.",
    before: "No speaking inquiries",
    after: "Nine paid engagements booked",
    detail:
      "We package your talks, submit to conferences with real audiences, introduce you to bureaus, and pitch you as a guest expert to newsrooms and event producers.",
    deliverables: [
      "Signature talk development",
      "Speaker one sheet and reel direction",
      "Conference and panel submissions",
      "Bureau introductions",
      "Booking pipeline tracker",
    ],
    audience: "Experts and thought leaders",
  },
];

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  client: string;
  summary: string;
  beforeLabel: string;
  before: string;
  afterLabel: string;
  after: string;
  metrics: { label: string; value: string }[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "the-quiet-hour",
    category: "Thriller",
    title: "From a quiet release to a category leader",
    client: "The Quiet Hour, debut thriller",
    summary:
      "A debut with no list and no press. We rebuilt the listing, ran a reader review campaign and stacked promotion around a fixed launch date.",
    beforeLabel: "Category rank before",
    before: "#41,220",
    afterLabel: "Category rank after",
    after: "#118",
    metrics: [
      { label: "Reviews", value: "22 to 610" },
      { label: "Launch week units", value: "4,180" },
      { label: "Time to result", value: "26 days" },
    ],
  },
  {
    slug: "steady-work",
    category: "Self Help",
    title: "A backlist title returned to the front",
    client: "Steady Work, self help",
    summary:
      "Three years after release, the title had gone quiet. New categories, a rewritten description and a podcast run brought it back.",
    beforeLabel: "Monthly units before",
    before: "90",
    afterLabel: "Monthly units after",
    after: "2,640",
    metrics: [
      { label: "Podcasts booked", value: "18" },
      { label: "Email list", value: "1.1k to 9.7k" },
      { label: "Time to result", value: "34 days" },
    ],
  },
  {
    slug: "margin-of-trust",
    category: "Business",
    title: "A business book that fed a speaking calendar",
    client: "Margin of Trust, business",
    summary:
      "The goal was never royalties. We used the book as a credibility asset and built a speaking pipeline around it.",
    beforeLabel: "Paid engagements before",
    before: "0",
    afterLabel: "Paid engagements after",
    after: "9",
    metrics: [
      { label: "Trade press features", value: "6" },
      { label: "Bulk orders", value: "3,400 copies" },
      { label: "Time to result", value: "61 days" },
    ],
  },
  {
    slug: "salt-and-ash",
    category: "Memoir",
    title: "A memoir that found its reader community",
    client: "Salt and Ash, memoir",
    summary:
      "Reader communities carried this one. Goodreads placement and a careful review campaign did the work that ads could not.",
    beforeLabel: "Shelved readers before",
    before: "62",
    afterLabel: "Shelved readers after",
    after: "3,900",
    metrics: [
      { label: "Average rating", value: "4.1 to 4.6" },
      { label: "Book club pickups", value: "27" },
      { label: "Time to result", value: "45 days" },
    ],
  },
  {
    slug: "founder-in-public",
    category: "Personal Brand",
    title: "A founder who became the category expert",
    client: "Consumer software founder",
    summary:
      "No book. Just a founder with real expertise and no coherent presence. We set the position and built the surface area.",
    beforeLabel: "Inbound inquiries before",
    before: "2 per month",
    afterLabel: "Inbound inquiries after",
    after: "38 per month",
    metrics: [
      { label: "Followers", value: "2.4k to 38k" },
      { label: "Press features", value: "11" },
      { label: "Time to result", value: "72 days" },
    ],
  },
  {
    slug: "the-long-field",
    category: "Fiction",
    title: "A series relaunch across three titles",
    client: "The Long Field trilogy",
    summary:
      "We priced book one as an entry point, rebuilt the series page, and ran sequential promotion across all three titles.",
    beforeLabel: "Read through before",
    before: "18 percent",
    afterLabel: "Read through after",
    after: "61 percent",
    metrics: [
      { label: "Series page units", value: "up 340 percent" },
      { label: "Reviews added", value: "820" },
      { label: "Time to result", value: "38 days" },
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Audit",
    body: "We review your listing, presence, reviews, and past performance before we quote anything. If we cannot help, we say so.",
  },
  {
    step: "02",
    title: "Research",
    body: "Category data, comparable titles, keyword volume, and audience mapping. Every recommendation cites a source.",
  },
  {
    step: "03",
    title: "Strategy",
    body: "A written plan with owners, dates and target metrics. You approve it before a single campaign goes live.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Coordinated execution across retail, press, email and community, sequenced so each channel feeds the next.",
  },
  {
    step: "05",
    title: "Tracking",
    body: "A live dashboard plus a weekly written update. Ranking, reviews, traffic, coverage and spend, all in one place.",
  },
  {
    step: "06",
    title: "Optimization",
    body: "Monthly review where we cut what underperforms and move budget toward what is working. Nothing runs on autopilot.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "We turn away work we cannot help",
    body: "If your manuscript, cover or timing is not ready, we will tell you before you spend money. Roughly one in four inquiries becomes a client.",
  },
  {
    title: "Research before promises",
    body: "No quote goes out without a data backed audit behind it. You will see the reasoning, the comparables and the realistic ceiling.",
  },
  {
    title: "Full reporting, not vibes",
    body: "Weekly written updates and a live dashboard. Every claim we make about your campaign has a number and a source attached.",
  },
];

export const TEAM = [
  {
    name: "Blessing",
    quote: "A book is a promise. My job is to make sure the right people hear it and believe it.",
    initials: "B",
    photo: "blessing",
    socials: {
      facebook: "https://www.facebook.com/houseofsynergy",
      whatsapp: "https://wa.me/15551234567",
      linkedin: "https://www.linkedin.com/company/houseofsynergy",
      fiverr: "https://www.fiverr.com/houseofsynergy",
      email: "mailto:blessing.houseofsynergy@gmail.com",
    },
  },
  {
    name: "Zainab",
    quote: "Every listing is a shop window. I keep polishing it until the browsing stops and the buying starts.",
    initials: "Z",
    photo: "zainab",
    socials: {
      facebook: "https://www.facebook.com/houseofsynergy",
      whatsapp: "https://wa.me/15551234567",
      linkedin: "https://www.linkedin.com/company/houseofsynergy",
      fiverr: "https://www.fiverr.com/houseofsynergy",
      email: "mailto:zainab.houseofsynergy@gmail.com",
    },
  },
  {
    name: "Emmanuel",
    quote: "Press is not luck. It is one honest pitch, written by hand, sent to the one editor who cares.",
    initials: "E",
    photo: "emmanuel",
    socials: {
      facebook: "https://www.facebook.com/houseofsynergy",
      whatsapp: "https://wa.me/15551234567",
      linkedin: "https://www.linkedin.com/in/emmanuel-durosinmi-50b147325/",
      fiverr: "https://www.fiverr.com/houseofsynergy",
      email: "mailto:emmanuel.houseofsynergy@gmail.com",
    },
  },
  {
    name: "Richard",
    quote: "A name outlives a launch. I build the look and the language that carry it there.",
    initials: "R",
    photo: "richard",
    socials: {
      facebook: "https://www.facebook.com/houseofsynergy",
      whatsapp: "https://wa.me/15551234567",
      linkedin: "https://www.linkedin.com/company/houseofsynergy",
      fiverr: "https://www.fiverr.com/houseofsynergy",
      email: "mailto:richard.houseofsynergy@gmail.com",
    },
  },
];


export const TESTIMONIALS = [
  {
    quote:
      "They told me my cover was the problem before they took a cent. That honesty is why I stayed for three books.",
    name: "Elena Marsh",
    title: "Author, The Quiet Hour",
    initials: "EM",
  },
  {
    quote:
      "The weekly reports were the difference. I always knew what was working and what they had stopped.",
    name: "Tobias Grant",
    title: "Author, Margin of Trust",
    initials: "TG",
  },
  {
    quote:
      "I came in wanting a bestseller badge. They talked me into building an audience instead. Better call.",
    name: "Rina Adeyemi",
    title: "Founder and speaker",
    initials: "RA",
  },
  {
    quote:
      "Eighteen podcast bookings in two months, all relevant, all prepared for. My publicist could not match that.",
    name: "Howard Pike",
    title: "Author, Steady Work",
    initials: "HP",
  },
];

export const COMPARISON = {
  columns: ["House of Synergy", "Typical agency", "Doing it yourself"],
  rows: [
    {
      label: "Transparency on spend",
      values: ["Line item, every week", "Monthly summary", "Full, but unstructured"],
    },
    {
      label: "Written reporting",
      values: ["Weekly plus live dashboard", "Monthly slide deck", "None"],
    },
    {
      label: "Guarantees",
      values: ["Stated in writing, with limits", "Bestseller promises", "None"],
    },
    {
      label: "Personal brand support",
      values: ["Included in every engagement", "Rarely offered", "Self directed"],
    },
    {
      label: "Review practices",
      values: ["Verified readers only", "Varies widely", "Manual and slow"],
    },
    {
      label: "Contract length",
      values: ["Month to month", "Six or twelve months", "Not applicable"],
    },
    {
      label: "Who does the work",
      values: ["Named team members", "Rotating juniors", "You"],
    },
  ],
};

export const PRICING_FLAGSHIP = {
  name: "The Full Launch",
  price: "$6,400",
  cadence: "per campaign, month to month",
  summary:
    "Our flagship engagement for a book or a name that needs everything moving at once. Built for a fixed launch window.",
  features: [
    "Complete listing and metadata rebuild",
    "Bestseller launch calendar and launch team",
    "Verified review campaign",
    "Press and podcast placement, twelve target outlets",
    "Media kit and author branding suite",
    "Email funnel build and launch flows",
    "Weekly reporting and a live dashboard",
    "Named strategist on every call",
  ],
};

export const PRICING_ALACARTE = [
  { name: "Listing optimization", price: "$950", note: "One time" },
  { name: "Goodreads and reader lists", price: "$780", note: "Per month" },
  { name: "Bestseller launch campaign", price: "$3,200", note: "Per launch" },
  { name: "Author branding and media kit", price: "$1,850", note: "One time" },
  { name: "Press and PR placement", price: "$2,400", note: "Per month" },
  { name: "Verified review campaign", price: "$1,400", note: "Per month" },
  { name: "Email marketing and funnels", price: "$1,250", note: "Per month" },
  { name: "Social and direct promotion", price: "$1,600", note: "Per month" },
  { name: "Personal brand strategy", price: "$2,900", note: "Per quarter" },
  { name: "Speaking placement", price: "$2,100", note: "Per month" },
];

export type Faq = { q: string; a: string };

export const FAQ_GROUPS: { group: string; items: Faq[] }[] = [
  {
    group: "General",
    items: [
      {
        q: "Who do you work with?",
        a: "Authors at any stage, publishers, and founders or experts building a professional name. We work across fiction and nonfiction, and with clients who have no book at all.",
      },
      {
        q: "Do you take on every client who applies?",
        a: "No. Roughly one in four inquiries becomes a client. If the manuscript, cover, timing or budget is not ready, we say so on the first call.",
      },
      {
        q: "Where are you based?",
        a: "The team works remotely across three time zones. Calls are scheduled to your working hours.",
      },
    ],
  },
  {
    group: "Process",
    items: [
      {
        q: "How long before I see results?",
        a: "Listing and ranking changes typically show within three weeks. Press placements and audience growth take longer, usually six to ten weeks.",
      },
      {
        q: "What do you need from me?",
        a: "Access to your retail dashboards, your existing assets, and about two hours a month of your time for calls and approvals.",
      },
      {
        q: "How do you report?",
        a: "A written update every Monday and a live dashboard you can open any time. Every number links to its source.",
      },
    ],
  },
  {
    group: "Pricing",
    items: [
      {
        q: "Do you require long contracts?",
        a: "No. Every engagement is month to month with thirty days notice. Launch campaigns are quoted per launch.",
      },
      {
        q: "Is ad spend included?",
        a: "No. Ad budget is separate and paid directly by you to the platform, so you keep full visibility and ownership.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, for engagements above three thousand dollars we can split payments across the campaign period.",
      },
    ],
  },
  {
    group: "Ethics",
    items: [
      {
        q: "Do you buy reviews?",
        a: "Never. Reviews come from real readers who received and read the book. Anything else risks your account and your reputation.",
      },
      {
        q: "Can you guarantee a bestseller list?",
        a: "No, and neither can anyone else honestly. We publish exactly what we do and do not guarantee on our guarantee page.",
      },
      {
        q: "Do you work with competing titles?",
        a: "Not in the same category during an active launch window. We will tell you if a conflict exists before we sign.",
      },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "what-a-bestseller-badge-is-worth",
    title: "What a bestseller badge is actually worth",
    excerpt:
      "The badge sells consulting, not books. Here is how to tell when chasing it makes sense and when it wastes a launch.",
    category: "Strategy",
    date: "June 18, 2026",
    readTime: "6 min read",
    body: [
      "A bestseller badge is a marketing asset, not a sales engine. It works when your income comes from what the book unlocks: speaking fees, consulting retainers, board seats, credibility in a room. It works poorly when your income comes from the book itself.",
      "The mechanics matter. Most category badges reflect a single hour of sales velocity inside a narrow subcategory. That is not a lie, but it is a much smaller claim than most readers assume when they see it on a cover.",
      "Before you spend on a badge run, ask what the badge is for. If the honest answer is that it will look good on your website, there are cheaper ways to build credibility, starting with genuine reviews and a handful of relevant press placements.",
      "When we do run badge campaigns, we run them with a written target category, an expected velocity threshold and a named cutoff. If we miss, you hear about it that day, not in a monthly recap.",
    ],
  },
  {
    slug: "review-velocity-beats-review-count",
    title: "Review velocity beats review count",
    excerpt:
      "Two hundred reviews earned over two years move a listing less than sixty earned in three weeks. The reason is retail ranking mechanics.",
    category: "Retail",
    date: "May 30, 2026",
    readTime: "5 min read",
    body: [
      "Retail algorithms reward recency. A steady drip of new reviews signals a title that people are actively buying and finishing, and that signal feeds discovery placement far more than a large but stale review count.",
      "This is why we plan review campaigns as concentrated windows rather than as an always on trickle. We recruit readers ahead of the window, distribute copies together, and time the follow up so reviews land inside a defined period.",
      "The ethical line is simple. We never pay for a review, never script one, and never ask for a rating. We ask readers who finished the book to say what they thought.",
      "One practical note: build the reader list before the book is ready. The campaigns that fail are almost always the ones that start recruiting during launch week.",
    ],
  },
  {
    slug: "the-author-website-that-earns-its-keep",
    title: "The author website that earns its keep",
    excerpt:
      "Most author sites are brochures. The ones that matter do three jobs, and everything else on the page is decoration.",
    category: "Brand",
    date: "May 12, 2026",
    readTime: "7 min read",
    body: [
      "A working author site does three things: it captures an email address, it makes a producer's job easy, and it tells a first time visitor who you are in under ten seconds.",
      "Everything else, the long biography, the photo gallery, the list of every festival you attended, belongs on a secondary page or nowhere at all.",
      "Start with the capture. A single reader magnet, one field, one button, above the fold. Then the press kit: bios in three lengths, high resolution photos, topic list, and a contact route that does not go through a contact form nobody checks.",
      "The third job is positioning, and it is the one most sites fail. One sentence that says what you write and who it is for. Write it, cut it in half, then put it at the top.",
    ],
  },
];

export const RESOURCES = [
  {
    slug: "brand-and-book-audit",
    title: "Free Brand and Book Audit",
    body: "A written review of your listing, presence and reviews, with three prioritized fixes. Returned within five working days.",
    cta: "Request the audit",
    file: "/resources/house-of-synergy-brand-and-book-audit.pdf",
  },
  {
    slug: "positioning-report",
    title: "Free Positioning Report",
    body: "Answer nine questions and receive a one page position statement you can use across your site, profiles and pitches.",
    cta: "Get the report",
    file: "/resources/house-of-synergy-positioning-report.pdf",
  },
  {
    slug: "launch-checklist",
    title: "Free Launch Checklist",
    body: "The ninety day sequence we run internally, condensed into a checklist you can work through on your own.",
    cta: "Download the checklist",
    file: "/resources/house-of-synergy-launch-checklist.pdf",
  },
];
