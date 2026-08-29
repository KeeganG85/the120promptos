import type { ReactNode } from "react";
import { CheckoutDialog } from "@/components/landing/checkout-dialog";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-20 md:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-fg">
          {title}
        </h1>
        <div className="prose-legal mt-10">{children}</div>
      </main>
      <SiteFooter />
      <CheckoutDialog />
    </>
  );
}
