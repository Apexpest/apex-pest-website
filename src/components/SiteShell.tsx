import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileCallBar } from "./MobileCallBar";
import type { ResolvedSite } from "@/lib/getSiteSettings";
import type { ReactNode } from "react";

/** Standard page chrome: header, main, footer, sticky mobile call bar. */
export function SiteShell({
  settings,
  children,
}: {
  settings: ResolvedSite;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader settings={settings} />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={settings} />
      <MobileCallBar settings={settings} />
    </>
  );
}
