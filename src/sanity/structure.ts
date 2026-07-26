import type { StructureResolver } from "sanity/structure";

// Site Settings is a singleton (one document); everything else is a normal list.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (li) => li.getId() !== "siteSettings",
      ),
    ]);
