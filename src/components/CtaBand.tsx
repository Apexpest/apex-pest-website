import Image from "next/image";
import { Button, Container } from "./ui";
import { site } from "@/lib/site";

/**
 * Bottom call-to-action: the branded truck on the left, the free-inspection
 * ask on the brand green to the right. Stacks on mobile (image on top).
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
          {/* Right — inspection CTA on brand green */}
          <div className="flex flex-col justify-center bg-[linear-gradient(120%_120%_at_20%_0%,#215838,#132d1e)] p-10 text-white sm:p-12">
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-extrabold">
              Request your free inspection.
            </h2>
            <p className="mt-3.5 max-w-[460px] text-white/80">
              Tell us what's going on and we'll build a plan for your home or business — the
              inspection, the treatment, and the follow-ups.
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
