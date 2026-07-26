import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The licensed, trained technicians behind Apex Pest Solutions — the people who run the Apex Standard on every visit.",
  alternates: { canonical: "/the-apex-standard/our-team" },
};

// NOTE FOR APEX: individual technician bios and portraits drop in here after the photo
// shoot (see plan §10). Do not add names/photos of people until they are real.
const standards = [
  { title: "Licensed & insured", body: "Structural pest control in Kentucky is licensed by the Department of Agriculture. Our technicians are trained and operate to those standards." },
  { title: "Trained on one process", body: "Every technician runs the same Summit Shield method, so the quality of your service doesn't depend on who's assigned to your route." },
  { title: "Accountable and documented", body: "You get a written record of exactly what we treated, and where, after every visit — and proactive communication throughout." },
];

export default async function OurTeamPage() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="The people behind the standard"
        intro="A pest control service is only as good as the technician at your door. Ours are licensed, trained on a single consistent process, and accountable for the work in writing."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard", href: "/the-apex-standard" }, { label: "Our Team" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {standards.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#e4e1d8] bg-white p-7">
                <h2 className="font-display text-[18px] font-bold text-charcoal">{s.title}</h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#5a5a52]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#e4e1d8] bg-stone-soft p-8 text-center">
            <p className="text-[16px] text-[#4a4a44]">
              Want to join the team?{" "}
              <a href="/careers" className="font-bold text-apex-green">See our open roles →</a>
            </p>
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
