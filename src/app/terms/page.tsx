import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the Apex Pest Solutions website.",
  alternates: { canonical: "/terms" },
};

export default async function TermsPage() {
  const settings = await getSiteSettings();
  const H = ({ children }: { children: string }) => (
    <h2 className="pt-4 font-display text-[20px] font-bold text-charcoal">{children}</h2>
  );
  return (
    <LegalPage settings={settings} title="Terms of Use" updated="July 2026">
      <p>These Terms of Use govern your access to and use of the {site.name} website. By using this site, you agree to these terms.</p>
      <H>Use of the site</H>
      <p>You may use this site for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt to access it in any unauthorized way.</p>
      <H>Services and estimates</H>
      <p>Information on this site describes our services in general terms. Specific service details, pricing, and guarantees are governed by your written service agreement. Prices shown are starting rates and may vary by property size and pest pressure. Nothing on this site is an offer or a binding quote until confirmed in writing.</p>
      <H>Intellectual property</H>
      <p>The content, branding, and design of this site — including the Apex Pest Solutions name, logo, and the Summit Shield system name — are our property and may not be used without permission.</p>
      <H>Disclaimers</H>
      <p>This site is provided &quot;as is.&quot; We work to keep information accurate and current but do not warrant that it is free of errors or omissions.</p>
      <H>Limitation of liability</H>
      <p>To the fullest extent permitted by law, {site.name} is not liable for any indirect or consequential damages arising from your use of this site.</p>
      <H>Governing law</H>
      <p>These terms are governed by the laws of the Commonwealth of Kentucky.</p>
      <H>Contact</H>
      <p>Questions? Email <a className="font-semibold text-apex-green" href={`mailto:${settings.email}`}>{settings.email}</a> or call <a className="font-semibold text-apex-green" href={settings.phoneHref}>{settings.phone}</a>.</p>
    </LegalPage>
  );
}
