// Builds a public-asset URL that respects Vite's configured base path
// (set to "/birthday-papi/" in vite.config.js) so photos and videos in
// /public resolve correctly both locally and on GitHub Pages.
export function assetPath(relativePath) {
  const cleanPath = relativePath.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL; // e.g. "/birthday-papi/"
  return `${base}${cleanPath}`;
}
