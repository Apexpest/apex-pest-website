import { Button, Container, Eyebrow } from "./ui";
import { plans } from "@/lib/services";

export function Plans() {
  return (
    <section className="bg-stone-soft py-[92px]">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow tone="green">Service plans</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold text-charcoal">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-[18px] text-[#5a5a52]">
            Save 20% when you sign up today. Every plan includes free re-services and our 100%
            satisfaction guarantee.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                p.best ? "border-apex-green shadow-[0_12px_40px_rgba(30,77,52,0.15)]" : "border-[#e4e1d8]"
              }`}
            >
              {p.best && (
                <span className="absolute -top-3 left-8 rounded-full bg-apex-green px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                  Best value
                </span>
              )}
              <h3 className="font-display text-[19px] font-bold text-charcoal">{p.name}</h3>
              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="font-display text-[40px] font-extrabold text-apex-green">{p.price}</span>
                <span className="text-[15px] text-[#8a8a80]">{p.cadence}</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15px] text-charcoal">
                    <span className="mt-1 text-apex-green" aria-hidden="true">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button href="/get-a-quote" variant={p.best ? "primary" : "ghostDark"} className="justify-center">
                Get Started
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-[#8a8a80]">
          Prices shown are starting rates and may vary by home size and pest pressure.
        </p>
      </Container>
    </section>
  );
}
