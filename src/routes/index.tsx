import { useEffect } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { CheckoutDialog } from "@/components/landing/checkout-dialog";
import { Compliance, Testimonials, WhoFor } from "@/components/landing/trust-blocks";
import { Demonstration } from "@/components/landing/demonstration";
import { EmailCapture } from "@/components/landing/email-capture";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Found } from "@/components/landing/found";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Inside } from "@/components/landing/inside";
import { JsonLd } from "@/components/landing/json-ld";
import { Preview } from "@/components/landing/preview";
import { Problem } from "@/components/landing/problem";
import {
  MobileStickyCta,
  ScrollProgress,
  SiteHeader,
} from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { SouthAfrica } from "@/components/landing/south-africa";
import { Transformation } from "@/components/landing/transformation";
import { Pricing, ValueStack } from "@/components/landing/value-pricing";

export const Route = createFileRoute("/")({ component: Home });

function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
  return null;
}

function Home() {
  return (
    <>
      <JsonLd />
      <HashScroll />
      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <Found />
        <Inside />
        <Demonstration />
        <SouthAfrica />
        <Preview />
        <HowItWorks />
        <Transformation />
        <ValueStack />
        <Pricing />
        <Testimonials />
        <WhoFor />
        <Compliance />
        <Faq />
        <EmailCapture />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
      <CheckoutDialog />
    </>
  );
}
