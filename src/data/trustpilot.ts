/**
 * HQ360's real Trustpilot profile. There is no live API integration — these
 * figures were read directly from the public profile page and must be
 * updated by hand as new reviews come in. Never fabricate or round up.
 *
 * Source: https://www.trustpilot.com/review/hq360.space
 * Last checked: 12 September 2026.
 */

export const TRUSTPILOT_PROFILE_URL = "https://www.trustpilot.com/review/hq360.space";

export const TRUSTPILOT = {
  trustScore: 3.7,
  reviewCount: 1,
};

export type TrustpilotReview = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  title: string;
  body: string;
  verified: boolean;
};

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    author: "Diksha Kumari",
    rating: 5,
    date: "August 10, 2026",
    title: "Great Experience and Quality Service",
    body: "I had a really good experience working with HQ360. What stood out to me was how they took the time to understand what I actually needed instead of just trying to sell me something. Communication was clear, the process was straightforward, and I was impressed with the quality of the final result. Definitely a team I'd be comfortable working with again.",
    verified: true,
  },
];
