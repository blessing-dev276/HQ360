import { useCallback, useRef, useState } from "react";

/**
 * Drag to compare slider showing a before and after metric panel.
 * Keyboard accessible through the range input.
 */
export function CompareSlider({
  beforeLabel,
  beforeValue,
  beforeNote,
  afterLabel,
  afterValue,
  afterNote,
}: {
  beforeLabel: string;
  beforeValue: string;
  beforeNote: string;
  afterLabel: string;
  afterValue: string;
  afterNote: string;
}) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={frameRef}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
        className="relative h-72 w-full touch-none overflow-hidden rounded-2xl border border-border select-none sm:h-80"
      >
        {/* After panel */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-fire px-6 text-center text-white">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90">
            {afterLabel}
          </p>
          <p className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">{afterValue}</p>
          <p className="mt-3 max-w-xs text-sm opacity-95">{afterNote}</p>
        </div>

        {/* Before panel, clipped */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal px-6 text-center text-[oklch(0.95_0.008_85)]"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            {beforeLabel}
          </p>
          <p className="mt-3 font-serif text-5xl font-semibold sm:text-6xl">{beforeValue}</p>
          <p className="mt-3 max-w-xs text-sm text-[oklch(0.82_0.012_80)]">{beforeNote}</p>
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-[oklch(0.99_0_0)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-foreground shadow-lift">
            drag
          </span>
        </div>
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Compare before and after</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-[var(--ember)]"
          aria-label={`Compare ${beforeLabel} with ${afterLabel}`}
        />
      </label>
      <figcaption className="text-sm text-muted-foreground">
        Drag the handle or use the slider to compare. Placeholder campaign data.
      </figcaption>
    </figure>
  );
}
