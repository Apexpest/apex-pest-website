// Server component wrapper for the Studio route — holds route config + metadata,
// which client components can't export. Renders the client Studio page as-is.
export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
