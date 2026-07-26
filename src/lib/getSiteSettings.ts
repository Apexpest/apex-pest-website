import { client } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import { site as staticSite, heroStats as staticStats } from "@/lib/site";

export type HeroStat = { value: string; label: string };

export type ResolvedSite = {
  phone: string;
  phoneHref: string;
  email: string;
  licenseNumber: string;
  serviceAreaLabel: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubtext: string;
  heroStats: HeroStat[];
};

const HERO_SUBTEXT_DEFAULT =
  "Thorough, reliable pest control backed by clear communication — from your first appointment to a documented record of every visit.";

const toHref = (phone: string) => `tel:${phone.replace(/[^0-9]/g, "")}`;

/**
 * Reads editable content from Sanity, falling back to the static defaults in
 * src/lib/site.ts. Wrapped in try/catch so the site never breaks if Sanity is
 * unreachable or empty. Revalidates every 60s.
 */
export async function getSiteSettings(): Promise<ResolvedSite> {
  let s: Record<string, unknown> | null = null;
  try {
    s = await client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    s = null;
  }

  const str = (key: string, fallback: string) =>
    (typeof s?.[key] === "string" && (s[key] as string).trim()) || fallback;

  const phone = str("phone", staticSite.phone);
  const serviceAreaLabel = str("serviceAreaLabel", staticSite.serviceAreaLabel);
  const stats =
    Array.isArray(s?.heroStats) && s.heroStats.length
      ? (s.heroStats as HeroStat[])
      : (staticStats as readonly HeroStat[]).map((x) => ({ ...x }));

  return {
    phone,
    phoneHref: toHref(phone),
    email: str("email", staticSite.email),
    licenseNumber: str("licenseNumber", staticSite.licenseNumber),
    serviceAreaLabel,
    // Hero text is brand-critical and kept in code as the source of truth
    // (not overridden by CMS) so it stays consistent across branches.
    heroEyebrow: `Serving ${serviceAreaLabel}`,
    heroHeadline: "Top service.",
    heroHeadlineAccent: "Top communication.",
    heroSubtext: HERO_SUBTEXT_DEFAULT,
    heroStats: stats,
  };
}
