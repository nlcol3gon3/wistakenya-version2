globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-07-07T11:09:00.913Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/about-BZXGhdri.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10ac-bxgwhRtzhs3wWur03FW6Lnv8Nik\"",
		"mtime": "2026-07-07T13:03:09.555Z",
		"size": 4268,
		"path": "../public/assets/about-BZXGhdri.js"
	},
	"/assets/contact-CCp5qFBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1355-kTMCk2ekuG5qUP11BTbSrLS0JVs\"",
		"mtime": "2026-07-07T13:03:09.558Z",
		"size": 4949,
		"path": "../public/assets/contact-CCp5qFBT.js"
	},
	"/assets/events-BazLsoqs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f3-oIaYK6AZ1r+a+ZPYxrTvNF4HAJg\"",
		"mtime": "2026-07-07T13:03:09.559Z",
		"size": 4339,
		"path": "../public/assets/events-BazLsoqs.js"
	},
	"/assets/gallery-BGNVvCi6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"846-IRwdg59js4nbIBG0AdNZUsHjT+c\"",
		"mtime": "2026-07-07T13:03:09.560Z",
		"size": 2118,
		"path": "../public/assets/gallery-BGNVvCi6.js"
	},
	"/assets/index-BQm16rQH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55b79-3tKk2bE5wgc/t+tfvwN7/m5vm8c\"",
		"mtime": "2026-07-07T13:03:09.539Z",
		"size": 351097,
		"path": "../public/assets/index-BQm16rQH.js"
	},
	"/assets/leadership-DlrFl4i9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2912-PDqhazh7eeFoBSmzFnDfx39FsvE\"",
		"mtime": "2026-07-07T13:03:09.561Z",
		"size": 10514,
		"path": "../public/assets/leadership-DlrFl4i9.js"
	},
	"/assets/membership-B4ukjVVH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170c-35LuTV1JJ9NVm6J3yf5eCHcM+04\"",
		"mtime": "2026-07-07T13:03:09.561Z",
		"size": 5900,
		"path": "../public/assets/membership-B4ukjVVH.js"
	},
	"/assets/PageHero-BYYCPC_t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"471-O+DcAA2O8xzJMYxQEC4TP8E7rQo\"",
		"mtime": "2026-07-07T13:03:09.539Z",
		"size": 1137,
		"path": "../public/assets/PageHero-BYYCPC_t.js"
	},
	"/assets/programs-CNlxdISF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"feb-nPc11Vz9pg++bJoXSvWhGDB5VT4\"",
		"mtime": "2026-07-07T13:03:09.562Z",
		"size": 4075,
		"path": "../public/assets/programs-CNlxdISF.js"
	},
	"/assets/routes-DmR7_WKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b87-w1hpxqItnuSVPdMQtb2dLKghxm0\"",
		"mtime": "2026-07-07T13:03:09.563Z",
		"size": 15239,
		"path": "../public/assets/routes-DmR7_WKe.js"
	},
	"/assets/Section-BLqYDdGV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191f-j8dd8Q3YNGxr8O+OR6lsgbqfSL4\"",
		"mtime": "2026-07-07T13:03:09.540Z",
		"size": 6431,
		"path": "../public/assets/Section-BLqYDdGV.js"
	},
	"/assets/styles-RGVPPhKp.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16405-vy9SOitH16uve5FFNzXyX2GWJ5o\"",
		"mtime": "2026-07-07T13:03:09.565Z",
		"size": 91141,
		"path": "../public/assets/styles-RGVPPhKp.css"
	},
	"/assets/utils-wIxH_xSh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b71-X4ssoUAyJ71g0tgf0liEwDYfR6Y\"",
		"mtime": "2026-07-07T13:03:09.564Z",
		"size": 35697,
		"path": "../public/assets/utils-wIxH_xSh.js"
	},
	"/images/brand/wista-kenya-logo-transparent.png": {
		"type": "image/png",
		"etag": "\"4e550-9HMCe8+Gh6On3GO3WqT7rY0Z2GI\"",
		"mtime": "2026-07-07T09:09:46.565Z",
		"size": 320848,
		"path": "../public/images/brand/wista-kenya-logo-transparent.png"
	},
	"/images/brand/wista-kenya-logo-white.png": {
		"type": "image/png",
		"etag": "\"1f952-PcocLvgrWPVlOhxqLLbkbFb1gIg\"",
		"mtime": "2026-07-07T09:09:46.645Z",
		"size": 129362,
		"path": "../public/images/brand/wista-kenya-logo-white.png"
	},
	"/images/leadership/bettymakena.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e500-ipKD5vdBr3ZDSeT9rxmz+drYQfs\"",
		"mtime": "2026-07-07T10:49:53.841Z",
		"size": 58624,
		"path": "../public/images/leadership/bettymakena.jpeg"
	},
	"/images/leadership/elizabethwasuna.jpeg": {
		"type": "image/jpeg",
		"etag": "\"11a47-Y6PYHG9oOq2xy9XPu67Ci1BGnzE\"",
		"mtime": "2026-07-07T10:50:45.537Z",
		"size": 72263,
		"path": "../public/images/leadership/elizabethwasuna.jpeg"
	},
	"/images/leadership/jackieayiro.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e618-amnnpL6j9oWwJ8xGMB3PS4pG7A8\"",
		"mtime": "2026-07-07T10:49:12.795Z",
		"size": 58904,
		"path": "../public/images/leadership/jackieayiro.jpeg"
	},
	"/images/leadership/janenjeri.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2d514-A/OjbCyuclOFcRj6xKly96Kivzo\"",
		"mtime": "2026-07-07T10:51:21.254Z",
		"size": 185620,
		"path": "../public/images/leadership/janenjeri.jpeg"
	},
	"/images/leadership/janevictoria.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a70e-9lCGeLrsQYLMNR1TXX6gVcX5au8\"",
		"mtime": "2026-07-07T10:49:37.088Z",
		"size": 42766,
		"path": "../public/images/leadership/janevictoria.jpeg"
	},
	"/images/leadership/joycekaburu.jpeg": {
		"type": "image/jpeg",
		"etag": "\"11c16-C0nF6HrE13OmfhS+5tt67Lpd+bg\"",
		"mtime": "2026-07-07T10:50:11.911Z",
		"size": 72726,
		"path": "../public/images/leadership/joycekaburu.jpeg"
	},
	"/images/leadership/joycemarangu.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2dc2a-P67HYwYAaRjsvfBTGonI6wHc2EQ\"",
		"mtime": "2026-07-07T10:50:28.479Z",
		"size": 187434,
		"path": "../public/images/leadership/joycemarangu.jpeg"
	},
	"/images/leadership/nancykarigithu.jpeg": {
		"type": "image/jpeg",
		"etag": "\"488c-MbN6vUM1MMRtyDI/cibA1FtUB7Q\"",
		"mtime": "2026-07-07T10:51:43.074Z",
		"size": 18572,
		"path": "../public/images/leadership/nancykarigithu.jpeg"
	},
	"/images/leadership/lizmarami.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d355-wMOCx2erLrPG27H3+UEETIaa44U\"",
		"mtime": "2026-07-07T10:51:03.936Z",
		"size": 54101,
		"path": "../public/images/leadership/lizmarami.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_SRDOnW = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_SRDOnW
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
