import { cn } from "@/lib/utils";

type LogoProps = {
  /** "gradient" for light surfaces and hero, "mono" for footer and dark sections */
  variant?: "gradient" | "mono";
  /** hide the wordmark and render only the flame mark */
  markOnly?: boolean;
  className?: string;
  /** height of the mark in pixels */
  size?: number;
};

let idCounter = 0;

/**
 * House of Synergy flame mark: three interlocking flame strokes that read
 * as an "S" when seen as a whole. Colors come from the theme tokens so the
 * mark can be re themed from src/styles.css.
 */
export function Logo({
  variant = "gradient",
  markOnly = false,
  className,
  size = 36,
}: LogoProps) {
  const uid = `hos-${++idCounter}`;
  const gradId = `${uid}-fire`;
  const mono = variant === "mono";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        role="img"
        aria-label="House of Synergy flame mark"
        className="shrink-0 overflow-visible"
      >
        <title>House of Synergy</title>
        <defs>
          <linearGradient id={gradId} x1="12" y1="46" x2="38" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--ember-deep)" />
            <stop offset="45%" stopColor="var(--ember)" />
            <stop offset="78%" stopColor="var(--blaze)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
          <style>{`
            @keyframes hosFlameCore { 0%,100% { transform: scaleY(1) translateY(0); } 50% { transform: scaleY(1.05) translateY(-0.6px); } }
            @keyframes hosFlameTip { 0%,100% { opacity: .95; transform: translateY(0) scale(1); } 50% { opacity: .7; transform: translateY(-1.2px) scale(1.07); } }
            .hos-core { transform-origin: 24px 44px; animation: hosFlameCore 2.6s ease-in-out infinite; }
            .hos-tip { transform-origin: 26px 12px; animation: hosFlameTip 2.1s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .hos-core, .hos-tip { animation: none; }
            }
          `}</style>
        </defs>

        {/* Outer flame stroke, curving as the upper bowl of the S */}
        <path
          className="hos-core"
          d="M31.6 3.2c1.4 5.6-.7 9.2-4.9 12.2-5 3.6-8.9 6.2-8.9 11.1 0 3 1.7 5.4 4.3 6.6-4.6.5-8.6-2.1-10.4-6.1-2.2-4.9-.6-10.6 3.7-14.8C19 8.6 27.3 5.9 31.6 3.2Z"
          fill={mono ? "currentColor" : `url(#${gradId})`}
        />
        {/* Lower counter stroke, closing the S and reading as the ember base */}
        <path
          className="hos-core"
          d="M16.4 44.9c-1.6-5.1.6-8.6 4.7-11.4 5-3.4 9.6-5.5 10.5-10.2.5-2.6-.3-5-2-6.8 4.7.9 8 4.5 8.8 9 1 5.6-2.1 11.2-7.4 14.5-4 2.5-9.8 4-14.6 4.9Z"
          fill={mono ? "currentColor" : `url(#${gradId})`}
          opacity={mono ? 0.72 : 1}
        />
        {/* Inner tip spark */}
        <path
          className="hos-tip"
          d="M26.9 9.4c1.9 2.5 1.6 5.3-.6 7.6-1.7 1.8-2.4 3.4-1.6 5.3-2.6-1-3.9-3.4-3.2-6 .6-2.4 3-4.7 5.4-6.9Z"
          fill={mono ? "currentColor" : "var(--gold)"}
          opacity={mono ? 0.5 : 0.9}
        />
      </svg>

      {!markOnly && (
        <span
          className="font-serif text-[1.15rem] leading-none font-semibold tracking-tight"
          style={{ fontSize: size * 0.52 }}
        >
          House of Synergy
        </span>
      )}
    </span>
  );
}

export default Logo;
