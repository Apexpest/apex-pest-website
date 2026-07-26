import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import { CareersForm } from "@/components/CareersForm";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Apex Pest Solutions. We hire reliable, detail-oriented people who take pride in doing the job right and communicating clearly. See our roles and apply.",
  alternates: { canonical: "/careers" },
};

const roles = [
  {
    title: "Pest Control Technician",
    body: "Run the Summit Shield process in the field — surveying properties, treating all three zones, and documenting each visit. We train you on the method; you bring reliability and attention to detail.",
  },
  {
    title: "Office / Customer Service",
    body: "Keep service running smoothly behind the scenes — scheduling, confirmations, and the proactive communication our customers count on.",
  },
  {
    title: "Account Representative",
    body: "Help homeowners and businesses understand our service and get started, with the same honest, no-pressure approach we bring to everything.",
  },
];

const values = [
  { title: "We do the job right", body: "Thorough, documented work on every visit — not shortcuts." },
  { title: "We communicate clearly", body: "With customers and with each other. No guessing, no surprises." },
  { title: "We invest in training", body: "You'll learn a consistent, proven process and grow within it." },
];

export default async function CareersPage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="Careers"
        title="Build a career at Apex"
        intro="We're growing, and we hire people who take pride in doing the job right and communicating clearly. If that's you, we'd like to meet."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="py-[72px]">
        <Container>
          {/* Values */}
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#e4e1d8] bg-white p-7">
                <h2 className="font-display text-[18px] font-bold text-charcoal">{v.title}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#5a5a52]">{v.body}</p>
              </div>
            ))}
          </div>

          {/* Roles */}
          <div className="mt-16">
            <h2 className="font-display text-[24px] font-extrabold text-charcoal">Roles we hire for</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {roles.map((r) => (
                <div key={r.title} className="flex flex-col rounded-2xl border border-[#e4e1d8] bg-stone-soft p-7">
                  <h3 className="font-display text-[19px] font-bold text-charcoal">{r.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#4a4a44]">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application form */}
          <div id="apply" className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.6fr]">
            <CareersForm />
            <aside className="h-fit rounded-2xl border border-[#e4e1d8] bg-white p-7">
              <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-apex-green">
                Questions first?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5a5a52]">
                Prefer to talk before you apply? Reach out and we&apos;ll answer anything about the
                roles, the work, or the team.
              </p>
              <a href={settings.phoneHref} className="mt-4 block font-display text-[22px] font-extrabold text-apex-green">
                {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className="mt-1 block text-[15px] text-charcoal hover:text-apex-green">
                {settings.email}
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
