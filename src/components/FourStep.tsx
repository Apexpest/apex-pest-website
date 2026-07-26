import { Container, Eyebrow } from "./ui";
import { steps } from "@/lib/site";

export function FourStep() {
  return (
    <section className="bg-stone-soft py-[92px]">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow tone="green">How it works</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold text-charcoal">
            Survey → Clear → Shield → Hold
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-xl border border-[#e4e1d8] bg-white p-7">
              <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-apex-green font-display text-[15px] font-extrabold text-white">
                {s.num}
              </div>
              <h3 className="mb-2 font-display text-[19px] font-bold text-charcoal">{s.name}</h3>
              <p className="text-[14.5px] text-[#5a5a52]">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
