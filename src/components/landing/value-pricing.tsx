import { Check } from "lucide-react";
import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { pricingPoints, valueStack } from "@/lib/copy";
import { isFree, pricingCtaLabel, product } from "@/lib/product";

export function ValueStack() {
  return (
    <Section raised>
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/brand/ebook-open.jpg"
            alt="BuzzCraft bee reading The 120 Prompt OS, open to Purpose and Prompt pages"
            width={1448}
            height={1086}
            loading="lazy"
            className="mx-auto max-h-[26rem] w-full rounded-xl object-cover object-center"
          />
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>What you receive</Eyebrow>
            <H2>One library. Dozens of business use cases.</H2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {valueStack.map((v) => (
              <article
                key={v.title}
                className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
              >
                <h3 className="font-display text-lg font-semibold text-fg">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="mx-auto grid max-w-3xl items-center gap-8 rounded-2xl bg-surface p-8 shadow-[var(--shadow-gold)] md:grid-cols-[14rem_1fr] md:p-10">
        <img
          src="/brand/ebook-stand.jpg"
          alt="BuzzCraft bee mascot presenting The 120 Prompt OS hardcover"
          width={1122}
          height={1402}
          loading="lazy"
          className="mx-auto max-h-56 w-auto object-contain md:max-h-72"
        />
        <div>
          <Eyebrow>Acquire Prompt OS</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Get the complete 120 Prompt OS
          </h2>
          {isFree ? (
            <p className="mt-3 text-muted">
              Instant digital access. No payment required on this release.
            </p>
          ) : (
            <p className="mt-3 font-display text-4xl font-semibold text-gold">
              {product.priceLabel}
              <span className="ml-2 text-base font-medium tracking-normal text-muted">
                one simple payment
              </span>
            </p>
          )}
          <ul className="mt-8 space-y-3">
            {pricingPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                {p}
              </li>
            ))}
          </ul>
          <BuyButton source="pricing" className="mt-8 w-full" size="xl">
            {pricingCtaLabel()}
          </BuyButton>
          <p className="mt-4 text-center text-xs text-subtle">
            Secure access · POPIA-aware registration · Instant library
          </p>
        </div>
      </div>
    </Section>
  );
}
