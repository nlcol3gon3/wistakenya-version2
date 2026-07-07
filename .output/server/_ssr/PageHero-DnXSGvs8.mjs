import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as VisualPanel } from "./Section-DYpdsX_J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DnXSGvs8.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro, visual, visualTag, visualLabel, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-14 md:pb-24 md:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-white/75 md:text-lg",
						children: intro
					}),
					action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: action
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute -inset-6 rounded-[2rem] bg-aqua/10 opacity-60 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualPanel, {
					variant: visual,
					tag: visualTag,
					label: visualLabel,
					aspect: "video",
					className: "relative"
				})]
			})]
		})
	});
}
//#endregion
export { PageHero as t };
