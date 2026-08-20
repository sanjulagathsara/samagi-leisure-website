import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  size?: "header" | "footer";
};

export function Logo({ className, size = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Samagi Leisure home"
    >
      <Image
        src="/samagi-logo.png"
        alt="Samagi"
        width={193}
        height={305}
        priority={size === "header"}
        className={cn(
          "w-auto",
          size === "header" ? "h-14 sm:h-16" : "h-16 sm:h-[4.5rem]",
        )}
      />
    </Link>
  );
}
