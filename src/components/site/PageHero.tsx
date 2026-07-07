import type { ReactNode } from "react";
import { VisualPanel } from "./VisualPanel";

type Variant =
  | "network"
  | "forum"
  | "mentorship"
  | "port"
  | "outreach"
  | "membership"
  | "contact"
  | "events"
  | "gallery"
  | "leadership"
  | "map";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  visual: Variant;
  visualTag?: string;
  visualLabel?: string;
  action?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  visual,
  visualTag,
  visualLabel,
  action,
}: PageHeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-14 md:pb-24 md:pt-24">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">{intro}</p>
          )}
          {action && <div className="mt-8 flex flex-wrap gap-3">{action}</div>}
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-aqua/10 opacity-60 blur-3xl"
          />
          <VisualPanel
            variant={visual}
            tag={visualTag}
            label={visualLabel}
            aspect="video"
            className="relative"
          />
        </div>
      </div>
    </section>
  );
}
