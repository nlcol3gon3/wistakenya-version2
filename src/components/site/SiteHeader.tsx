import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavChild = { to: string; label: string };
type NavItem = { label: string; to?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "About",
    children: [
      { to: "/about", label: "About WISTA Kenya" },
      { to: "/leadership", label: "Board & Leadership" },
    ],
  },
  { to: "/membership", label: "Membership" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events & News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[oklch(0.16_0.05_245/0.75)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      {/* Notice bar */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-[11px] uppercase tracking-[0.18em] text-white/60">
          <span>Women shaping Kenya's maritime, trading &amp; logistics future.</span>
          <Link to="/membership" className="font-semibold text-aqua hover:text-white">
            Join the network →
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="WISTA Kenya home">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_12px_32px_-18px_rgba(115,221,255,0.75)]">
            <img
              src="/images/brand/wista-kenya-logo-transparent.png"
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-20 max-w-none -translate-x-1/2"
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            WISTA <span className="text-aqua">Kenya</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:text-white",
                    item.children.some((c) => pathname === c.to) && "text-aqua",
                  )}
                  onClick={() => setAboutOpen((v) => !v)}
                  aria-expanded={aboutOpen}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {aboutOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[oklch(0.20_0.05_245/0.95)] p-2 shadow-2xl backdrop-blur-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:text-white",
                  pathname === item.to && "text-aqua",
                )}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Enquiry
          </Link>
          <Link
            to="/membership"
            className="rounded-full bg-aqua px-4 py-2 text-sm font-semibold text-navy shadow-[0_10px_30px_-12px_rgba(115,221,255,0.6)] transition hover:bg-white"
          >
            Join WISTA
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-[oklch(0.20_0.05_245/0.95)] p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-white/5 py-2">
                    <div className="px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
                      {item.label}
                    </div>
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-xl px-2 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to!}
                    className="block border-b border-white/5 px-2 py-3 text-sm text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-3 flex gap-2">
                <Link
                  to="/contact"
                  className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Enquiry
                </Link>
                <Link
                  to="/membership"
                  className="flex-1 rounded-full bg-aqua px-4 py-2 text-center text-sm font-semibold text-navy"
                >
                  Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
