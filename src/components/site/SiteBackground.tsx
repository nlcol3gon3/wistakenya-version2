import { useEffect, useState } from "react";

/**
 * Site-wide decorative background. Renders a few large, blurred colour orbs
 * fixed behind all content, with a subtle scroll-driven parallax so pages
 * feel like they're drifting over depth. Kept very restrained on purpose —
 * you should feel it, not notice it.
 */
export function SiteBackground() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setY(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep field */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.20_0.05_245),oklch(0.16_0.05_245))]" />

      {/* Parallax orbs */}
      <div
        className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 235 / 0.45), transparent 65%)",
          transform: `translate3d(0, ${y * 0.08}px, 0)`,
        }}
      />
      <div
        className="absolute right-[-18%] top-[35%] h-[720px] w-[720px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.42 0.14 250 / 0.4), transparent 65%)",
          transform: `translate3d(0, ${-y * 0.05}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.14 215 / 0.22), transparent 65%)",
          transform: `translate3d(0, ${y * 0.12}px, 0)`,
        }}
      />

      {/* Subtle noise/grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
}
