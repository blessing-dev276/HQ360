/**
 * The HQ360 growth framework and delivery process.
 * Used on the homepage, capability pages and (as a default) industry pages.
 */

/** The "360" — six stages a business moves through as it grows. */
export const GROWTH_FRAMEWORK: { key: string; title: string; body: string }[] = [
  {
    key: "brand",
    title: "Brand",
    body: "Decide what the business stands for and make it recognisable. Positioning, identity and message.",
  },
  {
    key: "build",
    title: "Build",
    body: "Put the assets in place: website, funnels, CRM and the automation that runs underneath them.",
  },
  {
    key: "attract",
    title: "Attract",
    body: "Create demand and visibility through advertising, content, outreach and search.",
  },
  {
    key: "convert",
    title: "Convert",
    body: "Turn attention into booked conversations and customers with follow-up that never drops a lead.",
  },
  {
    key: "retain",
    title: "Retain",
    body: "Keep customers close with nurture, reviews, reactivation and a reason to come back.",
  },
  {
    key: "scale",
    title: "Scale",
    body: "Double down on what works, cut what does not, and add capacity where the numbers justify it.",
  },
];

/** How an engagement actually runs. */
export const PROCESS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Discover",
    body: "We audit what exists — positioning, site, pipeline, spend and results — before we recommend anything.",
  },
  {
    step: "02",
    title: "Strategise",
    body: "A written plan with owners, dates and target metrics. You approve it before work begins.",
  },
  {
    step: "03",
    title: "Build",
    body: "Creative, sites, funnels and automation are produced and connected as one system.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Campaigns go live in sequence so each channel feeds the next, with close monitoring in the first weeks.",
  },
  {
    step: "05",
    title: "Optimise",
    body: "A regular review where we cut what underperforms and move budget toward what is working.",
  },
  {
    step: "06",
    title: "Scale",
    body: "Once the system is stable and measured, we add reach, channels and capacity deliberately.",
  },
];

/** How we work — principles, not numbers. Replaces the old fabricated stat bar. */
export const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "One team, one plan",
    body: "Strategy, creative, technology and marketing under one roof, with a single point of contact and one report.",
  },
  {
    title: "Research before promises",
    body: "Every recommendation is backed by an audit and comparable data. You see the reasoning, not just the pitch.",
  },
  {
    title: "Reporting, not vibes",
    body: "A written update on a fixed rhythm and a live view of the numbers. Every claim links to its source.",
  },
  {
    title: "Systems you own",
    body: "Accounts, assets and automations are yours. If we stop working together, nothing switches off.",
  },
];
