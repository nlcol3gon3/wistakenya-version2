import { useEffect, useRef } from "react";

type GeoFeature = {
  type: "Feature";
  id?: string;
  properties?: { name?: string };
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
};

type View = { centerLon: number; centerLat: number; zoom: number; alpha: number };

const GEOJSON_URL =
  "https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json";

const rad = Math.PI / 180;
const LOOP_MS = 24000;

// Quintic smootherstep — zero velocity AND acceleration at both ends
const ease = (v: number) => {
  const t = Math.max(0, Math.min(1, v));
  return t * t * t * (t * (t * 6 - 15) + 10);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function viewForPhase(phase: number): View {
  // Longer, gentler journey: world -> Africa -> Kenya -> hold -> return
  let centerLon = -150;
  let centerLat = 6;
  let zoom = 0.95;

  if (phase < 0.38) {
    const t = ease(phase / 0.38);
    centerLon = lerp(-150, 8, t);
    centerLat = lerp(6, 2, t);
    zoom = lerp(0.95, 1.1, t);
  } else if (phase < 0.6) {
    const t = ease((phase - 0.38) / 0.22);
    centerLon = lerp(8, 22, t);
    centerLat = lerp(2, 0.6, t);
    zoom = lerp(1.1, 1.55, t);
  } else if (phase < 0.78) {
    const t = ease((phase - 0.6) / 0.18);
    centerLon = lerp(22, 37.9, t);
    centerLat = lerp(0.6, 0.5, t);
    zoom = lerp(1.55, 2.7, t);
  } else if (phase < 0.9) {
    // Gentle breathing hold over Kenya
    const pulse = Math.sin(((phase - 0.78) / 0.12) * Math.PI);
    centerLon = 37.9;
    centerLat = 0.5;
    zoom = 2.7 + pulse * 0.06;
  } else {
    const t = ease((phase - 0.9) / 0.1);
    centerLon = lerp(37.9, 210, t);
    centerLat = lerp(0.5, 6, t);
    zoom = lerp(2.7, 0.95, t);
  }

  const fadeIn = phase < 0.06 ? phase / 0.06 : 1;
  const fadeOut = phase > 0.94 ? (1 - phase) / 0.06 : 1;
  return { centerLon, centerLat, zoom, alpha: Math.max(0, Math.min(fadeIn, fadeOut)) };
}

function project(
  lon: number,
  lat: number,
  view: View,
  radius: number,
  cx: number,
  cy: number,
) {
  const lambda = (lon - view.centerLon) * rad;
  const phi = lat * rad;
  const phi0 = view.centerLat * rad;
  const cosPhi = Math.cos(phi);
  const x = radius * cosPhi * Math.sin(lambda);
  const y =
    -radius * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * cosPhi * Math.cos(lambda));
  const z = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * cosPhi * Math.cos(lambda);
  if (z <= -0.04) return null;
  return { x: cx + x, y: cy + y, z };
}

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const featuresRef = useRef<GeoFeature[]>([]);
  const kenyaRef = useRef<GeoFeature | null>(null);
  const revealStartRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let mounted = true;

    const drawGeoRing = (ring: number[][], view: View, radius: number, cx: number, cy: number) => {
      let drawing = false;
      let visible = 0;
      for (const p of ring) {
        const pt = project(p[0], p[1], view, radius, cx, cy);
        if (!pt) {
          drawing = false;
          continue;
        }
        visible += 1;
        if (!drawing) {
          ctx.moveTo(pt.x, pt.y);
          drawing = true;
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      }
      if (visible > 2) ctx.closePath();
    };

    const drawFeature = (
      feature: GeoFeature,
      view: View,
      radius: number,
      cx: number,
      cy: number,
      fill: string,
      stroke: string,
      lineWidth: number,
    ) => {
      const geometry = feature.geometry;
      if (!geometry) return;
      const polygons =
        geometry.type === "Polygon"
          ? [geometry.coordinates as number[][][]]
          : (geometry.coordinates as number[][][][]);
      ctx.beginPath();
      for (const polygon of polygons) {
        if (!Array.isArray(polygon)) continue;
        for (const ring of polygon) drawGeoRing(ring, view, radius, cx, cy);
      }
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.fill();
      ctx.stroke();
    };

    const draw = (time: number) => {
      const phase = reduceMotion.matches ? 0.72 : (time % LOOP_MS) / LOOP_MS;
      const view = viewForPhase(phase);
      const radius = Math.min(width, height) * 0.42 * view.zoom;
      const cx = width * 0.5;
      const cy = height * 0.5;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = view.alpha;

      // Soft outer atmosphere glow (blends into background — no hard rim)
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, radius * 1.55);
      glow.addColorStop(0, "rgba(115, 221, 255, 0.22)");
      glow.addColorStop(0.55, "rgba(0, 120, 200, 0.08)");
      glow.addColorStop(1, "rgba(3, 27, 55, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.55, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Ocean sphere
      const ocean = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.4,
        radius * 0.1,
        cx,
        cy,
        radius,
      );
      ocean.addColorStop(0, "rgba(140, 226, 255, 0.98)");
      ocean.addColorStop(0.45, "rgba(0, 120, 190, 0.96)");
      ocean.addColorStop(1, "rgba(4, 24, 55, 0.98)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = ocean;
      ctx.fill();

      // Clip to sphere for landmasses
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const features = featuresRef.current;
      const kenya = kenyaRef.current;
      if (features.length > 0) {
        const reveal =
          reduceMotion.matches || revealStartRef.current === null
            ? 1
            : Math.min(1, (time - revealStartRef.current) / 1200);
        ctx.globalAlpha = view.alpha * ease(reveal);
        for (const feature of features) {
          const isKenya = feature === kenya;
          if (isKenya) continue; // draw Kenya on top for emphasis
          drawFeature(
            feature,
            view,
            radius,
            cx,
            cy,
            "rgba(232, 246, 255, 0.86)",
            "rgba(4, 24, 55, 0.28)",
            Math.max(0.5, radius * 0.0018),
          );
        }
        ctx.globalAlpha = view.alpha;
      }

      // Kenya spotlight — fades in as we approach it, fades out when leaving
      if (kenya) {
        // Peaks between 0.65 and 0.9, gently fades on either side
        const focus =
          phase < 0.5
            ? 0
            : phase < 0.68
              ? ease((phase - 0.5) / 0.18)
              : phase < 0.9
                ? 1
                : phase < 0.96
                  ? 1 - ease((phase - 0.9) / 0.06)
                  : 0;
        if (focus > 0.01) {
          ctx.globalAlpha = view.alpha * focus;
          drawFeature(
            kenya,
            view,
            radius,
            cx,
            cy,
            "rgba(115, 221, 255, 0.98)",
            "rgba(255, 255, 255, 0.98)",
            Math.max(1.8, radius * 0.006),
          );

          const nairobi = project(36.82, -1.29, view, radius, cx, cy);
          if (nairobi) {
            const ring = Math.max(10, radius * 0.022);
            ctx.beginPath();
            ctx.arc(nairobi.x, nairobi.y, ring + Math.sin(time / 320) * 3, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(220, 246, 255, 0.85)";
            ctx.lineWidth = Math.max(1.5, radius * 0.003);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(nairobi.x, nairobi.y, Math.max(4, radius * 0.009), 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
            ctx.fill();
          }
          ctx.globalAlpha = view.alpha;
        }
      }

      ctx.restore();

      // Subtle inner rim highlight (no bold outline — keeps it seamless)
      ctx.beginPath();
      ctx.arc(cx - radius * 0.08, cy - radius * 0.06, radius * 1.01, -0.5, 0.9);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = Math.max(1.5, radius * 0.008);
      ctx.stroke();

      // Feather the canvas edges so the sphere dissolves into whatever
      // sits behind it — no visible canvas rectangle, no hard rim.
      const feather = ctx.createRadialGradient(
        cx,
        cy,
        Math.max(1, Math.min(width, height) * 0.32),
        cx,
        cy,
        Math.max(1, Math.min(width, height) * 0.5),
      );
      feather.addColorStop(0, "rgba(0,0,0,0)");
      feather.addColorStop(0.7, "rgba(0,0,0,0)");
      feather.addColorStop(1, "rgba(15,22,40,1)");
      ctx.globalCompositeOperation = "destination-in";
      // Invert so alpha fades OUT toward corners
      ctx.fillStyle = feather;
      // Actually just use destination-out with an opaque outer ring
      ctx.globalCompositeOperation = "destination-out";
      const fade = ctx.createRadialGradient(
        cx,
        cy,
        Math.min(width, height) * 0.42,
        cx,
        cy,
        Math.min(width, height) * 0.55,
      );
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      ctx.globalAlpha = 1;
    };


    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(320, Math.round(rect.width));
      height = Math.max(320, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      draw(reduceMotion.matches ? LOOP_MS * 0.72 : performance.now());
    };

    const animate = (time: number) => {
      if (!mounted) return;
      draw(time);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      resize();
      if (!reduceMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize, { passive: true });
    if (typeof reduceMotion.addEventListener === "function") {
      reduceMotion.addEventListener("change", start);
    }

    start();

    // Load geography
    fetch(GEOJSON_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { features: GeoFeature[] }) => {
        if (!mounted) return;
        featuresRef.current = Array.isArray(data.features) ? data.features : [];
        kenyaRef.current =
          featuresRef.current.find(
            (f) => f.id === "KEN" || f.properties?.name === "Kenya",
          ) ?? null;
        revealStartRef.current = performance.now();
      })
      .catch((err) => console.warn("Globe geography failed to load", err));

    return () => {
      mounted = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}
