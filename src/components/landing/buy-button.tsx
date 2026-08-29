import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useCheckout } from "@/lib/checkout-store";
import { primaryCtaLabel } from "@/lib/product";

export function BuyButton({
  source,
  children,
  showArrow = true,
  ...props
}: ButtonProps & { source: string; showArrow?: boolean }) {
  const open = useCheckout((s) => s.openCheckout);
  const unlocked = useCheckout((s) => s.unlocked);
  const label =
    children ?? (unlocked ? "Open the library" : primaryCtaLabel());
  return (
    <Button onClick={() => open(source)} {...props}>
      {label}
      {showArrow ? <ArrowRight /> : null}
    </Button>
  );
}
