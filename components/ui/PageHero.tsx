import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-forest",
        compact ? "min-h-[46vh]" : "min-h-[58vh]",
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-forest via-forest/55 to-forest/20" />
      <Container className="relative z-10 pb-16 pt-36 sm:pb-20">
        {eyebrow ? (
          <p className="text-[0.68rem] tracking-[0.34em] text-gold uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] font-medium text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-7 text-cream/78">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
