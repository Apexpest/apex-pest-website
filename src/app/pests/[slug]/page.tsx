import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Plans } from "@/components/Plans";
import { CtaBand } from "@/components/CtaBand";
import { Container, Button } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { pests, getPest } from "@/lib/pests";
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
    description: pest.summary,
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
  const service = getService(pest.relatedService);

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
        intro={pest.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pest Library", href: "/pests" },
          { label: pest.name },
        ]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                How to identify {pest.name.toLowerCase()}
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-charcoal">{pest.identification}</p>

              <h2 className="mt-10 font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                Why it matters
              </h2>
              {pest.body.map((para, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed text-[#4a4a44]">
                  {para}
                </p>
              ))}

              <div className="mt-10 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  In Kentucky
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-charcoal">{pest.kentuckyNote}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button href="/get-a-quote">Get My Free Inspection →</Button>
                <Button href={settings.phoneHref} variant="ghostDark">
                  Call {settings.phone}
                </Button>
              </div>
            </div>

            <aside className="h-fit space-y-6">
              <div className="rounded-2xl border border-[#e4e1d8] bg-white p-7">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  Signs of a problem
                </h2>
                <ul className="mt-4 space-y-3">
                  {pest.signs.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px] text-charcoal">
                      <span className="mt-1 text-apex-green" aria-hidden="true">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#e4e1d8] bg-white p-7">
                <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#8a8a80]">
                  Where we stop it
                </p>
                <p className="mt-2 font-display text-[17px] font-bold text-charcoal">{pest.zone}</p>
                {service && (
                  <Link
                    href={`/pest-control/${service.slug}`}
                    className="mt-4 inline-block font-display text-[14px] font-bold text-apex-green"
                  >
                    Our {service.title} →
                  </Link>
                )}
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
