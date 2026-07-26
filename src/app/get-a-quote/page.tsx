import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "Get a Free Inspection & Quote",
  description:
    "Request your free pest inspection and quote from Apex Pest Solutions. Serving Elizabethtown and communities across Central Kentucky — with free re-services within 48 hours.",
  alternates: { canonical: "/get-a-quote" },
};

const trust = [
  { title: "Free inspection", body: "No cost, no pressure — we assess all three zones before we quote." },
  { title: "48-hour re-service", body: "Pests return between visits? So do we — free, within 48 hours." },
  { title: "Licensed & insured", body: "KDA-licensed Kentucky technicians on every visit." },
  { title: "Documented service", body: "A written record of exactly what we treated — every visit." },
];

export default async function GetAQuotePage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Free Inspection"
        title="Get your free inspection & quote"
        intro="Tell us what's going on and we'll build a plan for your home or business. It takes about a minute — and there's no obligation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
      />

      <section className="py-[72px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
            <QuoteForm />

            <aside className="h-fit">
              <div className="rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                  Why homeowners choose Apex
                </h2>
                <ul className="mt-5 space-y-5">
                  {trust.map((t) => (
                    <li key={t.title}>
                      <p className="font-display text-[16px] font-bold text-charcoal">{t.title}</p>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-[#5a5a52]">{t.body}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-[#d8d4c8] pt-6">
                  <p className="text-[14px] text-[#5a5a52]">Prefer to talk to someone?</p>
                  <a href={settings.phoneHref} className="mt-1 block font-display text-[22px] font-extrabold text-apex-green">
                    {settings.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
