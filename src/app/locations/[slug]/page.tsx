import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container, Button } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { locations, getLocation } from "@/lib/locations";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: `Pest Control in ${loc.city}, KY`,
    description: loc.metaDescription,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const settings = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: `Apex Pest Solutions — ${loc.city}, KY`,
    description: loc.metaDescription,
    telephone: settings.phone,
    email: settings.email,
    areaServed: { "@type": "City", name: `${loc.city}, Kentucky` },
    address: { "@type": "PostalAddress", addressRegion: "KY", addressCountry: "US" },
    provider: { "@type": "PestControlService", name: site.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://${site.domain}/` },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `https://${site.domain}/locations` },
      { "@type": "ListItem", position: 3, name: `${loc.city}, KY`, item: `https://${site.domain}/locations/${loc.slug}` },
    ],
  };

  return (
    <SiteShell settings={settings}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <PageHeader
        eyebrow={loc.badge}
        title={`Pest control in ${loc.city}, Kentucky`}
        intro={loc.metaDescription}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/locations" },
          { label: `${loc.city}, KY` },
        ]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              {loc.intro.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-[19px] font-medium text-charcoal"
                      : "mt-5 text-[17px] leading-relaxed text-[#4a4a44]"
                  }
                >
                  {para}
                </p>
              ))}

              <div className="mt-10 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  Seasonal pest note — {loc.city}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-charcoal">{loc.seasonalNote}</p>
              </div>

              <div className="mt-8">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  Pests we treat most in {loc.city}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {loc.topPests.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-[#d8d4c8] bg-white px-4 py-2 text-[14px] font-medium text-charcoal"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button href="/get-a-quote">Get My Free Inspection →</Button>
                <Button href={settings.phoneHref} variant="ghostDark">
                  Call {settings.phone}
                </Button>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-[#e4e1d8] bg-white p-7">
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                Serving {loc.city}
              </h2>

              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#8a8a80]">
                Neighborhoods & areas
              </p>
              <ul className="mt-2 space-y-1.5">
                {loc.neighborhoods.map((n) => (
                  <li key={n} className="text-[15px] text-charcoal">
                    {n}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.06em] text-[#8a8a80]">
                Local landmarks
              </p>
              <ul className="mt-2 space-y-1.5">
                {loc.landmarks.map((n) => (
                  <li key={n} className="text-[15px] text-charcoal">
                    {n}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.06em] text-[#8a8a80]">
                Housing stock
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{loc.housingStock}</p>

              <div className="mt-6 rounded-xl bg-stone-soft p-5">
                <p className="text-[14px] leading-relaxed text-charcoal">{loc.localServiceNote}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Plans />
      <CtaBand />
    </SiteShell>
  );
}
