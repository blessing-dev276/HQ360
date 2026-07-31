type Socials = {
  facebook: string;
  whatsapp: string;
  linkedin: string;
  fiverr: string;
  email: string;
};

const iconClass = "size-4";

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M14 9h3l.4-3H14V4.5c0-.9.3-1.5 1.6-1.5H17.5V.3C17.2.25 16.1.15 14.8.15 12.1.15 10.3 1.8 10.3 4.2V6H7.5v3h2.8v9H14V9Z" />
    </svg>
  );
}

function WhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.03.79.81-2.95-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.07a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.33.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7 1.56.68 2.17.74 2.95.62.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.74 2.5 4.74 5.76V21h-4v-5.7c0-1.36-.03-3.1-1.94-3.1-1.94 0-2.24 1.47-2.24 3v5.8h-4V9Z" />
    </svg>
  );
}

function Fiverr() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M16.5 7.5v9h-2.4v-6.9h-3.6c-.8 0-1.3.5-1.3 1.3v.4h3.1v2.1H9.2v3.1H6.8v-3.1H5.4v-2.1h1.4v-.4c0-2.1 1.4-3.4 3.5-3.4h6.2ZM17.4 4.6a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
    </svg>
  );
}

function Gmail() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.1 8-5.1H4l8 5.1Zm0 2.3L4 10.3V17h16v-6.7l-8 5.1Z" />
    </svg>
  );
}

export function TeamSocials({ name, socials }: { name: string; socials: Socials }) {
  const items = [
    { label: "Facebook", href: socials.facebook, icon: <Facebook /> },
    { label: "WhatsApp", href: socials.whatsapp, icon: <WhatsApp /> },
    { label: "LinkedIn", href: socials.linkedin, icon: <LinkedIn /> },
    { label: "Fiverr", href: socials.fiverr, icon: <Fiverr /> },
    { label: "Email", href: socials.email, icon: <Gmail /> },
  ];

  return (
    <ul className="mt-5 flex items-center justify-center gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={`${name} on ${item.label}`}
            className="border-border text-muted-foreground hover:border-primary hover:text-primary flex size-9 items-center justify-center rounded-full border"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
