export function SampleNotice({ className }: { className?: string }) {
  return (
    <p className={className ?? "text-xs tracking-wide text-stone/80"}>
      Sample content for demonstration — replace via{" "}
      <code className="text-forest">lib/data.ts</code>.
    </p>
  );
}
