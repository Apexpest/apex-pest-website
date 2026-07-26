/**
 * Central site config + content.
 * Single source of truth for now — structured to map 1:1 to Sanity documents
 * when the CMS is added later (minimal migration pain).
 *
 * Geography: the brand copy here is written to stay neutral so the site can
 * cover additional branches/states later. Region-specific wording lives in the
 * location pages (see src/lib/locations.ts) and the pest library.
 */

export const site = {
  name: "Apex Pest Solutions",
  domain: "apexpestky.com",
  // Origin the site is actually served from (used for canonical URLs, sitemap, robots,
  // and JSON-LD). Switch to "https://apexpestky.com" after the DNS cutover.
  url: "https://apex-pest-website.vercel.app",
  phone: "502-305-7537",
  phoneHref: "tel:5023057537",
  email: "solutions@apexpestky.com",
  licenseNumber: "42376", // Kentucky Dept. of Agriculture
  positioning: "Top service. Top communication.",
  // The area currently served. Update as new branches open.
  serviceAreaLabel: "Central Kentucky",
} as const;

export const nav = [
  { label: "Pest Control", href: "/pest-control" },
  { label: "Pest Library", href: "/pests" },
  { label: "Summit Shield", href: "/#summit-shield" },
  { label: "Locations", href: "/locations" },
  { label: "The Apex Standard", href: "/the-apex-standard" },
  { label: "Careers", href: "/careers" },
] as const;

export const heroStats = [
  { value: "48hr", label: "Free re-services within 48 hours if pests return between scheduled visits." },
  { value: "5★", label: "Rated five stars across Google and other review platforms." },
  { value: "3 Zones", label: "Summit Shield protection from the ground line to the roofline." },
  { value: "100%", label: "Satisfaction guarantee, backed in writing." },
] as const;

export const whyApex = [
  {
    title: "Clear, proactive communication",
    body: "Appointment confirmations, arrival notifications, and a written record of exactly what we treated — so you're always informed.",
    icon: "message",
  },
  {
    title: "Consistent, trained technicians",
    body: "Every technician follows the same Summit Shield process, so your service is thorough and consistent no matter who is at the door.",
    icon: "check",
  },
  {
    title: "Straightforward billing",
    body: "Clear pricing and simple payments, with no surprises on your invoice.",
    icon: "card",
  },
  {
    title: "Backed by our guarantee",
    body: "If pests return between scheduled visits, we return and re-treat at no charge — in writing.",
    icon: "shield",
  },
] as const;

export const zones = [
  {
    no: "01",
    name: "Ground Line",
    headline: "Where most pests make first contact",
    body: "Soil band, foundation seams, mulch beds, downspouts and crawlspace vents.",
    tone: "sage",
  },
  {
    no: "02",
    name: "Structure Line",
    headline: "The actual entry points",
    body: "Siding gaps, weep holes, window and door frames, garage seals and utility penetrations.",
    tone: "sage",
  },
  {
    no: "03",
    name: "Ridge Line",
    headline: "The part most often overlooked",
    body: "Eaves, soffits, fascia and the roofline — where wasps, hornets and overwintering pests enter from above.",
    tone: "amber",
  },
] as const;

export const steps = [
  { num: 1, name: "Survey", body: "We walk the whole property first — all three zones, documented with photos in your service record." },
  { num: 2, name: "Clear", body: "We treat what's active now, addressing where pests nest and breed — not just where they've been seen." },
  { num: 3, name: "Shield", body: "We build the three-zone barrier from the ground line to the roofline, sealing the routes pests use." },
  { num: 4, name: "Hold", body: "Seasonal service tuned to the regional pest calendar. If pests return between visits, we re-treat at no charge." },
] as const;

export const comparison = {
  columns: ["DIY", "Typical pest control", "Apex Pest Solutions"],
  rows: [
    { feature: "Treats the whole home, ground to roofline", diy: false, typical: "Foundation band only", apex: "All three zones" },
    { feature: "Free return if pests come back", diy: false, typical: "Sometimes, with a wait", apex: "Within 48 hours" },
    { feature: "Proactive communication & reminders", diy: false, typical: "Inconsistent", apex: "Standard on every visit" },
    { feature: "Documented service record with photos", diy: false, typical: "Rarely", apex: "Every visit" },
    { feature: "Licensed & insured technicians", diy: false, typical: "Usually", apex: "Always" },
  ],
} as const;

export const services = [
  { name: "General Pest Control", href: "/pest-control/general-pest-control" },
  { name: "Termite Control", href: "/pest-control/termite-control" },
  { name: "Mosquito Control", href: "/pest-control/mosquito-control" },
  { name: "Rodent Control", href: "/pest-control/rodent-control" },
  { name: "Cockroach Control", href: "/pest-control/cockroach-control" },
] as const;
