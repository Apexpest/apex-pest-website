import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container, Button } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { pests, getPest, categoryMeta } from "@/lib/pests";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return pests.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) return {};
  return {
    title: `${pest.name} — Identification & Control in Kentucky`,
    description: pest.bio,
    alternates: { canonical: `/pests/${pest.slug}` },
  };
}

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) notFound();

  const settings = await getSiteSettings();
  const meta = categoryMeta[pest.category];
  const service = meta ? getService(meta.service) : undefined;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Pest Library", item: `${site.url}/pests` },
      { "@type": "ListItem", position: 3, name: pest.name, item: `${site.url}/pests/${pest.slug}` },
    ],
  };

  return (
    <SiteShell settings={settings}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <PageHeader
        eyebrow={pest.category}
        title={pest.name}
        intro={pest.bio}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pest Library", href: "/pests" },
          { label: pest.name },
        ]}
      />

      <section className="py-[72px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Photo */}
            <div className="h-fit">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#e4e1d8] bg-stone-soft">
                <Image
                  src={pest.image}
                  alt={`${pest.name} — identification photo`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-2 text-[12px] text-[#8a8a80]">Photo courtesy of Wikimedia Commons.</p>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                How to identify {pest.name.toLowerCase()}
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-charcoal">{pest.bio}</p>

              {meta && (
                <div className="mt-8 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                  <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                    What a pest pro would do
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {meta.proApproach.map((step) => (
                      <li key={step} className="flex gap-3 text-[15.5px] leading-relaxed text-charcoal">
                        <span aria-hidden="true" className="mt-0.5 text-summit-sage">✓</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href="/get-a-quote">Get My Free Inspection →</Button>
                <Button href={settings.phoneHref} variant="ghostDark">
                  Call {settings.phone}
                </Button>
              </div>

              {service && (
                <Link
                  href={`/pest-control/${service.slug}`}
                  className="mt-6 inline-block font-display text-[14px] font-bold text-apex-green"
                >
                  Our {service.title} →
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Plans />
      <CtaBand />
    </SiteShell>
  );
}
