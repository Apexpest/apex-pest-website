import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { counties } from "@/lib/counties";
import { citiesByCounty } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Areas — Pest Control Across Central Kentucky",
  description:
    "Apex Pest Solutions serves Jefferson, Oldham, Bullitt, and Hardin counties with three-zone Summit Shield protection. Find your county and city.",
  alternates: { canonical: "/locations" },
};

export default async function LocationsHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Service Areas"
        title="Local pest control across Central Kentucky"
        intro="We live and work here. Find your county below to see the communities we serve and the pests that come with them — every one treated on the three-zone Summit Shield system."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {counties.map((c) => {
              const cities = citiesByCounty(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#e4e1d8] bg-white p-8 transition-colors hover:border-apex-green"
                >
                  <span className="eyebrow text-summit-sage">{c.badge}</span>
                  <h2 className="mt-2 font-display text-[24px] font-extrabold text-charcoal">{c.name}</h2>
                  <p className="mt-3 text-[15px] text-[#5a5a52]">{c.metaDescription}</p>
                  <p className="mt-4 text-[14px] text-[#8a8a80]">
                    {cities.map((ci) => ci.city).join(" · ")}
                  </p>
                  <span className="mt-5 font-display text-[14px] font-bold text-apex-green">
                    Pest control in {c.short} County →
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mx-auto mt-14 max-w-[640px] text-center text-[15px] text-[#5a5a52]">
            Don&apos;t see your town? We serve much of Central Kentucky. Call{" "}
            <a href={settings.phoneHref} className="font-bold text-apex-green">{settings.phone}</a>{" "}
            and we&apos;ll tell you if you&apos;re on the route.
          </p>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
