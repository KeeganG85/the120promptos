import { BuyButton } from "@/components/landing/buy-button";
import { product } from "@/lib/product";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-24 md:px-8 md:pt-20 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 80%, color-mix(in oklab, var(--color-gold) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-12">
        <div className="flex justify-center lg:col-span-5">
          <img
            src="/brand/bee-cutout.png"
            alt="BuzzCraft bee mascot in a white shirt and glasses, standing with hands in pockets"
            width={819}
            height={1066}
            loading="lazy"
            className="max-h-64 w-auto object-contain drop-shadow-[0_24px_40px_rgb(0_0_0_/_0.55)] sm:max-h-80 lg:max-h-[28rem]"
          />
        </div>
        <div className="pb-4 text-center lg:col-span-7 lg:pb-16 lg:text-left">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-fg md:text-6xl">
            Stop starting from a blank prompt.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Put 120 structured business conversations between you and your next
            problem.
          </p>
          <BuyButton source="final" size="xl" className="mt-10">
            Get the 120 Prompt OS
          </BuyButton>
          <p className="mt-6 text-sm text-muted">
            Build smarter. Market clearer. Automate more.
          </p>
          <p className="mt-10 font-display text-sm tracking-[0.2em] text-gold uppercase">
            {product.brand} · {product.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
