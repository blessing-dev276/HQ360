/**
 * The HQ360 team. Names and photos are real (retained from the previous site).
 * Role titles are generalised from the team's own author-era descriptions to
 * match the multi-industry capabilities — CONFIRM these with each person before
 * publishing, and add short bios only if verified.
 */

export type TeamMember = {
  name: string;
  role: string;
  /** key into TeamAvatar PHOTOS */
  photo: string;
  initials: string;
  /** One line on what they own — shown on About and the homepage team showcase. */
  blurb: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Blessing",
    role: "CEO & Mobile App Developer",
    photo: "blessing",
    initials: "B",
    blurb: "Runs the studio and leads native app builds — the product end of a growth system.",
  },
  {
    name: "Richard",
    role: "Digital Marketing Lead",
    photo: "richard",
    initials: "R",
    blurb: "Owns paid and lifecycle — the path from spend to qualified pipeline.",
  },
  {
    name: "Zainab",
    role: "AI & Video Production Lead",
    photo: "zainab",
    initials: "Z",
    blurb: "Turns strategy into video and AI-assisted creative at production pace.",
  },
  {
    name: "Ebenezer",
    role: "Brand & Creative Lead",
    photo: "ebenezer",
    initials: "E",
    blurb: "Sets positioning and identity so everything downstream reads as one brand.",
  },
  {
    name: "Emmanuel",
    role: "Web & Funnel Development Lead",
    photo: "emmanuel",
    initials: "E",
    blurb: "Builds the sites and funnels where attention turns into a booked conversation.",
  },
  {
    name: "Racheal",
    role: "Social Media Manager",
    photo: "racheal",
    initials: "R",
    blurb: "Keeps the brand present and consistent across social, day to day.",
  },
];
