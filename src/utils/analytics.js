const MEASUREMENT_ID = 'G-GSST9PH2Q1';

const getPageLocation = (path) => {
  if (typeof window === 'undefined') return path;
  const base = window.location.origin + window.location.pathname;
  return `${base}#${path.startsWith('/') ? path : `/${path}`}`;
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title,
      page_location: getPageLocation(path),
    });
  }
};

export const trackEvent = (action, category, label, value, extras = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...extras,
    });
  }
};

// Reusable custom event trackers
export const trackThemeChange = (theme) => {
  trackEvent('theme_change', 'Preferences', theme);
};

export const trackSearchQuery = (query) => {
  trackEvent('search', 'Engagement', query);
};

export const trackContentOpen = (path, type) => {
  trackEvent('open_content', 'Content', `${type}: ${path}`);
};

export const trackSupportInteraction = (action, label, value) => {
  trackEvent(action, 'Support', label, value);
};

export const trackPaymentFailureReport = (label, extras = {}) => {
  trackEvent('support_payment_failed', 'Support', label, undefined, extras);
};

export const trackRawDocumentOpen = (subjectId, fileName, category) => {
  trackEvent('open_raw_document', 'Documents', `${subjectId}: ${fileName}`, undefined, {
    subject_id: subjectId,
    document_category: category,
  });
};

export const trackShareAction = (label) => {
  trackEvent('share_platform', 'Engagement', label);
};
