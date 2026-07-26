/**
 * Counties — the top level of the location hierarchy.
 * Locations hub → County hub → City page.
 * Each county is a real service area (mirrors the Google service-area setup).
 */

export type County = {
  slug: string;
  name: string;        // "Jefferson County"
  short: string;       // "Jefferson"
  seat: string;        // county seat / main city
  badge: string;
  metaDescription: string;
  intro: string[];     // county-level overview (hand-written)
  pestNote: string;    // county-level pest reality
};

export const counties: County[] = [
  {
    slug: "jefferson-county",
    name: "Jefferson County",
    short: "Jefferson",
    seat: "Louisville",
    badge: "Louisville Metro",
    metaDescription:
      "Pest control across Jefferson County, KY — Louisville and its suburbs, from St. Matthews and Middletown to Jeffersontown, Prospect, and Fern Creek. Three-zone Summit Shield protection.",
    intro: [
      "Jefferson County is the Louisville metro — the densest, most varied housing market we serve, from historic homes in the Highlands and St. Matthews to newer subdivisions pushing east through Middletown, Jeffersontown, and Prospect. Older neighborhoods, newer builds, and everything between each bring their own pest pressure.",
      "The Ohio River valley keeps summers humid, which drives heavy mosquito and termite pressure across the county, while cooler weather sends mice and overwintering invaders indoors. Our three-zone Summit Shield process is built for that range of housing — we treat the whole structure, ground line to roofline, and back it with the Apex Promise.",
    ],
    pestNote:
      "Ohio River valley humidity fuels mosquitoes and termites through the warm months; older housing stock across the metro means carpenter ants, spiders, and fall invaders are year-round concerns.",
  },
  {
    slug: "oldham-county",
    name: "Oldham County",
    short: "Oldham",
    seat: "La Grange",
    badge: "Northeast of Louisville",
    metaDescription:
      "Pest control across Oldham County, KY — La Grange, Crestwood, Pewee Valley, and Goshen. Three-zone Summit Shield protection for one of Kentucky's fastest-growing counties.",
    intro: [
      "Oldham County sits just northeast of Louisville and has grown fast as families move out to its subdivisions and horse-country acreage. It's a mix of historic small towns — La Grange, Pewee Valley — and newer construction spreading across Crestwood and Goshen, with plenty of wooded and rural property in between.",
      "New construction on cleared ground pushes ants, spiders, and field mice toward the nearest home, while older homes and the county's wooded, riverside stretches near the Ohio bring their own pressure. Summit Shield treats all three zones — ground line to roofline — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    pestNote:
      "New subdivisions on cleared land draw ants and field mice; wooded and riverside property raises tick, spider, and mosquito pressure through the warm months.",
  },
  {
    slug: "bullitt-county",
    name: "Bullitt County",
    short: "Bullitt",
    seat: "Shepherdsville",
    badge: "South of Louisville",
    metaDescription:
      "Pest control across Bullitt County, KY — Shepherdsville, Mount Washington, Hillview, and Lebanon Junction. Three-zone Summit Shield protection for a fast-growing county.",
    intro: [
      "Bullitt County, just south of Louisville along I-65 and KY-44, is one of the fastest-growing counties in the state — Mount Washington alone has been adding homes by the thousands. That growth means a lot of new construction on freshly cleared ground alongside established neighborhoods in Shepherdsville, Hillview, and Lebanon Junction.",
      "New builds reliably push ants, spiders, and field mice toward the nearest structure while the soil settles, and the county's wooded ridges and creek bottoms keep mosquito, tick, and spider pressure high in summer. Our three-zone Summit Shield system covers the whole home and holds the line, backed by the Apex Promise.",
    ],
    pestNote:
      "Rapid new construction draws displaced ants and mice year-round; wooded ridges and creek bottoms drive summer mosquito, tick, and spider pressure.",
  },
  {
    slug: "hardin-county",
    name: "Hardin County",
    short: "Hardin",
    seat: "Elizabethtown",
    badge: "Central Kentucky",
    metaDescription:
      "Pest control across Hardin County, KY — Elizabethtown, Radcliff, Vine Grove, and the surrounding communities. Three-zone Summit Shield protection tuned to the local pest calendar.",
    intro: [
      "Hardin County anchors our Central Kentucky service area, from the county seat of Elizabethtown out to Radcliff, Vine Grove, and the rural communities beyond. It's a broad mix — historic homes near the downtowns, fast-growing new subdivisions driven by regional growth, and farm and acreage properties across the county.",
      "Humid summers drive heavy mosquito and termite pressure, and the first cold snaps push mice and overwintering invaders indoors. Our three-zone Summit Shield process treats the whole home, ground line to roofline, and holds it with seasonal service tuned to the local calendar — backed by the Apex Promise.",
    ],
    pestNote:
      "Humid summers press termites and mosquitoes hard; harvest and cold weather drive field mice indoors, and new construction draws displaced ants and spiders.",
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
