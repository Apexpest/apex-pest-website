import { Button, Container } from "./ui";
import type { ResolvedSite } from "@/lib/getSiteSettings";

export function Hero({ settings }: { settings: ResolvedSite }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_80%_0%,#1a3a28_0%,#0d0d0d_55%)] text-white">
      <Container className="relative py-[88px] lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-summit-sage/40 bg-summit-sage/10 px-3.5 py-[7px] font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-summit-sage">
              ● {settings.heroEyebrow}
            </span>
            <h1 className="font-display text-[clamp(38px,5vw,60px)] font-extrabold uppercase">
              {settings.heroHeadline}{" "}
              <span className="text-summit-sage">{settings.heroHeadlineAccent}</span>
            </h1>
            <p className="my-8 max-w-[520px] text-[19px] text-white/80">{settings.heroSubtext}</p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="/get-a-quote">Get My Free Inspection →</Button>
              <Button href={settings.phoneHref} variant="ghost">
                Call {settings.phone}
              </Button>
            </div>
            <p className="mt-6 text-[13.5px] text-white/55">
              Free re-services within 48 hours · Licensed &amp; insured in Kentucky · 5-star rated
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_-24px_rgba(0,0,0,0.55)]">
            <div className="grid grid-cols-2">
              {settings.heroStats.map((s, i) => {
                const rightCol = i % 2 === 1;
                const topRow = i < 2;
                return (
                  <div
                    key={`${s.value}-${i}`}
                    className={`p-6 ${!rightCol ? "border-r border-[#eeece6]" : ""} ${topRow ? "border-b border-[#eeece6]" : ""}`}
                  >
                    <div className="font-display text-[32px] font-extrabold leading-none text-apex-green">{s.value}</div>
                    <div className="mt-2 text-[13px] leading-snug text-[#5a5a52]">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
