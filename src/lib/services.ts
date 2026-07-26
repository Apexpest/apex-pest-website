export type Service = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  body: string[];
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "general-pest-control",
    title: "General Pest Control",
    tagline: "The recurring plan that keeps your home covered year-round.",
    intro:
      "Our flagship recurring service handles the pests Kentucky homes deal with most — ants, spiders, cockroaches, silverfish, and the seasonal invaders that show up with the weather.",
    body: [
      "General pest control is the backbone of the Apex Promise. We build the Summit Shield three-zone barrier around your home — from the property line to the peak line — and then hold it with scheduled seasonal service tuned to Kentucky's pest calendar.",
      "Every visit is documented in your service record, applied by licensed technicians to product-label directions. If pests show up between scheduled visits, we come back and re-treat at no charge — that's the guarantee, in writing.",
      "Most homeowners start on our Quarterly plan and never think about pests again. You get the reminders, the arrival texts, and a clear note of exactly what we treated and where.",
    ],
    highlights: [
      "Covers ants, spiders, cockroaches, silverfish, and common invaders",
      "Three-zone Summit Shield barrier, property line to peak line",
      "Free re-services between visits — within 48 hours",
      "Documented service record every visit",
    ],
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    tagline: "Take your yard back from spring through first frost.",
    intro:
      "Kentucky's river valleys and humid summers make mosquitoes relentless. Our seasonal mosquito program targets where they breed and rest so your yard is usable again.",
    body: [
      "We treat the shaded harborage areas where mosquitoes actually spend their day — dense foliage, under decks, along tree lines and standing-water zones — not just a quick spray of the lawn.",
      "Service runs on a recurring schedule through mosquito season, and it pairs with our Monthly and VIP plans so your general pest and mosquito coverage arrive on one simple visit.",
    ],
    highlights: [
      "Targets breeding and resting sites, not just open lawn",
      "Recurring coverage through mosquito season",
      "Bundles with the Monthly + Mosquito and VIP plans",
    ],
  },
  {
    slug: "termite-control",
    title: "Termite Control",
    tagline: "Kentucky sits in a heavy termite-pressure zone. Protect the structure.",
    intro:
      "Eastern subterranean termites are the dominant species across Kentucky, and they work quietly. Our termite service covers inspection, treatment, and ongoing warranty protection.",
    body: [
      "We start with a full termite inspection of the structure and the conducive conditions around it, then treat and establish a protective barrier against subterranean colonies.",
      "Termite protection is included in our VIP plan with a full warranty covering both prevention and elimination — so the single most expensive pest problem a home can face is simply handled.",
    ],
    highlights: [
      "Full structural termite inspection",
      "Treatment for eastern subterranean termites",
      "Full prevention + elimination warranty on the VIP plan",
    ],
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    tagline: "Seal them out and keep them out.",
    intro:
      "Mice and rats find the gaps in your home's structure — utility penetrations, garage seals, and foundation gaps. We remove the active problem and close the routes they use.",
    body: [
      "Our rodent service combines active knockdown with exclusion work along the Peak Line: identifying and sealing entry points so the problem doesn't simply return next season.",
      "Rodent coverage is built into our recurring general pest plans, so once we've cleared an infestation we keep monitoring on every visit.",
    ],
    highlights: [
      "Active rodent knockdown plus exclusion",
      "Structure-line entry points identified and sealed",
      "Ongoing monitoring on recurring plans",
    ],
  },
  {
    slug: "flea-tick-control",
    title: "Flea & Tick Control",
    tagline: "High-anxiety pests, handled with a targeted yard program.",
    intro:
      "Kentucky has meaningful tick pressure — including the lone star tick and its alpha-gal connection. Our flea and tick service treats the yard zones where they wait for a host.",
    body: [
      "We focus on the shaded, brushy edges and tree lines where ticks quest and where fleas persist, reducing the population your family and pets encounter around the home.",
      "It pairs with a recurring plan so the pressure stays down across the warm months rather than spiking after a single treatment.",
    ],
    highlights: [
      "Targets tick harborage along yard edges and tree lines",
      "Reduces flea pressure around the home",
      "Best run on a recurring seasonal schedule",
    ],
  },
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    tagline: "Treat where they nest and breed — not just where you've seen them.",
    intro:
      "Cockroaches are a health concern and a persistence problem. Our service treats the harborage points where they actually live, then holds the line with recurring coverage.",
    body: [
      "We target kitchens, bathrooms, wall voids, and utility penetrations where roaches nest and travel, using targeted applications placed where the pressure is — not broadcast across your living space.",
      "German cockroaches in particular reproduce fast, so cockroach control is most effective as part of a recurring plan with free re-services between visits.",
    ],
    highlights: [
      "Targets nesting and harborage points",
      "Targeted applications, not broadcast spraying",
      "Free re-services on recurring plans",
    ],
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    tagline: "Discreet, documented, and scheduled around your business.",
    intro:
      "Restaurants, retail, offices, warehouses, and healthcare facilities all have different pest realities. We build a program around yours, with the documentation your inspections require.",
    body: [
      "Our commercial service is scheduled at times that work for your operation, with certified technicians and a documented service record for every visit — the paper trail health inspectors and auditors expect.",
      "Pricing is transparent and built to the facility, and the Apex Promise carries over: if something returns between visits, so do we.",
    ],
    highlights: [
      "Programs for restaurants, retail, offices, warehouses, healthcare",
      "Flexible scheduling around your operation",
      "Documented service record for inspections and audits",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  best?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Quarterly Pest Control",
    price: "$48",
    cadence: "/month",
    features: [
      "General pests — spiders, cockroaches, ants, rodents and more",
      "Free re-services for persistent pests",
      "100% satisfaction guarantee",
    ],
  },
  {
    name: "Monthly + Mosquito",
    price: "$70",
    cadence: "/month",
    features: [
      "All general pests, inside and outside the home",
      "Seasonal mosquito treatment",
      "Free re-services for persistent pests",
      "100% satisfaction guarantee",
    ],
  },
  {
    name: "VIP — Pest, Mosquito & Termite",
    price: "$125",
    cadence: "/month",
    best: true,
    features: [
      "Everything in Monthly + Mosquito",
      "Full termite warranty — prevention and elimination",
      "Our best-value complete protection",
      "Free re-services for persistent pests",
    ],
  },
];
