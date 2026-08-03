import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/site/Primitives";
import { REVIEW_SHOTS, VIDEO_TESTIMONIALS } from "@/data/proof";

export function ProofSection({ showAllLink = true }: { showAllLink?: boolean }) {
  const [active, setActive] = useState(0);
  const video = VIDEO_TESTIMONIALS[active]!;

  return (
    <section
      id="proof"
      className="border-y border-border bg-[oklch(0.955_0.011_82)] px-5 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Reviews and proof of work</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-4xl">
              Hear it from the authors we work with.
            </h2>
            <div className="rule-fire mt-5" />
          </div>
          {showAllLink && (
            <Link
              to="/reviews"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-editorial hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              See All Reviews
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
          <div>
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
            <p className="mt-4 text-sm text-muted-foreground">{video.title}</p>

            {VIDEO_TESTIMONIALS.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {VIDEO_TESTIMONIALS.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      i === active
                        ? "border-primary bg-card text-primary"
                        : "border-border bg-card text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {v.label} {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {REVIEW_SHOTS.slice(0, 3).map((r) => (
              <li key={r.src} className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={r.src} alt={r.alt} loading="lazy" className="w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
