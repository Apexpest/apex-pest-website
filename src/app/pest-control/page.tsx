import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/pest-control" },
  title: "Pest Control Services",
  description:
    "Pest control for homes and businesses — general pest, mosquito, termite, rodent, flea & tick, cockroach, and commercial service. Free re-services within 48 hours.",
};

export default async function PestControlHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Pest Control"
        title="Pest control built for Kentucky homes and businesses"
        intro="One disciplined system, tuned to Kentucky's pest calendar. Pick the pest — we handle the rest, and back it with the Apex Promise."
        crumbs={[{ label: "Home", href: "/" }, { label: "Pest Control" }]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/pest-control/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-[#e4e1d8] bg-white p-7 transition-colors hover:border-apex-green"
              >
                <h2 className="font-display text-[20px] font-bold text-charcoal">{s.title}</h2>
                <p className="mt-3 flex-1 text-[15px] text-[#5a5a52]">{s.tagline}</p>
                <span className="mt-5 font-display text-[14px] font-bold text-apex-green">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Plans />
      <CtaBand />
    </SiteShell>
  );
}
