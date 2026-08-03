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
  county: string; // county slug (see counties.ts)
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Elizabethtown, KY — five-point Summit Shield protection for Etown homes, from historic downtown to the new east-side subdivisions.",
    intro: [
      "Elizabethtown is home base for Apex. As the Hardin County seat, Etown spans everything from century-old homes around the historic Public Square to the fast-growing new subdivisions rising on the east and south sides of town — and each puts a different kind of pest pressure on a home.",
      "The older neighborhoods near downtown deal with the classics: overwintering invaders slipping through settled foundations, carpenter ants in mature shade trees, and the occasional brown recluse in a basement or garage. The newer construction off Lincoln Parkway and out toward the bypass sits on freshly disturbed ground, which pushes ants, spiders, and field mice straight toward the closest warm structure — usually the one that just went up.",
      "With the BlueOval SK battery park driving a wave of new homes and residents into the county, Etown is growing fast, and pest pressure grows with it. Our five-point Summit Shield process is built for exactly that mix of old and new housing — we treat the whole home, property line to peak line, and back it with the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Radcliff, KY — five-point Summit Shield protection for one of Hardin County's largest cities, from established subdivisions to rental and quick-turnover homes.",
    intro: [
      "Radcliff is one of the largest cities in Hardin County, with more than 22,000 residents and a busy mix of established neighborhoods, newer subdivisions, and a large share of rental properties. Homes here change hands often, and pest problems can hide between tenants and surface right as a new family is moving in.",
      "The housing runs heavily to ranch homes, older subdivisions, and rentals, alongside quieter established streets out toward Radcliff East. Rentals and quick turnovers are exactly where rodents and cockroaches get a foothold, so our Peak Line work — sealing utility penetrations, garage gaps, and door seals — matters more here than almost anywhere in the county.",
      "Whether you own on a quiet street or you're renting, the Apex Promise travels with you: if pests return between scheduled visits, we come back and re-treat at no charge. It all runs on the five-point Summit Shield system, tuned to the local pest calendar.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Vine Grove, KY — Summit Shield five-point protection for this small town, from the historic downtown to the newer subdivisions along Otter Creek.",
    intro: [
      "Vine Grove is a tight-knit small town with a real downtown, a strong sense of community, and Otter Creek running through the heart of it at Optimist Park. That creek and the wooded, low-lying ground around it are also a mosquito engine every summer.",
      "Homes here split between older places near the downtown grid — settled foundations, mature trees, and the pest quirks that come with age — and newer subdivisions on the edges of town built on recently cleared land. The older homes see more overwintering invaders and the occasional spider or rodent; the newer ones get the ants and field mice displaced by construction.",
      "We tune service to the local calendar: hard on mosquitoes through the warm months, and sealed up tight against invaders before winter. It all runs on the five-point Summit Shield system, backed by the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Rineyville, KY — Summit Shield protection for rural homes and farm properties northwest of Elizabethtown, where field pests press hard on the structure.",
    intro: [
      "Rineyville is a rural, close-knit community about seven miles northwest of Elizabethtown, with deep agricultural roots and a lot of homes on larger lots, farmland, and wooded acreage. That country setting is part of the appeal — and it's also why pest pressure here looks different than it does in town.",
      "When your home sits next to fields, tree lines, and outbuildings, pests come at you from the surrounding land: field mice and rats moving in as crops are cut and weather cools, wasps and hornets nesting in eaves and barns, spiders and occasional invaders working in from the woods, and ticks waiting along brushy edges. Rural properties give pests more launch points, so the Peak Line — the eaves, gaps, and penetrations most companies skip — really earn their keep out here.",
      "Rineyville is growing as families look for space within an easy drive of Elizabethtown, and we service the area on our regular route. The five-point Summit Shield system covers the whole home and the routes pests actually use, backed by the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Cecilia, KY — Summit Shield five-point protection for this rural community west of Elizabethtown in the Central Hardin school district.",
    intro: [
      "Cecilia sits about six miles west of Elizabethtown, a small rural community that grew up around the railroad — it was once known as Cecilian Junction, where the main line met the branch toward Hodgenville. Today it's a quiet, spread-out community in the Central Hardin school district, with homes on generous lots surrounded by farmland and woods.",
      "That rural layout shapes the pest picture. Homes set among fields and tree lines take on the pests the surrounding land sends their way: mice and rats seeking shelter as the weather turns, wasps and hornets building in eaves and barns, spiders and overwintering invaders coming in from the wood line, and ticks along the brushy edges. Older farmhouses and settled foundations add their own entry points, while newer builds on cleared ground draw displaced ants and field mice.",
      "We run Cecilia on our regular Hardin County route, so scheduling is easy and re-services are quick. The five-point Summit Shield process treats the whole property — property line to peak line, house and outbuildings — and it's all backed by the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Glendale, KY — Summit Shield protection for the historic district and the fast-growing homes around the BlueOval SK battery park.",
    intro: [
      "Glendale is a study in contrasts. Its walkable historic district — a railroad-era village on the National Register, famous for antique shops and its SpringFest and Crossing festivals — sits just minutes from the BlueOval SK battery park, one of the largest developments in Kentucky history. That combination of old and brand-new defines pest control here.",
      "The historic homes and storefronts come with the pest realities of century-old buildings: settled foundations, wood that draws carpenter ants and termites, and plenty of gaps for rodents and overwintering invaders. Meanwhile the BlueOval boom is driving a wave of new housing on freshly cleared ground all around Glendale — and new construction reliably pushes ants, spiders, and field mice toward the nearest structure while the soil settles.",
      "With thousands of new residents expected in the area, Glendale's pest pressure is only climbing. Our five-point Summit Shield system is built for both ends of that spectrum — the historic home that needs careful, thorough treatment and the new build that needs a barrier from day one — all backed by the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in Sonora, KY — Summit Shield five-point protection for this small railroad town south of Elizabethtown, tuned to rural pest pressure.",
    intro: [
      "Sonora is a small town about ten miles south of Elizabethtown that grew up along the Louisville & Nashville Railroad in the mid-1800s. It's stayed small and rural, with homes on comfortable lots surrounded by farmland, woods, and the quiet that draws people to this part of southern Hardin County.",
      "That country setting means pests arrive from the land around the home. Field mice and rats move toward warm structures as crops come off and temperatures drop; wasps and hornets nest in eaves, porches, and outbuildings; spiders, including the brown recluse, settle into basements, garages, and sheds; and ticks wait along brushy edges through the warm months. Older homes and farmhouses add settled foundations and the entry gaps that come with age.",
      "Even though Sonora is on the southern edge of the county, it's part of our regular Hardin County route, so scheduling and re-services stay quick. The five-point Summit Shield process treats the whole property — house and outbuildings, property line to peak line — and it's backed by the Apex Promise.",
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
    county: "hardin-county",
    metaDescription:
      "Pest control in White Mills, KY — Summit Shield protection for this historic Nolin River community, where riverside humidity drives heavy mosquito and moisture pests.",
    intro: [
      "White Mills is a historic milling community on the Nolin River in southwestern Hardin County, the kind of quiet, wooded, riverside place where homes sit on real acreage and the water is never far away. That setting is beautiful — and it's a magnet for moisture-loving pests.",
      "Life beside the Nolin River means serious mosquito pressure through the warm months, with the shaded, humid ground around the water breeding them faster than a quick lawn spray can keep up. The same moisture draws termites toward wood and foundations, and the surrounding woods and fields send in the usual rural crowd: field mice as the weather cools, wasps and hornets in eaves and outbuildings, spiders in basements and sheds, and ticks along brushy edges. Older river-community homes add settled foundations and plenty of entry points.",
      "We service White Mills on our regular route and tune the program to the river setting — targeting where mosquitoes actually breed and rest, watching moisture-driven termite pressure, and sealing the home top to bottom. It all runs on the five-point Summit Shield system, backed by the Apex Promise.",
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

  // ---------------- JEFFERSON COUNTY ----------------
  {
    slug: "louisville",
    county: "jefferson-county",
    city: "Louisville",
    badge: "Jefferson County seat",
    tier: 1,
    metaDescription:
      "Pest control in Louisville, KY — five-point Summit Shield protection for homes across the metro, from the Highlands and Old Louisville to the East End.",
    intro: [
      "Louisville is the largest city we serve, and its housing runs the full range — the shotgun homes and Victorians of Old Louisville and the Highlands, mid-century neighborhoods like Fern Creek and Okolona, and newer construction out through the East End. Each era of home has its own weak points, and pests exploit all of them.",
      "The Ohio River valley keeps the city humid, driving strong mosquito and termite pressure spring through fall, while the older housing stock means carpenter ants, spiders, and overwintering invaders are steady concerns. Our five-point Summit Shield process treats the whole structure — property line to peak line — and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["The Highlands", "Old Louisville", "Fern Creek", "Okolona", "the East End"],
    landmarks: ["Cherokee Park", "the Ohio River waterfront", "Churchill Downs", "Bardstown Road"],
    housingStock:
      "Everything from historic shotgun homes and Victorians to mid-century ranches and new East End construction.",
    topPests: ["General household pests", "Termites", "Mosquitoes", "Carpenter ants", "Spiders", "Rodents"],
    seasonalNote:
      "Ohio River humidity drives mosquitoes and termites spring through fall; cool weather sends mice and overwintering invaders into older homes.",
    localServiceNote:
      "Louisville is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "st-matthews",
    county: "jefferson-county",
    city: "St. Matthews",
    badge: "Jefferson County",
    tier: 1,
    metaDescription:
      "Pest control in St. Matthews, KY — Summit Shield five-point protection for one of Louisville's most established East End suburbs.",
    intro: [
      "St. Matthews is one of Louisville's most established East End suburbs — leafy and walkable, with mature trees and a mix of solid mid-century homes and higher-end renovations. Those mature landscapes and settled foundations are exactly what carpenter ants, spiders, and overwintering pests take advantage of.",
      "The dense tree canopy and older housing keep spider, ant, and occasional-invader pressure steady, and humid summers bring mosquitoes off every shaded yard. Summit Shield treats all five points and holds the barrier, backed by the Apex Promise.",
    ],
    neighborhoods: ["Graymoor-Devondale", "Woodlawn Park", "Beechwood Village", "Norbourne Estates"],
    landmarks: ["Mall St. Matthews", "Brown Park", "the Shelbyville Road district"],
    housingStock: "Established mid-century homes and higher-end renovations under a mature tree canopy.",
    topPests: ["Carpenter ants", "Spiders", "General household pests", "Mosquitoes", "Occasional invaders", "Rodents"],
    seasonalNote:
      "Mature tree cover keeps spiders and carpenter ants active; humid summers bring mosquitoes, and fall drives invaders toward warm homes.",
    localServiceNote:
      "St. Matthews is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "jeffersontown",
    county: "jefferson-county",
    city: "Jeffersontown",
    badge: "Jefferson County",
    tier: 1,
    metaDescription:
      "Pest control in Jeffersontown (J-town), KY — Summit Shield five-point protection for this large East End suburb and its historic Gaslight District.",
    intro: [
      "Jeffersontown — J-town — is one of Louisville's largest suburbs, anchored by its historic Gaslight District and ringed by decades of subdivisions and the Bluegrass Commerce Park. That mix of older homes near the center and newer neighborhoods on the edges means a full spread of pest pressure.",
      "Wooded lots and creek corridors keep mosquito, tick, and spider pressure high in summer, while cooler weather sends mice toward warm structures. Our five-point Summit Shield process treats the whole home and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["the Gaslight District", "Tucker Station", "Hurstbourne-adjacent subdivisions", "Charlie Vettiner area"],
    landmarks: ["the Gaslight District", "Charlie Vettiner Park", "Bluegrass Commerce Park"],
    housingStock: "Older homes near the Gaslight District plus decades of surrounding subdivisions.",
    topPests: ["General household pests", "Mosquitoes", "Ticks & fleas", "Spiders", "Ants", "Rodents"],
    seasonalNote:
      "Wooded lots and creek corridors drive summer mosquito, tick, and spider pressure; cool weather pushes mice indoors.",
    localServiceNote:
      "Jeffersontown is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "middletown",
    county: "jefferson-county",
    city: "Middletown",
    badge: "Jefferson County",
    tier: 1,
    metaDescription:
      "Pest control in Middletown, KY — Summit Shield five-point protection for this historic east-side town and its fast-growing subdivisions.",
    intro: [
      "Middletown is a historic town on Louisville's east side that's become a fast-growing suburb — its old Main Street core surrounded by newer subdivisions pushing toward Eastwood. New construction on cleared ground draws ants and field mice, while the older core carries the settled-foundation issues that come with age.",
      "Humid summers bring strong mosquito and termite pressure, and cooler weather sends mice and overwintering invaders indoors. Summit Shield treats the whole structure, property line to peak line, and holds it — backed by the Apex Promise.",
    ],
    neighborhoods: ["historic Main Street Middletown", "the Lake Forest area", "the Douglass Hills area", "Eastwood-adjacent subdivisions"],
    landmarks: ["historic Middletown Main Street", "Long Run Park", "the Eastwood area"],
    housingStock: "A historic Main Street core surrounded by newer east-side subdivisions.",
    topPests: ["General household pests", "Ants", "Termites", "Mosquitoes", "Spiders", "Rodents"],
    seasonalNote:
      "New construction draws ants and mice year-round; humid summers press mosquitoes and termites, and fall brings invaders indoors.",
    localServiceNote:
      "Middletown is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "lyndon",
    county: "jefferson-county",
    city: "Lyndon",
    badge: "Jefferson County",
    tier: 1,
    metaDescription:
      "Pest control in Lyndon, KY — Summit Shield five-point protection for this family-friendly east-side city near Tom Sawyer Park.",
    intro: [
      "Lyndon is a family-friendly city on Louisville's east side known for its schools and for E.P. 'Tom' Sawyer State Park. Its mix of mid-century homes and newer development along Lyndon Lane and Whipps Mill sees the usual suburban pest pressure, sharpened by the park's wooded acreage nearby.",
      "Shaded, wooded ground keeps mosquitoes, spiders, and ticks active through summer, and cooler weather pushes mice toward warm homes. Our five-point Summit Shield process treats the whole home and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["areas around Lyndon Lane", "Whipps Mill", "Hurstbourne-adjacent streets", "Robsion Park area"],
    landmarks: ["E.P. Tom Sawyer State Park", "Robsion Park", "the Lyndon Lane corridor"],
    housingStock: "Mid-century homes plus newer development along Lyndon Lane and Whipps Mill.",
    topPests: ["General household pests", "Mosquitoes", "Spiders", "Ticks & fleas", "Ants", "Rodents"],
    seasonalNote:
      "Wooded park land nearby keeps mosquitoes, ticks, and spiders active in summer; fall drives mice toward warm homes.",
    localServiceNote:
      "Lyndon is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "prospect",
    county: "jefferson-county",
    city: "Prospect",
    badge: "Jefferson County · Ohio River",
    tier: 1,
    metaDescription:
      "Pest control in Prospect, KY — Summit Shield five-point protection for this riverside community, including the Norton Commons area.",
    intro: [
      "Prospect is an upscale community northeast of Louisville along the Ohio River, straddling the Jefferson–Oldham line, with large homes on wooded and riverfront lots and the planned neighborhood of Norton Commons nearby. Wooded, riverside property is prime habitat for spiders, ticks, mosquitoes, and the occasional invader.",
      "The river and dense tree cover drive heavy mosquito pressure through summer, and larger lots mean more entry points from the surrounding land. Summit Shield treats all five points and holds the barrier, backed by the Apex Promise.",
    ],
    neighborhoods: ["Hunting Creek", "Norton Commons", "riverfront estates", "Sutherland"],
    landmarks: ["the Ohio River", "Norton Commons", "Hunting Creek"],
    housingStock: "Large homes on wooded and riverfront lots, plus the planned Norton Commons neighborhood.",
    topPests: ["Mosquitoes", "Spiders", "Ticks & fleas", "General household pests", "Ants", "Rodents"],
    seasonalNote:
      "The Ohio River and heavy tree cover drive intense summer mosquito pressure; wooded lots keep spiders and ticks active.",
    localServiceNote:
      "Prospect is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "anchorage",
    county: "jefferson-county",
    city: "Anchorage",
    badge: "Jefferson County",
    tier: 1,
    metaDescription:
      "Pest control in Anchorage, KY — Summit Shield five-point protection for this historic, wooded east-side city.",
    intro: [
      "Anchorage is a small, historic, affluent city on Louisville's east side, known for its large wooded lots, mature trees, and the Anchorage Trail. Those big, tree-heavy properties bring steady spider, carpenter ant, and occasional-invader pressure, plus mosquitoes off every shaded yard.",
      "The dense canopy and settled older homes keep pest pressure year-round, and cooler weather sends mice and overwintering invaders indoors. Our five-point Summit Shield process treats the whole home and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["historic Anchorage", "Owl Creek", "areas along the Anchorage Trail", "Bellewood-adjacent streets"],
    landmarks: ["the Anchorage Trail", "Owl Creek", "historic Anchorage"],
    housingStock: "Historic homes on large, wooded, tree-heavy lots.",
    topPests: ["Spiders", "Carpenter ants", "Occasional invaders", "Mosquitoes", "General household pests", "Rodents"],
    seasonalNote:
      "Heavy tree cover keeps spiders and carpenter ants active and mosquitoes strong in summer; fall drives invaders toward warm homes.",
    localServiceNote:
      "Anchorage is on our regular route — easy scheduling and free re-services within 48 hours.",
  },

  // ---------------- OLDHAM COUNTY ----------------
  {
    slug: "la-grange",
    county: "oldham-county",
    city: "La Grange",
    badge: "Oldham County seat",
    tier: 1,
    metaDescription:
      "Pest control in La Grange, KY — Summit Shield five-point protection for the Oldham County seat, from historic downtown to the new subdivisions.",
    intro: [
      "La Grange is the Oldham County seat, famous for the train that still runs right down the middle of Main Street. Its historic downtown is ringed by fast-growing subdivisions as families move out from Louisville, mixing century-old homes with new construction on freshly cleared ground.",
      "Older homes bring settled-foundation entry points while new builds draw displaced ants and field mice, and humid summers press mosquitoes and termites countywide. Summit Shield treats all five points and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["historic downtown La Grange", "new subdivisions off KY-53", "acreage toward Buckner", "areas near I-71"],
    landmarks: ["the train down Main Street", "historic downtown La Grange", "the Oldham County courthouse"],
    housingStock: "Century-old downtown homes alongside fast-growing new subdivisions.",
    topPests: ["General household pests", "Ants", "Termites", "Mosquitoes", "Spiders", "Rodents"],
    seasonalNote:
      "New construction draws ants and mice year-round; humid summers press mosquitoes and termites, and fall brings invaders indoors.",
    localServiceNote:
      "La Grange is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "crestwood",
    county: "oldham-county",
    city: "Crestwood",
    badge: "Oldham County",
    tier: 1,
    metaDescription:
      "Pest control in Crestwood, KY — Summit Shield five-point protection for one of Oldham County's fastest-growing commuter communities.",
    intro: [
      "Crestwood is one of Oldham County's fastest-growing communities — a former farming area now filled with new subdivisions thanks to its easy commute to Louisville. New construction on cleared ground reliably pushes ants, spiders, and field mice toward the nearest home while the soil settles.",
      "The surrounding wooded and rural stretches keep tick, spider, and mosquito pressure up in summer, and cooler weather sends mice indoors. Our five-point Summit Shield process treats the whole home and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["Crestwood Station area", "new subdivisions off Old Floydsburg Road", "acreage toward Pewee Valley", "South Oldham school corridor"],
    landmarks: ["Crestwood Station", "the South Oldham schools", "Old Floydsburg Road"],
    housingStock: "Mostly new subdivisions on former farmland, with rural acreage between.",
    topPests: ["Ants", "Spiders", "General household pests", "Ticks & fleas", "Mosquitoes", "Rodents"],
    seasonalNote:
      "New construction draws ants and mice; surrounding woods and fields keep ticks, spiders, and mosquitoes active in summer.",
    localServiceNote:
      "Crestwood is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "pewee-valley",
    county: "oldham-county",
    city: "Pewee Valley",
    badge: "Oldham County",
    tier: 1,
    metaDescription:
      "Pest control in Pewee Valley, KY — Summit Shield five-point protection for this historic small town of 1800s homes.",
    intro: [
      "Pewee Valley is a small historic town of 1800s homes that grew up as a retreat for well-to-do Louisville families. Its settled foundations, mature trees, and wooded lots bring the pest quirks that come with age — carpenter ants, spiders, and overwintering invaders working in from the surrounding woods.",
      "The dense tree cover keeps spiders and mosquitoes active through summer, and cooler weather pushes mice and invaders toward warm homes. Summit Shield treats all five points and holds the barrier, backed by the Apex Promise.",
    ],
    neighborhoods: ["Pewee Valley historic district", "Central Avenue", "wooded lots off Ash Avenue", "areas toward La Grange"],
    landmarks: ["the Pewee Valley historic district", "Central Avenue", "the Little Colonel Playhouse"],
    housingStock: "Historic 1800s homes on mature, wooded lots.",
    topPests: ["Carpenter ants", "Spiders", "Occasional invaders", "Mosquitoes", "General household pests", "Rodents"],
    seasonalNote:
      "Mature trees keep spiders and carpenter ants active and mosquitoes strong in summer; fall drives invaders toward warm homes.",
    localServiceNote:
      "Pewee Valley is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "goshen",
    county: "oldham-county",
    city: "Goshen",
    badge: "Oldham County · Ohio River",
    tier: 1,
    metaDescription:
      "Pest control in Goshen, KY — Summit Shield five-point protection for this upscale riverside community and horse-country acreage.",
    intro: [
      "Goshen sits in northwestern Oldham County near the Ohio River — a quiet, upscale residential area of larger homes and horse-country acreage, home to Hermitage Farm. Wooded and riverside property keeps spider, tick, and mosquito pressure high, and larger lots mean more entry points from the surrounding land.",
      "The river and heavy tree cover drive strong summer mosquito pressure, while cooler weather sends field mice toward warm structures. Our five-point Summit Shield process treats the whole property and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["areas along US-42", "riverfront and acreage properties", "Harmony Landing", "wooded lots toward Prospect"],
    landmarks: ["Hermitage Farm", "the Ohio River", "the US-42 corridor"],
    housingStock: "Larger homes and horse-country acreage, many on wooded or riverside lots.",
    topPests: ["Mosquitoes", "Ticks & fleas", "Spiders", "General household pests", "Rodents", "Wasps & hornets"],
    seasonalNote:
      "The Ohio River and heavy tree cover drive intense summer mosquito pressure; wooded acreage keeps ticks and spiders active.",
    localServiceNote:
      "Goshen is on our regular route — we treat the house and outbuildings alike, with free re-services within 48 hours.",
  },

  // ---------------- BULLITT COUNTY ----------------
  {
    slug: "shepherdsville",
    county: "bullitt-county",
    city: "Shepherdsville",
    badge: "Bullitt County seat",
    tier: 1,
    metaDescription:
      "Pest control in Shepherdsville, KY — Summit Shield five-point protection for the Bullitt County seat along the Salt River and I-65.",
    intro: [
      "Shepherdsville is the Bullitt County seat, straddling I-65 and the Salt River just south of Louisville. It's a fast-growing mix of established neighborhoods and new construction, and the river and creek bottoms running through town drive strong mosquito pressure every summer.",
      "New builds on cleared ground draw ants and field mice, while the riverside humidity keeps mosquitoes and moisture-loving termites active. Summit Shield treats all five points and holds the barrier, backed by the Apex Promise.",
    ],
    neighborhoods: ["established neighborhoods off KY-44", "new subdivisions near I-65", "riverside areas along the Salt River", "Cedar Grove area"],
    landmarks: ["the Salt River", "Paroquet Springs Conference Centre", "Bernheim Forest (nearby)"],
    housingStock: "Established neighborhoods alongside fast-growing new construction near I-65.",
    topPests: ["Mosquitoes", "General household pests", "Ants", "Termites", "Spiders", "Rodents"],
    seasonalNote:
      "The Salt River and creek bottoms drive heavy summer mosquito pressure and keep termites active; new construction draws ants and mice.",
    localServiceNote:
      "Shepherdsville is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "mount-washington",
    county: "bullitt-county",
    city: "Mount Washington",
    badge: "Bullitt County",
    tier: 1,
    metaDescription:
      "Pest control in Mount Washington, KY — Summit Shield five-point protection for one of Kentucky's fastest-growing cities.",
    intro: [
      "Mount Washington is one of the fastest-growing cities in Kentucky — it nearly doubled in the last decade, with thousands of new homes under construction along KY-44. All that new construction on cleared ground pushes ants, spiders, and field mice straight toward the nearest structure while the soil settles.",
      "The surrounding wooded ridges keep tick, spider, and mosquito pressure high in summer, and cooler weather sends mice indoors. Our five-point Summit Shield process treats the whole home and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["new subdivisions along KY-44", "downtown Mount Washington", "acreage toward Cox's Creek", "areas near the bypass"],
    landmarks: ["downtown Mount Washington", "the KY-44 corridor", "Mount Washington City Park"],
    housingStock: "Overwhelmingly new construction, with an older downtown core.",
    topPests: ["Ants", "Spiders", "General household pests", "Ticks & fleas", "Mosquitoes", "Rodents"],
    seasonalNote:
      "Heavy new construction draws ants and mice year-round; wooded ridges keep ticks, spiders, and mosquitoes active in summer.",
    localServiceNote:
      "Mount Washington is on our regular route — we can protect a new-construction home from move-in day.",
  },
  {
    slug: "hillview",
    county: "bullitt-county",
    city: "Hillview",
    badge: "Bullitt County",
    tier: 1,
    metaDescription:
      "Pest control in Hillview, KY — Summit Shield five-point protection for this residential city at the Jefferson–Bullitt line.",
    intro: [
      "Hillview is a residential city at the northern edge of Bullitt County, right against the Jefferson County line, with a mix of established neighborhoods and wooded lots. Its position between Louisville and the Bullitt countryside brings both suburban and rural pest pressure.",
      "Wooded lots and creek corridors keep spiders, ticks, and mosquitoes active in summer, while cooler weather sends mice toward warm homes. Summit Shield treats all five points and holds the barrier, backed by the Apex Promise.",
    ],
    neighborhoods: ["neighborhoods off Blue Lick Road", "the Maryville area", "wooded lots near Cedar Creek", "areas along Old Preston Highway"],
    landmarks: ["the Blue Lick Road corridor", "Cedar Creek", "the Maryville area"],
    housingStock: "Established residential neighborhoods with wooded lots along the county line.",
    topPests: ["General household pests", "Spiders", "Mosquitoes", "Ticks & fleas", "Ants", "Rodents"],
    seasonalNote:
      "Wooded lots and creek corridors drive summer spider, tick, and mosquito pressure; fall pushes mice toward warm homes.",
    localServiceNote:
      "Hillview is on our regular route — easy scheduling and free re-services within 48 hours.",
  },
  {
    slug: "lebanon-junction",
    county: "bullitt-county",
    city: "Lebanon Junction",
    badge: "Bullitt County",
    tier: 1,
    metaDescription:
      "Pest control in Lebanon Junction, KY — Summit Shield five-point protection for this small railroad town near Bernheim Forest.",
    intro: [
      "Lebanon Junction is a small railroad town in southern Bullitt County, near the Rolling Fork river and the entrance to Bernheim Forest. Its rural, wooded, riverside setting brings strong mosquito, tick, and spider pressure, plus field mice as the weather cools.",
      "The river bottoms and surrounding forest keep moisture-loving pests active well into fall, and older homes add settled-foundation entry points. Our five-point Summit Shield process treats the whole property and holds it, backed by the Apex Promise.",
    ],
    neighborhoods: ["downtown Lebanon Junction", "riverside areas along the Rolling Fork", "wooded lots toward Bernheim", "rural acreage off KY-61"],
    landmarks: ["Bernheim Arboretum & Research Forest", "the Rolling Fork river", "the historic rail depot"],
    housingStock: "Small-town and rural homes near the river and forest, many on wooded lots.",
    topPests: ["Mosquitoes", "Ticks & fleas", "Spiders", "Rodents", "General household pests", "Wasps & hornets"],
    seasonalNote:
      "The Rolling Fork and Bernheim Forest keep mosquitoes, ticks, and spiders active into fall; cool weather drives field mice indoors.",
    localServiceNote:
      "Lebanon Junction is on our regular route — we treat the house and outbuildings alike, with free re-services within 48 hours.",
  },
  {
    slug: "shelbyville",
    city: "Shelbyville",
    badge: "Shelby County seat",
    tier: 1,
    county: "shelby-county",
    metaDescription:
      "Pest control in Shelbyville, KY — five-point Summit Shield protection for Shelby County's seat, from historic downtown to the new subdivisions along the I-64 corridor.",
    intro: [
      "Shelbyville is the seat of Shelby County and its largest city, sitting right on I-64 between Louisville and Frankfort. It's a classic Kentucky county-seat town — a historic courthouse square and century-old homes downtown — wrapped in fast-growing new subdivisions as commuters move east out of the metro for more room.",
      "That old-and-new mix is exactly where pest pressure splits. The older homes near downtown deal with the classics: overwintering invaders slipping through settled foundations, carpenter ants in mature shade trees, and the occasional brown recluse in a basement or garage. The new construction along the US-60 and I-64 corridors sits on freshly disturbed farmland, which pushes ants, spiders, and field mice straight toward the closest warm structure. Add the county's horse farms, creek bottoms, and wooded acreage and summer brings heavy mosquito and tick pressure on top of it.",
      "Our five-point Summit Shield process is built for that range of housing — we treat the whole home, property line to peak line, and hold it with seasonal service tuned to the local calendar, backed by the Apex Promise.",
    ],
    neighborhoods: ["Historic downtown & the courthouse square", "New subdivisions along the US-60 corridor", "Clear Creek area", "Rural acreage toward Bagdad and Finchville"],
    landmarks: ["Shelby County Courthouse", "Jeptha Creed Distillery", "Shelbyville Horse Show grounds", "Clear Creek Park"],
    housingStock:
      "A wide mix — historic homes around the downtown square alongside a boom of new construction on the town's growing edges.",
    topPests: ["General household pests", "Ants", "Brown recluse spiders", "Termites", "Mosquitoes", "Rodents"],
    seasonalNote:
      "Humid summers drive heavy mosquito and termite pressure across the horse farms and creek bottoms; the first cold snaps push ladybugs, stink bugs, and mice indoors.",
    localServiceNote:
      "Shelbyville is on our regular route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "simpsonville",
    city: "Simpsonville",
    badge: "Western Shelby County",
    tier: 2,
    county: "shelby-county",
    metaDescription:
      "Pest control in Simpsonville, KY — five-point Summit Shield protection for western Shelby County, from established homes to new subdivisions near the Outlet Shoppes.",
    intro: [
      "Simpsonville sits in western Shelby County, about eight miles west of Shelbyville and just 23 miles east of Louisville — close enough to the metro that it's grown quickly as a commuter community. It's best known regionally for the Outlet Shoppes of the Bluegrass, and the retail and new-home growth around it has reshaped what was a quiet farm town.",
      "New subdivisions rising on former farmland push ants, spiders, and field mice toward the nearest home while the ground settles, and the surrounding creek bottoms and wooded stretches keep mosquito, tick, and spider pressure high in summer. Older homes and rural acreage bring the usual overwintering invaders and rodents when the weather turns. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    neighborhoods: ["New subdivisions near the Outlet Shoppes", "Established streets in old-town Simpsonville", "Buck Creek area", "Rural acreage along Old Veechdale Road"],
    landmarks: ["The Outlet Shoppes of the Bluegrass", "Simpsonville United Methodist Church", "Veterans Memorial", "I-64 corridor"],
    housingStock:
      "A fast-growing mix of new subdivisions and established small-town homes, with rural acreage on the edges.",
    topPests: ["General household pests", "Ants", "Spiders", "Mosquitoes", "Rodents", "Termites"],
    seasonalNote:
      "Creek bottoms and wooded stretches drive summer mosquito and tick pressure; cooler fall weather sends field mice and overwintering invaders looking for a way indoors.",
    localServiceNote:
      "Simpsonville is on our regular route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "brandenburg",
    city: "Brandenburg",
    badge: "Meade County seat",
    tier: 1,
    county: "meade-county",
    metaDescription:
      "Pest control in Brandenburg, KY — five-point Summit Shield protection for Meade County's Ohio River seat, from historic downtown to riverfront and rural homes.",
    intro: [
      "Brandenburg is the seat of Meade County, set right on the Ohio River southwest of Louisville. It's a historic river town — a walkable downtown and a riverfront overlooking the water — surrounded by the farmland and wooded acreage that define the county, with quick access to Fort Knox drawing military families to the area.",
      "Riverfront humidity is the story here: it drives heavy mosquito pressure through the warm months, and the wooded ridges and creek bottoms around town keep tick and spider activity high. Older homes near downtown deal with overwintering invaders and carpenter ants, while rural properties see field mice and the occasional brown recluse. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service tuned to the local calendar, backed by the Apex Promise.",
    ],
    neighborhoods: ["Historic downtown & the riverfront", "New subdivisions on the edges of town", "Rural acreage along KY-79 and KY-448", "Wooded lots overlooking the Ohio"],
    landmarks: ["Brandenburg riverfront & Riverfront Park", "Meade County Courthouse", "Buttermilk Falls", "Doe Valley"],
    housingStock:
      "A mix of historic riverfront homes, established in-town streets, and rural acreage across the county.",
    topPests: ["Mosquitoes", "Ticks", "General household pests", "Ants", "Brown recluse spiders", "Rodents"],
    seasonalNote:
      "Ohio River humidity drives heavy summer mosquito pressure; wooded ridges keep ticks and spiders active, and cool weather sends mice indoors.",
    localServiceNote:
      "Brandenburg is on our Meade County route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "muldraugh",
    city: "Muldraugh",
    badge: "Fort Knox gate town",
    tier: 2,
    county: "meade-county",
    metaDescription:
      "Pest control in Muldraugh, KY — five-point Summit Shield protection for the Fort Knox gate town, built for rentals, quick turnovers, and established homes.",
    intro: [
      "Muldraugh sits on the Meade–Hardin line at the northern gate of Fort Knox, and its housing reflects that — a high share of rentals and quick-turnover homes serving soldiers and their families, alongside established streets in the small in-town core. Homes here change hands often, and pest problems can hide between tenants and surface just as a new family is moving in.",
      "Frequent turnover and rentals are exactly where rodents and cockroaches get a foothold, so our Peak Line work — sealing utility penetrations, garage gaps, and door seals — matters more here than almost anywhere in the county. The surrounding wooded ridges above the Ohio bring summer mosquito, tick, and spider pressure on top of it. Whether you own or you're renting through a PCS, the Apex Promise travels with you, all on the five-point Summit Shield system.",
    ],
    neighborhoods: ["In-town Muldraugh core", "Rental and quick-turnover homes near the Fort Knox gate", "Established streets off US-31W", "Wooded lots along the ridgeline"],
    landmarks: ["Fort Knox north gate", "Otter Creek Outdoor Recreation Area", "US-31W corridor", "Muldraugh water tower"],
    housingStock:
      "A high share of rentals and quick-turnover homes serving Fort Knox, alongside established in-town streets.",
    topPests: ["Rodents", "Cockroaches", "General household pests", "Ants", "Spiders", "Mosquitoes"],
    seasonalNote:
      "Wooded ridges above the Ohio raise summer mosquito and tick pressure; frequent turnover and cool weather send mice and roaches hunting for a way indoors.",
    localServiceNote:
      "Muldraugh is on our Fort Knox route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "flaherty",
    city: "Flaherty",
    badge: "Rural Meade County",
    tier: 2,
    county: "meade-county",
    metaDescription:
      "Pest control in Flaherty, KY — five-point Summit Shield protection for the growing rural community near Fort Knox, from new builds to farm acreage.",
    intro: [
      "Flaherty is a growing rural community in the heart of Meade County, popular with Fort Knox families who want more room and a country setting within an easy drive of the gate. It's a mix of newer homes on former farmland, established country properties, and working farms spread across the rolling landscape.",
      "New construction on cleared ground pushes ants, spiders, and field mice toward the nearest structure while the soil settles, and the surrounding farm fields, creek bottoms, and wooded acreage keep mosquito, tick, and rodent pressure high — especially in summer and again as the fields are harvested in fall. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    neighborhoods: ["New subdivisions off KY-144 and KY-1600", "Established country homes around Flaherty", "Working farms and acreage", "Wooded rural lots"],
    landmarks: ["Flaherty Community Center", "KY-144 corridor", "Meade County farmland", "Rhodelia countryside"],
    housingStock:
      "A growing mix of new rural subdivisions, established country homes, and working farms.",
    topPests: ["General household pests", "Ants", "Field mice & rodents", "Spiders", "Mosquitoes", "Ticks"],
    seasonalNote:
      "Farm fields and wooded acreage drive summer mosquito and tick pressure; harvest and the first cold snaps send field mice indoors.",
    localServiceNote:
      "Flaherty is on our Meade County route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "bowling-green",
    city: "Bowling Green",
    badge: "Warren County seat",
    tier: 1,
    county: "warren-county",
    metaDescription:
      "Pest control in Bowling Green, KY — five-point Summit Shield protection for Kentucky's fifth-largest city, built for cave-country homes from historic districts to new subdivisions.",
    intro: [
      "Bowling Green is the seat of Warren County and Kentucky's fifth-largest city, a fast-growing hub built around Western Kentucky University, the Corvette plant, and a diversifying regional economy. Its housing runs the full range — historic districts near downtown and WKU, dense student rentals, and sprawling new subdivisions pushing out along the I-65 and Scottsville Road corridors.",
      "What sets Bowling Green apart is the ground it sits on: karst limestone riddled with caves, sinkholes, and underground streams — the same geology behind nearby Mammoth Cave, and the sinkhole that famously swallowed eight cars beneath the National Corvette Museum. That underground network gives ants, roaches, spiders, and rodents a maze of cracks, drains, and foundation gaps to travel through, and humid summers pile on heavy mosquito and termite pressure. Student rentals and quick turnovers are where roaches and rodents get a foothold.",
      "Our five-point Summit Shield process is built for exactly this — we treat the whole home, property line to peak line, sealing the entry points that cave-country homes are prone to, and back it with the Apex Promise.",
    ],
    neighborhoods: ["Historic downtown & the WKU area", "Student rentals near campus", "New subdivisions along Scottsville Road", "Established neighborhoods off Cave Mill Road"],
    landmarks: ["Western Kentucky University", "National Corvette Museum", "Lost River Cave", "Fountain Square Park"],
    housingStock:
      "The full range — historic districts, dense student rentals near WKU, and fast-growing new subdivisions on the city's edges.",
    topPests: ["General household pests", "Cockroaches", "Ants", "Rodents", "Spiders", "Termites", "Mosquitoes"],
    seasonalNote:
      "Karst geology gives pests year-round underground routes indoors; humid summers drive heavy mosquito and termite pressure, and cool weather pushes roaches and mice inside.",
    localServiceNote:
      "Bowling Green is on our South-Central Kentucky route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "smiths-grove",
    city: "Smiths Grove",
    badge: "Northern Warren County",
    tier: 2,
    county: "warren-county",
    metaDescription:
      "Pest control in Smiths Grove, KY — five-point Summit Shield protection for the historic small town north of Bowling Green, from antique-district homes to rural acreage.",
    intro: [
      "Smiths Grove is a historic small town in northern Warren County, just off I-65 between Bowling Green and Mammoth Cave country. Known for its antique district and walkable old downtown, it's surrounded by farmland and the same karst limestone landscape that defines the region.",
      "Older homes in the historic core deal with overwintering invaders slipping through settled foundations, carpenter ants in mature trees, and spiders in basements and outbuildings, while the surrounding farm fields and cave-country ground give ants, rodents, and roaches steady routes toward the nearest structure. Summer brings heavy mosquito and tick pressure off the creek bottoms and wooded acreage. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    neighborhoods: ["Historic downtown & antique district", "Established streets in old-town Smiths Grove", "New homes off the I-65 interchange", "Rural farm acreage"],
    landmarks: ["Smiths Grove antique district", "Historic downtown", "I-65 interchange", "Warren County farmland"],
    housingStock:
      "Historic small-town homes around the antique district, with newer homes and farm acreage on the edges.",
    topPests: ["General household pests", "Ants", "Spiders", "Rodents", "Mosquitoes", "Cockroaches"],
    seasonalNote:
      "Cave-country ground and farm fields keep ants and rodents active year-round; humid summers drive mosquito and tick pressure off the creek bottoms.",
    localServiceNote:
      "Smiths Grove is on our Warren County route — easy scheduling, and free re-services within 48 hours.",
  },
  {
    slug: "oakland",
    city: "Oakland",
    badge: "Eastern Warren County",
    tier: 2,
    county: "warren-county",
    metaDescription:
      "Pest control in Oakland, KY — five-point Summit Shield protection for the small town in eastern Warren County, from established homes to rural farm acreage.",
    intro: [
      "Oakland is a small incorporated town in eastern Warren County, set among the farmland and rolling countryside between Bowling Green and Smiths Grove. It's a quiet mix of established in-town homes, newer builds, and working farms — country living within a short drive of Bowling Green's jobs and amenities.",
      "Rural and farm properties see the pressure you'd expect: field mice and rodents moving in as the weather cools and the fields are harvested, ants and spiders year-round, and heavy mosquito and tick activity off the creek bottoms and wooded acreage in summer. The region's karst limestone gives pests underground routes toward foundations, too. Our five-point Summit Shield process treats the whole home — property line to peak line — and holds it with seasonal service, backed by the Apex Promise.",
    ],
    neighborhoods: ["In-town Oakland", "Established streets off US-31E", "New builds on former farmland", "Rural farm acreage and wooded lots"],
    landmarks: ["Historic downtown Oakland", "US-31E corridor", "Warren County farmland", "Drakes Creek area"],
    housingStock:
      "A quiet mix of established in-town homes, newer builds, and working farms.",
    topPests: ["General household pests", "Field mice & rodents", "Ants", "Spiders", "Mosquitoes", "Ticks"],
    seasonalNote:
      "Farm fields and creek bottoms drive summer mosquito and tick pressure; harvest and cool weather send field mice looking for a way indoors.",
    localServiceNote:
      "Oakland is on our Warren County route — easy scheduling, and free re-services within 48 hours.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const tier1Locations = locations.filter((l) => l.tier === 1);

export function citiesByCounty(countySlug: string): Location[] {
  return locations.filter((l) => l.county === countySlug);
}
