import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const metadata: Metadata = {
  title: "The Apex Standard",
  description:
    "The Apex Standard is how we work: the Summit Shield five-point system, our Inspect → Flush → Shield → Maintain method, the Apex Promise, and the team behind it.",
  alternates: { canonical: "/the-apex-standard" },
};

const pages = [
  { title: "Summit Shield", href: "/the-apex-standard/summit-shield", body: "Our five-point system — property line to peak line — and why treating the whole property matters." },
  { title: "How It Works", href: "/the-apex-standard/how-it-works", body: "The four steps behind every service: Inspect, Flush, Shield, Maintain." },
  { title: "The Apex Promise", href: "/the-apex-standard/apex-promise", body: "Our guarantee: if pests return between scheduled visits, we come back at no charge." },
  { title: "Our Team", href: "/the-apex-standard/our-team", body: "The licensed, trained technicians who run the Apex Standard on every visit." },
];

const team = [
  { name: "Ben Riches", role: "Founder", photo: "/team/ben-riches.jpg", initials: "BR" },
  { name: "Kameron Owens", role: "Lead Technician", photo: null, initials: "KO" },
  { name: "Juanita Lomeli", role: "Office Manager", photo: null, initials: "JL" },
  { name: "Vicente Garcia", role: "Sales Manager", photo: null, initials: "VG" },
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
      {/* About us — meet the team */}
      <section className="bg-stone-soft py-[92px]">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow text-apex-green">About us</span>
            <h2 className="mt-3.5 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold text-charcoal">
              Meet the team
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5a5a52]">
              Apex is a Kentucky-based, family-run team. We built the company on doing thorough work
              and communicating clearly — and the people below are the ones who make that happen on
              every visit.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl border border-[#e4e1d8] bg-white">
                {m.photo ? (
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={m.photo}
                      alt={`${m.name} — ${m.role}, Apex Pest Solutions`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-[linear-gradient(160deg,#1e4d34,#132d1e)]">
                    <span className="font-display text-[44px] font-extrabold text-white/90">{m.initials}</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display text-[18px] font-bold text-charcoal">{m.name}</h3>
                  <p className="mt-1 font-display text-[14px] font-semibold text-apex-green">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[560px] text-center text-[13.5px] text-[#8a8a80]">
            Team photos for Kameron, Juanita, and Vicente are on the way — we&apos;ll add them soon.
          </p>
        </Container>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
