import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as createRootRoute, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, l as ArrowRight, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-9yJS1AvE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("inline-flex min-w-0 shrink-0 items-center gap-2.5", className),
		"aria-label": "BuzzCraft home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/mark.png",
			alt: "",
			width: 36,
			height: 36,
			className: "size-9 rounded-full shadow-[var(--shadow-gold)]"
		}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/wordmark.png",
			alt: "",
			width: 160,
			height: 26,
			className: "h-[1.05rem] w-[6.5rem] shrink-0 object-contain object-left md:h-5 md:w-[7.75rem]"
		})]
	});
}
/**
* Single commercial config for the landing page.
* Set `priceLabel` to a display string such as "R497" when pricing is ready.
* Leave it null to run in free / registration mode — CTAs switch automatically.
* Set `checkoutUrl` to an external checkout (PayFast, Lemon Squeezy, etc.)
* to send buyers off-site instead of the in-page access form.
*/
var product = {
	name: "The 120 Prompt OS",
	shortName: "Prompt OS",
	brand: "BuzzCraft",
	tagline: "Crafting Buzz. Creating Impact.",
	url: "https://www.buzzcraft.co.za",
	email: "info@buzzcraft.co.za",
	location: "Johannesburg, South Africa",
	priceLabel: null,
	checkoutUrl: null,
	title: "The 120 Prompt OS | AI Prompts for South African Businesses | BuzzCraft",
	description: "120 practical AI prompts for South African business owners covering SEO, AI visibility, marketing, sales, automation, strategy and operations. Built by BuzzCraft."
};
var isFree = product.priceLabel == null;
function primaryCtaLabel() {
	return isFree ? "Get the Prompt OS free" : "Get the 120 Prompt OS";
}
function pricingCtaLabel() {
	return isFree ? "Get the Prompt OS free" : `Get instant access — ${product.priceLabel}`;
}
var ACCESS_KEY = "buzzcraft-promptos-access";
var SAMPLE_KEY = "buzzcraft-promptos-sample";
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/library",
		label: "Prompt Library"
	},
	{
		to: "/privacy",
		label: "Privacy"
	},
	{
		to: "/popia",
		label: "POPIA"
	},
	{
		to: "/terms",
		label: "Terms"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg-elevated px-5 pt-16 pb-28 md:px-8 md:pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted",
						children: product.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-subtle",
						children: [
							product.location,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-gold hover:underline",
								href: `mailto:${product.email}`,
								children: product.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-gold hover:underline",
								href: product.url,
								rel: "noreferrer",
								children: "www.buzzcraft.co.za"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7 md:flex md:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-muted transition-colors hover:text-fg",
						children: l.label
					}, l.to))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-12 max-w-6xl text-xs text-subtle",
			children: [
				"© ",
				year,
				" ",
				product.brand,
				". ",
				product.name,
				". Prompts assist thinking and drafting — they do not guarantee rankings, citations or revenue."
			]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-gold text-ink shadow-[var(--shadow-gold)] hover:bg-gold-bright",
			secondary: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-fg/5 hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-fg hover:bg-fg/6",
			ink: "bg-ink text-gold hover:bg-ink/90",
			link: "text-gold underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5 rounded-md text-sm",
			sm: "h-9 px-3.5 rounded-sm text-xs",
			lg: "h-12 px-6 rounded-lg text-[0.9375rem] tracking-wide",
			xl: "h-14 px-7 rounded-lg text-[0.9375rem] font-semibold tracking-[0.06em] uppercase",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var useCheckout = create((set, get) => ({
	open: false,
	source: "hero",
	unlocked: false,
	profile: null,
	ready: false,
	openCheckout: (source = "hero") => {
		if (product.checkoutUrl) {
			window.location.assign(product.checkoutUrl);
			return;
		}
		if (get().unlocked) {
			window.location.assign("/library");
			return;
		}
		set({
			open: true,
			source
		});
	},
	closeCheckout: () => set({ open: false }),
	complete: (profile) => {
		try {
			localStorage.setItem(ACCESS_KEY, JSON.stringify({
				...profile,
				at: Date.now()
			}));
		} catch {}
		set({
			unlocked: true,
			profile,
			open: false
		});
	},
	hydrate: () => {
		try {
			const raw = localStorage.getItem(ACCESS_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (parsed?.email) {
					set({
						unlocked: true,
						profile: {
							firstName: parsed.firstName ?? "",
							email: parsed.email
						},
						ready: true
					});
					return;
				}
			}
		} catch {}
		set({ ready: true });
	}
}));
function BuyButton({ source, children, showArrow = true, ...props }) {
	const open = useCheckout((s) => s.openCheckout);
	const unlocked = useCheckout((s) => s.unlocked);
	const label = children ?? (unlocked ? "Open the library" : primaryCtaLabel());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => open(source),
		...props,
		children: [label, showArrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}) : null]
	});
}
var navLinks = [
	{
		hash: "inside",
		label: "What's Inside"
	},
	{
		hash: "found",
		label: "FOUND"
	},
	{
		hash: "how",
		label: "How It Works"
	},
	{
		hash: "who",
		label: "Who It's For"
	},
	{
		hash: "faq",
		label: "FAQ"
	}
];
var trustChips = [
	"120 Practical Prompts",
	"South African Business Focus",
	"ChatGPT · Claude · Gemini Ready",
	"SEO · AI Visibility · Sales · Automation"
];
var foundStages = [
	{
		letter: "F",
		name: "Findable",
		tag: "SEO",
		title: "Help people discover you when they search.",
		body: "Structure the work behind Google Business Profile, pages, and content so the right local searches can actually find you."
	},
	{
		letter: "O",
		name: "On the map",
		tag: "Local SEO",
		title: "Strengthen visibility for local and “near me” searches.",
		body: "Treat Pretoria East, Sandton, and “near me” as real markets — not an afterthought in a global playbook."
	},
	{
		letter: "U",
		name: "Understood by AI",
		tag: "AEO · GEO",
		title: "Structure information so AI systems can better understand your business.",
		body: "Entities, offers, locations, and proof — written so both people and answer engines can describe you accurately."
	},
	{
		letter: "N",
		name: "Nudged to act",
		tag: "Conversion",
		title: "Turn visibility into calls, WhatsApp enquiries, bookings and sales.",
		body: "Pages, offers, and follow-up that ask for a real next step — not another like."
	},
	{
		letter: "D",
		name: "Done by systems",
		tag: "Automation",
		title: "Build repeatable processes so opportunities do not disappear through the cracks.",
		body: "SOPs, weekly cadence, and AI workflows an owner-run team can actually keep."
	}
];
var categoriesMeta = [
	{
		id: "foundations",
		name: "Business Foundations",
		blurb: "Positioning, niches, customer avatars, value propositions, competitive gaps and business models."
	},
	{
		id: "visibility",
		name: "Audience Growth & Visibility",
		blurb: "SEO strategy, content systems, social, newsletters, LinkedIn, community and local visibility."
	},
	{
		id: "offers",
		name: "Offers & Products",
		blurb: "Validation, packages, ebooks, courses, workshops, memberships and launch planning."
	},
	{
		id: "conversion",
		name: "Marketing, Sales & Conversion",
		blurb: "Sales pages, landing pages, funnels, CTAs, pricing, objections, testimonials and upsells."
	},
	{
		id: "agents",
		name: "AI Agents",
		blurb: "Business strategist, content strategist, sales copywriter, operations, research and insights agents."
	},
	{
		id: "automation",
		name: "AI Automation",
		blurb: "Workflow builders, brand-voice systems, social ops, research assistants, support and analysis."
	},
	{
		id: "decisions",
		name: "Decision Making",
		blurb: "Eisenhower, RICE, OODA, pre-mortems, pricing decisions, sunk-cost analysis and launch checks."
	},
	{
		id: "learning",
		name: "Learning & Skill Development",
		blurb: "Skill plans, trend research, case studies, expert simulations, tool evaluation and accelerated learning."
	},
	{
		id: "ops",
		name: "Productivity & Operations",
		blurb: "Weekly planning, SOPs, time audits, prioritisation, operating systems and workflow optimisation."
	}
];
var howSteps = [
	{
		n: "01",
		title: "Choose your business problem",
		body: "Pick the prompt that matches the job: positioning, a landing page, a SOP, a pricing decision."
	},
	{
		n: "02",
		title: "Replace the brackets",
		body: "Drop in verified facts about your business — location, offer, customer, constraint. Never invent the inputs."
	},
	{
		n: "03",
		title: "Paste into your AI",
		body: "Use ChatGPT, Claude, Gemini, or the assistant you already pay for. Prompt OS is platform-flexible."
	},
	{
		n: "04",
		title: "Review. Refine. Execute.",
		body: "AI drafts. You make the final business decision. Publish only what you have checked."
	}
];
var beforeAfter = {
	before: [
		"A blank ChatGPT screen",
		"Vague instructions",
		"Generic, unusable answers",
		"Rewriting prompts repeatedly",
		"Inconsistent marketing",
		"Disconnected AI experiments",
		"Wasted owner time"
	],
	after: [
		"Structured starting points",
		"Clearer thinking before you type",
		"Repeatable AI workflows",
		"Better-quality drafts",
		"Faster execution",
		"Stronger business systems",
		"Reusable prompts across the work"
	]
};
var valueStack = [
	{
		title: "The 120 Prompt OS digital ebook",
		body: "120 structured business prompts, written as an operating system — not a swipe file of tricks."
	},
	{
		title: "9+ business categories",
		body: "From positioning and local visibility to sales, agents, automation, decisions and operations."
	},
	{
		title: "AI-platform flexible",
		body: "Designed to work with leading general-purpose assistants: ChatGPT, Claude, Gemini and similar tools."
	},
	{
		title: "South African context",
		body: "Local search, WhatsApp-first leads, rands, POPIA awareness, owner-run reality."
	},
	{
		title: "FOUND growth framework",
		body: "Findable, On the map, Understood by AI, Nudged to act, Done by systems."
	},
	{
		title: "Practical instructions",
		body: "Every prompt ships with purpose, the prompt itself, and the expected output."
	},
	{
		title: "Instant digital access",
		body: "Open the library the moment you register. Copy, paste, work."
	}
];
var saPoints = [
	{
		title: "Local search",
		body: "Google Business Profile, local SEO and “near me” visibility — written for how South Africans actually search."
	},
	{
		title: "WhatsApp-first leads",
		body: "The prompts recognise that the conversation often starts in WhatsApp, not a US-style form stack."
	},
	{
		title: "POPIA awareness",
		body: "Marketing and data workflows should respect consent and privacy. The prompts say so, plainly."
	},
	{
		title: "Rands, not dollars",
		body: "Pricing, offers and commercial examples sit in a South African context — not a converted American one."
	},
	{
		title: "Owner-run reality",
		body: "Systems that still make sense when you do not have six departments behind you."
	},
	{
		title: "Regulated industries",
		body: "Health, legal, financial and similar outputs require qualified human review. We say that out loud."
	}
];
var forYou = [
	"You run a South African business",
	"You already use AI and know you are underusing it",
	"You constantly start prompts from scratch",
	"You handle marketing yourself",
	"You want repeatable systems, not one-off experiments",
	"You need better content without staring at a blank screen",
	"You want AI to assist more areas of the business"
];
var notForYou = [
	"You expect AI to run the business without oversight",
	"You want guaranteed rankings",
	"You expect instant revenue simply from using prompts",
	"You will paste AI outputs publicly without reviewing them",
	"You want a get-rich-quick prompt pack"
];
var compliance = [
	"Replace every bracketed field with verified business information.",
	"Never include an unverified statistic, ranking or testimonial.",
	"Review AI output before you publish, send, or put it in front of a client.",
	"POPIA still applies to marketing and customer data — consent is not optional.",
	"Regulated health, financial, legal and similar content needs qualified human review.",
	"No prompt can guarantee Google rankings, AI citations or commercial results."
];
var faqs = [
	{
		q: "Do I need to know how to write AI prompts?",
		a: "No. The prompts provide the structure. You replace the brackets with your own verified business details and run them in the assistant you already use."
	},
	{
		q: "Which AI tools can I use?",
		a: "Prompt OS is written for major general-purpose assistants such as ChatGPT, Claude and Gemini. Use the one you trust and already pay for."
	},
	{
		q: "Is this only for marketing?",
		a: "No. It covers business strategy, product development, sales, AI systems, decision-making, productivity and operations — the work that actually moves an owner-run business."
	},
	{
		q: "Is it designed for South African businesses?",
		a: "Yes. Local search, WhatsApp-first leads, rands, POPIA awareness and owner-run constraints are the point — not a currency swap on an American pack."
	},
	{
		q: "Can I edit the prompts?",
		a: "Yes. You should. Replace bracketed information with your own verified details and adapt the prompt to the job in front of you."
	},
	{
		q: "Will these prompts guarantee Google rankings or AI citations?",
		a: "No. They are designed to improve structure, execution and visibility workflows. They do not guarantee platform outcomes, revenue or rankings."
	},
	{
		q: "Do I get instant access?",
		a: "Yes. After you register you can open the Prompt OS library immediately in this workspace and copy any prompt into your AI assistant."
	},
	{
		q: "Can my team use it?",
		a: "Treat it as an internal operating library for your business. Do not resell or republish the prompt pack as your own product. A fuller licensing policy will sit in Terms as the commercial model is finalised."
	}
];
var pricingPoints = [
	"120 ready-to-use prompts",
	"Immediate digital access",
	"Use with ChatGPT, Claude or Gemini",
	"Built for South African businesses",
	"One simple path in — no subscription maze"
];
var genericPrompt = "Create a marketing strategy for my business.";
var structuredPrompt = `You are a senior growth operator working with a South African owner-run service business.

BUSINESS
- Type: [private dental practice]
- Location: [Sandton, Johannesburg]
- Offer: [new patient consult + hygiene plan, priced in rands]
- Ideal patient: [busy professionals 28–50 in Sandton / nearby suburbs]
- Current lead path: [Google Business Profile + WhatsApp]
- Bottleneck: [enquiries that never become booked consults]
- Constraint: [POPIA, no invented clinical claims, owner-run front desk]

OBJECTIVE
Build a 90-day marketing strategy that makes the practice easier to find for local intent, easier for AI systems to describe accurately, and easier to convert via WhatsApp and phone — without hiring a marketing department.

CHANNELS AVAILABLE
Google Business Profile, practice website, WhatsApp, a modest Instagram, email to existing patients. No large ads budget.

CUSTOMER PROBLEM
People delay dental visits until pain. They search “dentist near me”, ask a WhatsApp question, and disappear if the reply is slow or generic.

CONVERSION ACTION
A booked consult, confirmed on WhatsApp.

RULES
- Do not invent statistics, rankings or clinical outcomes.
- Flag anything that needs the dentist’s professional review.
- End with priorities, weekly actions, and metrics the owner can actually see (calls, WhatsApp replies, booked consults) — not vanity reach.

Now write the strategy.`;
var sampleOutput = {
	title: "90-day local growth plan — Sandton dental practice",
	blocks: [
		{
			h: "Strategy",
			p: "Win the searches that already have intent (dentist + suburb / near me), make the WhatsApp reply the best front desk you have, and publish proof a professional in Sandton would trust — without clinical claims you cannot stand behind."
		},
		{
			h: "Priorities",
			p: "1. Google Business Profile completeness, photos, services, and review replies. 2. A 4-line WhatsApp first-response script with hours, parking, and a booking link. 3. One service page per high-intent treatment, with entity-clear copy. 4. A monthly patient email that is useful, not promotional noise."
		},
		{
			h: "This week’s actions",
			p: "Photograph the rooms and team; write NAP consistently; add WhatsApp click-to-chat on every page; reply to every GBP question in under two working hours; ask 8 recent patients for a review the legal, consented way."
		},
		{
			h: "Metrics (owner-visible)",
			p: "GBP actions (calls, messages, direction requests), WhatsApp first-reply time, booked consults from new patients, % of WhatsApp threads that get a time-and-date. Not: likes, impressions, or “AI citations”."
		}
	]
};
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-200", scrolled || open ? "bg-bg/80 shadow-[var(--shadow-border)] backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: l.hash,
						className: "text-[0.8125rem] font-medium text-muted transition-colors hover:text-fg",
						children: l.label
					}, l.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
						source: "nav",
						size: "sm",
						className: "hidden tracking-[0.08em] uppercase sm:inline-flex",
						showArrow: false,
						children: "Get Prompt OS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg/95 px-5 py-5 backdrop-blur-md lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: l.hash,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-base text-fg hover:bg-fg/5",
					children: l.label
				}, l.hash)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
					source: "nav-mobile",
					className: "mt-3 w-full",
					size: "lg",
					children: "Get Prompt OS"
				})]
			})
		}) : null]
	});
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			setP(max > 0 ? h.scrollTop / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-gold",
			style: { transform: `scaleX(${p})` }
		})
	});
}
function MobileStickyCta() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 520);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButton, {
			source: "mobile-sticky",
			className: "w-full",
			size: "lg",
			children: "Get Prompt OS"
		})
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 py-28 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[0.6875rem] tracking-[0.22em] text-gold uppercase",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-semibold text-fg",
					children: "This page is not on the map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "The Prompt OS library and the landing page are still here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back to Prompt OS"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
var styles_default = "/assets/styles-DuiFPTts.css";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: product.title },
			{
				name: "description",
				content: product.description
			},
			{
				name: "theme-color",
				content: "#080808"
			},
			{
				name: "author",
				content: product.brand
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "canonical",
				href: "https://www.buzzcraft.co.za/"
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
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#main",
					className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-ink",
					children: "Skip to content"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "top-center",
					toastOptions: {
						className: "font-sans",
						style: {
							background: "var(--color-surface)",
							color: "var(--color-fg)",
							border: "1px solid var(--color-border)"
						}
					}
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-BslDHa_I.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./contact-C0O__qyx.mjs");
var Route$4 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./library-q8H6i1Ud.mjs");
var Route$3 = createFileRoute("/library")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./popia-Plc0xcvE.mjs");
var Route$2 = createFileRoute("/popia")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./privacy-BncuEPLT.mjs");
var Route$1 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./terms-CSg_XYVu.mjs");
var Route = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	LibraryRoute: Route$3.update({
		id: "/library",
		path: "/library",
		getParentRoute: () => Route$6
	}),
	PopiaRoute: Route$2.update({
		id: "/popia",
		path: "/popia",
		getParentRoute: () => Route$6
	}),
	PrivacyRoute: Route$1.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$6
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SiteFooter as C, product as D, pricingCtaLabel as E, cn as O, Button as S, isFree as T, structuredPrompt as _, beforeAfter as a, BuyButton as b, faqs as c, genericPrompt as d, howSteps as f, sampleOutput as g, saPoints as h, SiteHeader as i, forYou as l, pricingPoints as m, MobileStickyCta as n, categoriesMeta as o, notForYou as p, ScrollProgress as r, compliance as s, router_exports as t, foundStages as u, trustChips as v, SAMPLE_KEY as w, useCheckout as x, valueStack as y };
