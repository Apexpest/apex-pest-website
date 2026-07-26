/**
 * Pest library — the educational SEO engine.
 *
 * Each pest is hand-written for Kentucky homeowners: how to identify it, the
 * signs of an infestation, why it matters, and a Kentucky-specific note. This
 * is the single source of truth for now and maps 1:1 to the Sanity `pest`
 * document (see src/sanity/schemaTypes/pest.ts). Categories match the schema's
 * list exactly so a later CMS migration is near-zero.
 */

export type PestCategory =
  | "Wasps"
  | "Ants"
  | "Spiders"
  | "Occasional Invaders"
  | "Ticks/Fleas/Mosquitoes"
  | "Rodents";

export type Pest = {
  slug: string;
  name: string;
  category: PestCategory;
  /** One-line summary for the hub card + meta description. */
  summary: string;
  /** How to identify it. */
  identification: string;
  /** Body paragraphs (habits, why it matters). */
  body: string[];
  /** Signs of an infestation (bullet list). */
  signs: string[];
  /** Kentucky-specific note. */
  kentuckyNote: string;
  /** The Summit Shield zone(s) where we stop it. */
  zone: string;
  /** Slug of the most relevant service page. */
  relatedService: string;
};

export const pestCategories: { name: PestCategory; blurb: string }[] = [
  { name: "Wasps", blurb: "Paper wasps, yellowjackets and hornets that nest in eaves, ground and wall voids." },
  { name: "Ants", blurb: "From nuisance trails to wood-destroying carpenter ants." },
  { name: "Spiders", blurb: "Including Kentucky's two medically significant species." },
  { name: "Occasional Invaders", blurb: "Seasonal home-invaders that show up by the hundreds." },
  { name: "Ticks/Fleas/Mosquitoes", blurb: "The biting, disease-carrying pests of Kentucky's warm months." },
  { name: "Rodents", blurb: "Mice and rats that chew, contaminate and multiply fast." },
];

export const pests: Pest[] = [
  // ---------- WASPS ----------
  {
    slug: "paper-wasps",
    name: "Paper Wasps",
    category: "Wasps",
    summary:
      "Slender, long-legged wasps that build open, umbrella-shaped nests under eaves, porch ceilings and grill covers.",
    identification:
      "Brownish with yellow or reddish markings, about ¾–1 inch long, with long legs that dangle in flight. Their nests are open, gray, honeycomb-like combs hung from a single stalk — usually under an eave, soffit, porch ceiling, or deck rail.",
    body: [
      "Paper wasps are one of the most common stinging pests around Kentucky homes. They're not especially aggressive out foraging, but they defend the nest hard — and because they build right where people walk, doorways, porches, and eaves become no-go zones by late summer.",
      "A single queen starts the nest in spring; by August a mature colony can hold dozens of workers. Unlike honeybees, wasps can sting repeatedly, which makes an active nest by a front door a real hazard for anyone with an allergy.",
    ],
    signs: [
      "Open, gray honeycomb nests under eaves, soffits, or porch ceilings",
      "Wasps repeatedly flying to and from the same spot",
      "Activity concentrated around doorways, decks, and rooflines",
    ],
    kentuckyNote:
      "Paper wasps target the Peak Line — eaves, soffits, and the roofline — which is exactly the area most pest companies skip. Summit Shield treats it on every visit.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "yellowjackets",
    name: "Yellowjackets",
    category: "Wasps",
    summary:
      "Aggressive black-and-yellow wasps that nest underground or in wall voids and turn nasty in late summer.",
    identification:
      "About ½ inch long, boldly banded black and yellow, with a fast, darting flight. Nests are hidden — in old rodent burrows and ground holes, in wall voids, or under decks — so you often see a stream of wasps disappearing into a single spot in the ground or siding.",
    body: [
      "Yellowjackets are the wasp behind most late-summer stings. Colonies grow all season and peak in August and September, when workers turn scavenger and start crashing cookouts, trash cans, and anything sweet.",
      "They're highly defensive: mowing over a ground nest or bumping a wall void can trigger dozens of stings in seconds. Because the nest is usually concealed, DIY sprays often miss the colony entirely and just make the workers angry.",
    ],
    signs: [
      "A steady stream of wasps entering a hole in the ground or a gap in siding",
      "Aggressive wasps around trash, food, and drinks in late summer",
      "Buzzing or rustling inside a wall or ceiling void",
    ],
    kentuckyNote:
      "Ground and wall-void nests make yellowjackets a Property Line and Peak Line problem — the zones where Summit Shield seals and treats the routes they actually use.",
    zone: "Property Line & Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "bald-faced-hornets",
    name: "Bald-faced Hornets",
    category: "Wasps",
    summary:
      "Large black-and-white wasps that build the big gray football-shaped aerial nests you see in trees and on eaves.",
    identification:
      "Bigger than most wasps — up to ¾ inch — and black with an ivory-white face and markings. Their nest is the classic large, gray, papery, enclosed 'football' hanging from a tree limb, shrub, or the side of a house.",
    body: [
      "Bald-faced hornets are actually a type of yellowjacket, and they are extremely protective of their aerial nest. They can sting repeatedly and will pursue a perceived threat several feet from the nest, which makes a nest near a doorway or play area genuinely dangerous.",
      "A mature nest can house hundreds of workers by late summer. Because the nest is enclosed and often high up, removal is not a DIY job — disturbing it without the right approach and protection is how people end up in the ER.",
    ],
    signs: [
      "A large gray, papery, enclosed nest in a tree, shrub, or on the eaves",
      "Big black-and-white wasps patrolling near the nest",
      "Hornets reacting aggressively when you approach the area",
    ],
    kentuckyNote:
      "Aerial nests on eaves and rooflines are a Peak Line problem. We remove and treat them safely rather than leaving a hazard by your door.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },

  // ---------- ANTS ----------
  {
    slug: "carpenter-ants",
    name: "Carpenter Ants",
    category: "Ants",
    summary:
      "Large black ants that excavate galleries in damp or damaged wood — a structural concern, not just a nuisance.",
    identification:
      "Among the largest ants you'll see indoors, ¼–½ inch long and usually black (sometimes dark red-and-black). Unlike termites, they don't eat wood — they hollow it out to nest, leaving behind piles of sawdust-like shavings called frass.",
    body: [
      "Carpenter ants nest in wood that's been softened by moisture — around leaky roofs, window frames, decks, and crawlspaces. Left alone, a colony expands its galleries over years and can cause real structural damage.",
      "Seeing large black ants indoors, especially in winter or spring, often means a nest is inside the structure rather than outside. Spraying the trail you see rarely reaches the parent nest, so the problem keeps coming back until the colony itself is treated.",
    ],
    signs: [
      "Large black ants indoors, especially at night",
      "Small piles of sawdust-like frass beneath wood",
      "A faint rustling in walls, or winged ants emerging indoors",
    ],
    kentuckyNote:
      "Kentucky's humidity feeds the moisture problems carpenter ants love. Summit Shield addresses both the ants and the entry points along the Peak Line where they get in.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "odorous-house-ants",
    name: "Odorous House Ants",
    category: "Ants",
    summary:
      "Tiny brown ants that trail across counters and give off a rotten-coconut smell when crushed.",
    identification:
      "Small — about ⅛ inch — and brown to black. The giveaway is the smell: crush one and it gives off an unpleasant, coconut-like odor. They travel in well-defined trails along counters, baseboards, and plumbing lines.",
    body: [
      "Odorous house ants are the classic kitchen nuisance ant. They're drawn to moisture and sweets, so they show up around sinks, dishwashers, and pantries, often after rain pushes them indoors.",
      "Their colonies have many queens and split easily, which is why DIY sprays can actually make things worse — the colony 'buds' into several new ones. Effective control targets the colony with the right baits and a barrier that keeps new trails from forming.",
    ],
    signs: [
      "Trails of tiny brown ants across counters and floors",
      "A rotten-coconut smell when an ant is crushed",
      "Ants clustered around sinks, dishwashers, and sweet spills",
    ],
    kentuckyNote:
      "Rainy Kentucky springs reliably push these ants indoors. Our Foundation Line and Peak Line barrier intercepts them before they reach the kitchen.",
    zone: "Foundation Line & Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "pavement-ants",
    name: "Pavement Ants",
    category: "Ants",
    summary:
      "Small brown-black ants that nest under driveways, sidewalks and slabs and trail indoors for food.",
    identification:
      "About ⅛ inch, brown to blackish, often seen with the small mounds of excavated soil they push up between cracks in pavement, driveways, and foundation slabs. Indoors they trail along floors and baseboards.",
    body: [
      "Pavement ants nest under hard surfaces and foundations, then forage indoors for grease, sweets, and crumbs. They're a persistent nuisance in garages, basements, and ground-floor kitchens.",
      "Because the nest is under a slab or driveway, surface sprays don't reach it. Long-term control means treating the perimeter and the nesting sites along the foundation line, not just the ants you see inside.",
    ],
    signs: [
      "Small soil mounds in pavement cracks and along the foundation",
      "Ant trails in garages, basements, and ground-floor rooms",
      "Foraging around pet food, grease, and crumbs",
    ],
    kentuckyNote:
      "These are a textbook Foundation Line pest — the soil band and foundation seams Summit Shield treats first, where most pests make contact with the structure.",
    zone: "Foundation Line",
    relatedService: "general-pest-control",
  },

  // ---------- SPIDERS ----------
  {
    slug: "brown-recluse-spider",
    name: "Brown Recluse Spider",
    category: "Spiders",
    summary:
      "Kentucky's most medically significant spider — a shy brown spider with a violin mark whose bite can cause serious wounds.",
    identification:
      "Light-to-medium brown, about ⅜ inch body, with a distinctive darker violin-shaped mark on the back behind the head and six eyes arranged in three pairs (most spiders have eight). They hide in dark, undisturbed places — closets, basements, garages, storage boxes, and behind furniture.",
    body: [
      "The brown recluse is genuinely established in Kentucky, and it's the spider homeowners most need to take seriously. It's not aggressive — bites usually happen when one is trapped against skin in a shoe, glove, or bedsheet — but a bite can cause a slow-healing, necrotic wound that needs medical attention.",
      "Recluses like clutter and quiet, so they thrive in storage areas, wall voids, and behind baseboards. Because they hide so well, a few sightings can mean a larger population. Control combines targeted treatment of harborage areas with reducing the clutter and gaps they shelter in.",
    ],
    signs: [
      "Brown spiders with a violin-shaped mark in closets, basements, or boxes",
      "Irregular, off-white webbing in undisturbed corners and storage",
      "Sightings in shoes, gloves, stored clothing, or behind furniture",
    ],
    kentuckyNote:
      "Brown recluse are well established across Kentucky. If you're seeing them, treat it seriously — we target the hidden harborage points, not just the spider on the wall.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "black-widow-spider",
    name: "Black Widow Spider",
    category: "Spiders",
    summary:
      "A glossy black spider with a red hourglass whose venomous bite makes it Kentucky's other spider to respect.",
    identification:
      "The adult female is glossy jet-black with a red hourglass marking on the underside of the abdomen, about ½ inch body. She builds a strong, irregular, tangled web low to the ground in dark, sheltered spots — under decks, in wood piles, crawlspaces, garages, and outdoor clutter.",
    body: [
      "Black widows are shy and stay near their webs, but their venom is potent, and a bite can cause severe muscle pain, cramping, and other symptoms that warrant medical care. Bites typically happen when someone reaches into a sheltered spot where a widow is hiding.",
      "They favor undisturbed, protected places outdoors and in outbuildings — exactly the spots people reach into without looking. Control focuses on treating and clearing those harborage areas and sealing the gaps that let them shelter against the home.",
    ],
    signs: [
      "Glossy black spiders with a red hourglass in sheltered, low spots",
      "Strong, messy, irregular webbing under decks, in wood piles or crawlspaces",
      "Round, papery egg sacs in the web",
    ],
    kentuckyNote:
      "Wood piles, crawlspaces, and outbuildings across rural Hardin County are prime widow habitat. Our Property Line and Foundation Line work targets exactly those spots.",
    zone: "Property Line & Foundation Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "wolf-spiders",
    name: "Wolf Spiders",
    category: "Spiders",
    summary:
      "Large, fast, hairy hunting spiders that don't build webs and often wander indoors in fall.",
    identification:
      "Big, hairy, and brown-to-gray with darker markings, up to more than an inch including the legs. They don't spin snare webs — they hunt on the ground and move fast, which is what makes them alarming when one darts across a floor.",
    body: [
      "Wolf spiders are harmless to your home and actually eat other insects, but their size and speed make them one of the most unsettling spiders to find indoors. They wander in through gaps at ground level, especially as the weather cools in fall.",
      "Seeing wolf spiders inside is usually a sign of two things: easy entry points along the foundation, and a food supply of other insects already indoors. Control both — seal the gaps and knock down the pest population they're feeding on — and the wolf spiders move on.",
    ],
    signs: [
      "Large, fast spiders running across floors, especially in fall",
      "Sightings at ground level — basements, garages, ground-floor rooms",
      "No organized web; the spider is out in the open",
    ],
    kentuckyNote:
      "A wolf spider indoors usually means other pests are indoors too. Summit Shield seals the Foundation Line gaps and reduces the insects they hunt.",
    zone: "Foundation Line",
    relatedService: "general-pest-control",
  },

  // ---------- OCCASIONAL INVADERS ----------
  {
    slug: "stink-bugs",
    name: "Brown Marmorated Stink Bugs",
    category: "Occasional Invaders",
    summary:
      "Shield-shaped bugs that pack into homes by the dozens each fall and release a foul odor when disturbed.",
    identification:
      "Shield- or triangle-shaped, about ⅝ inch, mottled brown with alternating light-and-dark bands on the antennae and abdomen edge. Crushed or threatened, they release the sharp, cilantro-like odor they're named for.",
    body: [
      "Brown marmorated stink bugs are an invasive species that has spread across Kentucky. They don't bite, sting, or breed indoors — the problem is sheer numbers. On warm fall days they gather on sunny exterior walls and push inside through cracks to overwinter.",
      "Once inside walls and attics, they emerge on warm days all winter and spring. Vacuuming picks up stray ones, but the real fix is sealing the entry points and treating the exterior before they move in, in early fall.",
    ],
    signs: [
      "Shield-shaped bugs clustered on sunny exterior walls in fall",
      "Bugs appearing indoors on warm winter and spring days",
      "A pungent odor when they're disturbed or vacuumed",
    ],
    kentuckyNote:
      "Fall is the window. A Peak Line treatment before the first cold snap keeps them out of the walls in the first place.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "asian-lady-beetles",
    name: "Asian Lady Beetles",
    category: "Occasional Invaders",
    summary:
      "Ladybug look-alikes that swarm homes in fall, stain surfaces, and bite mildly — unlike native ladybugs.",
    identification:
      "Similar to native ladybugs but variable in color from orange to red, usually with an 'M'- or 'W'-shaped mark just behind the head. They gather in large numbers on sunny walls in fall.",
    body: [
      "Asian lady beetles are beneficial in the garden but a real nuisance when they overwinter indoors. Like stink bugs, they seek warm sunny walls in fall and slip through gaps into wall voids and attics, then reappear on warm days.",
      "When disturbed they can give a mild bite and secrete a yellow fluid that stains walls and fabrics and smells unpleasant. Sealing gaps and treating the exterior in early fall stops the invasion before it starts.",
    ],
    signs: [
      "Orange-to-red beetles massing on sunny exterior walls in fall",
      "Beetles indoors on warm winter days near windows and ceilings",
      "Yellow staining and a faint odor where they cluster",
    ],
    kentuckyNote:
      "They ride the same fall push indoors as stink bugs and ladybugs. We treat the roofline and structure gaps together before they settle in.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },
  {
    slug: "boxelder-bugs",
    name: "Boxelder Bugs",
    category: "Occasional Invaders",
    summary:
      "Black bugs with red-orange markings that gather in huge numbers on warm walls and slip inside for winter.",
    identification:
      "About ½ inch, black with distinctive red-orange lines on the body and wing edges. Nymphs are bright red. They congregate in large numbers on the sunny south and west sides of buildings in fall.",
    body: [
      "Boxelder bugs feed on boxelder, maple, and ash trees through summer, then move to warm structures as fall arrives. They don't damage the home or breed indoors, but they cluster on siding by the hundreds and work their way into wall voids to overwinter.",
      "Like other fall invaders, they reappear on warm days through winter and spring. The effective approach is exclusion plus a well-timed exterior treatment before they mass on the walls.",
    ],
    signs: [
      "Large clusters of black-and-red bugs on sunny walls in fall",
      "Bugs around windows and doors on warm winter days",
      "Concentrations near boxelder, maple, or ash trees",
    ],
    kentuckyNote:
      "Central Kentucky's mix of maples and ash gives boxelder bugs plenty of host trees. Timing the fall exterior treatment is what keeps them off your walls.",
    zone: "Peak Line",
    relatedService: "general-pest-control",
  },

  // ---------- TICKS / FLEAS / MOSQUITOES ----------
  {
    slug: "mosquitoes",
    name: "Mosquitoes",
    category: "Ticks/Fleas/Mosquitoes",
    summary:
      "Biting pests that breed in standing water and rest in shaded foliage — relentless through Kentucky's humid summers.",
    identification:
      "Small, slender flies with long legs and a piercing mouthpart. You'll notice the bites and the whine long before you see the insect. They're most active at dawn and dusk and cluster in shaded, humid areas.",
    body: [
      "Mosquitoes need only a bottle cap of standing water to breed, and they rest during the day in cool, shaded harborage — dense shrubs, tall grass, under decks, and along tree lines. A quick spray of the open lawn does almost nothing because it misses both the breeding sites and the resting sites.",
      "Beyond the itch, mosquitoes are a public-health concern as carriers of disease. An effective program treats the shaded resting areas where adults spend the day and knocks down the standing-water sites where the next generation is developing.",
    ],
    signs: [
      "Biting activity at dawn and dusk, especially near shade and water",
      "Mosquitoes resting in dense foliage, under decks, and along tree lines",
      "Standing water in gutters, planters, birdbaths, and low spots",
    ],
    kentuckyNote:
      "Kentucky's river valleys and humid summers make mosquitoes especially bad near the Nolin River, Otter Creek, and shaded low ground. Our seasonal program targets where they actually breed and rest.",
    zone: "Property Line",
    relatedService: "mosquito-control",
  },
  {
    slug: "ticks",
    name: "Ticks",
    category: "Ticks/Fleas/Mosquitoes",
    summary:
      "Blood-feeding parasites that wait along brushy edges and can transmit serious illness — including the alpha-gal connection.",
    identification:
      "Small, flat, eight-legged parasites ranging from pinhead size to pea-size when engorged. Kentucky's common species include the lone star tick (with a white dot on the female's back), the American dog tick, and the blacklegged (deer) tick.",
    body: [
      "Ticks don't fly or jump — they 'quest,' climbing to the tip of grass and brush and waiting to grab a passing host. That makes yard edges, tall grass, and tree lines the danger zones, especially on rural and wooded properties.",
      "Kentucky has meaningful tick pressure, and the health stakes are real: ticks here can transmit several diseases, and the lone star tick is linked to alpha-gal syndrome, a serious red-meat allergy. A targeted yard program that treats the questing zones is the practical way to cut your family's and pets' exposure.",
    ],
    signs: [
      "Ticks found on people or pets after time outdoors",
      "Activity concentrated along brushy edges, tall grass, and tree lines",
      "Higher pressure on rural, wooded, and field-adjacent properties",
    ],
    kentuckyNote:
      "The lone star tick and its alpha-gal connection are a real concern across rural Hardin County. We treat the yard edges and harborage where ticks wait, not just the open lawn.",
    zone: "Property Line",
    relatedService: "flea-tick-control",
  },
  {
    slug: "fleas",
    name: "Fleas",
    category: "Ticks/Fleas/Mosquitoes",
    summary:
      "Tiny biting insects that ride in on pets and wildlife, then multiply fast in carpet, bedding, and yards.",
    identification:
      "Very small (about ⅛ inch), dark, and flattened side-to-side, with powerful legs for jumping. You'll usually notice itchy bites around the ankles and 'flea dirt' (dark specks) in pet fur and bedding before you spot the fleas themselves.",
    body: [
      "Fleas come in on pets, and on the wildlife — mice, opossums, strays — that pass through the yard. Once indoors, a few fleas become an infestation quickly: eggs drop into carpet, bedding, and floor cracks, and the life cycle keeps regenerating for weeks.",
      "Because most of a flea population is eggs, larvae, and pupae hidden in the environment rather than adults on the pet, treating the animal alone rarely solves it. Effective control treats the indoor harborage and the outdoor shaded areas where the cycle continues, alongside your vet's pet treatment.",
    ],
    signs: [
      "Itchy bites, usually around the ankles and lower legs",
      "Pets scratching, plus 'flea dirt' in fur and bedding",
      "Tiny insects jumping in carpet, rugs, and pet resting spots",
    ],
    kentuckyNote:
      "Wildlife traffic on rural and wooded Hardin County lots keeps re-seeding flea problems. We treat the yard harborage and the indoor sites the cycle relies on.",
    zone: "Property Line & Peak Line",
    relatedService: "flea-tick-control",
  },

  // ---------- RODENTS ----------
  {
    slug: "house-mice",
    name: "House Mice",
    category: "Rodents",
    summary:
      "Small rodents that squeeze through dime-sized gaps, contaminate food, chew wiring, and breed year-round.",
    identification:
      "Small, gray-brown rodents about 2–4 inches in body with a long, nearly hairless tail and large ears. More often you'll find the evidence first — droppings, gnaw marks, and a musky odor — than the mouse itself.",
    body: [
      "A house mouse can slip through a gap the size of a dime, so utility penetrations, garage door corners, and foundation gaps are all open doors. Once inside, mice contaminate far more food than they eat, gnaw on wiring (a real fire risk), and reproduce fast — a small problem becomes a big one in weeks.",
      "Mice press indoors hardest as the weather cools and at harvest, when field mice on rural properties look for shelter. Lasting control is about exclusion — finding and sealing the entry points along the peak line — paired with knocking down the active population, not just setting a couple of traps.",
    ],
    signs: [
      "Small dark droppings along walls, in cabinets, and in drawers",
      "Gnaw marks on food packaging, wiring, and baseboards",
      "Scratching or scurrying in walls and ceilings at night, plus a musky smell",
    ],
    kentuckyNote:
      "On Hardin County's rural and farm properties, harvest and the first cold snap drive field mice indoors in force. We seal the Peak Line entry points and clear the active population together.",
    zone: "Peak Line",
    relatedService: "rodent-control",
  },
];

export function getPest(slug: string): Pest | undefined {
  return pests.find((p) => p.slug === slug);
}

export function pestsByCategory(category: PestCategory): Pest[] {
  return pests.filter((p) => p.category === category);
}
