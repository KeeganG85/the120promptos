import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("inline-flex min-w-0 shrink-0 items-center gap-2.5", className)}
      aria-label="BuzzCraft home"
    >
      <img
        src="/brand/mark.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-full shadow-[var(--shadow-gold)]"
      />
      {compact ? null : (
        <img
          src="/brand/wordmark.png"
          alt=""
          width={160}
          height={26}
          className="h-[1.05rem] w-[6.5rem] shrink-0 object-contain object-left md:h-5 md:w-[7.75rem]"
        />
      )}
    </Link>
  );
}
