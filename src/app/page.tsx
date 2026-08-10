import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WhyApex } from "@/components/WhyApex";
import { SummitShield } from "@/components/SummitShield";
import { FourStep } from "@/components/FourStep";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/Reviews";
import { TruckBand } from "@/components/TruckBand";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCallBar } from "@/components/MobileCallBar";
import { site } from "@/lib/site";
import { getSiteSettings } from "@/lib/getSiteSettings";

export default async function Home() {
  const settings = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: site.name,
    url: `https://${site.domain}`,
    telephone: settings.phone,
    email: settings.email,
    areaServed: { "@type": "State", name: "Kentucky" },
    address: { "@type": "PostalAddress", addressRegion: "KY", addressCountry: "US" },
    slogan: `${settings.heroHeadline} ${settings.heroHeadlineAccent}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader settings={settings} />
      <main className="flex-1">
        <Hero settings={settings} />
        <WhyApex />
        <SummitShield />
        <FourStep />
        <Comparison />
        <Reviews />
        <TruckBand />
        <CtaBand />
      </main>
      <SiteFooter settings={settings} />
      <MobileCallBar settings={settings} />
    </>
  );
}
