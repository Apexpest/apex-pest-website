import { Container, Eyebrow } from "./ui";
import { zones } from "@/lib/site";
import { SummitShieldDiagram } from "./SummitShieldDiagram";

/**
 * Homepage signature section: the five Summit Shield points listed beside a
 * simple, static picture of a home with each protected area highlighted.
 */
export function SummitShield() {
  return (
    <section id="summit-shield" className="bg-forest-green py-[92px] text-white">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow>The Apex Standard</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold">
            Summit Shield™ — Five-Point Home Defense
          </h2>
          <p className="mt-4 text-[18px] text-white/70">
            Most companies spray a band around your foundation and leave. We protect your home in
            five points — the yard, the perimeter, the entry points, the roofline, and inside —
            because pests get in from all of them.
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {zones.map((z) => {
              const amber = z.tone === "amber";
              return (
                <div
                  key={z.no}
                  className={`mb-4 flex gap-4 rounded-r-[10px] border-l-[3px] bg-white/[0.05] px-[22px] py-4 ${
                    amber ? "border-alert-amber" : "border-summit-sage"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-display text-[13px] font-extrabold ${
                      amber ? "border-alert-amber text-alert-amber" : "border-summit-sage text-summit-sage"
                    }`}
                  >
                    {z.no}
                  </span>
                  <span>
                    <span className="block font-display text-[18px] font-bold text-white">{z.name}</span>
                    <span className="mt-1 block text-[14.5px] text-white/70">{z.body}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <SummitShieldDiagram caption="Every point treated on every service — from the property line to the peak line, and inside." />
        </div>
      </Container>
    </section>
  );
}
