import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "The Apex Standard",
  description:
    "The Apex Standard is how we work: the Summit Shield three-zone system, our Survey → Clear → Shield → Hold method, the Apex Promise, and the team behind it.",
  alternates: { canonical: "/the-apex-standard" },
};

const pages = [
  { title: "Summit Shield", href: "/the-apex-standard/summit-shield", body: "Our three-zone system — ground line to roofline — and why treating the whole structure matters." },
  { title: "How It Works", href: "/the-apex-standard/how-it-works", body: "The four steps behind every service: Survey, Clear, Shield, Hold." },
  { title: "The Apex Promise", href: "/the-apex-standard/apex-promise", body: "Our guarantee: if pests return between scheduled visits, we come back at no charge." },
  { title: "Our Team", href: "/the-apex-standard/our-team", body: "The licensed, trained technicians who run the Apex Standard on every visit." },
];

export default async function ApexStandardHub() {
  const settings = await getSiteSettings();
  return (
    <SiteShell settings={settings}>
      <PageHeader
        eyebrow="The Apex Standard"
        title="How we work — and why it holds up"
        intro="The Apex Standard is the through-line across everything we do: a consistent, documented system, applied the same way on every property, and backed by a guarantee in writing."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Apex Standard" }]}
      />
      <section className="py-[92px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="group flex flex-col rounded-2xl border border-[#e4e1d8] bg-white p-7 transition-colors hover:border-apex-green">
                <h2 className="font-display text-[20px] font-bold text-charcoal">{p.title}</h2>
                <p className="mt-3 flex-1 text-[15px] text-[#5a5a52]">{p.body}</p>
                <span className="mt-5 font-display text-[14px] font-bold text-apex-green">Learn more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
