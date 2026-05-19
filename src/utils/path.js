/**
 * Resolves static content paths dynamically relative to the application's base URL.
 * Works across both local development (Vite dev server) and GitHub Pages subpaths.
 *
 * @param {string} urlPath - The target file or asset path (e.g. 'content/notes.md' or '/assets/image.png')
 * @returns {string} The fully resolved URL path safe for fetch operations or image loading
 */
export const resolveAssetUrl = (urlPath) => {
  if (!urlPath) return '';

  // If it's already an absolute external link, mailto, or data URI, return as-is
  if (
    urlPath.startsWith('http://') ||
    urlPath.startsWith('https://') ||
    urlPath.startsWith('data:') ||
    urlPath.startsWith('mailto:')
  ) {
    return urlPath;
  }

  // Remove leading slash if present to prevent resetting to domain root during resolution
  const cleanPath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;

  // Retrieve base path from window.location.pathname (e.g. /2am-notes/ or /)
  let basePath = window.location.pathname;

  // Strip index.html or other document names if they are part of the pathname
  if (basePath.endsWith('.html') || basePath.endsWith('.htm')) {
    basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);
  }

  // Ensure there is always a trailing slash at the end of the base folder path
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }

  return `${basePath}${cleanPath}`;
};
