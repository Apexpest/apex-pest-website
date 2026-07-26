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
  url: "https://apexpestky.com",
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
  { value: "3 Zones", label: "Summit Shield protection from the property line to the peak line." },
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
    name: "Property Line",
    headline: "The yard, before pests reach the house",
    body: "Lawn edges, landscape beds, fence and tree lines, standing water and mulch — where pests gather and breed before they ever touch the home.",
    tone: "sage",
  },
  {
    no: "02",
    name: "Foundation Line",
    headline: "Where pests meet the structure",
    body: "The soil band, foundation walls and seams, slab edges, crawlspace vents and downspout splash zones.",
    tone: "sage",
  },
  {
    no: "03",
    name: "Peak Line",
    headline: "The entry points, ground to peak",
    body: "Siding gaps, weep holes, windows and door frames, garage seals, eaves, soffits and the roofline.",
    tone: "amber",
  },
] as const;

export const steps = [
  { num: 1, name: "Survey", body: "We walk the whole property first — all three zones, documented with photos in your service record." },
  { num: 2, name: "Clear", body: "We treat what's active now, addressing where pests nest and breed — not just where they've been seen." },
  { num: 3, name: "Shield", body: "We build the three-zone barrier from the property line to the peak line, sealing the routes pests use." },
  { num: 4, name: "Hold", body: "Seasonal service tuned to the regional pest calendar. If pests return between visits, we re-treat at no charge." },
] as const;

export const comparison = {
  columns: ["DIY", "Typical pest control", "Apex Pest Solutions"],
  rows: [
    { feature: "Treats the whole property, yard to roofline", diy: false, typical: "Foundation band only", apex: "All three zones" },
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
