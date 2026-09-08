import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Max-width page gutter. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto px-5 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[88rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "base",
  id,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised" | "dark" | "carbon";
  id?: string;
  /** Skip the Container wrapper (caller controls width). */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        tone === "raised" && "bg-secondary",
        tone === "dark" && "bg-charcoal text-[oklch(0.95_0.003_95)]",
        tone === "carbon" && "bg-carbon text-[oklch(0.95_0.003_95)]",
        className,
      )}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "muted" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "brand" && "text-brand",
        tone === "muted" && "text-muted-foreground",
        tone === "light" && "text-[oklch(0.8_0.03_60)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "base",
  className,
  as: TitleTag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "base" | "light";
  className?: string;
  as?: "h1" | "h2";
}) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow tone={light ? "light" : "brand"}>{eyebrow}</Eyebrow> : null}
      <TitleTag
        className={cn(
          "mt-3 text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.6rem]",
          light ? "text-[oklch(0.97_0.003_95)]" : "text-foreground",
        )}
      >
        {title}
      </TitleTag>
      <div className={cn("rule-brand mt-5", align === "center" && "mx-auto")} />
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-[oklch(0.82_0.01_80)]" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    buttonBase,
    size === "md" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-7 py-3.5 text-sm sm:text-base",
    variant === "primary" &&
      "bg-primary text-primary-foreground shadow-editorial hover:shadow-lift hover:-translate-y-0.5",
    variant === "secondary" &&
      "border border-foreground/20 text-foreground hover:border-brand hover:text-brand",
    variant === "ghost" && "text-foreground hover:text-brand",
    variant === "light" &&
      "border border-white/25 text-[oklch(0.97_0.003_95)] hover:border-brand hover:text-brand",
    className,
  );
}

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & Partial<ComponentProps<"a">>) {
  if (to) {
    return (
      <Link to={to} className={buttonClasses(variant, size, className)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "lg",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

/** Small visible marker for illustrative / placeholder content. */
export function SampleBadge({
  children = "Illustrative",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-[oklch(0.42_0.16_42)] uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-xs tracking-wide text-muted-foreground/80 uppercase">{children}</p>
  );
}
