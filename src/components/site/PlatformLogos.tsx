function LogoWrapper({
  children,
  viewBox,
  className,
}: {
  children: React.ReactNode;
  viewBox: string;
  className?: string;
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
    <LogoWrapper viewBox="0 0 120 32" className={className}>
      <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        amazon
      </text>
      <path
        d="M68 26c8 3 20 4 28 0 1-1 2 0 1 1-8 6-30 6-39 0-1-1 0-2 1-1 3 2 6 3 10 3z"
        fill="currentColor"
      />
    </LogoWrapper>
  );
}

export function GoodreadsLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 140 32" className={className}>
      <text x="0" y="24" fontSize="19" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        goodreads
      </text>
    </LogoWrapper>
  );
}

export function BookBubLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 110 32" className={className}>
      <text x="0" y="24" fontSize="20" fontWeight="800" fontFamily="Inter, system-ui, sans-serif">
        bookbub
      </text>
    </LogoWrapper>
  );
}

export function AppleBooksLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 150 32" className={className}>
      <path
        d="M14 6c-1 0-2 1-3 2-1-1-2-2-4-2-3 0-5 2-5 5 0 4 4 7 7 10 3-3 7-6 7-10 0-3-2-5-5-5z"
        fill="currentColor"
      />
      <text x="24" y="24" fontSize="18" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        Apple Books
      </text>
    </LogoWrapper>
  );
}

export function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 170 32" className={className}>
      <path
        d="M6 4l18 12L6 28V4z"
        fill="currentColor"
      />
      <text x="30" y="24" fontSize="17" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        Google Play
      </text>
    </LogoWrapper>
  );
}

export function IngramSparkLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 160 32" className={className}>
      <text x="0" y="24" fontSize="17" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        IngramSpark
      </text>
    </LogoWrapper>
  );
}

export function BarnesNobleLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 180 32" className={className}>
      <text x="0" y="24" fontSize="16" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        Barnes &amp; Noble
      </text>
    </LogoWrapper>
  );
}

export function KoboLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 80 32" className={className}>
      <text x="0" y="24" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        Kobo
      </text>
    </LogoWrapper>
  );
}

export function NetGalleyLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 130 32" className={className}>
      <text x="0" y="24" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        NetGalley
      </text>
    </LogoWrapper>
  );
}

export function StoryOriginLogo({ className }: { className?: string }) {
  return (
    <LogoWrapper viewBox="0 0 150 32" className={className}>
      <text x="0" y="24" fontSize="18" fontWeight="700" fontFamily="Fraunces, Georgia, serif">
        StoryOrigin
      </text>
    </LogoWrapper>
  );
}
