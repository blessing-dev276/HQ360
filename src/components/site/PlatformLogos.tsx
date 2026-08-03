function LogoWrapper({
  children,
  viewBox,
  className,
}: {
  children: React.ReactNode;
  viewBox: string;
  className?: string | undefined;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {children}
    </svg>
  );
}

export function AmazonLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 132 36" className={className}>
      <text x="0" y="25" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        amazon
      </text>
      <path
        d="M76 28c10 3 24 4 34 0 1-1 2 0 1 1-10 7-36 7-46 0-1-1 0-2 1-1 3 2 7 3 10 3z"
        fill="currentColor"
      />
    </LogoWrapper>
  );
}

export function GoodreadsLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 160 36" className={className}>
      <circle cx="14" cy="18" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="10" y="24" fontSize="14" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        g
      </text>
      <text x="32" y="24" fontSize="18" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        goodreads
      </text>
    </LogoWrapper>
  );
}

export function BookBubLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 128 36" className={className}>
      <path
        d="M6 10h10c3 0 5 2 5 5s-2 5.5-2 2.5c2 0 3.5 2 3.5 4.5 0 3-2 5-5.5 5H6V10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="26" y="25" fontSize="18" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        bookbub
      </text>
    </LogoWrapper>
  );
}

export function AppleBooksLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 152 36" className={className}>
      <path
        d="M14 8c-1 0-2 1-3 2-1-1-2-2-4-2-3 0-5 2-5 5 0 4 4 7 7 10 3-3 7-6 7-10 0-3-2-5-5-5z"
        fill="currentColor"
      />
      <text x="26" y="25" fontSize="17" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        Apple Books
      </text>
    </LogoWrapper>
  );
}

export function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 164 36" className={className}>
      <path
        d="M6 6l20 12L6 30V6z"
        fill="currentColor"
      />
      <text x="32" y="25" fontSize="16" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        Google Play
      </text>
    </LogoWrapper>
  );
}

export function IngramSparkLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 168 36" className={className}>
      <path
        d="M14 8l6 8-6 8-6-8 6-8z"
        fill="currentColor"
      />
      <text x="26" y="25" fontSize="15" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        IngramSpark
      </text>
    </LogoWrapper>
  );
}

export function BarnesNobleLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 188 36" className={className}>
      <rect x="4" y="8" width="18" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="11" y="24" fontSize="12" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        B&amp;N
      </text>
      <text x="30" y="25" fontSize="15" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        Barnes &amp; Noble
      </text>
    </LogoWrapper>
  );
}

export function KoboLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 96 36" className={className}>
      <rect x="4" y="8" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="9" y="24" fontSize="14" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        K
      </text>
      <text x="30" y="25" fontSize="19" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        Kobo
      </text>
    </LogoWrapper>
  );
}

export function NetGalleyLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 152 36" className={className}>
      <circle cx="8" cy="18" r="4" fill="currentColor" />
      <circle cx="20" cy="12" r="3" fill="currentColor" />
      <circle cx="20" cy="24" r="3" fill="currentColor" />
      <line x1="11" y1="16" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="11" y1="20" x2="17" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <text x="30" y="25" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        NetGalley
      </text>
    </LogoWrapper>
  );
}

export function StoryOriginLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 164 36" className={className}>
      <path
        d="M18 8c-6 4-10 8-10 12 0 4 4 8 10 8s10-4 10-8c0-4-4-8-10-12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line x1="18" y1="8" x2="18" y2="28" stroke="currentColor" strokeWidth="2" />
      <text x="34" y="25" fontSize="16" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        StoryOrigin
      </text>
    </LogoWrapper>
  );
}
