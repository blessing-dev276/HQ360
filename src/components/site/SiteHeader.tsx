import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Link to="/" aria-label="Synergy Pubs home" className="shrink-0">
          <Logo size={34} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-white shadow-editorial focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Book a Free Strategy Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none xl:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-full bg-fire px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Free Strategy Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
