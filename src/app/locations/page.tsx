import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  alternates: { canonical: "/locations" },
  title: "Service Areas — Pest Control Across Central Kentucky",
  description:
    "Apex Pest Solutions serves Elizabethtown, Radcliff, Vine Grove, and communities across Central Kentucky with three-zone Summit Shield protection.",
};

export default async function LocationsHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Service Areas"
        title="Local pest control across Central Kentucky"
        intro="We live and work here. From historic downtown Elizabethtown to the surrounding rural communities, we know the homes, the neighborhoods, and the pests that come with them — and we treat every one on the three-zone Summit Shield system."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group flex flex-col rounded-2xl border border-[#e4e1d8] bg-white p-7 transition-colors hover:border-apex-green"
              >
                <span className="eyebrow text-summit-sage">{l.badge}</span>
                <h2 className="mt-2 font-display text-[20px] font-bold text-charcoal">
                  {l.city}, KY
                </h2>
                <p className="mt-3 flex-1 text-[15px] text-[#5a5a52]">{l.metaDescription}</p>
                <span className="mt-5 font-display text-[14px] font-bold text-apex-green">
                  Pest control in {l.city} →
                </span>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-[640px] text-center text-[15px] text-[#5a5a52]">
            Don&apos;t see your town? We serve much of Central Kentucky. Call{" "}
            <a href={settings.phoneHref} className="font-bold text-apex-green">
              {settings.phone}
            </a>{" "}
            and we&apos;ll tell you if you&apos;re on the route.
          </p>
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
