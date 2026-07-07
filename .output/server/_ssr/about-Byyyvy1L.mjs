import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-DYpdsX_J.mjs";
import { t as PageHero } from "./PageHero-DnXSGvs8.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Byyyvy1L.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About WISTA Kenya",
			title: "Purposeful leadership for maritime, trade, and logistics.",
			intro: "WISTA Kenya is part of the global WISTA community and exists to connect, empower, and elevate women professionals contributing to Kenya's blue economy.",
			visual: "network",
			visualTag: "Community",
			visualLabel: "Leadership and community"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-white/10 bg-white/[0.04] p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
					children: "Mission"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl text-white md:text-3xl",
					children: "To promote the advancement, visibility, and professional growth of women in Kenya's maritime and trade ecosystem."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-aqua/25 bg-gradient-to-br from-[oklch(0.32_0.12_240)] to-[oklch(0.22_0.07_245)] p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
					children: "Vision"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl text-white md:text-3xl",
					children: "A maritime and logistics sector where women lead confidently, participate fully, and help shape sustainable national growth."
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Who we serve",
			title: "A network across the whole value chain.",
			intro: "WISTA Kenya welcomes professionals working in shipping, port operations, freight forwarding, customs, trade finance, marine services, law, insurance, policy, academia, sustainability, technology, and related sectors.",
			band: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					{
						h: "Connection",
						p: "Creating useful relationships across Kenya, Africa, and the wider WISTA network."
					},
					{
						h: "Competence",
						p: "Supporting members with learning, mentorship, technical exposure, and confidence."
					},
					{
						h: "Contribution",
						p: "Helping members bring informed voices to industry conversations and policy tables."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-white/10 bg-white/[0.04] p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl text-white",
						children: v.h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70",
						children: v.p
					})]
				}, v.h))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Global alignment",
			title: "Local energy, international reach.",
			intro: "WISTA International was founded in 1974 and connects thousands of members through national associations around the world. WISTA Kenya brings that global spirit into a Kenyan context, shaped by local needs and regional opportunity.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					{
						y: "1974",
						h: "WISTA International founded",
						p: "A global platform begins for women in shipping and trading."
					},
					{
						y: "2018",
						h: "IMO consultative status",
						p: "WISTA's global policy voice strengthens through international recognition."
					},
					{
						y: "Kenya",
						h: "National association impact",
						p: "WISTA Kenya builds community, visibility, and growth pathways locally."
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full border border-aqua/40 bg-aqua/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua",
							children: t.y
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl text-white",
							children: t.h
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/70",
							children: t.p
						})
					]
				}, t.y))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Leadership",
			title: "Executive Committee.",
			intro: "A dedicated Executive Committee guides member engagement, programming, partnerships, and governance — supported by a wider Board drawn from across the maritime, trade, and logistics value chain.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/leadership",
					className: "rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white",
					children: "Meet the full board"
				})
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
