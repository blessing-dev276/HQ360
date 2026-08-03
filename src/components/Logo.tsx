import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "gradient" for light surfaces and hero, "mono" for footer and dark sections */
  variant?: "gradient" | "mono";
  /** hide the wordmark and render only the mark */
  markOnly?: boolean;
  className?: string;
  /** height of the mark in pixels */
  size?: number;
};

/**
 * HQ360 mark: a full 360 degree orbit ring cut by a rising quill stroke.
 * The ring reads as the 360, the inner stroke reads as a Q tail and as the
 * upward lift we deliver for authors. Colors come from theme tokens so the
 * mark can be re themed from src/styles.css.
 */
export function Logo({
  variant = "gradient",
  markOnly = false,
  className,
  size = 36,
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `${uid}-brass`;
  const mono = variant === "mono";
  const paint = mono ? "currentColor" : `url(#${gradId})`;

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        role="img"
        aria-label="HQ360 mark"
        className="shrink-0 overflow-visible"
      >
        <title>HQ360</title>
        <defs>
          <linearGradient id={gradId} x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--ember-deep)" />
            <stop offset="48%" stopColor="var(--blaze)" />
            <stop offset="82%" stopColor="var(--ember)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
          <style>{`
            @keyframes hqOrbit { to { transform: rotate(360deg); } }
            @keyframes hqPulse { 0%,100% { opacity: .9; } 50% { opacity: .45; } }
            .hq-orbit { transform-origin: 24px 24px; animation: hqOrbit 9s linear infinite; }
            .hq-spark { animation: hqPulse 3.2s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .hq-orbit, .hq-spark { animation: none; }
            }
          `}</style>
        </defs>

        {/* Outer orbit ring, open at the lower right where the quill exits */}
        <path
          d="M35.4 39.9A19 19 0 1 1 41.6 30"
          fill="none"
          stroke={paint}
          strokeWidth="4.2"
          strokeLinecap="round"
        />

        {/* Quill stroke: the Q tail rising out of the ring */}
        <path
          d="M17.2 31.6 33.6 15.1"
          fill="none"
          stroke={paint}
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M28.8 33.4 40.9 45.5"
          fill="none"
          stroke={paint}
          strokeWidth="4.2"
          strokeLinecap="round"
          opacity={mono ? 0.72 : 1}
        />

        {/* Inner orbit arc, the quiet 360 motion */}
        <g className="hq-orbit">
          <path
            d="M24 12.4a11.6 11.6 0 0 1 10.4 6.5"
            fill="none"
            stroke={mono ? "currentColor" : "var(--gold)"}
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity={mono ? 0.45 : 0.85}
            className="hq-spark"
          />
        </g>
      </svg>

      {!markOnly && (
        <span
          className="font-serif text-[1.15rem] leading-none font-semibold tracking-tight"
          style={{ fontSize: size * 0.52 }}
        >
          HQ360
        </span>
      )}
    </span>
  );
}

export default Logo;
