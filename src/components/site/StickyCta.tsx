import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const HIDDEN_ON = ["/contact"];

export function StickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [cookieDone, setCookieDone] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("sp_sticky_cta_dismissed") === "1");
    const check = () => setCookieDone(Boolean(localStorage.getItem("hos-cookie-consent")));
    check();
    const id = window.setInterval(check, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible || !cookieDone || HIDDEN_ON.includes(pathname)) return null;


  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="text-sm leading-snug">
          <span className="font-medium">Free fifteen minute launch audit.</span>{" "}
          <span className="text-muted-foreground">
            We read your listing and tell you what is costing you sales.
          </span>
        </p>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Book my audit
          </Link>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => {
              sessionStorage.setItem("sp_sticky_cta_dismissed", "1");
              setDismissed(true);
            }}
            className="rounded-full border border-border px-3 py-2 text-xs text-muted-foreground"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
