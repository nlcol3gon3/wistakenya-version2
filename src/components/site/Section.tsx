import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  band?: "none" | "soft" | "deep";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  id?: string;
}

export function Section({
  eyebrow,
  title,
  intro,
  band = "none",
  align = "left",
  className,
  children,
  id,
}: SectionProps) {
  const bandBg = {
    none: "",
    soft: "bg-white/[0.03] border-y border-white/10",
    deep: "bg-[oklch(0.24_0.09_245/0.5)] border-y border-white/10",
  }[band];

  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24", bandBg, className)}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || intro) && (
          <header
            className={cn(
              "mb-10 max-w-3xl md:mb-14",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl leading-[1.1] text-white md:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base text-white/70 md:text-lg">{intro}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
