import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as SiteFooter, i as SiteHeader } from "./router-9yJS1AvE.mjs";
import { t as CheckoutDialog } from "./checkout-dialog-ictOi8KS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-layout-DSAz_dKy.js
var import_jsx_runtime = require_jsx_runtime();
function LegalLayout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 pt-28 pb-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight text-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose-legal mt-10",
				children
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutDialog, {})
	] });
}
//#endregion
export { LegalLayout as t };
