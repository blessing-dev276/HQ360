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
  { name: "Blessing", role: "CEO & Mobile App Developer", photo: "blessing", initials: "B" },
  { name: "Richard", role: "Digital Marketing Lead", photo: "richard", initials: "R" },
  { name: "Zainab", role: "AI & Video Production Lead", photo: "zainab", initials: "Z" },
  { name: "Ebenezer", role: "Brand & Creative Lead", photo: "ebenezer", initials: "E" },
  { name: "Emmanuel", role: "Web & Funnel Development Lead", photo: "emmanuel", initials: "E" },
  { name: "Racheal", role: "Social Media Manager", photo: "racheal", initials: "R" },
];
