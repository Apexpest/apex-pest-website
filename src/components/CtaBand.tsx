import { Button, Container } from "./ui";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="pb-[92px]">
      <Container>
        <div className="rounded-[20px] bg-[linear-gradient(120%_120%_at_20%_0%,#215838,#132d1e)] p-14 text-center text-white">
          <h2 className="mb-3.5 font-display text-[clamp(26px,3vw,38px)] font-extrabold">Request your free inspection.</h2>
          <p className="mx-auto mb-7 max-w-[560px] text-white/80">
            Tell us what's going on and we'll build a plan for your home or business — the
            inspection, the treatment, and the follow-ups.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button href="/get-a-quote" variant="white">
              Get My Free Inspection →
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
