/**
 * Central site config + content.
 * This is the single source of truth for now — structured so it maps 1:1
 * to Sanity documents when the CMS is added later (minimal migration pain).
 */

export const site = {
  name: "Apex Pest Solutions",
  domain: "apexpestky.com",
  phone: "502-305-7537",
  phoneHref: "tel:5023057537",
  email: "solutions@apexpestky.com",
  licenseNumber: "42376", // Kentucky Dept. of Agriculture
  positioning: "Kentucky's Premium Pest Control. Top service, top communication.",
  militaryDiscount: "5%",
  serviceAreaLabel: "Central Kentucky",
} as const;

export const nav = [
  { label: "Pest Control", href: "/pest-control" },
  { label: "Pest Library", href: "/pests" },
  { label: "Summit Shield", href: "/the-apex-standard/summit-shield" },
  { label: "Locations", href: "/locations" },
  { label: "The Apex Standard", href: "/the-apex-standard" },
  { label: "Careers", href: "/careers" },
] as const;

export const heroStats = [
  { value: "48hr", label: "Pests come back between visits? So do we — free, within 48 hours." },
  { value: "5★", label: "Rated five stars across Google and every review platform." },
  { value: "3 Zones", label: "Summit Shield protection from ground line to ridge line." },
  { value: "5%", label: "Military & PCS discount for the Fort Knox community." },
] as const;

export const whyApex = [
  {
    title: "Communication that never leaves you guessing",
    body: "Confirmations, arrival texts, and a clear record of exactly what we did — the best communication in Kentucky, by design.",
    icon: "message",
  },
  {
    title: "Trained to make it effortless",
    body: "Every technician runs the same disciplined Summit Shield process, so your service is consistent no matter who's at the door.",
    icon: "check",
  },
  {
    title: "Billing you don't have to babysit",
    body: "Clear pricing, easy payments, no surprises. The back office runs as cleanly as the treatment does.",
    icon: "card",
  },
  {
    title: "Backed by the Apex Promise",
    body: "If pests return between scheduled visits, so do we — no charge, no argument. You're covered.",
    icon: "shield",
  },
] as const;

export const zones = [
  {
    no: "01",
    name: "Ground Line",
    headline: "Where 80% of pests make first contact",
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
    headline: "The part almost nobody treats",
    body: "Eaves, soffits, fascia and the roofline — where wasps, hornets and overwintering invaders get in from the top.",
    tone: "amber",
  },
] as const;

export const steps = [
  { num: 1, name: "Survey", body: "We walk the whole property first — all three zones, documented with photos in your service record." },
  { num: 2, name: "Clear", body: "We knock down what's active now, treating where pests nest and breed — not just where you've seen them." },
  { num: 3, name: "Shield", body: "We build the three-zone barrier from ground line to ridge line, sealing the routes pests actually use." },
  { num: 4, name: "Hold", body: "Seasonal service tuned to Kentucky's pest calendar. Something comes back between visits? So do we — free." },
] as const;

export const comparison = {
  columns: ["DIY", "Typical pest control", "Apex Pest Solutions"],
  rows: [
    { feature: "Treats the whole home, ground to roofline", diy: false, typical: "Foundation band only", apex: "All three zones" },
    { feature: "Free return if pests come back", diy: false, typical: "Sometimes, with a wait", apex: "Within 48 hours" },
    { feature: "Proactive communication & reminders", diy: false, typical: "Hit or miss", apex: "Best in Kentucky" },
    { feature: "Documented service record with photos", diy: false, typical: "Rarely", apex: "Every visit" },
    { feature: "Licensed & insured KY technicians", diy: false, typical: "Usually", apex: "Always" },
  ],
} as const;

export const services = [
  { name: "General Pest Control", href: "/pest-control/general-pest-control" },
  { name: "Termite Control", href: "/pest-control/termite-control" },
  { name: "Mosquito Control", href: "/pest-control/mosquito-control" },
  { name: "Rodent Control", href: "/pest-control/rodent-control" },
  { name: "Mole Control", href: "/pest-control/mole-control" },
] as const;
