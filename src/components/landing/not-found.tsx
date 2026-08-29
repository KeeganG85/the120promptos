import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 py-28 text-center">
        <p className="font-display text-[0.6875rem] tracking-[0.22em] text-gold uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-fg">
          This page is not on the map.
        </h1>
        <p className="mt-4 text-muted">
          The Prompt OS library and the landing page are still here.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Back to Prompt OS</Link>
        </Button>
      </main>
      <SiteFooter />
    </>
  );
}
