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
      "Pest control across Jefferson County, KY — Louisville and its suburbs, from St. Matthews and Middletown to Jeffersontown, Prospect, and Fern Creek. Five-point Summit Shield protection.",
    intro: [
      "Jefferson County is the Louisville metro — the densest, most varied housing market we serve, from historic homes in the Highlands and St. Matthews to newer subdivisions pushing east through Middletown, Jeffersontown, and Prospect. Older neighborhoods, newer builds, and everything between each bring their own pest pressure.",
      "The Ohio River valley keeps summers humid, which drives heavy mosquito and termite pressure across the county, while cooler weather sends mice and overwintering invaders indoors. Our five-point Summit Shield process is built for that range of housing — we treat the whole structure, property line to peak line, and back it with the Apex Promise.",
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
      "Pest control across Oldham County, KY — La Grange, Crestwood, Pewee Valley, and Goshen. Five-point Summit Shield protection for one of Kentucky's fastest-growing counties.",
    intro: [
      "Oldham County sits just northeast of Louisville and has grown fast as families move out to its subdivisions and horse-country acreage. It's a mix of historic small towns — La Grange, Pewee Valley — and newer construction spreading across Crestwood and Goshen, with plenty of wooded and rural property in between.",
      "New construction on cleared ground pushes ants, spiders, and field mice toward the nearest home, while older homes and the county's wooded, riverside stretches near the Ohio bring their own pressure. Summit Shield treats all five points — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
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
      "Pest control across Bullitt County, KY — Shepherdsville, Mount Washington, Hillview, and Lebanon Junction. Five-point Summit Shield protection for a fast-growing county.",
    intro: [
      "Bullitt County, just south of Louisville along I-65 and KY-44, is one of the fastest-growing counties in the state — Mount Washington alone has been adding homes by the thousands. That growth means a lot of new construction on freshly cleared ground alongside established neighborhoods in Shepherdsville, Hillview, and Lebanon Junction.",
      "New builds reliably push ants, spiders, and field mice toward the nearest structure while the soil settles, and the county's wooded ridges and creek bottoms keep mosquito, tick, and spider pressure high in summer. Our five-point Summit Shield system covers the whole home and holds the line, backed by the Apex Promise.",
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
      "Pest control across Hardin County, KY — Elizabethtown, Radcliff, Vine Grove, and the surrounding communities. Five-point Summit Shield protection tuned to the local pest calendar.",
    intro: [
      "Hardin County anchors our Central Kentucky service area, from the county seat of Elizabethtown out to Radcliff, Vine Grove, and the rural communities beyond. It's a broad mix — historic homes near the downtowns, fast-growing new subdivisions driven by regional growth, and farm and acreage properties across the county.",
      "Humid summers drive heavy mosquito and termite pressure, and the first cold snaps push mice and overwintering invaders indoors. Our five-point Summit Shield process treats the whole home, property line to peak line, and holds it with seasonal service tuned to the local calendar — backed by the Apex Promise.",
    ],
    pestNote:
      "Humid summers press termites and mosquitoes hard; harvest and cold weather drive field mice indoors, and new construction draws displaced ants and spiders.",
  },
  {
    slug: "shelby-county",
    name: "Shelby County",
    short: "Shelby",
    seat: "Shelbyville",
    badge: "East of Louisville",
    metaDescription:
      "Pest control across Shelby County, KY — Shelbyville, Simpsonville, and the surrounding communities along I-64. Five-point Summit Shield protection for a fast-growing commuter county.",
    intro: [
      "Shelby County sits directly east of Louisville along I-64, halfway to Frankfort, and it has become one of the region's most popular landing spots for families and commuters who want small-town living within reach of the metro. Shelbyville anchors the county, with Simpsonville and a ring of smaller communities — Waddy, Bagdad, and Finchville — spread across the horse farms and rolling farmland in between.",
      "That growth means new subdivisions rising on freshly cleared ground next to century-old homes and working farms, and each puts a different kind of pest pressure on a house. New construction pushes ants, spiders, and field mice toward the nearest structure while the soil settles, while the county's creek bottoms and wooded acreage keep mosquito, tick, and spider pressure high through the summer. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    pestNote:
      "New subdivisions on cleared farmland draw ants, spiders, and field mice; creek bottoms and wooded acreage drive summer mosquito and tick pressure, and cool weather sends rodents indoors.",
  },
  {
    slug: "meade-county",
    name: "Meade County",
    short: "Meade",
    seat: "Brandenburg",
    badge: "Along the Ohio River",
    metaDescription:
      "Pest control across Meade County, KY — Brandenburg, Muldraugh, Flaherty, and the Fort Knox community. Five-point Summit Shield protection tuned to the local pest calendar.",
    intro: [
      "Meade County runs along 56 miles of the Ohio River southwest of Louisville, with Brandenburg as its county seat and quick gate access to Fort Knox making it a favorite for military families. Between the river towns and the rolling farmland sit Muldraugh, Flaherty, Ekron, and Guston — a mix of established small-town homes, rural acreage, and newer construction serving the Fort Knox community.",
      "Riverfront humidity and the county's wooded ridges and creek bottoms drive heavy mosquito, tick, and spider pressure through the warm months, while frequent PCS moves and quick turnovers near Fort Knox are exactly where rodents and cockroaches get a foothold. Our five-point Summit Shield process treats the whole home — property line to peak line — sealing the entry points pests use, and backs it with the Apex Promise.",
    ],
    pestNote:
      "Ohio River humidity and wooded ridges fuel summer mosquitoes, ticks, and spiders; frequent Fort Knox turnovers and cool weather send rodents and cockroaches looking for a way indoors.",
  },
  {
    slug: "warren-county",
    name: "Warren County",
    short: "Warren",
    seat: "Bowling Green",
    badge: "South-Central Kentucky",
    metaDescription:
      "Pest control across Warren County, KY — Bowling Green, Smiths Grove, Oakland, and Woodburn. Five-point Summit Shield protection built for cave-country homes.",
    intro: [
      "Warren County anchors south-central Kentucky along I-65, an hour north of Nashville, with Bowling Green — the state's fifth-largest city — at its center and the smaller communities of Smiths Grove, Oakland, and Woodburn spread across the surrounding farmland. Western Kentucky University, the Corvette plant, and a diversifying economy keep the county growing, with new subdivisions rising alongside historic downtowns and rural acreage.",
      "Bowling Green sits squarely in cave country — the karst limestone that produced Mammoth Cave and the sinkholes beneath the city — and that geology gives pests an underground network of cracks, drains, and foundation gaps to travel through. Combined with humid summers, it drives steady pressure from ants, spiders, roaches, and rodents, plus heavy mosquito and termite activity in the warm months. Our five-point Summit Shield process treats the whole home — property line to peak line — sealing those entry points, and backs it with the Apex Promise.",
    ],
    pestNote:
      "Karst limestone and sinkhole geology give ants, roaches, spiders, and rodents underground routes into homes; humid summers press mosquitoes and termites hard across the county.",
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
