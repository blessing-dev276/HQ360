/**
 * Insights — HQ360's writing on growth, automation, websites, lead generation,
 * brand and industry playbooks.
 *
 * The three original articles are retained under "Author Growth".
 */

export type InsightCategory =
  | "Growth"
  | "Automation"
  | "Websites"
  | "Lead Generation"
  | "Brand"
  | "Author Growth"
  | "Industry Playbooks";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "five-agencies-one-system",
    title: "Why five agencies rarely add up to one growth system",
    excerpt:
      "A brand shop, a web team, an ads agency, an SEO firm and a CRM contractor can each do good work and still leave the business worse off. Here is where the seams fail.",
    category: "Growth",
    date: "August 26, 2026",
    readTime: "6 min read",
    body: [
      "When growth is split across five vendors, each one optimises for its own metric. The ads agency is measured on cost per lead, so it sends more leads. The web team is measured on a launch date, so the funnel ships without conversion tracking. The CRM contractor builds what was asked for, not what the campaigns actually need. Nobody is measured on booked revenue, so nobody owns it.",
      "The failures show up at the seams. Leads arrive but the follow-up was scoped by someone who never saw the ad creative. The site gets a redesign that breaks the tracking the ads agency depended on. A brand refresh lands three months after the campaigns that needed it. Each vendor did their job. The system still leaks.",
      "The fix is not always one agency for everything. It is one plan, one set of shared metrics, and one point of accountability for the number that matters. Sometimes that means consolidating. Sometimes it means keeping specialists but giving one team the mandate to connect them.",
      "Before you add another vendor, ask who is accountable for the whole path from spend to signed customer. If the answer is nobody, that is the problem to solve first.",
    ],
  },
  {
    slug: "speed-to-lead-is-the-cheapest-growth-lever",
    title: "Speed to lead is the cheapest growth lever most businesses ignore",
    excerpt:
      "Doubling ad spend is expensive and slow. Answering leads in two minutes instead of two hours is neither, and it usually moves the number more.",
    category: "Automation",
    date: "August 8, 2026",
    readTime: "5 min read",
    body: [
      "Most businesses treat lead volume as the lever and response time as an operational detail. It is the other way around. The contact rate on a lead answered within a couple of minutes is dramatically higher than one answered hours later, and the first business to reach a prospect wins a large share of the deals.",
      "The reason is simple. Someone who just filled in a form is at peak intent. An hour later they have filled in three more forms, spoken to a competitor, or moved on. The lead did not get more expensive to acquire. It just got colder.",
      "An automated first response — a text within seconds, a call task raised immediately, routing that respects who is available — costs almost nothing to run once it is built. It does not replace a salesperson. It buys the salesperson a live conversation instead of a voicemail.",
      "If you are about to increase your ad budget, measure your median lead response time first. Fixing it is often the higher-return move, and you can do it this month.",
    ],
  },
  {
    slug: "your-database-is-a-channel",
    title: "Your CRM database is a channel you already paid for",
    excerpt:
      "The most under-worked asset in most businesses is the list of people who already enquired once. Reactivation is not a campaign, it is a system.",
    category: "Lead Generation",
    date: "July 21, 2026",
    readTime: "5 min read",
    body: [
      "Every business with a CRM is sitting on old leads and past customers who once raised their hand. Acquisition cost on that list is zero — it was paid years ago. Yet most of it never gets a message.",
      "Reactivation done well is not a one-off blast. It is a segmented, permission-respecting sequence: a relevant reason to reconnect, a clear offer, and a path to book. Run quarterly, it produces booked conversations at a fraction of the cost of new traffic.",
      "The common objection is that the list is stale. Some of it is. That is why the first send is a re-permission and clean-up as much as an offer. What remains is a responsive, low-cost channel.",
      "Before spending more on the top of the funnel, work the middle you already own.",
    ],
  },
  {
    slug: "landing-page-that-earns-its-keep",
    title: "The landing page that earns its keep does three jobs",
    excerpt:
      "Most landing pages describe. The ones that convert make one promise, remove one doubt, and ask for one action. Everything else is decoration.",
    category: "Websites",
    date: "July 3, 2026",
    readTime: "6 min read",
    body: [
      "A landing page has one job, and pages that try to do more usually do less. The three things that matter: a headline that states the outcome for a specific person, proof that removes the main objection, and a single, obvious action.",
      "Everything else — the history, the full service list, the team photos — belongs on the main site or nowhere. On a landing page it is friction between the visitor and the decision.",
      "Match the page to the traffic. Someone arriving from a plumbing emergency ad wants a phone number and a promise of speed. Someone arriving from a webinar wants the next date and what they will learn. One generic page for both underperforms both.",
      "Write the headline, cut it in half, put the phone number or form where the thumb lands, and test it against the thing it replaced.",
    ],
  },
  {
    slug: "what-a-bestseller-badge-is-worth",
    title: "What a bestseller badge is actually worth",
    excerpt:
      "The badge sells consulting, not books. Here is how to tell when chasing it makes sense and when it wastes a launch.",
    category: "Author Growth",
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
    category: "Author Growth",
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
    category: "Author Growth",
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

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((p) => p.slug === slug);
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  "Growth",
  "Automation",
  "Websites",
  "Lead Generation",
  "Brand",
  "Author Growth",
  "Industry Playbooks",
];
