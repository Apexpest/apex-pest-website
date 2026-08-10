import { Container, Eyebrow } from "./ui";
import { zones } from "@/lib/site";

/**
 * Homepage signature section: the five Summit Shield points presented as a
 * clean, editorial grid of minimal cards on the brand green — no diagram.
 */
export function SummitShield() {
  return (
    <section id="summit-shield" className="bg-forest-green py-[100px] text-white">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>The Apex Standard</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(28px,3.6vw,44px)] font-extrabold">
            Summit Shield — five-point home defense
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-relaxed text-white/70">
            Most companies spray a band around your foundation and leave. Summit Shield protects your
            home in five points — from the property line to the peak line, and inside — because pests
            get in from all of them.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {zones.map((z) => {
            const amber = z.tone === "amber";
            return (
              <div
                key={z.no}
                className="w-full rounded-2xl bg-white p-7 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.5)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <div className="flex items-center gap-3">
                  <span className={`font-display text-[15px] font-extrabold tracking-[0.05em] ${amber ? "text-alert-amber" : "text-apex-green"}`}>
                    {z.no}
                  </span>
                  <span className={`h-px flex-1 ${amber ? "bg-alert-amber/40" : "bg-apex-green/20"}`} />
                </div>
                <h3 className="mt-5 font-display text-[20px] font-bold text-charcoal">{z.name}</h3>
                <p className="mt-1.5 font-display text-[14px] font-semibold text-apex-green">{z.headline}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#5a5a52]">{z.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
