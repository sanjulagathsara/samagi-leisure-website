import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "bg-forest text-cream hover:bg-forest-mid border border-forest",
  gold: "bg-gold text-forest hover:bg-gold-deep border border-gold",
  outline:
    "border border-gold/80 bg-transparent text-inherit hover:bg-gold/15",
  ghost: "border border-transparent bg-transparent text-inherit hover:text-gold-deep",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
