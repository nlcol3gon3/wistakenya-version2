import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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

const GRADIENTS: Record<Variant, string> = {
  network:
    "bg-[radial-gradient(ellipse_at_20%_10%,oklch(0.65_0.16_215/0.5),transparent_55%),radial-gradient(ellipse_at_80%_100%,oklch(0.35_0.14_260/0.7),transparent_60%),linear-gradient(135deg,oklch(0.32_0.11_245),oklch(0.20_0.06_245))]",
  forum:
    "bg-[radial-gradient(circle_at_30%_25%,oklch(0.72_0.14_215/0.5),transparent_55%),linear-gradient(135deg,oklch(0.42_0.13_240),oklch(0.22_0.07_245))]",
  mentorship:
    "bg-[radial-gradient(circle_at_75%_20%,oklch(0.75_0.13_210/0.55),transparent_55%),linear-gradient(135deg,oklch(0.38_0.13_235),oklch(0.22_0.07_245))]",
  port: "bg-[radial-gradient(circle_at_60%_100%,oklch(0.5_0.16_235/0.55),transparent_55%),linear-gradient(135deg,oklch(0.28_0.08_250),oklch(0.16_0.05_245))]",
  outreach:
    "bg-[radial-gradient(circle_at_20%_80%,oklch(0.68_0.15_215/0.5),transparent_55%),linear-gradient(135deg,oklch(0.34_0.12_240),oklch(0.20_0.06_245))]",
  membership:
    "bg-[radial-gradient(circle_at_75%_15%,oklch(0.65_0.14_215/0.55),transparent_60%),radial-gradient(circle_at_10%_90%,oklch(0.42_0.13_245/0.5),transparent_55%),linear-gradient(140deg,oklch(0.30_0.10_245),oklch(0.18_0.05_245))]",
  contact:
    "bg-[radial-gradient(circle_at_50%_20%,oklch(0.60_0.15_215/0.45),transparent_60%),linear-gradient(135deg,oklch(0.28_0.09_245),oklch(0.18_0.05_245))]",
  events:
    "bg-[radial-gradient(circle_at_30%_20%,oklch(0.70_0.14_215/0.45),transparent_55%),linear-gradient(135deg,oklch(0.36_0.13_240),oklch(0.20_0.06_245))]",
  gallery:
    "bg-[radial-gradient(circle_at_70%_30%,oklch(0.72_0.14_215/0.5),transparent_55%),linear-gradient(135deg,oklch(0.40_0.13_235),oklch(0.22_0.06_245))]",
  leadership:
    "bg-[radial-gradient(circle_at_20%_20%,oklch(0.65_0.14_215/0.45),transparent_55%),radial-gradient(circle_at_85%_85%,oklch(0.40_0.13_250/0.55),transparent_55%),linear-gradient(140deg,oklch(0.30_0.09_245),oklch(0.18_0.05_245))]",
  map: "bg-[radial-gradient(circle_at_50%_50%,oklch(0.55_0.16_235/0.4),transparent_60%),linear-gradient(135deg,oklch(0.26_0.08_245),oklch(0.16_0.05_245))]",
};

const ICONS: Record<Variant, ReactNode> = {
  network: <IconRings />,
  forum: <IconGrid />,
  mentorship: <IconRings />,
  port: <IconContainers />,
  outreach: <IconWaves />,
  membership: <IconRings />,
  contact: <IconWaves />,
  events: <IconGrid />,
  gallery: <IconGrid />,
  leadership: <IconRings />,
  map: <IconMap />,
};

interface VisualPanelProps {
  variant: Variant;
  tag?: string;
  label?: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "portrait";
}

export function VisualPanel({
  variant,
  tag,
  label,
  className,
  aspect = "video",
}: VisualPanelProps) {
  const aspectClass = {
    video: "aspect-[4/3]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
  }[aspect];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(3,27,55,0.9)]",
        aspectClass,
        GRADIENTS[variant],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40">{ICONS[variant]}</div>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          {tag && (
            <span className="inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-aqua">
              {tag}
            </span>
          )}
          {label && (
            <div className="mt-3 font-display text-xl leading-tight text-white sm:text-2xl">
              {label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* --- decorative inline SVGs (light, layered) --- */

function IconRings() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1">
        {[60, 100, 140, 180, 220].map((r) => (
          <circle key={r} cx="130" cy="150" r={r} />
        ))}
      </g>
      <g fill="none" stroke="rgba(115,221,255,0.55)" strokeWidth="1.2">
        {[40, 80, 120].map((r) => (
          <circle key={r} cx="310" cy="90" r={r} />
        ))}
      </g>
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
        ))}
      </g>
      <circle cx="120" cy="160" r="80" fill="rgba(115,221,255,0.15)" />
      <circle cx="300" cy="90" r="50" fill="rgba(115,221,255,0.2)" />
    </svg>
  );
}

function IconContainers() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={30 + c * 46} y={80 + r * 30} width={40} height={26} />
          )),
        )}
      </g>
    </svg>
  );
}

function IconWaves() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="rgba(115,221,255,0.5)" strokeWidth="1.4">
        {[80, 120, 160, 200, 240].map((y, i) => (
          <path
            key={y}
            d={`M-20 ${y} Q100 ${y - 20 - i * 4} 200 ${y} T420 ${y}`}
          />
        ))}
      </g>
    </svg>
  );
}

function IconMap() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1">
        <path d="M20 220 Q120 180 200 210 T380 190" />
        <path d="M40 250 Q140 210 220 240 T400 220" />
        <path d="M20 180 Q120 140 200 170 T380 150" />
      </g>
      <g fill="rgba(115,221,255,0.9)">
        <circle cx="220" cy="200" r="6" />
        <circle cx="150" cy="230" r="5" />
        <circle cx="290" cy="180" r="4" />
      </g>
    </svg>
  );
}
