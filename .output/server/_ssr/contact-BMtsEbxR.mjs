import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as VisualPanel, t as Section } from "./Section-DYpdsX_J.mjs";
import { t as PageHero } from "./PageHero-DnXSGvs8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BMtsEbxR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Start a conversation with WISTA Kenya.",
			intro: "Reach out about membership, partnerships, speaking opportunities, mentorship, events, and collaboration across Kenya's maritime and trade community.",
			visual: "contact",
			visualTag: "Contact",
			visualLabel: "Membership enquiry desk"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
						children: "Secretariat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-white md:text-4xl",
						children: "How we can help."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4",
						children: [
							{
								s: "Location",
								h: "Nairobi, Kenya",
								p: "Serving members across Kenya's maritime, logistics, and trade ecosystem."
							},
							{
								s: "Membership",
								h: "Enquiries and onboarding",
								p: "Ask about eligibility, member categories, programming, and next steps."
							},
							{
								s: "Partnerships",
								h: "Programs and events",
								p: "Invite WISTA Kenya to collaborate on forums, mentorship, outreach, or research."
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl border border-white/10 bg-white/[0.04] p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-aqua/90",
									children: c.s
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-lg text-white",
									children: c.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/70",
									children: c.p
								})
							]
						}, c.h))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			band: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
						children: "Visit and host"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-white md:text-4xl",
						children: "Connecting across Kenya's maritime centres."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/75",
						children: "WISTA Kenya activities can convene members, partners, and guests across Nairobi, Mombasa, and regional maritime spaces."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualPanel, {
					variant: "map",
					tag: "Map",
					label: "Nairobi · Mombasa · regional activities",
					aspect: "wide"
				})]
			})
		})
	] });
}
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.24em] text-aqua/90",
				children: "Message WISTA Kenya"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl text-white",
				children: "Send an enquiry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						name: "name",
						type: "text",
						autoComplete: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email address",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-sm text-white/80",
							children: "Enquiry type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							name: "type",
							className: "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									className: "bg-navy",
									children: "Select one"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-navy",
									children: "Membership enquiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-navy",
									children: "Program partnership"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-navy",
									children: "Event invitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-navy",
									children: "Media or speaking request"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-navy",
									children: "General enquiry"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-sm text-white/80",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 6,
							className: "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:bg-white/[0.06]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white",
						children: "Send message"
					}),
					sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-aqua",
						children: "Thank you. Your message has been prepared for the WISTA Kenya team."
					})
				]
			})
		]
	});
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-sm text-white/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...rest,
			className: "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-aqua focus:bg-white/[0.06]"
		})]
	});
}
//#endregion
export { ContactPage as component };
