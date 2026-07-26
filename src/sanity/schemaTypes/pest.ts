import { defineField, defineType } from "sanity";

export default defineType({
  name: "pest",
  title: "Pest",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Wasps", "Ants", "Spiders", "Occasional Invaders", "Ticks/Fleas/Mosquitoes", "Rodents"] } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 2 }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "kentuckyNote", title: "Kentucky-specific note", type: "text", rows: 3 }),
  ],
});
