import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container, Button } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { counties, getCounty } from "@/lib/counties";
import { citiesByCounty } from "@/lib/locations";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const c = getCounty(county);
  if (!c) return {};
  return { title: `Pest Control in ${c.name}`, description: c.metaDescription, alternates: { canonical: `/locations/${c.slug}` } };
}

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const c = getCounty(county);
  if (!c) notFound();
  const settings = await getSiteSettings();
  const cities = citiesByCounty(c.slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site.url}/locations` },
      { "@type": "ListItem", position: 3, name: c.name, item: `${site.url}/locations/${c.slug}` },
    ],
  };

  return (
    <SiteShell settings={settings}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHeader
        eyebrow={c.badge}
        title={`Pest control in ${c.name}, Kentucky`}
        intro={c.metaDescription}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/locations" }, { label: c.name }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              {c.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-[19px] font-medium text-charcoal" : "mt-5 text-[17px] leading-relaxed text-[#4a4a44]"}>{p}</p>
              ))}
              <div className="mt-10 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">Local pest pressure — {c.short} County</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-charcoal">{c.pestNote}</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button href="/get-a-quote">Get My Free Inspection →</Button>
                <Button href={settings.phoneHref} variant="ghostDark">Call {settings.phone}</Button>
              </div>
            </div>
            <aside className="h-fit rounded-2xl border border-[#e4e1d8] bg-white p-7">
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">Cities we serve in {c.short} County</h2>
              <ul className="mt-4 space-y-2">
                {cities.map((ci) => (
                  <li key={ci.slug}>
                    <Link href={`/locations/${c.slug}/${ci.slug}`} className="flex items-center justify-between text-[15px] text-charcoal hover:text-apex-green">
                      <span>{ci.city}</span>
                      <span className="text-summit-sage" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>
      <Plans />
      <CtaBand />
    </SiteShell>
  );
}
