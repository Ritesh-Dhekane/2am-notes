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

/**
 * Builds a clean, human-readable URL from a raw markdown path.
 * Hides raw directories, extensions, and root prefixes.
 *
 * @param {string} mdPath - Raw markdown path (e.g. 'content/stqa/revision/stqa-qb.md')
 * @returns {string} Clean URL (e.g. '/subject/stqa/revision/stqa-qb')
 */
export const buildCleanUrl = (mdPath) => {
  if (!mdPath) return '#';

  // Normalize path separators
  const cleanPath = mdPath.replace(/\\/g, '/');
  const parts = cleanPath.split('/');

  // Check if it is a unit topic path: content/:subjectId/units/:unitId/topics/:topicId/notes.md
  if (parts.length >= 6 && parts[0] === 'content' && parts[2] === 'units' && parts[4] === 'topics') {
    const subjectId = parts[1];
    const unitId = parts[3];
    const topicId = parts[5];
    return `/subject/${subjectId}/units/${unitId}/topics/${topicId}`;
  }

  // Check if it is an extra: content/:subjectId/:category/:itemId.md
  if (parts.length >= 4 && parts[0] === 'content') {
    const subjectId = parts[1];
    const category = parts[2];
    const itemId = parts[3].replace('.md', '');
    return `/subject/${subjectId}/${category}/${itemId}`;
  }

  // Fallback to legacy path if unrecognized format
  return `/subject/${parts[1] || 'unknown'}/viewer?path=${encodeURIComponent(cleanPath)}`;
};

/**
 * Recovers the internal markdown filesystem path from clean route parameters.
 *
 * @param {object} params - Router parameters (subjectId, category, itemId, unitId, topicId)
 * @returns {string|null} The resolved internal markdown file path
 */
export const getMarkdownPathFromParams = (params) => {
  if (!params || !params.subjectId) return null;

  const { subjectId, unitId, topicId, category, itemId } = params;

  // Case 1: Unit topic route
  if (unitId && topicId) {
    return `content/${subjectId}/units/${unitId}/topics/${topicId}/notes.md`;
  }

  // Case 2: Extra route (revision, pyqs, mindmaps)
  if (category && itemId) {
    return `content/${subjectId}/${category}/${itemId}.md`;
  }

  return null;
};
