import Image from "next/image";
import { Button, Container } from "./ui";
import { site } from "@/lib/site";

/**
 * Bottom call-to-action: the branded truck on the left, and the "on the route"
 * message + free-inspection ask on the brand green to the right. Stacks on
 * mobile (image on top).
 */
export function CtaBand() {
  return (
    <section className="pb-[92px]">
      <Container>
        <div className="grid overflow-hidden rounded-[20px] md:grid-cols-2">
          {/* Left — truck photo */}
          <div className="relative min-h-[260px] md:min-h-full">
            <Image
              src="/apex-truck.jpg"
              alt="Apex Pest Solutions truck parked in front of a home in Central Kentucky"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Right — on-the-route message + inspection CTA on brand green */}
          <div className="flex flex-col justify-center bg-[radial-gradient(120%_120%_at_20%_0%,#215838,#132d1e)] p-10 text-white sm:p-12">
            <span className="eyebrow text-summit-sage">On the route</span>
            <h2 className="mt-3 font-display text-[clamp(24px,2.6vw,34px)] font-extrabold leading-[1.1]">
              Local, licensed, and in your neighborhood
            </h2>
            <p className="mt-4 max-w-[460px] text-white/80">
              Kentucky-based and on the road across Central Kentucky. When you call Apex, a real local
              team shows up — on time, in uniform, and ready to protect your home.
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Button href="/get-a-quote" variant="white">
                Get My Free Inspection →
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
