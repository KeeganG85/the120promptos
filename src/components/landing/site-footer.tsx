import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/logo";
import { product } from "@/lib/product";

const links = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Prompt Library" },
  { to: "/privacy", label: "Privacy" },
  { to: "/popia", label: "POPIA" },
  { to: "/terms", label: "Terms" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-elevated px-5 pt-16 pb-28 md:px-8 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">{product.tagline}</p>
          <p className="mt-6 text-sm text-subtle">
            {product.location}
            <br />
            <a className="text-gold hover:underline" href={`mailto:${product.email}`}>
              {product.email}
            </a>
            <br />
            <a
              className="text-gold hover:underline"
              href={product.url}
              rel="noreferrer"
            >
              www.buzzcraft.co.za
            </a>
          </p>
        </div>
        <div className="md:col-span-7 md:flex md:justify-end">
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-subtle">
        © {year} {product.brand}. {product.name}. Prompts assist thinking and
        drafting — they do not guarantee rankings, citations or revenue.
      </p>
    </footer>
  );
}
