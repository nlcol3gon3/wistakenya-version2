import { createFileRoute, Link } from "@tanstack/react-router";
import { GlobeCanvas } from "@/components/GlobeCanvas";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <MetricStrip />
      <PurposeSection />
      <FeaturedPrograms />
      <UpcomingSection />
      <JoinCTA />
    </>
  );
}

function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setY(window.scrollY);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Globe underlay — feathered mask so it dissolves into the page */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full md:w-[72%]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 82% at 74% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.28) 78%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(ellipse 62% 82% at 74% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.28) 78%, rgba(0,0,0,0) 100%)",
          transform: `translate3d(0, ${y * -0.06}px, 0)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="aspect-square w-[min(760px,92vw,86vh)]">
            <GlobeCanvas />
          </div>
        </div>
      </div>

      {/* Extra haze that eases the left-column blend into the globe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-1/2 md:block"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.20 0.06 245 / 0.55) 0%, oklch(0.20 0.06 245 / 0.25) 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-32 pt-14 md:min-h-[calc(100vh-140px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:pb-24 md:pt-10">
        <div
          className="max-w-xl"
          style={{ transform: `translate3d(0, ${y * 0.06}px, 0)` }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
            Women in Shipping, Trade &amp; Logistics
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-white md:text-[5.5rem]">
            WISTA <span className="text-aqua">Kenya</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80 md:text-xl">
            A powerful home for women shaping shipping, trade, ports, logistics,
            policy, maritime services, and Kenya's blue economy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/membership"
              className="rounded-full bg-aqua px-7 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_rgba(115,221,255,0.6)] transition hover:bg-white"
            >
              Become a member
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore programs
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span>Global sisterhood</span>
            <span className="text-aqua/50">·</span>
            <span>African momentum</span>
            <span className="text-aqua/50">·</span>
            <span>Kenyan leadership</span>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>

      {/* Bottom fade — content flows into the next section with no seam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.18 0.05 245 / 0.9))",
        }}
      />
    </section>
  );
}

function MetricStrip() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
        {[
          { big: "60+", label: "National WISTA associations" },
          { big: "1974", label: "Global legacy of women in shipping" },
          { big: "Kenya", label: "Local leadership for the blue economy" },
        ].map((m) => (
          <div key={m.label}>
            <div className="font-display text-4xl text-aqua md:text-5xl">{m.big}</div>
            <div className="mt-2 text-sm text-white/70">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PurposeSection() {
  const focus = [
    { n: "01", h: "Professional growth", p: "Mentorship, leadership development, and practical knowledge exchange." },
    { n: "02", h: "Industry visibility", p: "Platforms that amplify women's expertise across maritime and trade." },
    { n: "03", h: "Regional collaboration", p: "Connections with African and global WISTA communities." },
    { n: "04", h: "Inclusive progress", p: "Advocacy for equitable access, representation, and opportunity." },
  ];
  return (
    <Section
      eyebrow="Our purpose"
      title="Connecting talent, opportunity, and influence."
      intro="WISTA Kenya brings together women professionals and allies who want a stronger, more inclusive maritime and trade sector — with room for mentorship, visibility, technical learning, and policy contribution."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map((f) => (
          <article
            key={f.n}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-aqua/40 hover:bg-white/[0.06]"
          >
            <div className="font-display text-4xl text-aqua/70 transition group-hover:text-aqua">
              {f.n}
            </div>
            <h3 className="mt-4 font-display text-xl text-white">{f.h}</h3>
            <p className="mt-2 text-sm text-white/70">{f.p}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/about" className="text-sm font-semibold text-aqua hover:text-white">
          Learn about WISTA Kenya →
        </Link>
      </div>
    </Section>
  );
}

function FeaturedPrograms() {
  const items = [
    { v: "mentorship" as const, tag: "Mentorship", h: "Mentorship circles", p: "Guided peer groups matching experience with ambition across the maritime value chain." },
    { v: "forum" as const, tag: "Forum", h: "Leadership forums", p: "Roundtables and masterclasses on governance, trade, compliance, and industry change." },
    { v: "outreach" as const, tag: "Outreach", h: "Student outreach", p: "Career exposure for emerging talent interested in shipping, ports, logistics, and trade." },
  ];
  return (
    <Section
      band="deep"
      eyebrow="Featured programs"
      title="Built for leaders at every stage."
      intro="From young professionals finding their path to senior leaders shaping national policy, WISTA Kenya programming creates practical pathways for growth."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.h}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-aqua/40"
          >
            <VisualPanel variant={p.v} tag={p.tag} aspect="video" />
            <h3 className="mt-5 font-display text-xl text-white">{p.h}</h3>
            <p className="mt-2 text-sm text-white/70">{p.p}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/programs"
          className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-aqua hover:bg-white/10"
        >
          View all programs
        </Link>
      </div>
    </Section>
  );
}

function UpcomingSection() {
  return (
    <Section eyebrow="Events & news" title="What is happening next.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="relative flex gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <DateBadge day="25" month="Jun" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua/90">
              Regional conference
            </p>
            <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
              8th WISTA Africa Regional Conference
            </h3>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              A continental forum bringing WISTA members and maritime stakeholders together
              to exchange ideas on leadership, resilience, and inclusive growth.
            </p>
            <Link
              to="/events"
              className="mt-4 inline-block text-sm font-semibold text-aqua hover:text-white"
            >
              See events and news →
            </Link>
          </div>
        </article>
        <div className="grid gap-4">
          {[
            { tag: "News", h: "Celebrating seafarers and maritime professionals", p: "Recognising the resilience, skill, and leadership that keep trade moving." },
            { tag: "Update", h: "Member spotlight series opens for nominations", p: "Share stories of women leading across ports, logistics, shipping, and policy." },
          ].map((n) => (
            <article
              key={n.h}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-aqua/40"
            >
              <span className="inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-aqua">
                {n.tag}
              </span>
              <h3 className="mt-3 font-display text-lg text-white">{n.h}</h3>
              <p className="mt-1 text-sm text-white/70">{n.p}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function JoinCTA() {
  return (
    <Section band="soft">
      <div className="relative overflow-hidden rounded-3xl border border-aqua/30 bg-gradient-to-br from-[oklch(0.30_0.10_245)] to-[oklch(0.20_0.06_245)] p-8 md:p-14">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aqua/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-6 md:grid-cols-[1.4fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Membership
            </p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-5xl">
              Join a network with a generous spirit.
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Become part of a community that makes introductions, shares knowledge, and
              creates visible pathways for women to lead.
            </p>
          </div>
          <Link
            to="/membership"
            className="rounded-full bg-aqua px-7 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_rgba(115,221,255,0.6)] transition hover:bg-white"
          >
            Join WISTA Kenya
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/10 text-center">
      <div>
        <div className="font-display text-2xl text-aqua">{day}</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
          {month}
        </div>
      </div>
    </div>
  );
}
