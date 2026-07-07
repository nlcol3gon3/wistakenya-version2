import { n as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$9 } from "./routes-LYXidgjn.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Menu, r as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DqVRHmlM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-RGVPPhKp.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		label: "About",
		children: [{
			to: "/about",
			label: "About WISTA Kenya"
		}, {
			to: "/leadership",
			label: "Board & Leadership"
		}]
	},
	{
		to: "/membership",
		label: "Membership"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/events",
		label: "Events & News"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [aboutOpen, setAboutOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setAboutOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 8);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 transition-all duration-300", scrolled ? "border-b border-white/10 bg-[oklch(0.16_0.05_245/0.75)] backdrop-blur-xl" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-white/5 bg-white/[0.02]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-[11px] uppercase tracking-[0.18em] text-white/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Women shaping Kenya's maritime, trading & logistics future." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/membership",
						className: "font-semibold text-aqua hover:text-white",
						children: "Join the network →"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						"aria-label": "WISTA Kenya home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_12px_32px_-18px_rgba(115,221,255,0.75)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/brand/wista-kenya-logo-transparent.png",
								alt: "",
								"aria-hidden": "true",
								className: "absolute left-1/2 top-0 h-20 max-w-none -translate-x-1/2"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-bold tracking-tight text-white",
							children: ["WISTA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-aqua",
								children: "Kenya"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center gap-1 lg:flex",
						children: NAV.map((item) => item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setAboutOpen(true),
							onMouseLeave: () => setAboutOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: cn("flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:text-white", item.children.some((c) => pathname === c.to) && "text-aqua"),
								onClick: () => setAboutOpen((v) => !v),
								"aria-expanded": aboutOpen,
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
							}), aboutOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[oklch(0.20_0.05_245/0.95)] p-2 shadow-2xl backdrop-blur-xl",
								children: item.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: c.to,
									className: "block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
									children: c.label
								}, c.to))
							})]
						}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:text-white", pathname === item.to && "text-aqua"),
							activeOptions: { exact: true },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10",
							children: "Enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/membership",
							className: "rounded-full bg-aqua px-4 py-2 text-sm font-semibold text-navy shadow-[0_10px_30px_-12px_rgba(115,221,255,0.6)] transition hover:bg-white",
							children: "Join WISTA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-4 mb-4 rounded-3xl border border-white/10 bg-[oklch(0.20_0.05_245/0.95)] p-4 shadow-2xl backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [NAV.map((item) => item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-white/5 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-white/50",
								children: item.label
							}), item.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "block rounded-xl px-2 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
								children: c.label
							}, c.to))]
						}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "block border-b border-white/5 px-2 py-3 text-sm text-white/80 transition hover:text-white",
							children: item.label
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white",
								children: "Enquiry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/membership",
								className: "flex-1 rounded-full bg-aqua px-4 py-2 text-center text-sm font-semibold text-navy",
								children: "Join"
							})]
						})]
					})
				})
			})
		]
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-24 border-t border-white/10 bg-[oklch(0.18_0.05_245/0.6)] backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "block w-fit",
						"aria-label": "WISTA Kenya home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/brand/wista-kenya-logo-white.png",
							alt: "WISTA Kenya",
							className: "h-auto w-32"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-white/60",
						children: "Connecting women in shipping, trade, logistics, ports, policy, and the blue economy."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Explore",
						links: [
							{
								to: "/about",
								label: "About"
							},
							{
								to: "/leadership",
								label: "Board & Leadership"
							},
							{
								to: "/membership",
								label: "Membership"
							},
							{
								to: "/programs",
								label: "Programs"
							},
							{
								to: "/events",
								label: "Events & News"
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Connect",
						links: [
							{
								to: "/gallery",
								label: "Gallery"
							},
							{
								to: "/contact",
								label: "Contact"
							},
							{
								to: "/contact",
								label: "Membership enquiry"
							},
							{
								to: "/membership",
								label: "Join WISTA Kenya"
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/80",
							children: "Follow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2 text-sm text-white/70",
							children: [
								"LinkedIn",
								"X",
								"Instagram",
								"Facebook"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "rounded-full border border-white/15 px-3 py-1 transition hover:border-aqua hover:text-white",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-white/50",
							children: "Official WISTA Kenya channels and member updates."
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					year,
					" WISTA Kenya. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "hover:text-aqua",
					children: "Back to top ↑"
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/80",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 flex flex-col gap-2 text-sm text-white/70",
		children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "w-fit transition hover:text-white",
			children: l.label
		}, `${l.to}-${i}`))
	})] });
}
/**
* Site-wide decorative background. Renders a few large, blurred colour orbs
* fixed behind all content, with a subtle scroll-driven parallax so pages
* feel like they're drifting over depth. Kept very restrained on purpose —
* you should feel it, not notice it.
*/
function SiteBackground() {
	const [y, setY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,oklch(0.20_0.05_245),oklch(0.16_0.05_245))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.55 0.16 235 / 0.45), transparent 65%)",
					transform: `translate3d(0, ${y * .08}px, 0)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-[-18%] top-[35%] h-[720px] w-[720px] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.42 0.14 250 / 0.4), transparent 65%)",
					transform: `translate3d(0, ${-y * .05}px, 0)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.72 0.14 215 / 0.22), transparent 65%)",
					transform: `translate3d(0, ${y * .12}px, 0)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.06]",
				style: {
					backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
					backgroundSize: "26px 26px"
				}
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-white/70",
					children: "The page you're looking for doesn't exist or has moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-aqua px-5 py-2 text-sm font-semibold text-navy transition hover:bg-white",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-white/70",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-aqua px-5 py-2 text-sm font-semibold text-navy transition hover:bg-white",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "WISTA Kenya | Women in Shipping, Trade and Logistics" },
			{
				name: "description",
				content: "WISTA Kenya advances women leadership across shipping, trade, logistics, ports, and the blue economy."
			},
			{
				name: "author",
				content: "WISTA Kenya"
			},
			{
				property: "og:title",
				content: "WISTA Kenya | Women in Shipping, Trade and Logistics"
			},
			{
				property: "og:description",
				content: "A powerful home for women shaping shipping, trade, ports, logistics, policy, maritime services, and Kenya's blue economy."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/images/brand/wista-kenya-logo-transparent.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/images/brand/wista-kenya-logo-transparent.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "relative flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})]
	});
}
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/leadership",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/membership",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/programs",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/events",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.7"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./programs-FJBznm4P.mjs");
var Route$6 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Programs | WISTA Kenya" },
		{
			name: "description",
			content: "Explore WISTA Kenya programs in mentorship, leadership, policy, outreach, and blue economy collaboration."
		},
		{
			property: "og:title",
			content: "Programs — WISTA Kenya"
		},
		{
			property: "og:description",
			content: "Practical platforms for influence, skill, and connection across Kenya's maritime economy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./membership-B7sS1WpM.mjs");
var Route$5 = createFileRoute("/membership")({
	head: () => ({ meta: [
		{ title: "Membership | WISTA Kenya" },
		{
			name: "description",
			content: "Join WISTA Kenya and connect with women professionals in shipping, trade, logistics, and the blue economy."
		},
		{
			property: "og:title",
			content: "Membership — WISTA Kenya"
		},
		{
			property: "og:description",
			content: "Membership gives professionals a trusted platform for mentorship, visibility, learning, and collaboration."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./leadership-n5Od4gFd.mjs");
var Route$4 = createFileRoute("/leadership")({
	head: () => ({ meta: [
		{ title: "Board & Leadership | WISTA Kenya" },
		{
			name: "description",
			content: "Meet the Executive Committee and Board Members leading WISTA Kenya across maritime, trade, and logistics."
		},
		{
			property: "og:title",
			content: "Board & Leadership — WISTA Kenya"
		},
		{
			property: "og:description",
			content: "The women guiding WISTA Kenya across shipping, law, trade finance, port operations, fisheries, and the blue economy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./gallery-fa5AYhid.mjs");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery | WISTA Kenya" },
		{
			name: "description",
			content: "Gallery moments from WISTA Kenya events, member activities, programs, and partnerships."
		},
		{
			property: "og:title",
			content: "Gallery — WISTA Kenya"
		},
		{
			property: "og:description",
			content: "A visual archive of WISTA Kenya community moments."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./events-BgZXYI-W.mjs");
var Route$2 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events & News | WISTA Kenya" },
		{
			name: "description",
			content: "Events, news, updates, and member stories from WISTA Kenya."
		},
		{
			property: "og:title",
			content: "Events & News — WISTA Kenya"
		},
		{
			property: "og:description",
			content: "Stay close to the conversations shaping Kenya's maritime sector."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-BMtsEbxR.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | WISTA Kenya" },
		{
			name: "description",
			content: "Contact WISTA Kenya for membership enquiries, partnerships, programs, and event participation."
		},
		{
			property: "og:title",
			content: "Contact WISTA Kenya"
		},
		{
			property: "og:description",
			content: "Start a conversation about membership, programs, events, and partnerships."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./about-Byyyvy1L.mjs");
var Route = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About | WISTA Kenya" },
		{
			name: "description",
			content: "Learn about WISTA Kenya, its mission, vision, values, and role in the maritime and trade sector."
		},
		{
			property: "og:title",
			content: "About WISTA Kenya"
		},
		{
			property: "og:description",
			content: "Purposeful leadership for maritime, trade, and logistics — the WISTA Kenya story."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var ProgramsRoute = Route$6.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$8
});
var MembershipRoute = Route$5.update({
	id: "/membership",
	path: "/membership",
	getParentRoute: () => Route$8
});
var LeadershipRoute = Route$4.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => Route$8
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$8
});
var EventsRoute = Route$2.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var AboutRoute = Route.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute,
	ContactRoute,
	EventsRoute,
	GalleryRoute,
	LeadershipRoute,
	MembershipRoute,
	ProgramsRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
