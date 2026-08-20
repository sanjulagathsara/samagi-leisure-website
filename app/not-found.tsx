import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-forest pt-[5.5rem] text-cream">
      <Container>
        <p className="text-[0.68rem] tracking-[0.32em] text-gold uppercase">404</p>
        <h1 className="mt-3 font-serif text-5xl">This path has wandered.</h1>
        <p className="mt-4 max-w-md text-cream/75">
          The page is not in the house. Return to the collection, or write to us
          if you were looking for a stay.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/" variant="gold">
            Home
          </Button>
          <Button href="/contact" variant="outline">
            Book a stay
          </Button>
        </div>
      </Container>
    </section>
  );
}
