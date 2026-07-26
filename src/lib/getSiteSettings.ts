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
  "The pest company you never have to think about. From the first knock to the last invoice, we run it so smoothly it feels effortless — you just stop worrying about pests.";

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
    heroEyebrow: str("heroEyebrow", `Serving ${serviceAreaLabel}`),
    heroHeadline: str("heroHeadline", "Kentucky's Premium Pest Control."),
    heroHeadlineAccent: str("heroHeadlineAccent", "Top service. Top communication."),
    heroSubtext: str("heroSubtext", HERO_SUBTEXT_DEFAULT),
    heroStats: stats,
  };
}
