import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { TRUSTPILOT, TRUSTPILOT_PROFILE_URL, TRUSTPILOT_REVIEWS } from "@/data/trustpilot";

/** Trustpilot's own brand green — used only for the star rating, to read as an authentic badge. */
const TRUSTPILOT_GREEN = "#00b67a";

function Stars({ score, size = 14 }: { score: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.round(score);
        return (
          <Star
            key={i}
            width={size}
            height={size}
            fill={filled ? TRUSTPILOT_GREEN : "none"}
            color={filled ? TRUSTPILOT_GREEN : "currentColor"}
            strokeWidth={filled ? 0 : 1.5}
          />
        );
      })}
    </span>
  );
}

/** Compact inline badge — score, stars and review count, linking out. For headers and the footer. */
export function TrustpilotBadge({
  className,
  tone = "default",
}: {
  className?: string;
  /** "dark" for use on a dark/carbon background (e.g. the footer). */
  tone?: "default" | "dark";
}) {
  const text = tone === "dark" ? "text-[oklch(0.88_0.008_90)]" : "text-foreground";
  const muted = tone === "dark" ? "text-[oklch(0.7_0.008_90)]" : "text-muted-foreground";
  return (
    <a
      href={TRUSTPILOT_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80",
        text,
        className,
      )}
    >
      <Stars score={TRUSTPILOT.trustScore} />
      <span>
        {TRUSTPILOT.trustScore.toFixed(1)} on <span className="font-semibold">Trustpilot</span>
        <span className={muted}>
          {" "}
          &middot; {TRUSTPILOT.reviewCount} review{TRUSTPILOT.reviewCount === 1 ? "" : "s"}
        </span>
      </span>
    </a>
  );
}

/** A real review, rendered as a quote card. Renders nothing if there is no review to show. */
export function TrustpilotReviewCard({ className }: { className?: string }) {
  const review = TRUSTPILOT_REVIEWS[0];
  if (!review) return null;
  return (
    <figure className={cn("rounded-2xl border border-border bg-card p-6 sm:p-7", className)}>
      <div className="flex items-center justify-between gap-3">
        <Stars score={review.rating} size={15} />
        {review.verified ? (
          <span className="text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
            Verified
          </span>
        ) : null}
      </div>
      <blockquote className="mt-4">
        <p className="font-display text-base leading-snug">{review.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.body}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          {review.author} &middot; {review.date}
        </span>
        <a
          href={TRUSTPILOT_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline underline-offset-4 hover:text-brand"
        >
          Read on Trustpilot
        </a>
      </figcaption>
    </figure>
  );
}
