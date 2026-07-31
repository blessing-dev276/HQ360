import { useEffect, useState } from "react";

const KEY = "hos-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card px-5 py-4 shadow-lift lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use a small number of cookies to understand how the site is used. Nothing is sold or
          shared. Read the{" "}
          <a href="/privacy" className="text-primary underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-fire px-5 py-2 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
