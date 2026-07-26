import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "author", title: "Author name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "rating", title: "Rating (1–5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "source", title: "Source", type: "string", options: { list: ["Google", "Facebook", "Yelp", "Other"] } }),
    defineField({ name: "sourceUrl", title: "Link to source profile", type: "url" }),
    defineField({ name: "featured", title: "Feature on homepage", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "author", subtitle: "quote" } },
});
