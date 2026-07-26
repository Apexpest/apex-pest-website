import { type SchemaTypeDefinition } from "sanity";
import siteSettings from "./siteSettings";
import service from "./service";
import pest from "./pest";
import review from "./review";
import teamMember from "./teamMember";
import location from "./location";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, pest, review, teamMember, location],
};
