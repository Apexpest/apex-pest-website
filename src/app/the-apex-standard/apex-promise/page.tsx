import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "The Apex Promise — Our Guarantee",
  description:
    "The Apex Promise: if pests return between your scheduled visits, we come back and re-treat at no charge. Simple, and in writing.",
  alternates: { canonical: "/the-apex-standard/apex-promise" },
};

// NOTE FOR APEX: the detailed guarantee terms below (response window, exactly what is
// covered and excluded) must match your signed service agreement word-for-word before
// this is relied upon. Confirm and adjust the "What's covered" list to your agreement.
const covered = [
  "Free re-services for covered pests that return between scheduled visits",
  "A response within 48 hours of your request",
  "Applications performed by licensed technicians to product-label directions",
  "A documented service record of what was treated, and where, on every visit",
];

export default async function ApexPromisePage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="The Apex Promise"
        intro="If pests return between your scheduled visits, so do we — no charge, no argument."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard", href: "/the-apex-standard" }, { label: "The Apex Promise" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-[19px] font-medium text-charcoal">
                Recurring pest control only works if it&apos;s backed by a real guarantee. Ours is
                simple: the pests we cover on your plan aren&apos;t supposed to come back between
                visits — and if they do, we return and re-treat at no additional cost.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-[#4a4a44]">
                No debating whether it qualifies, no waiting weeks for a slot. You call, we schedule
                the re-service, and we take care of it. It&apos;s the same standard behind everything
                else we do — thorough work, clearly communicated, and documented every time.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#8a8a80]">
                Full guarantee terms are set out in your service agreement.
              </p>
            </div>
            <aside className="h-fit rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">What&apos;s covered</h2>
              <ul className="mt-4 space-y-3">
                {covered.map((c) => (
                  <li key={c} className="flex gap-2.5 text-[15px] text-charcoal">
                    <span className="mt-1 text-apex-green" aria-hidden="true">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
