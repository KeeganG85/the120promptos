import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as product, S as Button } from "./router-9yJS1AvE.mjs";
import { n as Input, r as Label } from "./checkout-dialog-ictOi8KS.mjs";
import { t as LegalLayout } from "./legal-layout-DSAz_dKy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C0O__qyx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const href = `mailto:${product.email}?subject=${encodeURIComponent("Prompt OS enquiry from " + name)}&body=${encodeURIComponent(message + "\n\n" + email)}`;
		window.location.href = href;
		toast.success("Opening your email app.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalLayout, {
		title: "Contact",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			product.brand,
			" · ",
			product.location,
			". Email",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${product.email}`,
				children: product.email
			}),
			". Website",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: product.url,
				children: product.url.replace("https://", "")
			}),
			"."
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mt-8 grid max-w-lg gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "c-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-name",
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "c-email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "c-msg",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "c-msg",
						required: true,
						rows: 6,
						value: message,
						onChange: (e) => setMessage(e.target.value),
						className: "w-full rounded-md bg-surface-2 px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus-visible:shadow-[var(--shadow-gold)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					children: "Send message"
				})
			]
		})]
	});
}
//#endregion
export { Contact as component };
