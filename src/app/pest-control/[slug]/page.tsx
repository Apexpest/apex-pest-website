import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/pest-control/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const settings = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: { "@type": "PestControlService", name: "Apex Pest Solutions" },
    areaServed: { "@type": "State", name: "Kentucky" },
    description: service.intro,
  };

  return (
    <SiteShell settings={settings}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        eyebrow="Pest Control"
        title={service.title}
        intro={service.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pest Control", href: "/pest-control" },
          { label: service.title },
        ]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-[19px] font-medium text-charcoal">{service.intro}</p>
              {service.body.map((para, i) => (
                <p key={i} className="mt-5 text-[17px] leading-relaxed text-[#4a4a44]">
                  {para}
                </p>
              ))}
            </div>
            <aside className="h-fit rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                What&apos;s included
              </h2>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[15px] text-charcoal">
                    <span className="mt-1 text-apex-green" aria-hidden="true">✓</span>
                    <span>{h}</span>
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
