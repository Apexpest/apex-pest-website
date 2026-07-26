/**
 * Location content — the local SEO engine.
 *
 * Every field here is hand-written with real local detail (neighborhoods,
 * landmarks, housing stock, seasonal pest pressure) so each page reads as a
 * genuine local page, not a thin "doorway" page. This is the single source of
 * truth for now and maps 1:1 to the Sanity `location` document (see
 * src/sanity/schemaTypes/location.ts) for a near-zero-migration move to the CMS.
 *
 * Only publish a city here if Apex genuinely services it.
 */

export type Location = {
  slug: string;
  city: string;
  /** Short label used in the hub card, e.g. "Hardin County seat". */
  badge: string;
  tier: 1 | 2 | 3;
  /** ~15-25 words for meta description + hub card. */
  metaDescription: string;
  /** Hand-written local intro paragraphs (150+ words total). */
  intro: string[];
  /** Real neighborhoods / subdivisions (min 4). */
  neighborhoods: string[];
  /** Real landmarks / places (min 3). */
  landmarks: string[];
  /** One-line description of the local housing stock. */
  housingStock: string;
  /** The pests that hit this area hardest (names; link to /pests later). */
  topPests: string[];
  /** Seasonal pest note specific to the area. */
  seasonalNote: string;
  /** How Apex services the route locally. */
  localServiceNote: string;
};

export const locations: Location[] = [
  {
    slug: "elizabethtown",
    city: "Elizabethtown",
    badge: "Hardin County seat",
    tier: 1,
    metaDescription:
      "Pest control in Elizabethtown, KY — three-zone Summit Shield protection for Etown homes, from historic downtown to the new east-side subdivisions.",
    intro: [
      "Elizabethtown is home base for Apex. As the Hardin County seat, Etown spans everything from century-old homes around the historic Public Square to the fast-growing new subdivisions rising on the east and south sides of town — and each puts a different kind of pest pressure on a home.",
      "The older neighborhoods near downtown deal with the classics: overwintering invaders slipping through settled foundations, carpenter ants in mature shade trees, and the occasional brown recluse in a basement or garage. The newer construction off Lincoln Parkway and out toward the bypass sits on freshly disturbed ground, which pushes ants, spiders, and field mice straight toward the closest warm structure — usually the one that just went up.",
      "With the BlueOval SK battery park driving a wave of new homes and residents into the county, Etown is growing fast, and pest pressure grows with it. Our three-zone Summit Shield process is built for exactly that mix of old and new housing — we treat the whole home, ground line to ridge line, and back it with the Apex Promise.",
    ],
    neighborhoods: ["Thousand Oaks", "The Cedars", "Foxborough Estates", "Winding Springs", "Triple Crown", "Summit Creek"],
    landmarks: ["Freeman Lake Park", "Historic Downtown / Public Square", "Elizabethtown Sports Park", "Towne Mall"],
    housingStock:
      "A wide mix — established mid-century homes near downtown alongside a boom of new construction ($280k–$500k) on the east and south sides.",
    topPests: ["General household pests", "Ants", "Brown recluse spiders", "Termites", "Mosquitoes", "Rodents"],
    seasonalNote:
      "Humid Etown summers drive heavy mosquito and termite pressure; the first cold snaps push ladybugs, stink bugs, and mice indoors for the winter.",
    localServiceNote:
      "Etown is our home route — same-week scheduling is easy, and free re-services get back to you within 48 hours.",
  },
  {
    slug: "radcliff",
    city: "Radcliff",
    badge: "Northern Hardin County",
    tier: 1,
    metaDescription:
      "Pest control in Radcliff, KY — three-zone Summit Shield protection for one of Hardin County's largest cities, from established subdivisions to rental and quick-turnover homes.",
    intro: [
      "Radcliff is one of the largest cities in Hardin County, with more than 22,000 residents and a busy mix of established neighborhoods, newer subdivisions, and a large share of rental properties. Homes here change hands often, and pest problems can hide between tenants and surface right as a new family is moving in.",
      "The housing runs heavily to ranch homes, older subdivisions, and rentals, alongside quieter established streets out toward Radcliff East. Rentals and quick turnovers are exactly where rodents and cockroaches get a foothold, so our Structure Line work — sealing utility penetrations, garage gaps, and door seals — matters more here than almost anywhere in the county.",
      "Whether you own on a quiet street or you're renting, the Apex Promise travels with you: if pests return between scheduled visits, we come back and re-treat at no charge. It all runs on the three-zone Summit Shield system, tuned to the local pest calendar.",
    ],
    neighborhoods: ["Radcliff East", "Woodland Hills", "Rolling Hills", "established subdivisions across the city"],
    landmarks: ["Saunders Springs Nature Preserve", "Boundary Oak Distillery", "Colvin Community Center", "the North Wilson Road corridor"],
    housingStock:
      "Ranch homes, older subdivisions, and a large share of rental and quick-turnover properties.",
    topPests: ["Rodents", "Cockroaches", "General household pests", "Ants", "Spiders", "Mosquitoes"],
    seasonalNote:
      "Wooded areas near Saunders Springs raise tick and mosquito pressure in summer; cooler fall weather and frequent turnover send mice hunting for a way indoors.",
    localServiceNote:
      "Radcliff is on our regular route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "vine-grove",
    city: "Vine Grove",
    badge: "Small-town Hardin County",
    tier: 1,
    metaDescription:
      "Pest control in Vine Grove, KY — Summit Shield three-zone protection for this small town, from the historic downtown to the newer subdivisions along Otter Creek.",
    intro: [
      "Vine Grove is a tight-knit small town with a real downtown, a strong sense of community, and Otter Creek running through the heart of it at Optimist Park. That creek and the wooded, low-lying ground around it are also a mosquito engine every summer.",
      "Homes here split between older places near the downtown grid — settled foundations, mature trees, and the pest quirks that come with age — and newer subdivisions on the edges of town built on recently cleared land. The older homes see more overwintering invaders and the occasional spider or rodent; the newer ones get the ants and field mice displaced by construction.",
      "We tune service to the local calendar: hard on mosquitoes through the warm months, and sealed up tight against invaders before winter. It all runs on the three-zone Summit Shield system, backed by the Apex Promise.",
    ],
    neighborhoods: ["Historic downtown Vine Grove", "Otter Creek area", "Highview Estates", "newer subdivisions off Highway 144"],
    landmarks: ["Optimist Park", "Otter Creek", "the Autumn Daze Festival grounds", "downtown Vine Grove"],
    housingStock:
      "Older homes around the downtown grid plus newer subdivisions on the edges of town.",
    topPests: ["Mosquitoes", "General household pests", "Ants", "Spiders", "Rodents", "Ticks & fleas"],
    seasonalNote:
      "Otter Creek and shaded low ground make mosquitoes relentless in summer; cooler weather brings mice and overwintering pests toward warm homes.",
    localServiceNote:
      "Vine Grove is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "rineyville",
    city: "Rineyville",
    badge: "Rural NW Hardin County",
    tier: 1,
    metaDescription:
      "Pest control in Rineyville, KY — Summit Shield protection for rural homes and farm properties northwest of Elizabethtown, where field pests press hard on the structure.",
    intro: [
      "Rineyville is a rural, close-knit community about seven miles northwest of Elizabethtown, with deep agricultural roots and a lot of homes on larger lots, farmland, and wooded acreage. That country setting is part of the appeal — and it's also why pest pressure here looks different than it does in town.",
      "When your home sits next to fields, tree lines, and outbuildings, pests come at you from the surrounding land: field mice and rats moving in as crops are cut and weather cools, wasps and hornets nesting in eaves and barns, spiders and occasional invaders working in from the woods, and ticks waiting along brushy edges. Rural properties give pests more launch points, so the Ridge Line and Structure Line zones — the eaves, gaps, and penetrations most companies skip — really earn their keep out here.",
      "Rineyville is growing as families look for space within an easy drive of Elizabethtown, and we service the area on our regular route. The three-zone Summit Shield system covers the whole home and the routes pests actually use, backed by the Apex Promise.",
    ],
    neighborhoods: ["Central Rineyville", "farm and acreage properties along Rineyville Road", "wooded lots on the county's north side", "rural subdivisions off KY-1600"],
    landmarks: ["Rineyville Elementary", "the historic rail corridor", "surrounding Hardin County farmland"],
    housingStock:
      "Rural homes on larger lots, working farms, and acreage properties with outbuildings.",
    topPests: ["Rodents", "Wasps & hornets", "Spiders", "Ticks & fleas", "Ants", "Occasional invaders"],
    seasonalNote:
      "Harvest and the first cold weather drive field mice indoors in force; spring and summer bring heavy wasp, tick, and spider activity from surrounding land.",
    localServiceNote:
      "We service Rineyville's rural routes regularly and treat outbuildings and acreage, not just the house — free re-services within 48 hours.",
  },
  {
    slug: "cecilia",
    city: "Cecilia",
    badge: "Central Hardin County",
    tier: 1,
    metaDescription:
      "Pest control in Cecilia, KY — Summit Shield three-zone protection for this rural community west of Elizabethtown in the Central Hardin school district.",
    intro: [
      "Cecilia sits about six miles west of Elizabethtown, a small rural community that grew up around the railroad — it was once known as Cecilian Junction, where the main line met the branch toward Hodgenville. Today it's a quiet, spread-out community in the Central Hardin school district, with homes on generous lots surrounded by farmland and woods.",
      "That rural layout shapes the pest picture. Homes set among fields and tree lines take on the pests the surrounding land sends their way: mice and rats seeking shelter as the weather turns, wasps and hornets building in eaves and barns, spiders and overwintering invaders coming in from the wood line, and ticks along the brushy edges. Older farmhouses and settled foundations add their own entry points, while newer builds on cleared ground draw displaced ants and field mice.",
      "We run Cecilia on our regular Hardin County route, so scheduling is easy and re-services are quick. The three-zone Summit Shield process treats the whole property — ground line to ridge line, house and outbuildings — and it's all backed by the Apex Promise.",
    ],
    neighborhoods: ["Central Cecilia", "acreage along Saint John Road", "farm properties toward Rineyville", "rural lots in the Central Hardin district"],
    landmarks: ["Central Hardin High School", "the historic Cecilian Junction rail site", "surrounding Hardin County farmland"],
    housingStock:
      "Rural homes and farmhouses on larger lots, with a scattering of newer builds on cleared ground.",
    topPests: ["Rodents", "Wasps & hornets", "Spiders", "Ants", "Ticks & fleas", "Occasional invaders"],
    seasonalNote:
      "Cooling weather sends field mice toward warm structures; spring and summer bring wasps, ticks, and spiders in from the surrounding fields and woods.",
    localServiceNote:
      "Cecilia is on our regular route — we treat the house and outbuildings alike, with free re-services within 48 hours.",
  },
  {
    slug: "glendale",
    city: "Glendale",
    badge: "Historic district & BlueOval growth",
    tier: 1,
    metaDescription:
      "Pest control in Glendale, KY — Summit Shield protection for the historic district and the fast-growing homes around the BlueOval SK battery park.",
    intro: [
      "Glendale is a study in contrasts. Its walkable historic district — a railroad-era village on the National Register, famous for antique shops and its SpringFest and Crossing festivals — sits just minutes from the BlueOval SK battery park, one of the largest developments in Kentucky history. That combination of old and brand-new defines pest control here.",
      "The historic homes and storefronts come with the pest realities of century-old buildings: settled foundations, wood that draws carpenter ants and termites, and plenty of gaps for rodents and overwintering invaders. Meanwhile the BlueOval boom is driving a wave of new housing on freshly cleared ground all around Glendale — and new construction reliably pushes ants, spiders, and field mice toward the nearest structure while the soil settles.",
      "With thousands of new residents expected in the area, Glendale's pest pressure is only climbing. Our three-zone Summit Shield system is built for both ends of that spectrum — the historic home that needs careful, thorough treatment and the new build that needs a barrier from day one — all backed by the Apex Promise.",
    ],
    neighborhoods: ["Glendale Historic District", "new subdivisions near the BlueOval SK battery park", "acreage along East Main Street", "rural lots off KY-222"],
    landmarks: ["Glendale Historic District", "BlueOval SK Battery Park", "the antique shops on Main Street", "the SpringFest & Crossing festival grounds"],
    housingStock:
      "Historic railroad-era homes and storefronts alongside a wave of new construction driven by the BlueOval SK battery park.",
    topPests: ["Termites", "Ants", "Rodents", "Spiders", "General household pests", "Occasional invaders"],
    seasonalNote:
      "Humid summers press termites hard against older wood structures; new construction on cleared ground draws displaced ants and mice year-round.",
    localServiceNote:
      "We service Glendale's historic homes and new builds alike, and we can protect a new-construction home with a barrier from move-in day.",
  },
  {
    slug: "sonora",
    city: "Sonora",
    badge: "Southern Hardin County",
    tier: 1,
    metaDescription:
      "Pest control in Sonora, KY — Summit Shield three-zone protection for this small railroad town south of Elizabethtown, tuned to rural pest pressure.",
    intro: [
      "Sonora is a small town about ten miles south of Elizabethtown that grew up along the Louisville & Nashville Railroad in the mid-1800s. It's stayed small and rural, with homes on comfortable lots surrounded by farmland, woods, and the quiet that draws people to this part of southern Hardin County.",
      "That country setting means pests arrive from the land around the home. Field mice and rats move toward warm structures as crops come off and temperatures drop; wasps and hornets nest in eaves, porches, and outbuildings; spiders, including the brown recluse, settle into basements, garages, and sheds; and ticks wait along brushy edges through the warm months. Older homes and farmhouses add settled foundations and the entry gaps that come with age.",
      "Even though Sonora is on the southern edge of the county, it's part of our regular Hardin County route, so scheduling and re-services stay quick. The three-zone Summit Shield process treats the whole property — house and outbuildings, ground line to ridge line — and it's backed by the Apex Promise.",
    ],
    neighborhoods: ["Central Sonora", "farm properties along the old rail corridor", "acreage off KY-84", "rural lots toward Buffalo"],
    landmarks: ["the historic L&N rail line through town", "downtown Sonora", "surrounding southern Hardin County farmland"],
    housingStock:
      "Small-town and rural homes plus farmhouses on larger lots, many with outbuildings.",
    topPests: ["Rodents", "Wasps & hornets", "Brown recluse spiders", "Ticks & fleas", "Ants", "Occasional invaders"],
    seasonalNote:
      "Harvest and cold weather drive field mice indoors; summer brings strong wasp, tick, and spider activity from the surrounding countryside.",
    localServiceNote:
      "Sonora is on our regular southern route — we treat the house and outbuildings, with free re-services within 48 hours.",
  },
  {
    slug: "white-mills",
    city: "White Mills",
    badge: "Nolin River community",
    tier: 1,
    metaDescription:
      "Pest control in White Mills, KY — Summit Shield protection for this historic Nolin River community, where riverside humidity drives heavy mosquito and moisture pests.",
    intro: [
      "White Mills is a historic milling community on the Nolin River in southwestern Hardin County, the kind of quiet, wooded, riverside place where homes sit on real acreage and the water is never far away. That setting is beautiful — and it's a magnet for moisture-loving pests.",
      "Life beside the Nolin River means serious mosquito pressure through the warm months, with the shaded, humid ground around the water breeding them faster than a quick lawn spray can keep up. The same moisture draws termites toward wood and foundations, and the surrounding woods and fields send in the usual rural crowd: field mice as the weather cools, wasps and hornets in eaves and outbuildings, spiders in basements and sheds, and ticks along brushy edges. Older river-community homes add settled foundations and plenty of entry points.",
      "We service White Mills on our regular route and tune the program to the river setting — targeting where mosquitoes actually breed and rest, watching moisture-driven termite pressure, and sealing the home top to bottom. It all runs on the three-zone Summit Shield system, backed by the Apex Promise.",
    ],
    neighborhoods: ["the White Mills village area", "riverfront and acreage properties along the Nolin River", "rural lots off KY-84", "wooded properties toward Millerstown"],
    landmarks: ["the Nolin River", "the historic White Mills mill site", "the Dr. Clyde Carroll House (National Register)", "surrounding riverside farmland"],
    housingStock:
      "Historic river-community homes and rural properties on acreage, many close to the water.",
    topPests: ["Mosquitoes", "Termites", "Rodents", "Wasps & hornets", "Spiders", "Ticks & fleas"],
    seasonalNote:
      "The Nolin River drives intense mosquito breeding all summer and keeps moisture-loving termites active; cooler weather pushes field mice toward warm homes.",
    localServiceNote:
      "We target riverside mosquito breeding sites directly and watch for moisture-driven termite pressure — free re-services within 48 hours.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const tier1Locations = locations.filter((l) => l.tier === 1);
