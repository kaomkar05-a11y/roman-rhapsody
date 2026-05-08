import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isOpenNow } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/reserve", label: "Reserve" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openNow, setOpenNow] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    setOpenNow(isOpenNow());
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        overHero
          ? "bg-transparent"
          : scrolled
            ? "bg-background/90 backdrop-blur-md shadow-soft"
            : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-baseline gap-2 anim-logo-pulse origin-left" onClick={() => setOpen(false)}>
          <span className={`font-display text-2xl font-bold leading-none transition-colors ${overHero ? "text-gold" : "text-primary"}`}>Caffè</span>
          <span className={`font-display text-xl leading-none transition-colors ${overHero ? "text-cream" : "text-charcoal"}`}>Delle Commari</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-underline text-sm font-medium transition-colors ${overHero ? "text-cream/90 hover:text-gold" : "text-foreground/80 hover:text-primary"}`}
              activeProps={{ className: overHero ? "text-gold" : "text-primary", "data-active": "true" } as never}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <span className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors ${overHero ? "bg-cream/10 text-cream backdrop-blur" : "bg-secondary"}`}>
            <span className={`h-2 w-2 rounded-full ${openNow ? "bg-emerald-500 anim-pulse-glow" : "bg-muted-foreground"}`} style={{ boxShadow: openNow ? "0 0 0 0 rgba(16,185,129,.6)" : undefined }} />
            {openNow ? "Open now" : "Closed"}
          </span>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-md p-2 ${overHero ? "text-cream" : "text-foreground"}`}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <span className="mt-2 flex items-center gap-2 text-xs">
              <span className={`h-2 w-2 rounded-full ${openNow ? "bg-emerald-500" : "bg-muted-foreground"}`} />
              {openNow ? "Open now" : "Closed"}
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}
