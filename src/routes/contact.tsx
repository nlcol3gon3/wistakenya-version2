import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | WISTA Kenya" },
      {
        name: "description",
        content:
          "Contact WISTA Kenya for membership enquiries, partnerships, programs, and event participation.",
      },
      { property: "og:title", content: "Contact WISTA Kenya" },
      {
        property: "og:description",
        content: "Start a conversation about membership, programs, events, and partnerships.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with WISTA Kenya."
        intro="Reach out about membership, partnerships, speaking opportunities, mentorship, events, and collaboration across Kenya's maritime and trade community."
        visual="contact"
        visualTag="Contact"
        visualLabel="Membership enquiry desk"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Secretariat
            </p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              How we can help.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                { s: "Location", h: "Nairobi, Kenya", p: "Serving members across Kenya's maritime, logistics, and trade ecosystem." },
                { s: "Membership", h: "Enquiries and onboarding", p: "Ask about eligibility, member categories, programming, and next steps." },
                { s: "Partnerships", h: "Programs and events", p: "Invite WISTA Kenya to collaborate on forums, mentorship, outreach, or research." },
              ].map((c) => (
                <article
                  key={c.h}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/90">
                    {c.s}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-white">{c.h}</h3>
                  <p className="mt-1 text-sm text-white/70">{c.p}</p>
                </article>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section band="soft">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Visit and host
            </p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Connecting across Kenya's maritime centres.
            </h2>
            <p className="mt-4 text-white/75">
              WISTA Kenya activities can convene members, partners, and guests across
              Nairobi, Mombasa, and regional maritime spaces.
            </p>
          </div>
          <VisualPanel
            variant="map"
            tag="Map"
            label="Nairobi · Mombasa · regional activities"
            aspect="wide"
          />
        </div>
      </Section>
    </>
  );
}

function ContactForm() {
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
        Message WISTA Kenya
      </p>
      <h2 className="mt-2 font-display text-2xl text-white">Send an enquiry.</h2>

      <div className="mt-6 grid gap-4">
        <Field label="Full name" name="name" type="text" autoComplete="name" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
        <label className="block">
          <span className="mb-1.5 block text-sm text-white/80">Enquiry type</span>
          <select
            required
            name="type"
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]"
          >
            <option value="" className="bg-navy">Select one</option>
            <option className="bg-navy">Membership enquiry</option>
            <option className="bg-navy">Program partnership</option>
            <option className="bg-navy">Event invitation</option>
            <option className="bg-navy">Media or speaking request</option>
            <option className="bg-navy">General enquiry</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-white/80">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
        >
          Send message
        </button>
        {sent && (
          <p className="text-sm text-aqua">
            Thank you. Your message has been prepared for the WISTA Kenya team.
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
