"use client";

import { FormEvent, useMemo, useState } from "react";
import { properties } from "@/lib/data";
import { cn } from "@/lib/utils";

type BookingFormProps = {
  defaultProperty?: string;
  className?: string;
};

type FieldErrors = Record<string, string>;

const initial = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  property: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function BookingForm({ defaultProperty = "", className }: BookingFormProps) {
  const [values, setValues] = useState({ ...initial, property: defaultProperty });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validate() {
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    if (values.phone.trim().length < 7) next.phone = "Enter a phone number with country code.";
    if (!values.checkIn) next.checkIn = "Choose a check-in date.";
    if (!values.checkOut) next.checkOut = "Choose a check-out date.";
    if (values.checkIn && values.checkOut && values.checkOut <= values.checkIn) {
      next.checkOut = "Check-out must be after check-in.";
    }
    if (Number(values.guests) < 1) next.guests = "At least one guest is required.";
    if (!values.property) next.property = "Please choose a house.";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn("border border-gold/40 bg-cream px-6 py-10 text-center", className)}
        role="status"
      >
        <p className="text-[0.68rem] tracking-[0.28em] text-gold-deep uppercase">
          Enquiry received
        </p>
        <h3 className="mt-3 font-serif text-3xl text-forest">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-stone">
          This is a sample enquiry form — nothing was sent to a server. In a live site,
          our reservations team would reply within one working day about{" "}
          {properties.find((item) => item.slug === values.property)?.name ?? "your stay"}.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-sm text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-6 sm:grid-cols-2", className)}>
      <Field label="Full name" error={errors.name} className="sm:col-span-1">
        <input
          className={fieldClass}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          className={fieldClass}
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>
      <Field label="Phone" error={errors.phone}>
        <input
          className={fieldClass}
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+94 …"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </Field>
      <Field label="Property" error={errors.property}>
        <select
          className={fieldClass}
          name="property"
          value={values.property}
          onChange={(event) => update("property", event.target.value)}
        >
          <option value="">Select a house</option>
          {properties.map((property) => (
            <option key={property.slug} value={property.slug}>
              {property.name} — {property.location}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Check-in" error={errors.checkIn}>
        <input
          className={fieldClass}
          type="date"
          name="checkIn"
          min={today}
          value={values.checkIn}
          onChange={(event) => update("checkIn", event.target.value)}
        />
      </Field>
      <Field label="Check-out" error={errors.checkOut}>
        <input
          className={fieldClass}
          type="date"
          name="checkOut"
          min={values.checkIn || today}
          value={values.checkOut}
          onChange={(event) => update("checkOut", event.target.value)}
        />
      </Field>
      <Field label="Guests" error={errors.guests}>
        <input
          className={fieldClass}
          type="number"
          name="guests"
          min={1}
          max={16}
          value={values.guests}
          onChange={(event) => update("guests", event.target.value)}
        />
      </Field>
      <Field label="Message" error={errors.message} className="sm:col-span-2">
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          rows={4}
          placeholder="Occasion, room preference, or anything we should know."
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase transition-colors hover:bg-forest-mid sm:w-auto"
        >
          Send enquiry
        </button>
        <p className="mt-3 text-xs text-stone">
          Sample form only — no booking is confirmed and no payment is taken.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-800" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
