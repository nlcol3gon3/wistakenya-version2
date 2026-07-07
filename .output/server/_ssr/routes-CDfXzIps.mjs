import { n as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as VisualPanel, t as Section } from "./Section-DYpdsX_J.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDfXzIps.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GEOJSON_URL = "https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json";
var rad = Math.PI / 180;
var LOOP_MS = 24e3;
var ease = (v) => {
	const t = Math.max(0, Math.min(1, v));
	return t * t * t * (t * (t * 6 - 15) + 10);
};
var lerp = (a, b, t) => a + (b - a) * t;
function viewForPhase(phase) {
	let centerLon = -150;
	let centerLat = 6;
	let zoom = .95;
	if (phase < .38) {
		const t = ease(phase / .38);
		centerLon = lerp(-150, 8, t);
		centerLat = lerp(6, 2, t);
		zoom = lerp(.95, 1.1, t);
	} else if (phase < .6) {
		const t = ease((phase - .38) / .22);
		centerLon = lerp(8, 22, t);
		centerLat = lerp(2, .6, t);
		zoom = lerp(1.1, 1.55, t);
	} else if (phase < .78) {
		const t = ease((phase - .6) / .18);
		centerLon = lerp(22, 37.9, t);
		centerLat = lerp(.6, .5, t);
		zoom = lerp(1.55, 2.7, t);
	} else if (phase < .9) {
		const pulse = Math.sin((phase - .78) / .12 * Math.PI);
		centerLon = 37.9;
		centerLat = .5;
		zoom = 2.7 + pulse * .06;
	} else {
		const t = ease((phase - .9) / .1);
		centerLon = lerp(37.9, 210, t);
		centerLat = lerp(.5, 6, t);
		zoom = lerp(2.7, .95, t);
	}
	const fadeIn = phase < .06 ? phase / .06 : 1;
	const fadeOut = phase > .94 ? (1 - phase) / .06 : 1;
	return {
		centerLon,
		centerLat,
		zoom,
		alpha: Math.max(0, Math.min(fadeIn, fadeOut))
	};
}
function project(lon, lat, view, radius, cx, cy) {
	const lambda = (lon - view.centerLon) * rad;
	const phi = lat * rad;
	const phi0 = view.centerLat * rad;
	const cosPhi = Math.cos(phi);
	const x = radius * cosPhi * Math.sin(lambda);
	const y = -radius * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * cosPhi * Math.cos(lambda));
	const z = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * cosPhi * Math.cos(lambda);
	if (z <= -.04) return null;
	return {
		x: cx + x,
		y: cy + y,
		z
	};
}
function GlobeCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	const featuresRef = (0, import_react.useRef)([]);
	const kenyaRef = (0, import_react.useRef)(null);
	const revealStartRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
		const drawGeoRing = (ring, view, radius, cx, cy) => {
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
				} else ctx.lineTo(pt.x, pt.y);
			}
			if (visible > 2) ctx.closePath();
		};
		const drawFeature = (feature, view, radius, cx, cy, fill, stroke, lineWidth) => {
			const geometry = feature.geometry;
			if (!geometry) return;
			const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
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
		const draw = (time) => {
			const phase = reduceMotion.matches ? .72 : time % LOOP_MS / LOOP_MS;
			const view = viewForPhase(phase);
			const radius = Math.min(width, height) * .42 * view.zoom;
			const cx = width * .5;
			const cy = height * .5;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, width, height);
			ctx.globalAlpha = view.alpha;
			const glow = ctx.createRadialGradient(cx, cy, radius * .9, cx, cy, radius * 1.55);
			glow.addColorStop(0, "rgba(115, 221, 255, 0.22)");
			glow.addColorStop(.55, "rgba(0, 120, 200, 0.08)");
			glow.addColorStop(1, "rgba(3, 27, 55, 0)");
			ctx.beginPath();
			ctx.arc(cx, cy, radius * 1.55, 0, Math.PI * 2);
			ctx.fillStyle = glow;
			ctx.fill();
			const ocean = ctx.createRadialGradient(cx - radius * .35, cy - radius * .4, radius * .1, cx, cy, radius);
			ocean.addColorStop(0, "rgba(140, 226, 255, 0.98)");
			ocean.addColorStop(.45, "rgba(0, 120, 190, 0.96)");
			ocean.addColorStop(1, "rgba(4, 24, 55, 0.98)");
			ctx.beginPath();
			ctx.arc(cx, cy, radius, 0, Math.PI * 2);
			ctx.fillStyle = ocean;
			ctx.fill();
			ctx.save();
			ctx.beginPath();
			ctx.arc(cx, cy, radius, 0, Math.PI * 2);
			ctx.clip();
			const features = featuresRef.current;
			const kenya = kenyaRef.current;
			if (features.length > 0) {
				const reveal = reduceMotion.matches || revealStartRef.current === null ? 1 : Math.min(1, (time - revealStartRef.current) / 1200);
				ctx.globalAlpha = view.alpha * ease(reveal);
				for (const feature of features) {
					if (feature === kenya) continue;
					drawFeature(feature, view, radius, cx, cy, "rgba(232, 246, 255, 0.86)", "rgba(4, 24, 55, 0.28)", Math.max(.5, radius * .0018));
				}
				ctx.globalAlpha = view.alpha;
			}
			if (kenya) {
				const focus = phase < .5 ? 0 : phase < .68 ? ease((phase - .5) / .18) : phase < .9 ? 1 : phase < .96 ? 1 - ease((phase - .9) / .06) : 0;
				if (focus > .01) {
					ctx.globalAlpha = view.alpha * focus;
					drawFeature(kenya, view, radius, cx, cy, "rgba(115, 221, 255, 0.98)", "rgba(255, 255, 255, 0.98)", Math.max(1.8, radius * .006));
					const nairobi = project(36.82, -1.29, view, radius, cx, cy);
					if (nairobi) {
						const ring = Math.max(10, radius * .022);
						ctx.beginPath();
						ctx.arc(nairobi.x, nairobi.y, ring + Math.sin(time / 320) * 3, 0, Math.PI * 2);
						ctx.strokeStyle = "rgba(220, 246, 255, 0.85)";
						ctx.lineWidth = Math.max(1.5, radius * .003);
						ctx.stroke();
						ctx.beginPath();
						ctx.arc(nairobi.x, nairobi.y, Math.max(4, radius * .009), 0, Math.PI * 2);
						ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
						ctx.fill();
					}
					ctx.globalAlpha = view.alpha;
				}
			}
			ctx.restore();
			ctx.beginPath();
			ctx.arc(cx - radius * .08, cy - radius * .06, radius * 1.01, -.5, .9);
			ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
			ctx.lineWidth = Math.max(1.5, radius * .008);
			ctx.stroke();
			const feather = ctx.createRadialGradient(cx, cy, Math.max(1, Math.min(width, height) * .32), cx, cy, Math.max(1, Math.min(width, height) * .5));
			feather.addColorStop(0, "rgba(0,0,0,0)");
			feather.addColorStop(.7, "rgba(0,0,0,0)");
			feather.addColorStop(1, "rgba(15,22,40,1)");
			ctx.globalCompositeOperation = "destination-in";
			ctx.fillStyle = feather;
			ctx.globalCompositeOperation = "destination-out";
			const fade = ctx.createRadialGradient(cx, cy, Math.min(width, height) * .42, cx, cy, Math.min(width, height) * .55);
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
			draw(reduceMotion.matches ? LOOP_MS * .72 : performance_default.now());
		};
		const animate = (time) => {
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
		if (typeof reduceMotion.addEventListener === "function") reduceMotion.addEventListener("change", start);
		start();
		fetch(GEOJSON_URL).then((r) => r.ok ? r.json() : Promise.reject(new Error(String(r.status)))).then((data) => {
			if (!mounted) return;
			featuresRef.current = Array.isArray(data.features) ? data.features : [];
			kenyaRef.current = featuresRef.current.find((f) => f.id === "KEN" || f.properties?.name === "Kenya") ?? null;
			revealStartRef.current = performance_default.now();
		}).catch((err) => console.warn("Globe geography failed to load", err));
		return () => {
			mounted = false;
			window.cancelAnimationFrame(frame);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "h-full w-full",
		"aria-hidden": "true"
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurposeSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedPrograms, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinCTA, {})
	] });
}
function Hero() {
	const [y, setY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const on = () => {
			if (raf) return;
			raf = requestAnimationFrame(() => {
				raf = 0;
				setY(window.scrollY);
			});
		};
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 right-0 z-0 w-full md:w-[72%]",
				style: {
					WebkitMaskImage: "radial-gradient(ellipse 62% 82% at 74% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.28) 78%, rgba(0,0,0,0) 100%)",
					maskImage: "radial-gradient(ellipse 62% 82% at 74% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.28) 78%, rgba(0,0,0,0) 100%)",
					transform: `translate3d(0, ${y * -.06}px, 0)`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square w-[min(760px,92vw,86vh)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeCanvas, {})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-1/2 md:block",
				style: { background: "linear-gradient(90deg, oklch(0.20 0.06 245 / 0.55) 0%, oklch(0.20 0.06 245 / 0.25) 55%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-32 pt-14 md:min-h-[calc(100vh-140px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:pb-24 md:pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					style: { transform: `translate3d(0, ${y * .06}px, 0)` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
							children: "Women in Shipping, Trade & Logistics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl leading-[1.02] text-white md:text-[5.5rem]",
							children: ["WISTA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-aqua",
								children: "Kenya"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg text-lg text-white/80 md:text-xl",
							children: "A powerful home for women shaping shipping, trade, ports, logistics, policy, maritime services, and Kenya's blue economy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/membership",
								className: "rounded-full bg-aqua px-7 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_rgba(115,221,255,0.6)] transition hover:bg-white",
								children: "Become a member"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs",
								className: "rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10",
								children: "Explore programs"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global sisterhood" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-aqua/50",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "African momentum" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-aqua/50",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kenyan leadership" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48",
				style: { background: "linear-gradient(to bottom, transparent, oklch(0.18 0.05 245 / 0.9))" }
			})
		]
	});
}
function MetricStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3",
			children: [
				{
					big: "60+",
					label: "National WISTA associations"
				},
				{
					big: "1974",
					label: "Global legacy of women in shipping"
				},
				{
					big: "Kenya",
					label: "Local leadership for the blue economy"
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-4xl text-aqua md:text-5xl",
				children: m.big
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-sm text-white/70",
				children: m.label
			})] }, m.label))
		})
	});
}
function PurposeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		eyebrow: "Our purpose",
		title: "Connecting talent, opportunity, and influence.",
		intro: "WISTA Kenya brings together women professionals and allies who want a stronger, more inclusive maritime and trade sector — with room for mentorship, visibility, technical learning, and policy contribution.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					n: "01",
					h: "Professional growth",
					p: "Mentorship, leadership development, and practical knowledge exchange."
				},
				{
					n: "02",
					h: "Industry visibility",
					p: "Platforms that amplify women's expertise across maritime and trade."
				},
				{
					n: "03",
					h: "Regional collaboration",
					p: "Connections with African and global WISTA communities."
				},
				{
					n: "04",
					h: "Inclusive progress",
					p: "Advocacy for equitable access, representation, and opportunity."
				}
			].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-aqua/40 hover:bg-white/[0.06]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl text-aqua/70 transition group-hover:text-aqua",
						children: f.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl text-white",
						children: f.h
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/70",
						children: f.p
					})
				]
			}, f.n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/about",
				className: "text-sm font-semibold text-aqua hover:text-white",
				children: "Learn about WISTA Kenya →"
			})
		})]
	});
}
function FeaturedPrograms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		band: "deep",
		eyebrow: "Featured programs",
		title: "Built for leaders at every stage.",
		intro: "From young professionals finding their path to senior leaders shaping national policy, WISTA Kenya programming creates practical pathways for growth.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				{
					v: "mentorship",
					tag: "Mentorship",
					h: "Mentorship circles",
					p: "Guided peer groups matching experience with ambition across the maritime value chain."
				},
				{
					v: "forum",
					tag: "Forum",
					h: "Leadership forums",
					p: "Roundtables and masterclasses on governance, trade, compliance, and industry change."
				},
				{
					v: "outreach",
					tag: "Outreach",
					h: "Student outreach",
					p: "Career exposure for emerging talent interested in shipping, ports, logistics, and trade."
				}
			].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-aqua/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualPanel, {
						variant: p.v,
						tag: p.tag,
						aspect: "video"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-xl text-white",
						children: p.h
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/70",
						children: p.p
					})
				]
			}, p.h))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/programs",
				className: "rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-aqua hover:bg-white/10",
				children: "View all programs"
			})
		})]
	});
}
function UpcomingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Events & news",
		title: "What is happening next.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "relative flex gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateBadge, {
					day: "25",
					month: "Jun"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-aqua/90",
						children: "Regional conference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl text-white md:text-3xl",
						children: "8th WISTA Africa Regional Conference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70 md:text-base",
						children: "A continental forum bringing WISTA members and maritime stakeholders together to exchange ideas on leadership, resilience, and inclusive growth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "mt-4 inline-block text-sm font-semibold text-aqua hover:text-white",
						children: "See events and news →"
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: [{
					tag: "News",
					h: "Celebrating seafarers and maritime professionals",
					p: "Recognising the resilience, skill, and leadership that keep trade moving."
				}, {
					tag: "Update",
					h: "Member spotlight series opens for nominations",
					p: "Share stories of women leading across ports, logistics, shipping, and policy."
				}].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-aqua/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-aqua",
							children: n.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg text-white",
							children: n.h
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-white/70",
							children: n.p
						})
					]
				}, n.h))
			})]
		})
	});
}
function JoinCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		band: "soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-aqua/30 bg-gradient-to-br from-[oklch(0.30_0.10_245)] to-[oklch(0.20_0.06_245)] p-8 md:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aqua/20 blur-3xl",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-6 md:grid-cols-[1.4fr_auto] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
						children: "Membership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-white md:text-5xl",
						children: "Join a network with a generous spirit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-white/75",
						children: "Become part of a community that makes introductions, shares knowledge, and creates visible pathways for women to lead."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/membership",
					className: "rounded-full bg-aqua px-7 py-3 text-sm font-semibold text-navy shadow-[0_20px_50px_-15px_rgba(115,221,255,0.6)] transition hover:bg-white",
					children: "Join WISTA Kenya"
				})]
			})]
		})
	});
}
function DateBadge({ day, month }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/10 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl text-aqua",
			children: day
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70",
			children: month
		})] })
	});
}
//#endregion
export { DateBadge, Home as component };
