import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Wraps children in a scroll-reveal. Purely visual — content is present in the
 * DOM immediately, and reduced-motion users see it with no transition.
 */
export function Reveal({
  children,
  as,
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms */
  delay?: number;
}) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn("hq-reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
