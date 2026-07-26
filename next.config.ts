import type { NextConfig } from "next";

// Old flat Hardin city URLs -> new county-nested paths.
const hardinCities = [
  "elizabethtown", "radcliff", "vine-grove", "rineyville",
  "cecilia", "glendale", "sonora", "white-mills",
];

// Wix (old site) URL -> new equivalent. Preserves SEO equity on cutover.
// Each maps to its closest content match — never a blanket redirect to home.
const wixRedirects: { source: string; destination: string }[] = [
  { source: "/about-us", destination: "/the-apex-standard/our-team" },
  { source: "/4-step-prevention-process", destination: "/the-apex-standard/how-it-works" },
  { source: "/residential-pest-control", destination: "/pest-control/general-pest-control" },
  { source: "/commercial", destination: "/pest-control/commercial-pest-control" },
  { source: "/cockroach-control", destination: "/pest-control/cockroach-control" },
  { source: "/termite-control", destination: "/pest-control/termite-control" },
  { source: "/rodent-control-louisville-ky", destination: "/pest-control/rodent-control" },
  { source: "/mosquito-control-louisville-ky", destination: "/pest-control/mosquito-control" },
  { source: "/flea-and-tick-prevention", destination: "/pest-control/flea-tick-control" },
  { source: "/blog", destination: "/pests" },
  { source: "/contact-us", destination: "/get-a-quote" },
  { source: "/contact-8", destination: "/get-a-quote" },
  { source: "/book-online", destination: "/get-a-quote" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...hardinCities.map((c) => ({
        source: `/locations/${c}`,
        destination: `/locations/hardin-county/${c}`,
        permanent: true,
      })),
      ...wixRedirects.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

export default nextConfig;
