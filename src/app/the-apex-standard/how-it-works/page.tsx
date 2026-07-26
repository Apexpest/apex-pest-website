import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works — Survey, Clear, Shield, Hold",
  description:
    "Every Apex service follows the same four steps: Survey the whole property, Clear what's active, Shield with the three-zone barrier, and Hold with seasonal service.",
  alternates: { canonical: "/the-apex-standard/how-it-works" },
};

export default async function HowItWorksPage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="Survey → Clear → Shield → Hold"
        intro="The same disciplined method on every property, so your service is thorough and consistent no matter who's at the door."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard", href: "/the-apex-standard" }, { label: "How It Works" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.num} className="grid gap-5 rounded-2xl border border-[#e4e1d8] bg-white p-8 md:grid-cols-[auto_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apex-green font-display text-[20px] font-extrabold text-white">{s.num}</div>
                <div>
                  <h2 className="font-display text-[22px] font-extrabold text-charcoal">{s.name}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
