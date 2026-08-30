import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCheckout } from "@/lib/checkout-store";
import { isFree, pricingCtaLabel, product } from "@/lib/product";

export function CheckoutDialog() {
  const open = useCheckout((s) => s.open);
  const close = useCheckout((s) => s.closeCheckout);
  const complete = useCheckout((s) => s.complete);
  const hydrate = useCheckout((s) => s.hydrate);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) {
      toast.error("Please confirm you want instant access to Prompt OS.");
      return;
    }
    complete({ firstName, email });
    toast.success("Access granted. Opening the library.");
    void navigate({ to: "/library" });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? close() : null)}>
      <DialogContent>
        <img
          src="/brand/ebook-stand.jpg"
          alt=""
          width={224}
          height={280}
          className="mx-auto max-h-32 w-auto object-contain"
        />
        <DialogTitle>
          {isFree ? "Get the Prompt OS free" : "Get instant access"}
        </DialogTitle>
        <DialogDescription>
          {isFree
            ? "Register once. Open all 120 prompts in the library immediately."
            : `One simple payment of ${product.priceLabel}. Immediate digital access.`}
        </DialogDescription>
        <form onSubmit={onSubmit} className="mt-2 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="co-name">First name</Label>
            <Input
              id="co-name"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="co-email">Email address</Label>
            <Input
              id="co-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              className="mt-1 size-4 shrink-0 accent-gold"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I want instant access to The 120 Prompt OS and agree that BuzzCraft
              may send the product to this address. See{" "}
              <Link to="/privacy" className="text-gold hover:underline">
                Privacy
              </Link>{" "}
              and{" "}
              <Link to="/popia" className="text-gold hover:underline">
                POPIA
              </Link>
              .
            </span>
          </label>
          <Button type="submit" size="lg">
            {pricingCtaLabel()}
          </Button>
          <p className="text-center text-xs text-subtle">
            Johannesburg · {product.email} · No fake timers
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
