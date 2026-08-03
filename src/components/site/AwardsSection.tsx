import { Section, SectionHeading } from "@/components/site/Primitives";
import { AWARDS } from "@/data/site";

const gradients: { name: string; fill: string; stroke: string; ribbon: string }[] = [
  {
    name: "ember",
    fill: "url(#award-ember)",
    stroke: "#C8A253",
    ribbon: "url(#ribbon-ember)",
  },
  {
    name: "gold",
    fill: "url(#award-gold)",
    stroke: "#5F6650",
    ribbon: "url(#ribbon-gold)",
  },
  {
    name: "blaze",
    fill: "url(#award-blaze)",
    stroke: "#9BA383",
    ribbon: "url(#ribbon-blaze)",
  },
];

function VerifiedBadge({
  title,
  year,
  index,
}: {
  title: string;
  year: string;
  index: number;
}) {
  const theme = gradients[index % gradients.length]!;

  return (
    <div className="group relative flex flex-col items-center text-center">
      <div className="relative w-44 h-52 sm:w-52 sm:h-60">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: "var(--gradient-fire)" }}
        />

        <svg
          viewBox="0 0 200 240"
          className="relative z-10 h-full w-full drop-shadow-2xl"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="award-ember" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9BA383" />
              <stop offset="50%" stopColor="#C8A253" />
              <stop offset="100%" stopColor="#0B0F0E" />
            </linearGradient>
            <linearGradient id="award-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A79C99" />
              <stop offset="40%" stopColor="#8A7A55" />
              <stop offset="100%" stopColor="#4A423F" />
            </linearGradient>
            <linearGradient id="award-blaze" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B3BA9C" />
              <stop offset="50%" stopColor="#9BA383" />
              <stop offset="100%" stopColor="#C8A253" />
            </linearGradient>

            <linearGradient id="ribbon-ember" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8A253" />
              <stop offset="100%" stopColor="#0B0F0E" />
            </linearGradient>
            <linearGradient id="ribbon-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8A7A55" />
              <stop offset="100%" stopColor="#4A423F" />
            </linearGradient>
            <linearGradient id="ribbon-blaze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9BA383" />
              <stop offset="100%" stopColor="#C8A253" />
            </linearGradient>

            <filter id="badge-bevel" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
              <feOffset in="blur" dx="0" dy="2" result="offset" />
              <feSpecularLighting
                in="blur"
                surfaceScale="3"
                specularConstant="0.9"
                specularExponent="20"
                lightingColor="#ffffff"
                result="spec"
              >
                <fePointLight x="60" y="40" z="120" />
              </feSpecularLighting>
              <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="SourceAlpha" operator="in" result="fill" />
              <feMerge>
                <feMergeNode in="fill" />
                <feMergeNode in="specOut" />
                <feMergeNode in="offset" />
              </feMerge>
            </filter>
          </defs>

          {/* ribbon tails */}
          <path
            d="M55 165 L45 225 L70 210 L100 230 L130 210 L155 225 L145 165"
            fill={theme.ribbon}
            opacity="0.95"
          />

          {/* shield outer */}
          <path
            d="M100 10 L165 30 L165 95 C165 145 135 185 100 205 C65 185 35 145 35 95 L35 30 Z"
            fill={theme.fill}
            stroke={theme.stroke}
            strokeWidth="2.5"
            filter="url(#badge-bevel)"
          />

          {/* inner ring */}
          <path
            d="M100 22 L155 39 L155 94 C155 137 130 174 100 191 C70 174 45 137 45 94 L45 39 Z"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.5"
          />

          {/* top star / crown */}
          <path
            d="M100 38 L104 50 L117 50 L107 58 L111 71 L100 63 L89 71 L93 58 L83 50 L96 50 Z"
            fill="#F6F2E9"
            opacity="0.95"
          />

          {/* verified check circle */}
          <circle cx="100" cy="110" r="28" fill="#F6F2E9" opacity="0.95" />
          <circle cx="100" cy="110" r="24" fill="none" stroke={theme.stroke} strokeWidth="2" />
          <path
            d="M88 110 L96 118 L112 102"
            fill="none"
            stroke={theme.stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* year banner */}
          <rect x="55" y="150" width="90" height="22" rx="11" fill="#0B0F0E" opacity="0.9" />
          <text
            x="100"
            y="166"
            textAnchor="middle"
            fill="#F6F2E9"
            fontSize="12"
            fontWeight="700"
            letterSpacing="0.08em"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {year}
          </text>
        </svg>
      </div>

      <h3 className="mt-6 max-w-[16rem] font-serif text-xl leading-snug text-foreground">
        {title}
      </h3>
    </div>
  );
}

export function AwardsSection() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Awards and Recognition"
          title="Trusted by platforms, readers and authors"
          intro="Independent recognition for the work we do across listing growth, launch campaigns and press placement."
          align="center"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award, i) => (
            <div key={award.title} className="flex flex-col items-center">
              <VerifiedBadge title={award.title} year={award.year} index={i} />
              <p className="mt-5 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
                {award.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
