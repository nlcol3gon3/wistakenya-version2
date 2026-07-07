import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | WISTA Kenya" },
      {
        name: "description",
        content:
          "Explore WISTA Kenya programs in mentorship, leadership, policy, outreach, and blue economy collaboration.",
      },
      { property: "og:title", content: "Programs — WISTA Kenya" },
      {
        property: "og:description",
        content:
          "Practical platforms for influence, skill, and connection across Kenya's maritime economy.",
      },
    ],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  { v: "mentorship" as const, tag: "Mentorship", title: "Mentorship circles", eyebrow: "Mentorship", p: "Structured peer and senior-member mentoring for career navigation, leadership confidence, sector orientation, and professional accountability." },
  { v: "forum" as const, tag: "Leadership", title: "Leadership forums", eyebrow: "Leadership", p: "Forums that bring practitioners, regulators, and industry leaders together for serious conversations on governance, growth, resilience, and innovation." },
  { v: "port" as const, tag: "Port visit", title: "Port and site visits", eyebrow: "Industry exposure", p: "Guided visits that help members understand operations across ports, shipping services, logistics hubs, maritime education, and trade infrastructure." },
  { v: "outreach" as const, tag: "Outreach", title: "Youth and student outreach", eyebrow: "Pipeline", p: "Career talks, student engagements, and exposure opportunities for young women considering maritime, logistics, shipping, and trade professions." },
];

const INITIATIVES = [
  { tag: "Policy", h: "Inclusive maritime policy", p: "Contribution to sector conversations around equity, safety, skills, and participation." },
  { tag: "Digital", h: "Technology and trade", p: "Exploring digital tools, data, cybersecurity, and innovation in logistics and trade." },
  { tag: "Blue economy", h: "Sustainability forums", p: "Convening practical discussions on climate, ocean stewardship, and responsible growth." },
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Practical platforms for influence, skill, and connection."
        intro="WISTA Kenya programs are designed to help members build confidence, deepen sector knowledge, and contribute to the future of Kenya's maritime economy."
        visual="forum"
        visualTag="Programs"
        visualLabel="Workshops and forums"
      />

      <Section>
        <div className="grid gap-8">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 md:items-center md:p-8 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <VisualPanel variant={p.v} tag={p.tag} aspect="video" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
                  {p.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-white/75">{p.p}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        band="deep"
        eyebrow="Working groups"
        title="Member-led initiatives with practical outcomes."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {INITIATIVES.map((i) => (
            <article
              key={i.h}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">
                {i.tag}
              </span>
              <h3 className="mt-4 font-display text-xl text-white">{i.h}</h3>
              <p className="mt-2 text-sm text-white/70">{i.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section band="soft">
        <div className="grid gap-6 rounded-3xl border border-aqua/30 bg-gradient-to-br from-[oklch(0.30_0.10_245)] to-[oklch(0.20_0.06_245)] p-8 md:grid-cols-[1.4fr_auto] md:items-center md:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Get involved
            </p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              Bring your expertise into the room.
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Members can propose sessions, volunteer for committees, host visits, or
              mentor emerging professionals.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Contact WISTA Kenya
          </Link>
        </div>
      </Section>
    </>
  );
}
