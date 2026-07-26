"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { locations } from "@/lib/locations";

const SERVICES = [
  "General Pest Control",
  "Mosquito Control",
  "Termite Control",
  "Rodent Control",
  "Flea & Tick Control",
  "Cockroach Control",
  "Commercial / Business",
  "Not sure — need an inspection",
];

type Data = {
  service: string;
  propertyType: "Home" | "Business" | "";
  city: string;
  zip: string;
  details: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  consent: boolean;
};

const initial: Data = {
  service: "",
  propertyType: "",
  city: "",
  zip: "",
  details: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  consent: false,
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-[#d8d4c8] bg-white px-4 py-3 text-[16px] text-charcoal outline-none focus:border-apex-green focus:ring-2 focus:ring-summit-sage/40";
const labelClass = "block font-display text-[14px] font-bold text-charcoal";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const phoneOk = (p: string) => p.replace(/[^0-9]/g, "").length >= 10;
  const emailOk = (e: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

  const step1Valid = data.service && data.propertyType;
  const step3Valid = data.name.trim() && phoneOk(data.phone) && emailOk(data.email) && data.consent;

  async function submit() {
    setStatus("sending");
    setError("");
    const payload = { ...data, source: "get-a-quote", submittedAt: new Date().toISOString() };
    const webhook = process.env.NEXT_PUBLIC_QUOTE_WEBHOOK_URL;
    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        // No webhook configured yet — don't lose the lead: open a prefilled email.
        const body = encodeURIComponent(
          `New quote request\n\nService: ${data.service}\nProperty: ${data.propertyType}\nCity: ${data.city}\nZIP: ${data.zip}\nDetails: ${data.details}\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nAddress: ${data.address}`
        );
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website quote request")}&body=${body}`;
      }
      setStatus("done");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-[#e4e1d8] bg-stone-soft p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-apex-green text-[28px] text-white" aria-hidden="true">
          ✓
        </div>
        <h2 className="font-display text-[24px] font-extrabold text-charcoal">Request received — thank you!</h2>
        <p className="mx-auto mt-3 max-w-[440px] text-[16px] text-[#4a4a44]">
          We&apos;ll reach out shortly to confirm your free inspection. Need us sooner? Call us and we&apos;ll get you on the schedule.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-apex-green px-6 py-3 font-display text-[15px] font-bold text-white hover:bg-[#215838]"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#e4e1d8] bg-white p-7 shadow-sm md:p-9">
      {/* Progress */}
      <ol className="mb-8 flex items-center gap-2" aria-label="Progress">
        {[1, 2, 3].map((n) => (
          <li key={n} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[14px] font-bold ${
                step >= n ? "bg-apex-green text-white" : "bg-stone-soft text-[#8a8a80]"
              }`}
            >
              {n}
            </span>
            {n < 3 && <span className={`h-[2px] flex-1 ${step > n ? "bg-apex-green" : "bg-stone-soft"}`} />}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div>
          <h2 className="font-display text-[20px] font-extrabold text-charcoal">What can we help with?</h2>
          <fieldset className="mt-5">
            <legend className={labelClass}>Service needed</legend>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("service", s)}
                  className={`rounded-lg border px-4 py-3 text-left text-[15px] transition-colors ${
                    data.service === s
                      ? "border-apex-green bg-apex-green/5 font-semibold text-apex-green"
                      : "border-[#d8d4c8] text-charcoal hover:border-apex-green"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className={labelClass}>Property type</legend>
            <div className="mt-3 flex gap-2.5">
              {(["Home", "Business"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("propertyType", t)}
                  className={`rounded-lg border px-6 py-3 text-[15px] transition-colors ${
                    data.propertyType === t
                      ? "border-apex-green bg-apex-green/5 font-semibold text-apex-green"
                      : "border-[#d8d4c8] text-charcoal hover:border-apex-green"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              disabled={!step1Valid}
              onClick={() => setStep(2)}
              className="rounded-md bg-apex-green px-6 py-3 font-display text-[15px] font-bold text-white hover:bg-[#215838] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="font-display text-[20px] font-extrabold text-charcoal">Where&apos;s the property?</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="city">City / area</label>
              <select id="city" value={data.city} onChange={(e) => set("city", e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {locations.map((l) => (
                  <option key={l.slug} value={l.city}>{l.city}</option>
                ))}
                <option value="Other">Other in Central KY</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="zip">ZIP code</label>
              <input id="zip" inputMode="numeric" value={data.zip} onChange={(e) => set("zip", e.target.value)} className={inputClass} placeholder="42701" />
            </div>
          </div>
          <div className="mt-5">
            <label className={labelClass} htmlFor="details">Tell us what&apos;s going on <span className="font-normal text-[#8a8a80]">(optional)</span></label>
            <textarea id="details" rows={4} value={data.details} onChange={(e) => set("details", e.target.value)} className={inputClass} placeholder="What are you seeing, and where?" />
          </div>
          <div className="mt-8 flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="rounded-md border border-charcoal/25 px-6 py-3 font-display text-[15px] font-bold text-charcoal hover:border-charcoal">← Back</button>
            <button type="button" onClick={() => setStep(3)} className="rounded-md bg-apex-green px-6 py-3 font-display text-[15px] font-bold text-white hover:bg-[#215838]">Continue →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="font-display text-[20px] font-extrabold text-charcoal">How do we reach you?</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="name">Full name</label>
              <input id="name" value={data.name} onChange={(e) => set("name", e.target.value)} className={inputClass} autoComplete="name" />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone</label>
              <input id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} autoComplete="tel" placeholder="(502) 555-0100" />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={inputClass} autoComplete="email" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="address">Service address <span className="font-normal text-[#8a8a80]">(optional)</span></label>
              <input id="address" value={data.address} onChange={(e) => set("address", e.target.value)} className={inputClass} autoComplete="street-address" />
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-[13.5px] leading-relaxed text-[#4a4a44]">
            <input type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[#1e4d34]" />
            <span>
              By checking this box, I agree to receive calls and text messages (including via automated
              technology) and emails from {site.name} at the number and address I provided, about my
              request and its services. Consent is not a condition of purchase. Message/data rates may
              apply; reply STOP to opt out. See our Privacy Policy and Terms.
            </span>
          </label>

          {status === "error" && (
            <p className="mt-4 rounded-lg bg-alert-amber/10 px-4 py-3 text-[14px] text-[#8a5a10]">
              {error || "Something went wrong."} Please call us at{" "}
              <a href={site.phoneHref} className="font-bold underline">{site.phone}</a> and we&apos;ll take care of you.
            </p>
          )}

          <div className="mt-8 flex justify-between">
            <button type="button" onClick={() => setStep(2)} className="rounded-md border border-charcoal/25 px-6 py-3 font-display text-[15px] font-bold text-charcoal hover:border-charcoal">← Back</button>
            <button
              type="button"
              disabled={!step3Valid || status === "sending"}
              onClick={submit}
              className="rounded-md bg-apex-green px-7 py-3 font-display text-[15px] font-bold text-white hover:bg-[#215838] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "sending" ? "Sending…" : "Request My Free Inspection"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
