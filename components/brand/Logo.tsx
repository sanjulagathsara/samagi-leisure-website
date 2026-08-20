import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  size?: "header" | "footer";
};

export function Logo({ className, light = false, size = "header" }: LogoProps) {
  const compact = size === "header";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Samagi Leisure home"
    >
      <Image
        src="/samagi-logo.png"
        alt=""
        width={193}
        height={305}
        priority={compact}
        className={cn("w-auto", compact ? "h-16 sm:h-[4.5rem]" : "h-[4.75rem]")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif tracking-[0.28em] uppercase",
            compact ? "text-xl" : "text-2xl",
            light ? "text-cream" : "text-forest",
          )}
        >
          Samagi
        </span>
        <span
          className={cn(
            "mt-1 tracking-[0.46em] uppercase",
            compact ? "text-[0.58rem]" : "text-[0.62rem]",
            light ? "text-cream/70" : "text-stone",
          )}
        >
          Leisure
        </span>
      </span>
    </Link>
  );
}
