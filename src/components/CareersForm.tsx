"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const ROLES = [
  "Pest Control Technician",
  "Office / Customer Service",
  "Account Representative",
  "General interest",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-[#d8d4c8] bg-white px-4 py-3 text-[16px] text-charcoal outline-none focus:border-apex-green focus:ring-2 focus:ring-summit-sage/40";
const labelClass = "block font-display text-[14px] font-bold text-charcoal";

type Data = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
  consent: boolean;
};

const initial: Data = { name: "", email: "", phone: "", role: "", message: "", consent: false };

export function CareersForm() {
  const [data, setData] = useState<Data>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));
  const emailOk = (e: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
  const phoneOk = (p: string) => p.replace(/[^0-9]/g, "").length >= 10;
  const valid = data.name.trim() && emailOk(data.email) && phoneOk(data.phone) && data.role && data.consent;

  async function submit() {
    setStatus("sending");
    setError("");
    const payload = { ...data, source: "careers", submittedAt: new Date().toISOString() };
    const webhook = process.env.NEXT_PUBLIC_CAREERS_WEBHOOK_URL;
    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        const body = encodeURIComponent(
          `New application\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nRole: ${data.role}\n\nAbout:\n${data.message}`
        );
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Careers application")}&body=${body}`;
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
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-apex-green text-[28px] text-white" aria-hidden="true">✓</div>
        <h2 className="font-display text-[24px] font-extrabold text-charcoal">Application received — thank you.</h2>
        <p className="mx-auto mt-3 max-w-[440px] text-[16px] text-[#4a4a44]">
          We review every application and will reach out if there&apos;s a good fit. Thanks for your interest in joining Apex.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#e4e1d8] bg-white p-7 shadow-sm md:p-9">
      <h2 className="font-display text-[20px] font-extrabold text-charcoal">Apply now</h2>
      <p className="mt-2 text-[15px] text-[#5a5a52]">Tell us a little about yourself and we&apos;ll be in touch.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">Full name</label>
          <input id="name" value={data.name} onChange={(e) => set("name", e.target.value)} className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="role">Role of interest</label>
          <select id="role" value={data.role} onChange={(e) => set("role", e.target.value)} className={inputClass}>
            <option value="">Select…</option>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">Tell us about your experience <span className="font-normal text-[#8a8a80]">(optional)</span></label>
          <textarea id="message" rows={4} value={data.message} onChange={(e) => set("message", e.target.value)} className={inputClass} placeholder="Relevant experience, availability, or anything you'd like us to know." />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-[13.5px] leading-relaxed text-[#4a4a44]">
        <input type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[#1e4d34]" />
        <span>I agree to be contacted by {site.name} about my application by phone, text, or email at the information I provided.</span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-alert-amber/10 px-4 py-3 text-[14px] text-[#8a5a10]">
          {error || "Something went wrong."} You can also email us at{" "}
          <a href={`mailto:${site.email}`} className="font-bold underline">{site.email}</a>.
        </p>
      )}

      <div className="mt-8">
        <button
          type="button"
          disabled={!valid || status === "sending"}
          onClick={submit}
          className="rounded-md bg-apex-green px-7 py-3 font-display text-[15px] font-bold text-white hover:bg-[#215838] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? "Sending…" : "Submit application"}
        </button>
      </div>
    </div>
  );
}
