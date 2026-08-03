import { useEffect, useState } from "react";

const KEY = "sp_exit_offer_seen";
const SLUG = "brand-and-book-audit";
const TITLE = "The Brand and Book Audit";
const FILE = "/resources/hq360-brand-and-book-audit.pdf";

export function ExitIntentOffer() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(KEY) === "1") return;
    let armed = false;
    const arm = window.setTimeout(() => {
      armed = true;
    }, 8000);

    const show = () => {
      if (!armed) return;
      localStorage.setItem(KEY, "1");
      setOpen(true);
    };

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(arm);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || busy) return;
    setBusy(true);
    try {
      await fetch("/api/public/resource-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, slug: SLUG, title: TITLE }),
      });
    } catch {
      // still let them download
    }
    setBusy(false);
    setSent(true);
    const a = document.createElement("a");
    a.href = FILE;
    a.download = "";
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free brand and book audit"
        className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-lift"
      >
        {sent ? (
          <>
            <h2 className="font-serif text-2xl">Your audit guide is downloading.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A copy is on its way to your inbox as well. Reply to it any time and a strategist will
              read your listing for free.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Keep reading the site
            </button>
          </>
        ) : (
          <>
            <p className="text-xs tracking-[0.18em] text-primary uppercase">Before you go</p>
            <h2 className="mt-3 font-serif text-2xl">
              Take the free audit guide most authors pay for.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Twenty checks on your listing, cover, blurb and reviews. Sent to your inbox and
              downloaded here in one click. No call required.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-3">
              <label className="sr-only" htmlFor="exit-email">
                Email address
              </label>
              <input
                id="exit-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm"
              />
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-70"
              >
                {busy ? "Sending" : "Send me the audit guide"}
              </button>
            </form>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-xs text-muted-foreground underline underline-offset-4"
            >
              No thanks, close this
            </button>
          </>
        )}
      </div>
    </div>
  );
}
