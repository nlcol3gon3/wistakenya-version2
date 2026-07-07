import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { VisualPanel } from "@/components/site/VisualPanel";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | WISTA Kenya" },
      {
        name: "description",
        content:
          "Gallery moments from WISTA Kenya events, member activities, programs, and partnerships.",
      },
      { property: "og:title", content: "Gallery — WISTA Kenya" },
      {
        property: "og:description",
        content: "A visual archive of WISTA Kenya community moments.",
      },
    ],
  }),
  component: GalleryPage,
});

type Category = "all" | "events" | "programs" | "members";

interface Item {
  variant: React.ComponentProps<typeof VisualPanel>["variant"];
  tag: string;
  label: string;
  category: Exclude<Category, "all">;
  size?: "sm" | "tall" | "wide" | "large";
}

const ITEMS: Item[] = [
  { variant: "events", tag: "Event", label: "Annual conference", category: "events", size: "large" },
  { variant: "mentorship", tag: "Program", label: "Mentorship session", category: "programs" },
  { variant: "network", tag: "Member", label: "Member spotlight", category: "members" },
  { variant: "forum", tag: "Forum", label: "Regional forum", category: "events", size: "tall" },
  { variant: "port", tag: "Port", label: "Port visit", category: "programs" },
  { variant: "membership", tag: "Members", label: "Committee work", category: "members" },
  { variant: "outreach", tag: "Outreach", label: "Student outreach", category: "programs", size: "wide" },
];

const FILTERS: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "events", label: "Events" },
  { key: "programs", label: "Programs" },
  { key: "members", label: "Members" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Category>("all");
  const visible = ITEMS.filter((i) => filter === "all" || i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual archive of WISTA Kenya community moments."
        intro="Moments from events, port visits, mentorship sessions, conferences, and member spotlights across Kenya's maritime and trade community."
        visual="gallery"
        visualTag="Gallery"
        visualLabel="Gallery feature"
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                filter === f.key
                  ? "border-aqua bg-aqua text-navy"
                  : "border-white/15 text-white/70 hover:border-white/40 hover:text-white",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((it, i) => (
            <div
              key={`${it.label}-${i}`}
              className={cn(
                "animate-fade-in",
                it.size === "large" && "sm:col-span-2 sm:row-span-2",
                it.size === "tall" && "sm:row-span-2",
                it.size === "wide" && "sm:col-span-2",
              )}
            >
              <VisualPanel
                variant={it.variant}
                tag={it.tag}
                label={it.label}
                aspect="square"
                className="h-full !aspect-auto"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
