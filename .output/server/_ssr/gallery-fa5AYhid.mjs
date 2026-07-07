import { n as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as VisualPanel, t as Section } from "./Section-DYpdsX_J.mjs";
import { t as PageHero } from "./PageHero-DnXSGvs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-fa5AYhid.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		variant: "events",
		tag: "Event",
		label: "Annual conference",
		category: "events",
		size: "large"
	},
	{
		variant: "mentorship",
		tag: "Program",
		label: "Mentorship session",
		category: "programs"
	},
	{
		variant: "network",
		tag: "Member",
		label: "Member spotlight",
		category: "members"
	},
	{
		variant: "forum",
		tag: "Forum",
		label: "Regional forum",
		category: "events",
		size: "tall"
	},
	{
		variant: "port",
		tag: "Port",
		label: "Port visit",
		category: "programs"
	},
	{
		variant: "membership",
		tag: "Members",
		label: "Committee work",
		category: "members"
	},
	{
		variant: "outreach",
		tag: "Outreach",
		label: "Student outreach",
		category: "programs",
		size: "wide"
	}
];
var FILTERS = [
	{
		key: "all",
		label: "All"
	},
	{
		key: "events",
		label: "Events"
	},
	{
		key: "programs",
		label: "Programs"
	},
	{
		key: "members",
		label: "Members"
	}
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = ITEMS.filter((i) => filter === "all" || i.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Gallery",
		title: "A visual archive of WISTA Kenya community moments.",
		intro: "Moments from events, port visits, mentorship sessions, conferences, and member spotlights across Kenya's maritime and trade community.",
		visual: "gallery",
		visualTag: "Gallery",
		visualLabel: "Gallery feature"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-8 flex flex-wrap gap-2",
		children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setFilter(f.key),
			className: cn("rounded-full border px-4 py-2 text-sm font-semibold transition", filter === f.key ? "border-aqua bg-aqua text-navy" : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"),
			children: f.label
		}, f.key))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: visible.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("animate-fade-in", it.size === "large" && "sm:col-span-2 sm:row-span-2", it.size === "tall" && "sm:row-span-2", it.size === "wide" && "sm:col-span-2"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualPanel, {
				variant: it.variant,
				tag: it.tag,
				label: it.label,
				aspect: "square",
				className: "h-full !aspect-auto"
			})
		}, `${it.label}-${i}`))
	})] })] });
}
//#endregion
export { GalleryPage as component };
