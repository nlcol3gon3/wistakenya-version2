import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LYXidgjn.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-CDfXzIps.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
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
export { Route as n, DateBadge as t };
