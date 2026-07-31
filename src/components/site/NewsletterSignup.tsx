import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const dark = variant === "dark";

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <p
        role="status"
        className={cn("text-sm", dark ? "text-gold" : "text-primary")}
      >
        You are on the list. Look for the next letter at the start of the month.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <label htmlFor={`news-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`news-${variant}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className={cn(
          "w-full rounded-full border px-5 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
          dark
            ? "border-white/20 bg-white/5 text-[oklch(0.97_0.008_85)] placeholder:text-[oklch(0.7_0.012_80)]"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground",
        )}
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-fire px-6 py-3 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Subscribe
      </button>
    </form>
  );
}
