import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { categoryOrder, categoryMeta, pestsByCategory, pests } from "@/lib/pests";

export const metadata: Metadata = {
  alternates: { canonical: "/pests" },
  title: "Pest Library — Identify Kentucky's Common Household Pests",
  description:
    "A photo guide to 100+ pests that show up around Central Kentucky homes — ants, wasps, spiders, cockroaches, rodents, termites, mosquitoes, ticks, and more. How to identify each and what a pest pro does about it.",
};

export default async function PestsHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Pest Library"
        title="Know what you're dealing with"
        intro={`A photo guide to ${pests.length}+ pests that show up around Central Kentucky homes. Pick a category to browse, then tap a pest to see what it is and what a pest pro does about it.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Pest Library" }]}
      />

      <section className="py-[72px]">
        <Container>
          <div className="space-y-4">
            {categoryOrder.map((cat) => {
              const items = pestsByCategory(cat);
              if (items.length === 0) return null;
              return (
                <details
                  key={cat}
                  className="group overflow-hidden rounded-2xl border border-[#e4e1d8] bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-6 marker:hidden">
                    <div>
                      <h2 className="font-display text-[22px] font-extrabold text-charcoal">
                        {cat}
                        <span className="ml-2.5 align-middle text-[14px] font-bold text-summit-sage">{items.length}</span>
                      </h2>
                      <p className="mt-1 text-[14.5px] text-[#5a5a52]">{categoryMeta[cat].blurb}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[22px] text-apex-green transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="border-t border-[#eeece6] px-7 pb-8 pt-7">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/pests/${p.slug}`}
                          className="group/card flex gap-4 rounded-xl border border-[#e4e1d8] bg-white p-3 transition-colors hover:border-apex-green"
                        >
                          <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-stone-soft">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="72px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-display text-[15.5px] font-bold text-charcoal">{p.name}</h3>
                            <p className="mt-1 line-clamp-3 text-[13px] leading-snug text-[#5a5a52]">{p.bio}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>

          <p className="mt-10 text-center text-[12.5px] text-[#8a8a80]">
            Pest photos courtesy of Wikimedia Commons contributors.
          </p>
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
