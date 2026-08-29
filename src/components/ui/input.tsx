import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-md bg-surface-2 px-4 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] placeholder:text-subtle",
        "focus-visible:shadow-[var(--shadow-gold)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
