import { useState } from "react";
import { cn } from "@/lib/utils";
import { REVIEW_SHOTS, VIDEO_TESTIMONIALS } from "@/data/proof";

/**
 * Real supplied proof only: client video testimonials and review screenshots.
 * No fabricated quotes or numbers.
 */
export function ProofStrip({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const video = VIDEO_TESTIMONIALS[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
      <div>
        {video ? (
          <>
            <div className="overflow-hidden rounded-2xl border border-border bg-charcoal shadow-editorial">
              <video
                key={video.src}
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-charcoal"
              >
                Your browser does not support embedded video.
              </video>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{video.title}</p>
            {VIDEO_TESTIMONIALS.length > 1 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {VIDEO_TESTIMONIALS.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      i === active
                        ? "border-brand bg-card text-brand"
                        : "border-border bg-card text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {REVIEW_SHOTS.slice(0, compact ? 2 : 4).map((r) => (
          <li key={r.src} className="overflow-hidden rounded-xl border border-border bg-card">
            <img src={r.src} alt={r.alt} loading="lazy" className="w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
