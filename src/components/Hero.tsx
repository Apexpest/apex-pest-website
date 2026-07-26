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

          <div className="rounded-[14px] border border-summit-sage/30 bg-[linear-gradient(160deg,rgba(30,77,52,0.5),rgba(19,45,30,0.75))] p-[30px]">
            {settings.heroStats.map((s, i) => (
              <div
                key={`${s.value}-${i}`}
                className={`flex items-baseline gap-3 py-4 ${i < settings.heroStats.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span className="min-w-[96px] font-display text-[30px] font-extrabold text-white">{s.value}</span>
                <span className="text-[14px] text-white/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
