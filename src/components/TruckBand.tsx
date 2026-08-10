import Image from "next/image";
import { Container } from "./ui";

/**
 * Local-trust image band — the branded Apex truck in a Central Kentucky
 * neighborhood, with a short overlay message.
 */
export function TruckBand() {
  return (
    <section className="py-[92px]">
      <Container>
        <div className="relative overflow-hidden rounded-[20px]">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
            <Image
              src="/apex-truck.jpg"
              alt="Apex Pest Solutions truck parked in front of a home in Central Kentucky"
              fill
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,10,0.72)_0%,rgba(10,16,10,0.4)_38%,rgba(10,16,10,0)_66%)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[460px] px-8 text-white sm:px-12">
              <span className="eyebrow text-summit-sage">On the route</span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.05]">
                Local, licensed, and in your neighborhood
              </h2>
              <p className="mt-4 max-w-[380px] text-[16px] leading-relaxed text-white/85">
                Kentucky-based and on the road across Central Kentucky. When you call Apex, a real
                local team shows up — on time, in uniform, and ready to protect your home.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
