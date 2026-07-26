import { defineField, defineType } from "sanity";

// Location pages are the SEO engine — required-unique fields prevent thin
// "doorway" pages (see build plan §6). A page won't publish without real local content.
export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({ name: "city", title: "City", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "city" }, validation: (r) => r.required() }),
    defineField({ name: "tier", title: "Tier", type: "number", options: { list: [1, 2, 3] } }),
    defineField({ name: "isPublished", title: "Published (only if truly serviceable)", type: "boolean", initialValue: false }),
    defineField({ name: "localIntro", title: "Local intro (150+ words, hand-written)", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({ name: "neighborhoods", title: "Neighborhoods (min 4, real)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "landmarks", title: "Landmarks (min 3)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "housingStock", title: "Housing stock", type: "string" }),
    defineField({ name: "topPests", title: "Top local pests", type: "array", of: [{ type: "reference", to: [{ type: "pest" }] }] }),
    defineField({ name: "seasonalNote", title: "Seasonal note", type: "text", rows: 3 }),
    defineField({ name: "localServiceNote", title: "Local service note (e.g. routed Tue/Thu)", type: "string" }),
  ],
  preview: { select: { title: "city", subtitle: "slug.current" } },
});
