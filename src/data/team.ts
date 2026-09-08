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
};

export const TEAM: TeamMember[] = [
  { name: "Blessing", role: "Growth & Campaign Director", photo: "blessing", initials: "B" },
  { name: "Richard", role: "Brand & Design Lead", photo: "richard", initials: "R" },
  { name: "Zainab", role: "Web & Conversion Lead", photo: "zainab", initials: "Z" },
  { name: "Ebenezer", role: "Reporting & Reputation Lead", photo: "ebenezer", initials: "E" },
  { name: "Emmanuel", role: "Media & Partnerships Lead", photo: "emmanuel", initials: "E" },
  { name: "Racheal", role: "Client Success Lead", photo: "racheal", initials: "R" },
];
