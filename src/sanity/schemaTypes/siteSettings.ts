import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact & Legal" },
    { name: "hero", title: "Homepage Hero" },
  ],
  fields: [
    defineField({ name: "phone", title: "Phone number", type: "string", group: "contact" }),
    defineField({ name: "email", title: "Lead email", type: "string", group: "contact" }),
    defineField({ name: "licenseNumber", title: "KDA License #", type: "string", group: "contact" }),
    defineField({ name: "serviceAreaLabel", title: "Service area label", type: "string", group: "contact", initialValue: "Central Kentucky" }),

    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string", group: "hero" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlineAccent", title: "Hero headline — accent line", type: "string", group: "hero" }),
    defineField({ name: "heroSubtext", title: "Hero subtext", type: "text", rows: 3, group: "hero" }),
    defineField({
      name: "heroStats",
      title: "Hero stat cards",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
