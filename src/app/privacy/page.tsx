import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Apex Pest Solutions collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  const H = ({ children }: { children: string }) => (
    <h2 className="pt-4 font-display text-[20px] font-bold text-charcoal">{children}</h2>
  );
  return (
    <LegalPage settings={settings} title="Privacy Policy" updated="July 2026">
      <p>This Privacy Policy explains how {site.name} (&quot;we,&quot; &quot;us&quot;) collects, uses, and shares information when you use our website or request our services.</p>
      <H>Information we collect</H>
      <p>When you submit a form or contact us, we collect the information you provide — such as your name, phone number, email address, service address, and any details about your request. We also collect standard technical and usage data (such as pages visited) through analytics tools.</p>
      <H>How we use it</H>
      <p>We use your information to respond to your request, schedule and provide services, communicate with you about your account, improve our website, and meet legal and regulatory obligations. We do not sell your personal information.</p>
      <H>Calls and text messages</H>
      <p>If you provide your phone number and consent, we may contact you by phone call or text message about your request and our services. Consent is not a condition of purchase. Message and data rates may apply, and you can opt out of texts at any time by replying STOP.</p>
      <H>Sharing</H>
      <p>We share information with service providers that help us operate — for example, scheduling, customer management, communications, and analytics providers — only as needed to provide our services, and with third parties where required by law.</p>
      <H>Cookies</H>
      <p>Our site uses cookies and similar technologies for basic functionality and analytics. You can control cookies through your browser settings.</p>
      <H>Your choices</H>
      <p>You may request access to, correction of, or deletion of your personal information by contacting us at the address below.</p>
      <H>Contact</H>
      <p>Questions about this policy? Email <a className="font-semibold text-apex-green" href={`mailto:${settings.email}`}>{settings.email}</a> or call <a className="font-semibold text-apex-green" href={settings.phoneHref}>{settings.phone}</a>.</p>
    </LegalPage>
  );
}
