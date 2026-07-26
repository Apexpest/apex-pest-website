import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import type { ResolvedSite } from "@/lib/getSiteSettings";
import type { ReactNode } from "react";

export function LegalPage({
  settings,
  title,
  updated,
  children,
}: {
  settings: ResolvedSite;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <SiteShell settings={settings}>
      <PageHeader eyebrow="Legal" title={title} crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
      <section className="py-[72px]">
        <Container className="max-w-[820px]">
          <p className="mb-8 text-[14px] text-[#8a8a80]">Last updated: {updated}</p>
          <div className="legal-prose space-y-5 text-[16px] leading-relaxed text-[#3a3a34]">{children}</div>
        </Container>
      </section>
    </SiteShell>
  );
}
