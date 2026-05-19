export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-GSST9PH2Q1', {
      page_path: path,
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
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
