import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CTA({
  eyebrow = "Stay with us",
  title,
  description,
  primaryLabel = "Book a stay",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTAProps) {
  return (
    <section className={cn(dark ? "bg-forest text-cream" : "bg-cream text-forest")}>
      <Container className="py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={cn(
              "text-[0.68rem] tracking-[0.32em] uppercase",
              dark ? "text-gold" : "text-gold-deep",
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className={cn("mt-5 text-base leading-7", dark ? "text-cream/75" : "text-stone")}>
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} variant={dark ? "gold" : "solid"}>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="outline">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
