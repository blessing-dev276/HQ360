import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { CAPABILITY_MENU, CTAS, INDUSTRY_MENU, PRIMARY_NAV } from "@/config/brand";

type MenuKey = "industries" | "capabilities";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Close everything on route change.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled || openMenu
          ? "border-border bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background",
      )}
    >
      <div ref={navRef} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link to="/" aria-label="HQ360 home" className="shrink-0">
            <Logo size={30} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
            {PRIMARY_NAV.map((item) =>
              item.menu ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.menu}
                    aria-controls={`${menuId}-${item.menu}`}
                    onClick={() =>
                      setOpenMenu((cur) => (cur === item.menu ? null : (item.menu as MenuKey)))
                    }
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      openMenu === item.menu
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform",
                        openMenu === item.menu && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to as string}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              to={CTAS.primary.to}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-editorial transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {CTAS.primary.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls={`${menuId}-mobile`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop mega menu */}
        {openMenu ? (
          <div
            id={`${menuId}-${openMenu}`}
            className="absolute inset-x-0 top-full hidden border-b border-border bg-background/98 backdrop-blur lg:block"
          >
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
              {openMenu === "industries" ? (
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Built around your industry
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
                      {INDUSTRY_MENU.map((it) => (
                        <li key={it.to}>
                          <Link
                            to={it.to}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-brand"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/60 p-6">
                    <p className="font-display text-lg">Don't see yours?</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The system adapts to most industries. See the full list or start a
                      conversation.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                      <Link to="/industries" className="text-brand hover:underline">
                        View all industries &rarr;
                      </Link>
                      <Link to={CTAS.primary.to} className="text-foreground hover:underline">
                        Start a project &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    What we do
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {CAPABILITY_MENU.map((it) => (
                      <li key={it.to}>
                        <Link
                          to={it.to}
                          className="block rounded-xl border border-transparent px-4 py-3 hover:border-border hover:bg-secondary/60"
                        >
                          <span className="block text-sm font-semibold text-foreground">
                            {it.label}
                          </span>
                          <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                            {it.blurb}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm font-semibold">
                    <Link to="/capabilities" className="text-brand hover:underline">
                      All services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <div
          id={`${menuId}-mobile`}
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="px-5 py-6 sm:px-6">
            <MobileGroup
              title="Industries"
              items={INDUSTRY_MENU}
              extra={{ label: "All industries", to: "/industries" }}
            />
            <MobileGroup
              title="Services"
              items={CAPABILITY_MENU.map((c) => ({ label: c.label, to: c.to }))}
              extra={{ label: "All services", to: "/capabilities" }}
            />
            <div className="mt-2 flex flex-col border-t border-border pt-2">
              {PRIMARY_NAV.filter((n) => n.to).map((n) => (
                <Link
                  key={n.label}
                  to={n.to as string}
                  className="border-b border-border/60 py-3.5 text-base font-medium text-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <Link
              to={CTAS.primary.to}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              {CTAS.primary.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileGroup({
  title,
  items,
  extra,
}: {
  title: string;
  items: { label: string; to: string }[];
  extra?: { label: string; to: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3.5 text-base font-medium text-foreground"
      >
        {title}
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <ul className="pb-3">
          {items.map((it) => (
            <li key={it.to}>
              <Link to={it.to} className="block py-2.5 pl-3 text-sm text-muted-foreground">
                {it.label}
              </Link>
            </li>
          ))}
          {extra ? (
            <li>
              <Link to={extra.to} className="block py-2.5 pl-3 text-sm font-semibold text-brand">
                {extra.label}
              </Link>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
