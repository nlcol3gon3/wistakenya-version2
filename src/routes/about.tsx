import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | WISTA Kenya" },
      {
        name: "description",
        content:
          "Learn about WISTA Kenya, its mission, vision, values, and role in the maritime and trade sector.",
      },
      { property: "og:title", content: "About WISTA Kenya" },
      {
        property: "og:description",
        content:
          "Purposeful leadership for maritime, trade, and logistics — the WISTA Kenya story.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WISTA Kenya"
        title="Purposeful leadership for maritime, trade, and logistics."
        intro="WISTA Kenya is part of the global WISTA community and exists to connect, empower, and elevate women professionals contributing to Kenya's blue economy."
        visual="network"
        visualTag="Community"
        visualLabel="Leadership and community"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Mission
            </p>
            <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
              To promote the advancement, visibility, and professional growth of women in
              Kenya's maritime and trade ecosystem.
            </h2>
          </article>
          <article className="rounded-3xl border border-aqua/25 bg-gradient-to-br from-[oklch(0.32_0.12_240)] to-[oklch(0.22_0.07_245)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
              Vision
            </p>
            <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
              A maritime and logistics sector where women lead confidently, participate
              fully, and help shape sustainable national growth.
            </h2>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Who we serve"
        title="A network across the whole value chain."
        intro="WISTA Kenya welcomes professionals working in shipping, port operations, freight forwarding, customs, trade finance, marine services, law, insurance, policy, academia, sustainability, technology, and related sectors."
        band="soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { h: "Connection", p: "Creating useful relationships across Kenya, Africa, and the wider WISTA network." },
            { h: "Competence", p: "Supporting members with learning, mentorship, technical exposure, and confidence." },
            { h: "Contribution", p: "Helping members bring informed voices to industry conversations and policy tables." },
          ].map((v) => (
            <article
              key={v.h}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-display text-xl text-white">{v.h}</h3>
              <p className="mt-3 text-sm text-white/70">{v.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Global alignment"
        title="Local energy, international reach."
        intro="WISTA International was founded in 1974 and connects thousands of members through national associations around the world. WISTA Kenya brings that global spirit into a Kenyan context, shaped by local needs and regional opportunity."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { y: "1974", h: "WISTA International founded", p: "A global platform begins for women in shipping and trading." },
            { y: "2018", h: "IMO consultative status", p: "WISTA's global policy voice strengthens through international recognition." },
            { y: "Kenya", h: "National association impact", p: "WISTA Kenya builds community, visibility, and growth pathways locally." },
          ].map((t) => (
            <article
              key={t.y}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">
                {t.y}
              </span>
              <h3 className="mt-4 font-display text-xl text-white">{t.h}</h3>
              <p className="mt-2 text-sm text-white/70">{t.p}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Leadership"
        title="Executive Committee."
        intro="A dedicated Executive Committee guides member engagement, programming, partnerships, and governance — supported by a wider Board drawn from across the maritime, trade, and logistics value chain."
      >
        <div className="text-center">
          <Link
            to="/leadership"
            className="rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Meet the full board
          </Link>
        </div>
      </Section>
    </>
  );
}
