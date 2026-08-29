import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as product, E as pricingCtaLabel, O as cn, S as Button, T as isFree, x as useCheckout } from "./router-9yJS1AvE.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-dialog-ictOi8KS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		"data-slot": "dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[min(100%-1.5rem,32rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border),var(--shadow-lift)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-sm text-muted transition-colors hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-semibold tracking-tight text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("h-12 w-full rounded-md bg-surface-2 px-4 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] placeholder:text-subtle", "focus-visible:shadow-[var(--shadow-gold)]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("text-sm font-medium text-fg peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
function CheckoutDialog() {
	const open = useCheckout((s) => s.open);
	const close = useCheckout((s) => s.closeCheckout);
	const complete = useCheckout((s) => s.complete);
	const hydrate = useCheckout((s) => s.hydrate);
	const navigate = useNavigate();
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	function onSubmit(e) {
		e.preventDefault();
		if (!consent) {
			toast.error("Please confirm you want instant access to Prompt OS.");
			return;
		}
		complete({
			firstName,
			email
		});
		toast.success("Access granted. Opening the library.");
		navigate({ to: "/library" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v ? close() : null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/ebook-stand.jpg",
				alt: "",
				width: 200,
				height: 300,
				className: "mx-auto max-h-28 w-auto object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isFree ? "Get the Prompt OS free" : "Get instant access" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: isFree ? "Register once. Open all 120 prompts in the library immediately." : `One simple payment of ${product.priceLabel}. Immediate digital access.` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-2 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "co-name",
							children: "First name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "co-name",
							autoComplete: "given-name",
							value: firstName,
							onChange: (e) => setFirstName(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "co-email",
							children: "Email address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "co-email",
							type: "email",
							autoComplete: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "mt-1 size-4 shrink-0 accent-gold",
							checked: consent,
							onChange: (e) => setConsent(e.target.checked)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"I want instant access to The 120 Prompt OS and agree that BuzzCraft may send the product to this address. See",
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
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						children: pricingCtaLabel()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs text-subtle",
						children: [
							"Johannesburg · ",
							product.email,
							" · No fake timers"
						]
					})
				]
			})
		] })
	});
}
//#endregion
export { Input as n, Label as r, CheckoutDialog as t };
