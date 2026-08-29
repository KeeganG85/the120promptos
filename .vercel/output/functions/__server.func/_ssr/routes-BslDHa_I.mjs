import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Lock, c as Check, l as ArrowRight, s as ChevronDown, u as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as SiteFooter, D as product, E as pricingCtaLabel, O as cn, S as Button, T as isFree, _ as structuredPrompt, a as beforeAfter, b as BuyButton, c as faqs, d as genericPrompt, f as howSteps, g as sampleOutput, h as saPoints, i as SiteHeader, l as forYou, m as pricingPoints, n as MobileStickyCta, o as categoriesMeta, p as notForYou, r as ScrollProgress, s as compliance, u as foundStages, v as trustChips, w as SAMPLE_KEY, y as valueStack } from "./router-9yJS1AvE.mjs";
import { n as Input, r as Label, t as CheckoutDialog } from "./checkout-dialog-ictOi8KS.mjs";
import { i as promptsByCategory, n as getFeatured, r as prompts, t as buildPrompt } from "./prompts-BidtSfwv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BslDHa_I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "is-visible", className),
		style: { transitionDelay: shown ? `${delay}ms` : void 0 },
		children
	});
}
function Section({ id, children, className, raised = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative scroll-mt-24 px-5 py-20 md:px-8 md:py-28", raised && "bg-bg-elevated", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 font-display text-[0.6875rem] font-semibold tracking-[0.22em] text-gold uppercase",
		children
	});
}
function H2({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("max-w-4xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-fg md:text-5xl", className),
		children
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		raised: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Proof, when it is real" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Customer stories will live here — not invented ones." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted",
					children: "We do not fabricate testimonials or statistics. When owners send Before / Use / After notes we can verify, they will appear in this grid."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: [
					{
						label: "Before",
						hint: "The blank-page problem they had."
					},
					{
						label: "Use",
						hint: "Which prompts or category they actually ran."
					},
					{
						label: "After",
						hint: "An operational result they can stand behind."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-dashed border-border bg-surface/50 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
							children: ["Placeholder · ", s.label]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: s.hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-subtle",
							children: "Not a real review."
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"Used Prompt OS? Write to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-gold hover:underline",
						href: `mailto:${product.email}`,
						children: product.email
					}),
					" ",
					"with Before, Use, After. We will only publish with your permission."
				]
			})
		]
	});
}
function WhoFor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "who",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Fit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Who this is for — and who should walk away." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-gold",
						children: "This is for you if"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: forYou.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" }), item]
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-muted",
						children: "Probably not for you if"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: notForYou.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-subtle" }), item]
						}, item))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "who",
				className: "mt-10",
				size: "lg"
			})
		]
	});
}
function Compliance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		raised: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Responsible AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "AI drafts. You own the final decision." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-3 md:grid-cols-2",
			children: compliance.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-xl bg-surface px-5 py-4 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]",
				children: c
			}, c))
		})]
	});
}
function Demonstration() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "demo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Show, don't just tell" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Here's what one prompt can do" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted md:text-lg",
					children: "Same job. Two instructions. Only one of them knows it is a dental practice in Sandton that lives and dies on WhatsApp."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase",
						children: "Left · Generic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 overflow-x-auto font-mono text-sm whitespace-pre-wrap text-muted",
						children: genericPrompt
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-gold)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
						children: "Right · Prompt OS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 max-h-72 overflow-auto font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-fg",
						children: structuredPrompt
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
						children: "Example output"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl font-semibold text-fg",
						children: sampleOutput.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: sampleOutput.blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold text-gold",
							children: b.h
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: b.p
						})] }, b.h))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-subtle",
						children: "Illustrative draft only. Replace every bracket with verified facts. No rankings or revenue are promised."
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "demo",
				className: "mt-10",
				size: "lg"
			})
		]
	});
}
function EmailCapture() {
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [marketing, setMarketing] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const samples = getFeatured().slice(0, 3);
	function onSubmit(e) {
		e.preventDefault();
		if (!consent) {
			toast.error("Please confirm we may send the sample prompts you asked for.");
			return;
		}
		try {
			localStorage.setItem(SAMPLE_KEY, JSON.stringify({
				firstName,
				email,
				marketing,
				at: Date.now()
			}));
		} catch {}
		setDone(true);
		toast.success("Sample prompts ready below.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		raised: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Not ready yet?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Take a few prompts for a test drive." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Three complete prompts, in your browser, no payment. The full operating system stays one step away."
				})
			] }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold text-fg",
					children: firstName ? `${firstName}, your samples are ready.` : "Your samples are ready."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: samples.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "w-full rounded-md bg-bg px-3 py-3 text-left text-sm text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-gold)]",
						onClick: () => {
							navigator.clipboard.writeText(buildPrompt(p));
							toast.success("Copied. Paste into ChatGPT, Claude or Gemini.");
						},
						children: ["Copy · ", p.title]
					}) }, p.id))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit,
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "sample-name",
								children: "First name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sample-name",
								autoComplete: "given-name",
								value: firstName,
								onChange: (e) => setFirstName(e.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "sample-email",
								children: "Email address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sample-email",
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "mt-1 size-4 accent-gold",
									checked: consent,
									onChange: (e) => setConsent(e.target.checked)
								}),
								"I agree that BuzzCraft may email me the sample prompts I requested. I can unsubscribe at any time. See",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "text-gold hover:underline",
									children: "Privacy"
								}),
								" ",
								"and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/popia",
									className: "text-gold hover:underline",
									children: "POPIA"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-gold",
								checked: marketing,
								onChange: (e) => setMarketing(e.target.checked)
							}), "Optional: also send occasional emails about Prompt OS and BuzzCraft. Not required to get the samples."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Send me the sample prompts"
						})
					]
				})
			})]
		})
	});
}
function Accordion({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		"data-slot": "accordion-item",
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			"data-slot": "accordion-trigger",
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-fg transition-colors hover:text-gold [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pt-0 pb-5 leading-relaxed", className),
			children
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "faq",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Straight answers." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-10",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `q-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
				}, f.q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "faq",
				className: "mt-10",
				size: "lg"
			})
		]
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pt-16 pb-24 md:px-8 md:pt-20 md:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0",
			style: { background: "radial-gradient(ellipse 50% 60% at 20% 80%, color-mix(in oklab, var(--color-gold) 16%, transparent), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/bee-cutout.png",
					alt: "BuzzCraft bee mascot in a white shirt and glasses, standing with hands in pockets",
					width: 819,
					height: 1066,
					loading: "lazy",
					className: "max-h-64 w-auto object-contain drop-shadow-[0_24px_40px_rgb(0_0_0_/_0.55)] sm:max-h-80 lg:max-h-[28rem]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-4 text-center lg:col-span-7 lg:pb-16 lg:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-semibold tracking-[-0.03em] text-fg md:text-6xl",
						children: "Stop starting from a blank prompt."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted",
						children: "Put 120 structured business conversations between you and your next problem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
						source: "final",
						size: "xl",
						className: "mt-10",
						children: "Get the 120 Prompt OS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "Build smarter. Market clearer. Automate more."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 font-display text-sm tracking-[0.2em] text-gold uppercase",
						children: [
							product.brand,
							" · ",
							product.tagline
						]
					})
				]
			})]
		})]
	});
}
function Found() {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (!e?.isIntersecting) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				setOn(31);
				io.disconnect();
				return;
			}
			foundStages.forEach((_, i) => {
				window.setTimeout(() => setOn((s) => s | 1 << i), 220 * i);
			});
			io.disconnect();
		}, { threshold: .25 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "found",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The FOUND framework" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Built around how modern businesses actually grow" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted md:text-lg",
					children: "Five connected stages — not a pile of unrelated features. Ask better. Think better. Market better. Operate better."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "found-path absolute top-8 right-8 left-8 hidden h-px md:block"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
					children: foundStages.map((s, i) => {
						const lit = (on & 1 << i) !== 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("relative overflow-hidden rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-300", lit && "found-on shadow-[var(--shadow-gold)]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"aria-hidden": true,
									className: cn("pointer-events-none absolute -right-1 -bottom-4 font-display text-7xl font-semibold transition-colors", lit ? "text-gold/15" : "text-fg/5"),
									children: s.letter
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("relative font-display text-4xl font-semibold tracking-tight transition-colors", lit ? "text-gold" : "text-subtle"),
									children: s.letter
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 font-display text-lg font-semibold text-fg",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-gold uppercase",
									children: s.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 text-sm leading-relaxed text-muted",
									children: s.title
								})
							]
						}, s.letter);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/bee-systems.png",
					alt: "BuzzCraft mascot at a strategy board: we build growth systems, not marketing noise",
					width: 900,
					height: 1100,
					loading: "lazy",
					className: "mx-auto max-h-[28rem] w-full rounded-xl object-cover object-top shadow-[var(--shadow-gold)] lg:max-h-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-fg md:text-3xl",
						children: "We build growth systems, not marketing noise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Prompt OS is the operator layer: findable, on the map, understood by AI, nudged to act, done by systems. That is the work — not another week of random posts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
						source: "found",
						className: "mt-8",
						size: "lg"
					})
				] })]
			})
		]
	});
}
var story = [
	"Ask better",
	"Think better",
	"Market better",
	"Operate better"
];
function FloatingCard({ className, eyebrow, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute hidden rounded-lg bg-surface/90 p-3 shadow-[var(--shadow-border),var(--shadow-lift)] backdrop-blur-sm lg:block ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.625rem] font-semibold tracking-[0.16em] text-gold uppercase",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-sm font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-[14rem] text-[0.7rem] leading-snug text-muted",
				children: body
			})
		]
	});
}
function Hero() {
	const stageRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = stageRef.current;
		if (!el) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const desktop = window.matchMedia("(min-width: 1024px)").matches;
		if (reduced || !desktop) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - .5;
			const y = (e.clientY - r.top) / r.height - .5;
			el.style.transform = `perspective(1400px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
		};
		const reset = () => {
			el.style.transform = "perspective(1400px) rotateY(-8deg) rotateX(3deg)";
		};
		reset();
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", reset);
		return () => {
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", reset);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pt-24 pb-10 md:px-8 md:pt-32 md:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse 65% 55% at 78% 18%, color-mix(in oklab, var(--color-gold) 16%, transparent), transparent 62%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/mark.png",
				alt: "",
				"aria-hidden": true,
				width: 480,
				height: 480,
				className: "pointer-events-none absolute -top-16 -right-16 size-[22rem] opacity-[0.08] select-none md:size-[32rem]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12 lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[0.6875rem] font-semibold tracking-[0.28em] text-gold uppercase",
							children: "BuzzCraft presents"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-[1.65rem] leading-[1.1] font-semibold tracking-[-0.035em] text-fg sm:text-4xl lg:mt-5 lg:text-[3.05rem] lg:leading-[1.05]",
							children: "Stop asking AI random questions. Start running your business with it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted md:text-lg",
							children: "The 120 Prompt OS gives South African business owners practical, ready-to-use prompts for marketing, SEO, sales, AI visibility, automation, decision-making and operations — without needing to become an AI expert."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
								source: "hero",
								size: "xl",
								className: "w-full sm:w-auto",
								children: "Get the 120 Prompt OS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "xl",
								className: "w-full sm:w-auto",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#inside",
									children: ["See what's inside", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: trustChips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "chip",
								children: c
							}, c))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: stageRef,
						className: "parallax-book relative mx-auto max-w-lg transition-transform duration-200 ease-out lg:max-w-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/hero-lockup.jpg",
								alt: "BuzzCraft bee mascot standing beside the 120 Prompt OS hardcover, gold B glowing behind them",
								width: 1728,
								height: 1152,
								fetchPriority: "high",
								className: "relative z-10 w-full rounded-xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
								className: "-left-2 top-6 z-20 w-44",
								eyebrow: "Local search",
								title: "HVAC near me",
								body: "Pretoria East · Google Business Profile · WhatsApp enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
								className: "-right-2 bottom-16 z-20 w-52",
								eyebrow: "Output",
								title: "Strategy · 4 priorities",
								body: "Actions and owner-visible metrics. No invented rankings."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-border pt-8 sm:justify-between sm:gap-0",
				children: story.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-muted uppercase sm:text-xs",
					children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						"aria-hidden": true,
						className: "hidden size-3.5 text-gold sm:block"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2",
						children: label
					})] })]
				}, label))
			})
		]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "how",
		raised: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How it works" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Four steps. Then you decide." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: howSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-semibold text-gold",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold text-fg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: s.body
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "how",
				className: "mt-10",
				size: "lg"
			})
		]
	});
}
function CountUp({ to, className }) {
	const [n, setN] = (0, import_react.useState)(to);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const io = new IntersectionObserver(([e]) => {
			if (!e?.isIntersecting) return;
			io.disconnect();
			if (reduced) {
				setN(to);
				return;
			}
			const start = performance.now();
			const dur = 900;
			let raf = 0;
			const tick = (t) => {
				const p = Math.min(1, (t - start) / dur);
				const eased = 1 - (1 - p) ** 3;
				setN(Math.round(eased * to));
				if (p < 1) raf = requestAnimationFrame(tick);
			};
			setN(0);
			raf = requestAnimationFrame(tick);
			return () => cancelAnimationFrame(raf);
		}, { threshold: .5 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: n
	});
}
function Inside() {
	const [open, setOpen] = (0, import_react.useState)("foundations");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "inside",
		raised: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What's inside" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(H2, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						to: prompts.length,
						className: "tabular-nums text-gold"
					}),
					" ",
					"prompts across the work that actually moves a business forward"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted md:text-lg",
					children: "Nine categories. Expand a card to inspect representative prompts — then unlock the full library."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3",
				children: categoriesMeta.map((c, i) => {
					const id = c.id;
					const isOpen = open === id;
					const list = promptsByCategory(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200", isOpen ? "shadow-[var(--shadow-gold)] md:col-span-2 lg:col-span-3" : "hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-start justify-between gap-4 text-left",
							onClick: () => setOpen(isOpen ? null : id),
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-gold",
									children: [
										String(i + 1).padStart(2, "0"),
										" · ",
										list.length,
										" prompts"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl font-semibold text-fg",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: c.blurb
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-1 size-5 shrink-0 text-muted transition-transform duration-200", isOpen && "rotate-180 text-gold") })]
						}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
							children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-bg px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)]",
								children: p.title
							}, p.id))
						}) : null]
					}, c.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "inside",
				className: "mt-10",
				size: "lg"
			})
		]
	});
}
function JsonLd() {
	const offer = product.priceLabel ? {
		"@type": "Offer",
		priceCurrency: "ZAR",
		availability: "https://schema.org/InStock"
	} : {
		"@type": "Offer",
		price: "0",
		priceCurrency: "ZAR",
		availability: "https://schema.org/InStock"
	};
	const data = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			name: product.brand,
			url: product.url,
			email: product.email,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Johannesburg",
				addressCountry: "ZA"
			},
			slogan: product.tagline,
			logo: `${product.url}/brand/mark.png`
		},
		{
			"@context": "https://schema.org",
			"@type": "Product",
			name: product.name,
			description: product.description,
			image: `${product.url}/brand/ebook-cover.jpg`,
			brand: {
				"@type": "Brand",
				name: product.brand
			},
			url: product.url,
			offers: offer
		},
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: product.name,
			applicationCategory: "BusinessApplication",
			operatingSystem: "Web",
			description: product.description,
			url: product.url,
			publisher: {
				"@type": "Organization",
				name: product.brand
			},
			offers: offer
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.a
				}
			}))
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function Preview() {
	const featured = (0, import_react.useMemo)(() => getFeatured(), []);
	const [active, setActive] = (0, import_react.useState)(featured[0]);
	const full = buildPrompt(active);
	const visible = full.slice(0, Math.min(720, Math.floor(full.length * .48)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "preview",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Interactive preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Open the Prompt OS. Inspect a prompt. Then unlock the rest." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] lg:grid lg:grid-cols-[minmax(0,16rem)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-b border-border lg:border-r lg:border-b-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-3 font-mono text-[0.6875rem] tracking-[0.14em] text-subtle uppercase",
					children: "Prompt OS · Preview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-64 overflow-auto lg:max-h-[32rem]",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(p),
						className: cn("w-full px-4 py-3 text-left text-sm transition-colors", active.id === p.id ? "bg-gold/10 text-gold" : "text-muted hover:bg-fg/4 hover:text-fg"),
						children: p.title
					}) }, p.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
						children: "Purpose"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-fg",
						children: active.purpose
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
						children: "The prompt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prompt-lock relative mt-3 max-h-64 overflow-hidden rounded-md bg-bg p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
							className: "font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted",
							children: [visible, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
						children: "Expected output"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: active.expected
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Full prompt text unlocks with Prompt OS."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
						source: "preview",
						className: "mt-6",
						size: "lg",
						children: "Unlock all 120 prompts"
					})
				]
			})]
		})]
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		raised: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The blank-page problem" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "AI isn't the problem. The way most businesses use it is." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted md:text-lg",
					children: "Most owners open ChatGPT and type something like “Write me a Facebook post”, “Help me market my business”, or “Give me some business ideas”."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase",
								children: "Generic input"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "mt-4 overflow-x-auto rounded-md bg-bg px-3 py-3 font-mono text-sm whitespace-pre-wrap text-muted",
								children: "“Create a marketing strategy for my business.”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2 text-sm text-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }), "Generic AI output"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "A weightless plan that could belong to anyone, anywhere. You rewrite the prompt. You still don't trust the draft."
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-center font-display text-sm tracking-[0.2em] text-gold uppercase md:block",
						children: "vs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
									children: "Prompt OS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
									className: "mt-4 space-y-2 font-mono text-sm text-fg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "01"
											}), " Structured business context"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "02"
											}), " Purpose-built prompt"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "03"
											}), " Better reasoning"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "04"
											}), " More usable output"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "05"
											}), " Business action"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm text-muted",
									children: "The quality of AI output is heavily influenced by the quality of the instruction. Prompt OS removes the blank page."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "problem",
				className: "mt-10",
				size: "lg",
				children: "Upgrade the way I use AI"
			}) })
		]
	});
}
function SouthAfrica() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		raised: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Designed here" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Not another American prompt pack with the currency changed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-muted md:text-lg",
					children: "Prompt OS has been rewritten around the realities of South African owner-run businesses — a dental practice in Sandton, an HVAC company in Pretoria East, an accountant in Johannesburg, a contractor whose enquiries arrive on WhatsApp."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: saPoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-transform duration-200 hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-fg",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: p.body
					})]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-subtle",
				children: "Claims stay responsible. Prompt OS does not promise rankings, revenue or guaranteed AI citations."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
				source: "sa",
				className: "mt-8",
				size: "lg"
			})
		]
	});
}
function Transformation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The shift" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "From “What should I ask AI?” to “Which problem am I solving next?”" })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase",
					children: "Before Prompt OS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: beforeAfter.before.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-subtle" }), item]
					}, item))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase",
					children: "After Prompt OS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: beforeAfter.after.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" }), item]
					}, item))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-subtle",
			children: "No guaranteed financial outcomes. Better structure, faster drafts, clearer decisions — if you do the work."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
			source: "transform",
			className: "mt-8",
			size: "lg"
		})
	] });
}
function ValueStack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		raised: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/ebook-open.jpg",
					alt: "The 120 Prompt OS hardcover open on a desk, gold-edged pages catching the light",
					width: 900,
					height: 1200,
					loading: "lazy",
					className: "mx-auto max-h-[26rem] w-full rounded-xl object-cover object-center"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What you receive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "One library. Dozens of business use cases." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: valueStack.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-fg",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: v.body
						})]
					}, v.title))
				})]
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "pricing",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-3xl items-center gap-8 rounded-2xl bg-surface p-8 shadow-[var(--shadow-gold)] md:grid-cols-[14rem_1fr] md:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/ebook-stand.jpg",
				alt: "The 120 Prompt OS hardcover standing in gold studio light",
				width: 1152,
				height: 1728,
				loading: "lazy",
				className: "mx-auto max-h-56 w-auto object-contain md:max-h-72"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Acquire Prompt OS" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl",
					children: "Get the complete 120 Prompt OS"
				}),
				isFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Instant digital access. No payment required on this release."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-display text-4xl font-semibold text-gold",
					children: [product.priceLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-base font-medium tracking-normal text-muted",
						children: "one simple payment"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: pricingPoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-gold" }), p]
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
					source: "pricing",
					className: "mt-8 w-full",
					size: "xl",
					children: pricingCtaLabel()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-subtle",
					children: "Secure access · POPIA-aware registration · Instant library"
				})
			] })]
		})
	});
}
function HashScroll() {
	const hash = useRouterState({ select: (s) => s.location.hash });
	(0, import_react.useEffect)(() => {
		if (!hash) return;
		const id = hash.replace(/^#/, "");
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [hash]);
	return null;
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Found, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inside, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demonstration, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SouthAfrica, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformation, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoFor, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compliance, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailCapture, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileStickyCta, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutDialog, {})
	] });
}
//#endregion
export { Home as component };
