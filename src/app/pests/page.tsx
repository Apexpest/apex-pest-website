import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { pestCategories, pestsByCategory } from "@/lib/pests";

export const metadata: Metadata = {
  title: "Pest Library — Identify Kentucky's Common Household Pests",
  description:
    "A homeowner's guide to the pests that invade Central Kentucky homes — wasps, ants, spiders, occasional invaders, ticks, fleas, mosquitoes, and rodents. How to identify them and how we stop them.",
};

export default async function PestsHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Pest Library"
        title="Know what you're dealing with"
        intro="A plain-English guide to the pests that show up in Central Kentucky homes — how to identify each one, the signs of a problem, and where the Summit Shield system stops it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Pest Library" }]}
      />

      <section className="py-[92px]">
        <Container>
          <div className="space-y-16">
            {pestCategories.map((cat) => {
              const items = pestsByCategory(cat.name);
              if (items.length === 0) return null;
              return (
                <div key={cat.name}>
                  <div className="mb-6 border-b border-[#e4e1d8] pb-4">
                    <h2 className="font-display text-[24px] font-extrabold text-charcoal">{cat.name}</h2>
                    <p className="mt-1.5 text-[15px] text-[#5a5a52]">{cat.blurb}</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/pests/${p.slug}`}
                        className="group flex flex-col rounded-2xl border border-[#e4e1d8] bg-white p-7 transition-colors hover:border-apex-green"
                      >
                        <h3 className="font-display text-[19px] font-bold text-charcoal">{p.name}</h3>
                        <p className="mt-3 flex-1 text-[15px] text-[#5a5a52]">{p.summary}</p>
                        <span className="mt-5 font-display text-[14px] font-bold text-apex-green">
                          Identify &amp; treat →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
