export type Review = { author: string; quote: string };

// Real customer testimonials pulled from apexpestky.com. Displayed as content
// (no self-serving AggregateRating schema, per compliance rules).
export const reviews: Review[] = [
  {
    author: "Amber M.",
    quote:
      "Quick to respond and quick to schedule. Did a good job explaining what the plan was to take care of all of my pest control needs.",
  },
  {
    author: "Anthony P.",
    quote:
      "Great experience with this company and the owner. A much better value than the large companies will give you. Highly recommended.",
  },
  {
    author: "Norah A.",
    quote:
      "The guy that came out was knowledgeable, courteous, and took the time to explain the treatment plan in detail. They've kept our home pest-free. I would highly recommend their services!",
  },
];
