import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { BRAND, FOOTER_NAV, SOCIALS } from "@/config/brand";

const iconFor: Record<string, typeof Instagram> = {
  Instagram,
};

export function SiteFooter() {
  return (
    <footer className="bg-carbon text-[oklch(0.9_0.006_90)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo variant="mono" size={30} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[oklch(0.78_0.008_90)]">
              {BRAND.positioning}
            </p>
            <p className="mt-4 text-sm text-[oklch(0.7_0.008_90)]">{BRAND.serviceArea}</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-5 inline-block text-sm text-[oklch(0.82_0.01_80)] underline-offset-4 hover:text-brand hover:underline"
            >
              {BRAND.email}
            </a>
            {SOCIALS.length > 0 ? (
              <ul className="mt-6 flex gap-3">
                {SOCIALS.map((s) => {
                  const Icon = iconFor[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-[oklch(0.88_0.008_90)] hover:border-brand hover:text-brand"
                      >
                        {Icon ? <Icon className="size-4" aria-hidden="true" /> : s.label[0]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold tracking-[0.16em] text-[oklch(0.68_0.008_90)] uppercase">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={`${col.heading}-${l.label}`}>
                      <Link
                        to={l.to}
                        className="text-sm text-[oklch(0.85_0.006_90)] hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="font-display text-lg text-[oklch(0.95_0.006_90)]">
                One letter a month on growth systems.
              </p>
              <p className="mt-1 text-sm text-[oklch(0.72_0.008_90)]">
                Practical writing on brand, funnels, automation and demand. Unsubscribe any time.
              </p>
            </div>
            <NewsletterSignup variant="dark" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[oklch(0.62_0.008_90)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.legalName}. {BRAND.descriptor}.
          </p>
          <p>
            {BRAND.name} was previously {BRAND.formerlyKnownAs}.
          </p>
        </div>
      </div>
    </footer>
  );
}
