import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.68rem] tracking-[0.32em] uppercase",
            light ? "text-gold" : "text-gold-deep",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-4xl leading-tight font-medium tracking-tight sm:text-5xl",
          eyebrow && "mt-3",
          light ? "text-cream" : "text-forest",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7",
            light ? "text-cream/75" : "text-stone",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
