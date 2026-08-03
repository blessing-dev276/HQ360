import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { STATS } from "@/data/site";

export function Section({
  children,
  className,
  tone = "base",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-14 sm:py-20 lg:px-8 lg:py-28",
        tone === "raised" && "bg-[oklch(0.955_0.011_82)]",
        tone === "dark" && "bg-charcoal text-[oklch(0.95_0.008_85)]",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean | undefined }) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-semibold tracking-[0.2em] uppercase",
        dark ? "text-gold" : "text-primary",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow dark={dark ?? false}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className={cn("rule-fire mt-5", align === "center" && "mx-auto")} />
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-[oklch(0.83_0.012_80)]" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function StatRow({ dark }: { dark?: boolean }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4",
        dark ? "border-white/12 bg-white/10" : "border-border bg-border",
      )}
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className={cn("px-4 py-6 text-center sm:px-6 sm:py-8", dark ? "bg-charcoal" : "bg-card")}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="text-fire font-serif text-3xl font-semibold sm:text-5xl">
              {stat.value}
            </span>
            <span
              className={cn(
                "mt-2 block text-sm",
                dark ? "text-[oklch(0.8_0.012_80)]" : "text-muted-foreground",
              )}
            >
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PrimaryCta({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-editorial hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryCta({
  to,
  children,
  className,
  dark,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        dark
          ? "border-white/25 text-[oklch(0.96_0.008_85)] hover:border-gold hover:text-gold"
          : "border-foreground/20 text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-xs tracking-wide text-muted-foreground/80 uppercase">{children}</p>
  );
}
