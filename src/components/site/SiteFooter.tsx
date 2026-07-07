import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[oklch(0.18_0.05_245/0.6)] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="block w-fit" aria-label="WISTA Kenya home">
              <img
                src="/images/brand/wista-kenya-logo-white.png"
                alt="WISTA Kenya"
                className="h-auto w-32"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Connecting women in shipping, trade, logistics, ports, policy, and the blue
              economy.
            </p>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { to: "/about", label: "About" },
              { to: "/leadership", label: "Board & Leadership" },
              { to: "/membership", label: "Membership" },
              { to: "/programs", label: "Programs" },
              { to: "/events", label: "Events & News" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
              { to: "/contact", label: "Membership enquiry" },
              { to: "/membership", label: "Join WISTA Kenya" },
            ]}
          />
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/80">
              Follow
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
              {["LinkedIn", "X", "Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-white/15 px-3 py-1 transition hover:border-aqua hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/50">
              Official WISTA Kenya channels and member updates.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
          <span>© {year} WISTA Kenya. All rights reserved.</span>
          <a href="#top" className="hover:text-aqua">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/80">
        {title}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
        {links.map((l, i) => (
          <Link key={`${l.to}-${i}`} to={l.to} className="w-fit transition hover:text-white">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
