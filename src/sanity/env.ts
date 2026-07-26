// Public Sanity project config. projectId/dataset are NOT secret — they ship in
// the browser bundle — so we hardcode sensible defaults and let env vars override.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cqn4vces";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
