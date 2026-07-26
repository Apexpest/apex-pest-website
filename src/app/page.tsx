import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WhyApex } from "@/components/WhyApex";
import { SummitShield } from "@/components/SummitShield";
import { FourStep } from "@/components/FourStep";
import { Comparison } from "@/components/Comparison";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCallBar } from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  name: site.name,
  url: `https://${site.domain}`,
  telephone: site.phone,
  email: site.email,
  areaServed: { "@type": "State", name: "Kentucky" },
  address: { "@type": "PostalAddress", addressRegion: "KY", addressCountry: "US" },
  slogan: "Kentucky's Premium Pest Control. Top service, top communication.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyApex />
        <SummitShield />
        <FourStep />
        <Comparison />
        <CtaBand />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
