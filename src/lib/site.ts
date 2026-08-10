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
  { value: "5 Points", label: "Summit Shield protection from the property line to the peak line." },
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
    body: "A granular barrier across lawn edges, landscape beds, fence and tree lines — stopping pests where they gather and breed before they ever touch the home.",
    tone: "sage",
  },
  {
    no: "02",
    name: "Foundation Line",
    headline: "The perimeter where pests meet the structure",
    body: "A liquid barrier band roughly three feet up the wall and three feet out from the foundation — soil band, wall seams, slab edges, crawlspace vents and downspout splash zones.",
    tone: "sage",
  },
  {
    no: "03",
    name: "Entry Points",
    headline: "The cracks and crevices pests slip through",
    body: "Targeted crack-and-crevice treatment at windows, door frames, weep holes, garage seals and utility penetrations — the small gaps pests use to get inside.",
    tone: "sage",
  },
  {
    no: "04",
    name: "Peak Line",
    headline: "The eaves, soffits and roofline overhead",
    body: "An eave sweep that knocks down wasp nests, spider webs and overwintering pests high on the structure — the zone most companies never touch.",
    tone: "amber",
  },
  {
    no: "05",
    name: "Interior",
    headline: "The rooms where pests actually show up",
    body: "Discreet interior treatment of the common problem areas — kitchens, baths, garages and basements — targeting activity inside, not just around the home.",
    tone: "sage",
  },
] as const;

export const steps = [
  { num: 1, name: "Inspect", body: "We start with a full 20-point inspection, inside and out, documented in your service record — so the plan fits your home." },
  { num: 2, name: "Flush", body: "We flush out and treat what's active now — knocking down nests and hitting where pests breed, not just where they've been seen." },
  { num: 3, name: "Shield", body: "We build the five-point Summit Shield barrier from the property line to the peak line, sealing the routes pests use." },
  { num: 4, name: "Maintain", body: "Seasonal service tuned to the regional pest calendar. If pests return between visits, we re-treat at no charge." },
] as const;

export const comparison = {
  columns: ["DIY", "Typical pest control", "Apex Pest Solutions"],
  rows: [
    { feature: "Treats the whole property, yard to roofline", diy: false, typical: "Foundation band only", apex: "All five points" },
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
