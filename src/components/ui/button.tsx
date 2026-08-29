import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-ink shadow-[var(--shadow-gold)] hover:bg-gold-bright",
        secondary:
          "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-fg/5 hover:shadow-[var(--shadow-border-hover)]",
        ghost: "text-fg hover:bg-fg/6",
        ink: "bg-ink text-gold hover:bg-ink/90",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 rounded-md text-sm",
        sm: "h-9 px-3.5 rounded-sm text-xs",
        lg: "h-12 px-6 rounded-lg text-[0.9375rem] tracking-wide",
        xl: "h-14 px-7 rounded-lg text-[0.9375rem] font-semibold tracking-[0.06em] uppercase",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
