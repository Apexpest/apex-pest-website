import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getSiteSettings } from "@/lib/getSiteSettings";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Apex Pest Solutions is committed to making our website accessible to everyone.",
  alternates: { canonical: "/accessibility" },
};

export default async function AccessibilityPage() {
  const settings = await getSiteSettings();
  const H = ({ children }: { children: string }) => (
    <h2 className="pt-4 font-display text-[20px] font-bold text-charcoal">{children}</h2>
  );
  return (
    <LegalPage settings={settings} title="Accessibility" updated="July 2026">
      <p>{site.name} is committed to making our website accessible to as many people as possible, including people with disabilities.</p>
      <H>Our approach</H>
      <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. That includes clear structure and headings, sufficient color contrast, keyboard-navigable controls, descriptive labels on links and form fields, and support for screen readers.</p>
      <H>Ongoing work</H>
      <p>Accessibility is an ongoing effort. As we add features and content, we test and refine to keep the experience usable for everyone.</p>
      <H>Feedback</H>
      <p>If you encounter any difficulty using this site, or have a suggestion, please tell us — we&apos;ll do our best to help and to fix the issue. Email <a className="font-semibold text-apex-green" href={`mailto:${settings.email}`}>{settings.email}</a> or call <a className="font-semibold text-apex-green" href={settings.phoneHref}>{settings.phone}</a>.</p>
    </LegalPage>
  );
}
