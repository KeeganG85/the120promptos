/**
 * Single commercial config for the landing page.
 * Set `priceLabel` to a display string such as "R497" when pricing is ready.
 * Leave it null to run in free / registration mode — CTAs switch automatically.
 * Set `checkoutUrl` to an external checkout (PayFast, Lemon Squeezy, etc.)
 * to send buyers off-site instead of the in-page access form.
 */
export const product = {
  name: "The 120 Prompt OS",
  shortName: "Prompt OS",
  brand: "BuzzCraft",
  tagline: "Crafting Buzz. Creating Impact.",
  url: "https://www.buzzcraft.co.za",
  email: "info@buzzcraft.co.za",
  location: "Johannesburg, South Africa",
  priceLabel: null as string | null,
  checkoutUrl: null as string | null,
  title: "The 120 Prompt OS | AI Prompts for South African Businesses | BuzzCraft",
  description:
    "120 practical AI prompts for South African business owners covering SEO, AI visibility, marketing, sales, automation, strategy and operations. Built by BuzzCraft.",
};

export const isFree = product.priceLabel == null;

export function primaryCtaLabel() {
  return isFree ? "Get the Prompt OS free" : "Get the 120 Prompt OS";
}

export function pricingCtaLabel() {
  return isFree
    ? "Get the Prompt OS free"
    : `Get instant access — ${product.priceLabel}`;
}

export const ACCESS_KEY = "buzzcraft-promptos-access";
export const SAMPLE_KEY = "buzzcraft-promptos-sample";
