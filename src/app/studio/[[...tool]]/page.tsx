"use client";

// Client component: keeps Sanity (and its `swr` dependency) out of the React
// Server Component graph, where swr's `react-server` build has no default export.
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
