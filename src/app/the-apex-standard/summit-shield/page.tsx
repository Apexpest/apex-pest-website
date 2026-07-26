import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { zones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Summit Shield — Three-Zone Protection",
  description:
    "Summit Shield is our three-zone approach to pest control — treating the yard, the foundation, and the structure from the ground to the peak, not just a band around the foundation.",
  alternates: { canonical: "/the-apex-standard/summit-shield" },
};

export default async function SummitShieldPage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="Summit Shield — protection from the ground up"
        intro="Most pest control treats a band around the foundation and leaves. Summit Shield treats the whole property in three zones — the yard, the foundation, and the structure from the ground to the peak — because pests get in from all of them."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard", href: "/the-apex-standard" }, { label: "Summit Shield" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="space-y-6">
            {zones.map((z) => (
              <div key={z.no} className="grid gap-5 rounded-2xl border border-[#e4e1d8] bg-white p-8 md:grid-cols-[auto_1fr]">
                <div className={`font-display text-[40px] font-extrabold ${z.tone === "amber" ? "text-alert-amber" : "text-summit-sage"}`}>{z.no}</div>
                <div>
                  <h2 className="font-display text-[22px] font-extrabold text-charcoal">{z.name}</h2>
                  <p className="mt-1 font-display text-[15px] font-bold text-apex-green">{z.headline}</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">{z.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-8">
            <h2 className="font-display text-[18px] font-bold text-charcoal">The Peak Line is the difference</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">
              Eaves, soffits, and the roofline are where wasps, hornets, and overwintering pests enter
              from above — and it&apos;s the zone most companies never touch. Treating all three zones is
              what makes the barrier hold. Every application is performed by licensed technicians to
              product-label directions, and documented in your service record.
            </p>
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
