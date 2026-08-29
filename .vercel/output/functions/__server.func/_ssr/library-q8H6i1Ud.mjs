import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Lock, o as Copy, r as Search } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as SiteFooter, O as cn, S as Button, b as BuyButton, i as SiteHeader, o as categoriesMeta, x as useCheckout } from "./router-9yJS1AvE.mjs";
import { n as Input, t as CheckoutDialog } from "./checkout-dialog-ictOi8KS.mjs";
import { i as promptsByCategory, r as prompts, t as buildPrompt } from "./prompts-BidtSfwv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-q8H6i1Ud.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LibraryPage() {
	const unlocked = useCheckout((s) => s.unlocked);
	const hydrate = useCheckout((s) => s.hydrate);
	const ready = useCheckout((s) => s.ready);
	const profile = useCheckout((s) => s.profile);
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const list = (0, import_react.useMemo)(() => {
		const base = cat === "all" ? prompts : promptsByCategory(cat);
		const q = query.trim().toLowerCase();
		if (!q) return base;
		return base.filter((p) => p.title.toLowerCase().includes(q) || p.purpose.toLowerCase().includes(q) || p.task.toLowerCase().includes(q));
	}, [cat, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 pt-28 pb-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[0.6875rem] font-semibold tracking-[0.22em] text-gold uppercase",
					children: "Prompt library"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl",
					children: "The 120 Prompt OS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: ready && unlocked ? `Welcome${profile?.firstName ? `, ${profile.firstName}` : ""}. Copy any prompt, replace the brackets, paste into ChatGPT, Claude or Gemini.` : "Register to unlock the full prompt bodies. Titles and purposes stay visible so you can see the operating system."
				}),
				!unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "flex-1 text-sm text-muted",
								children: "Instant access opens every prompt with purpose, the full instruction, and expected output."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
								source: "library-gate",
								size: "lg",
								children: "Unlock Prompt OS"
							})
						]
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-4 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "pl-10",
							placeholder: "Search prompts",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							"aria-label": "Search prompts"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-subtle",
						children: [list.length, " prompts"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatChip, {
						label: "All",
						on: cat === "all",
						onClick: () => setCat("all")
					}), categoriesMeta.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatChip, {
						label: c.name,
						on: cat === c.id,
						onClick: () => setCat(c.id)
					}, c.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid max-h-[70vh] gap-2 self-start overflow-auto pr-1",
						children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(p),
							className: cn("w-full rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150", active?.id === p.id ? "bg-gold/10 shadow-[var(--shadow-gold)]" : "bg-surface hover:shadow-[var(--shadow-border-hover)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold text-fg",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-xs text-muted",
								children: p.purpose
							})]
						}) }, p.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:sticky lg:top-24 lg:self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptPane, {
							prompt: active,
							unlocked
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutDialog, {})
	] });
}
function CatChip({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors", on ? "bg-gold text-ink" : "bg-surface text-muted hover:text-fg"),
		children: label
	});
}
function PromptPane({ prompt, unlocked }) {
	if (!prompt) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-surface p-8 text-sm text-muted shadow-[var(--shadow-border)]",
		children: "Select a prompt to inspect purpose, the instruction, and expected output."
	});
	const body = buildPrompt(prompt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
				children: prompt.role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-semibold text-fg",
				children: prompt.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase",
				children: "Purpose"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: prompt.purpose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase",
				children: "The prompt"
			}),
			unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-3 max-h-[28rem] overflow-auto rounded-md bg-bg p-4 font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted",
				children: body
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-4",
				onClick: () => {
					navigator.clipboard.writeText(body);
					toast.success("Copied. Paste into your AI assistant.");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copy prompt"]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prompt-lock relative mt-3 max-h-56 overflow-hidden rounded-md bg-bg p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted",
					children: body.slice(0, 420)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase",
				children: "Expected output"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: prompt.expected
			})
		]
	});
}
//#endregion
export { LibraryPage as component };
