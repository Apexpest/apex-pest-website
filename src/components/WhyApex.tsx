import { Container, Eyebrow } from "./ui";
import { whyApex } from "@/lib/site";

const paths: Record<string, string> = {
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  check: "M12 2a10 10 0 1 0 10 10 M22 4 12 14.01l-3-3",
  card: "M3 4h18v14H3z M3 10h18",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
};

function Icon({ name }: { name: string }) {
  return (
    <svg className="mb-3.5 h-[38px] w-[38px] text-summit-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name].split(" M").map((d, i) => (
        <path key={i} d={i === 0 ? d : "M" + d} />
      ))}
    </svg>
  );
}

export function WhyApex() {
  return (
    <section className="bg-black py-[92px] text-white">
      <Container>
        <div className="mx-auto mb-[54px] max-w-[720px] text-center">
          <Eyebrow>Why choose Apex</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold">
            A thorough process, clearly communicated.
          </h2>
          <p className="mt-4 text-[18px] text-white/70">
            Treating a home is only part of the job. Consistent scheduling, proactive updates,
            technicians who arrive on time, and simple billing are what make the service
            dependable — and we handle all of it.
          </p>
        </div>
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {whyApex.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-[26px]">
              <Icon name={item.icon} />
              <h3 className="mb-2 font-display text-[17px] font-bold text-white">{item.title}</h3>
              <p className="text-[14.5px] text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
