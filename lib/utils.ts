export function formatRate(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function occupancyLabel(occupancy: {
  adults: number;
  children?: number;
}) {
  const adults = `${occupancy.adults} adult${occupancy.adults === 1 ? "" : "s"}`;
  if (!occupancy.children) return adults;
  return `${adults}, ${occupancy.children} child${occupancy.children === 1 ? "" : "ren"}`;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function unsplash(photoId: string, width = 1800) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
