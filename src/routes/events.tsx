import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";
import { DateBadge } from "./index";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & News | WISTA Kenya" },
      {
        name: "description",
        content: "Events, news, updates, and member stories from WISTA Kenya.",
      },
      { property: "og:title", content: "Events & News — WISTA Kenya" },
      {
        property: "og:description",
        content: "Stay close to the conversations shaping Kenya's maritime sector.",
      },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { day: "25", month: "Jun", h: "8th WISTA Africa Regional Conference", p: "Lagos, Nigeria. A regional forum for WISTA members and maritime stakeholders.", cta: "Ask about participation" },
  { day: "18", month: "Jul", h: "Leadership breakfast: Women in port operations", p: "Nairobi. A focused conversation on leadership pathways and operational excellence.", cta: "Register interest" },
  { day: "14", month: "Aug", h: "Young professionals maritime careers forum", p: "A career exposure session for students and early-career professionals.", cta: "Partner with us" },
];

const NEWS = [
  { v: "network" as const, tag: "Story", meta: "Member story", h: "Women leading the next chapter of Kenya's blue economy", p: "A feature series profiling professionals across maritime, shipping, logistics, and policy." },
  { v: "mentorship" as const, tag: "Update", meta: "Update", h: "Mentorship circle applications open", p: "Members can express interest in mentoring, being mentored, or facilitating peer groups." },
  { v: "events" as const, tag: "Recap", meta: "Event recap", h: "Regional collaboration across African WISTA associations", p: "Strengthening cross-border relationships for leadership, skills, and sector visibility." },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & News"
        title="Stay close to the conversations shaping the sector."
        intro="Explore upcoming programs, regional forums, member stories, and WISTA Kenya updates from the maritime and trade community."
        visual="events"
        visualTag="Events"
        visualLabel="Events and updates"
      />

      <Section eyebrow="Upcoming events" title="Calendar highlights.">
        <div className="grid gap-5">
          {EVENTS.map((e) => (
            <article
              key={e.h}
              className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-start md:p-8"
            >
              <DateBadge day={e.day} month={e.month} />
              <div className="min-w-0">
                <h3 className="font-display text-xl text-white md:text-2xl">{e.h}</h3>
                <p className="mt-2 text-white/75">{e.p}</p>
                <a
                  href="/contact"
                  className="mt-3 inline-block text-sm font-semibold text-aqua hover:text-white"
                >
                  {e.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section band="soft" eyebrow="Latest news" title="Stories and updates.">
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.h}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:border-aqua/40"
            >
              <VisualPanel variant={n.v} tag={n.tag} aspect="video" className="rounded-none border-0" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua/90">
                  {n.meta}
                </span>
                <h3 className="mt-2 font-display text-lg text-white">{n.h}</h3>
                <p className="mt-2 text-sm text-white/70">{n.p}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SubscribePanel />
      </Section>
    </>
  );
}

function SubscribePanel() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <div className="rounded-3xl border border-aqua/30 bg-gradient-to-br from-[oklch(0.30_0.10_245)] to-[oklch(0.20_0.06_245)] p-8 md:p-12">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
            Newsletter
          </p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
            Receive WISTA Kenya updates.
          </h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Email address"
            className="flex-1 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-aqua"
          />
          <button
            type="submit"
            className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Subscribe
          </button>
        </form>
        {sent && (
          <p className="text-sm text-aqua md:col-span-2">
            Thank you. You're on the WISTA Kenya update list.
          </p>
        )}
      </div>
    </div>
  );
}
