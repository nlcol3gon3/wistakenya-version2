import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership | WISTA Kenya" },
      {
        name: "description",
        content:
          "Join WISTA Kenya and connect with women professionals in shipping, trade, logistics, and the blue economy.",
      },
      { property: "og:title", content: "Membership — WISTA Kenya" },
      {
        property: "og:description",
        content:
          "Membership gives professionals a trusted platform for mentorship, visibility, learning, and collaboration.",
      },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join WISTA Kenya."
        intro="Membership gives professionals a trusted platform for mentorship, visibility, learning, and collaboration across Kenya's maritime and trade sectors."
        visual="membership"
        visualTag="Membership"
        visualLabel="Member network"
        action={
          <a
            href="#membership-form"
            className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Start your enquiry
          </a>
        }
      />

      <Section
        eyebrow="Why join"
        title="Designed for meaningful professional growth."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "High-trust connections", p: "Meet peers, mentors, and senior leaders across the maritime value chain." },
            { h: "Learning and exposure", p: "Access roundtables, masterclasses, site visits, and sector briefings." },
            { h: "Leadership visibility", p: "Share expertise through panels, spotlights, working groups, and events." },
            { h: "Global WISTA network", p: "Connect with regional and international WISTA communities and opportunities." },
          ].map((b) => (
            <article
              key={b.h}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-aqua/40"
            >
              <h3 className="font-display text-lg text-white">{b.h}</h3>
              <p className="mt-2 text-sm text-white/70">{b.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        band="soft"
        eyebrow="Membership pathway"
        title="Simple, clear, and guided."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { n: "1", h: "Submit enquiry", p: "Tell WISTA Kenya about your sector, experience, and membership interest." },
            { n: "2", h: "Secretariat review", p: "The membership team confirms eligibility, category, and next steps." },
            { n: "3", h: "Join the community", p: "Take part in programming, committees, mentorship, and networking forums." },
          ].map((s) => (
            <article
              key={s.n}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="font-display text-5xl text-aqua/60">{s.n}</div>
              <h3 className="mt-3 font-display text-lg text-white">{s.h}</h3>
              <p className="mt-2 text-sm text-white/70">{s.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="membership-form">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Who can enquire
            </p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Professionals connected to maritime, trade, and logistics.
            </h2>
            <p className="mt-4 text-white/75">
              WISTA Kenya welcomes enquiries from women working in shipping, ports,
              logistics, trade, marine services, academia, law, insurance, finance,
              technology, policy, sustainability, and related sectors.
            </p>
            <p className="mt-3 text-white/75">
              Organisations seeking to support women leadership and inclusive industry
              growth can also contact WISTA Kenya about partnership opportunities.
            </p>
          </div>

          <MembershipForm />
        </div>
      </Section>
    </>
  );
}

function MembershipForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
        Membership enquiry
      </p>
      <h2 className="mt-2 font-display text-2xl text-white">Tell us about you.</h2>

      <div className="mt-6 grid gap-4">
        <Field label="Full name" name="name" type="text" autoComplete="name" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
        <Field label="Sector or organisation" name="sector" type="text" required />
        <label className="block">
          <span className="mb-1.5 block text-sm text-white/80">Membership interest</span>
          <select
            required
            name="interest"
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]"
          >
            <option value="" className="bg-navy">Select one</option>
            <option className="bg-navy">Individual membership</option>
            <option className="bg-navy">Student or young professional</option>
            <option className="bg-navy">Corporate partnership</option>
            <option className="bg-navy">Speaking or mentorship</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-white/80">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
        >
          Send enquiry
        </button>
        {sent && (
          <p className="text-sm text-aqua">
            Thank you. Your enquiry has been prepared for the WISTA Kenya team.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-white/80">{label}</span>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-aqua focus:bg-white/[0.06]"
      />
    </label>
  );
}
