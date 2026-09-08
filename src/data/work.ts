/**
 * Case studies and projects.
 *
 * `status: "verified"` — a real project. Present figures only where they are
 * genuine and checkable.
 * `status: "sample"` — an illustrative engagement shape used to show how the
 * work is structured. Rendered with a visible "Illustrative" label and no
 * hard performance numbers presented as fact.
 */

import type { CapabilitySlug } from "./capabilities";
import { LAUNCH, LAUNCH_GALLERY } from "./launch";

export type CaseStudy = {
  slug: string;
  status: "verified" | "sample";
  title: string;
  client: string;
  industry: string; // Industry.shortName
  capabilities: CapabilitySlug[];
  summary: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  /** Qualitative for samples; factual only for verified. */
  outcome: string;
  metrics?: { label: string; value: string; note?: string }[];
  testimonial?: { quote: string; name: string; role: string };
  media?: { src: string; alt: string; caption?: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sanman-thapa-book-launch",
    status: "verified",
    title: "A live launch day for a debut novella",
    client: "Sanman Thapa — From the Window: The City of What Ifs",
    industry: "Authors & Publishers",
    capabilities: ["visibility-reputation", "brand-creative", "websites-funnels"],
    summary:
      "A launch built around signed copies, a full room and a cover-reveal film, delivered with Arti Facts Publishing.",
    challenge:
      "A debut author with two titles to bring to market and one launch day to make them land in front of real readers.",
    approach: [
      "Planned the launch day end to end: venue, signing table, guest list and run of show.",
      "Produced a cover-reveal film and a set of covers and print assets for the event and for retail.",
      "Ran the on-the-day capture — photography and video — for use across the author's platform afterward.",
    ],
    deliverables: [
      "Cover-reveal film",
      "Front and back cover and print assets",
      "Launch-day photography and video library",
      "Event plan and run of show",
    ],
    outcome:
      "A sold-through signing table, a full room and two titles in print. Event photography and the reveal film continue to serve the author's platform.",
    media: [
      { src: LAUNCH.video.src, alt: LAUNCH.video.title, caption: "Cover reveal film" },
      ...LAUNCH_GALLERY.slice(0, 4).map((g) => ({ src: g.src, alt: g.alt, caption: g.caption })),
    ],
  },
  {
    slug: "real-estate-team-follow-up-system",
    status: "sample",
    title: "A follow-up system for a mid-size real estate team",
    client: "Illustrative engagement",
    industry: "Real Estate",
    capabilities: ["crm-automation", "lead-generation", "websites-funnels"],
    summary:
      "How HQ360 structures a real estate growth engagement — from landing pages to CRM to database reactivation.",
    challenge:
      "Portal and ad leads arriving faster than the team could call, follow-up stopping after two attempts, and thousands of old leads untouched in the CRM.",
    approach: [
      "Built seller and buyer landing pages connected to a GoHighLevel pipeline.",
      "Added speed-to-lead SMS and call routing so every lead is contacted within minutes.",
      "Wrote a months-long nurture sequence and a structured database reactivation campaign.",
    ],
    deliverables: [
      "Seller and buyer landing pages",
      "GoHighLevel CRM and pipeline setup",
      "Speed-to-lead and long-nurture automations",
      "Database reactivation campaign",
      "Weekly reporting dashboard",
    ],
    outcome:
      "The engagement is structured to increase contact rate on new leads and to generate appointments from the existing database. Illustrative — not a report of a specific client's results.",
  },
  {
    slug: "home-services-booking-engine",
    status: "sample",
    title: "A booking engine for a multi-trade home service company",
    client: "Illustrative engagement",
    industry: "Home Services",
    capabilities: [
      "websites-funnels",
      "lead-generation",
      "visibility-reputation",
      "crm-automation",
    ],
    summary:
      "How HQ360 assembles a home services lead-to-booked-job system across site, ads, response and reviews.",
    challenge:
      "A company dependent on a single lead-selling directory, with slow response times and a review profile that did not reflect the quality of the work.",
    approach: [
      "Rebuilt the site with call and book actions above the fold on every service page.",
      "Launched Google and Meta campaigns and optimised the Google Business Profile for the map pack.",
      "Set up speed-to-lead texting, estimate follow-up and post-job review requests.",
    ],
    deliverables: [
      "Service-area website",
      "Local ad campaigns",
      "Google Business Profile optimisation",
      "Speed-to-lead and estimate follow-up automation",
      "Review generation system",
    ],
    outcome:
      "The system is built to reduce reliance on bought leads and to raise the share of estimates that convert. Illustrative — not a report of a specific client's results.",
  },
  {
    slug: "coach-application-funnel",
    status: "sample",
    title: "An application funnel for a high-ticket consultant",
    client: "Illustrative engagement",
    industry: "Coaches & Consultants",
    capabilities: ["websites-funnels", "lead-generation", "crm-automation", "brand-creative"],
    summary:
      "How HQ360 turns a referral-only consulting practice into a system that books qualified calls.",
    challenge:
      "A practice built on word of mouth that had plateaued, with a calendar filling with unqualified discovery calls.",
    approach: [
      "Sharpened positioning to one audience and one outcome, then rebuilt the offer pages.",
      "Built an application funnel that qualifies on budget, readiness and fit before a call is booked.",
      "Added paid traffic and a pre-call show-up sequence.",
    ],
    deliverables: [
      "Positioning and offer pages",
      "Application and qualification funnel",
      "Paid campaign setup",
      "Show-up and evergreen nurture sequences",
    ],
    outcome:
      "The funnel is designed to reduce time spent on unqualified calls and to add a channel beyond referrals. Illustrative — not a report of a specific client's results.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
