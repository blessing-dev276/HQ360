import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Music2, Twitter } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { BRAND } from "@/data/site";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Services", to: "/services" },
      { label: "Results", to: "/results" },
      { label: "About", to: "/about" },
      { label: "Pricing", to: "/pricing" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Free Tools",
    links: [
      { label: "Brand and Book Audit", to: "/resources" },
      { label: "Positioning Report", to: "/resources" },
      { label: "Launch Checklist", to: "/resources" },
      { label: "FAQs", to: "/faqs" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Our Guarantee", to: "/guarantee" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
] as const;

const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "TikTok", Icon: Music2 },
  { label: "X", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-[oklch(0.93_0.008_85)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo variant="mono" size={34} className="text-[oklch(0.97_0.008_85)]" />
            <p className="mt-4 max-w-sm font-serif text-lg text-[oklch(0.86_0.01_80)]">
              {BRAND.tagline}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 inline-block text-sm text-[oklch(0.82_0.012_80)] underline-offset-4 hover:text-gold hover:underline"
            >
              {BRAND.email}
            </a>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-[oklch(0.9_0.01_80)] hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-[oklch(0.84_0.012_80)] hover:text-[oklch(0.98_0.008_85)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-xl">Notes from the studio</h2>
            <p className="mt-1 text-sm text-[oklch(0.8_0.012_80)]">
              One letter a month on publishing, press and building a name. No pitching.
            </p>
          </div>
          <NewsletterSignup variant="dark" />
        </div>

        <p className="mt-10 text-xs text-[oklch(0.72_0.012_80)]">
          Copyright {new Date().getFullYear()} Synergy Pubs. All rights reserved. Sample copy,
          statistics and testimonials on this site are placeholder content for demonstration.
        </p>
      </div>
    </footer>
  );
}
