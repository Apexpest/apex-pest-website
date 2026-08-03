import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { zones } from "@/lib/site";
import { SummitShieldDiagram } from "@/components/SummitShieldDiagram";

export const metadata: Metadata = {
  title: "Summit Shield — Five-Point Protection",
  description:
    "Summit Shield is our five-point approach to pest control — the yard, the foundation perimeter, the entry points, the roofline, and inside the home — plus a free 20-point inspection on every service.",
  alternates: { canonical: "/the-apex-standard/summit-shield" },
};

const inspectionPoints = [
  "Roofline, eaves & soffits — wasp nests, spider webs and gaps overhead",
  "Windows, doors & weep holes — the entry points pests slip through",
  "Foundation & wall seams — cracks and crevices around the base",
  "Crawlspace vents & downspouts — moisture and harborage points",
  "Yard, beds, mulch & standing water — where pests gather and breed",
  "Kitchen & pantry — ant, cockroach and pantry-pest activity",
  "Bathrooms & under-sink plumbing — moisture-loving pests",
  "Basement, garage & attic — spiders, rodents and their entry points",
];

export default async function SummitShieldPage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="Summit Shield — protection from the ground up"
        intro="Most pest control treats a band around the foundation and leaves. Summit Shield treats your home in five points — the yard, the foundation perimeter, the entry points, the roofline, and inside — because pests get in from all of them."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard", href: "/the-apex-standard" }, { label: "Summit Shield" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="mb-14">
            <SummitShieldDiagram caption="The five protected areas — from the property line to the peak line, and inside the home." />
          </div>
          <div className="space-y-6">
            {zones.map((z) => (
              <div key={z.no} className="grid gap-5 rounded-2xl border border-[#e4e1d8] bg-white p-8 md:grid-cols-[auto_1fr]">
                <div className={`font-display text-[40px] font-extrabold ${z.tone === "amber" ? "text-alert-amber" : "text-summit-sage"}`}>{z.no}</div>
                <div>
                  <h2 className="font-display text-[22px] font-extrabold text-charcoal">{z.name}</h2>
                  <p className="mt-1 font-display text-[15px] font-bold text-apex-green">{z.headline}</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">{z.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 20-point inspection */}
          <div className="mt-12 rounded-2xl border border-[#e4e1d8] bg-white p-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-[22px] font-extrabold text-charcoal">The free 20-point inspection</h2>
              <span className="rounded-full bg-apex-green px-3 py-1 font-display text-[12px] font-bold uppercase tracking-[0.06em] text-white">
                Free with every service
              </span>
            </div>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">
              Before we treat, your technician walks the whole home — inside and out — checking 20 points
              across the five zones. It&apos;s how we build a plan for your home specifically, catch problems
              early, and track how the barrier is holding visit to visit. A few of the points we check:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {inspectionPoints.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15.5px] leading-relaxed text-charcoal">
                  <span aria-hidden="true" className="mt-1 text-summit-sage">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-[#8a8a80]">
              …and twelve more, interior and exterior — the full 20-point inspection is included free on every service.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-8">
            <h2 className="font-display text-[18px] font-bold text-charcoal">The Peak Line is the difference</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a44]">
              Eaves, soffits, and the roofline are where wasps, hornets, and overwintering pests enter
              from above — and it&apos;s the point most companies never touch. Treating all five points is
              what makes the barrier hold. Every application is performed by licensed technicians to
              product-label directions, and documented in your service record.
            </p>
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
