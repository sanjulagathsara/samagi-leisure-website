import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ quote, name, origin, stay }: Testimonial) {
  return (
    <blockquote className="flex h-full flex-col border border-line bg-ivory px-6 py-8">
      <p className="font-serif text-2xl leading-snug text-forest italic">
        “{quote}”
      </p>
      <footer className="mt-8 text-sm">
        <cite className="not-italic font-medium text-forest">{name}</cite>
        <p className="mt-1 text-stone">
          {origin} · {stay}
        </p>
      </footer>
    </blockquote>
  );
}
