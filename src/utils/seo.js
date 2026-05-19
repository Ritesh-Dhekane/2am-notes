/**
 * Dynamically updates page metadata (title, description, and Open Graph tags) for SEO and share previews.
 *
 * @param {object} metadata - The page metadata parameters
 * @param {string} metadata.title - The document title (e.g., 'STQA Question Bank')
 * @param {string} [metadata.description] - Page description text
 * @param {string} [metadata.subjectTitle] - The academic subject name (e.g. 'Software Testing & QA')
 */
export const updatePageMetadata = ({ title, description, subjectTitle }) => {
  // Format premium academic tab title
  const displayTitle = subjectTitle 
    ? `2AM Notes — ${title} | ${subjectTitle}`
    : `2AM Notes — ${title}`;

  // Update HTML document title
  document.title = displayTitle;

  // Default description if none provided
  const displayDesc = description || "Master your university exams. AI-native, structured exam revision notes, important questions, solved papers, and concept mindmaps.";

  // Helper to query or create metadata tags
  const setMetaTag = (attributeName, attributeValue, content) => {
    if (!content) return;
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard metadata
  setMetaTag('name', 'description', displayDesc);

  // Open Graph (Facebook/WhatsApp/Telegram/Discord)
  setMetaTag('property', 'og:title', displayTitle);
  setMetaTag('property', 'og:description', displayDesc);
  setMetaTag('property', 'og:type', 'article');
  
  // Twitter Card
  setMetaTag('name', 'twitter:title', displayTitle);
  setMetaTag('name', 'twitter:description', displayDesc);
};
