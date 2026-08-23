"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SampleNotice } from "@/components/ui/SampleNotice";
import type { Property, PropertyType } from "@/lib/types";

const typeLabels: Record<PropertyType, string> = {
  beach: "Beach",
  hill: "Hill country",
  city: "City",
};

export function PropertyExplorer({ properties }: { properties: Property[] }) {
  const locations = useMemo(() => {
    return ["All", ...Array.from(new Set(properties.map((property) => property.location)))];
  }, [properties]);

  const types = useMemo(() => {
    const present = Array.from(new Set(properties.map((property) => property.type)));
    return [
      { value: "all" as const, label: "All types" },
      ...present.map((value) => ({ value, label: typeLabels[value] })),
    ];
  }, [properties]);

  const [location, setLocation] = useState("All");
  const [type, setType] = useState<"all" | PropertyType>("all");

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch = location === "All" || property.location === location;
      const typeMatch = type === "all" || property.type === type;
      return locationMatch && typeMatch;
    });
  }, [location, properties, type]);

  const showFilters = locations.length > 2 || types.length > 2;

  return (
    <div>
      {showFilters ? (
        <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by location">
            {locations.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocation(item)}
                className={`px-4 py-2 text-[0.68rem] tracking-[0.18em] uppercase ${
                  location === item
                    ? "bg-forest text-cream"
                    : "border border-line text-forest hover:border-gold"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {types.length > 2 ? (
            <label className="text-[0.68rem] tracking-[0.18em] text-stone uppercase">
              Type
              <select
                className="ml-3 border-b border-line bg-transparent py-1 text-sm tracking-normal text-forest normal-case focus:border-gold focus:outline-none"
                value={type}
                onChange={(event) =>
                  setType(event.target.value as "all" | PropertyType)
                }
              >
                {types.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      ) : null}
      <SampleNotice className={showFilters ? "mt-6 text-xs text-stone/80" : "text-xs text-stone/80"} />
      {filtered.length === 0 ? (
        <p className="mt-10 text-stone">No stays match those filters. Try another combination.</p>
      ) : (
        <div className={`grid gap-8 ${filtered.length === 1 ? "" : "md:grid-cols-2"} ${showFilters ? "mt-10" : "mt-8"}`}>
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.slug}
              property={property}
              featured={filtered.length === 1 || index === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
