import type { NextConfig } from "next";

// Redirect the old flat Hardin city URLs to the new county-nested paths.
const hardinCities = [
  "elizabethtown", "radcliff", "vine-grove", "rineyville",
  "cecilia", "glendale", "sonora", "white-mills",
];

const nextConfig: NextConfig = {
  async redirects() {
    return hardinCities.map((c) => ({
      source: `/locations/${c}`,
      destination: `/locations/hardin-county/${c}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
