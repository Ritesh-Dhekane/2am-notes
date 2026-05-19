import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // In React Router HashRouter, useLocation().pathname resolves the relative hash route cleanly,
    // e.g. '/subject/java-programming' rather than '/' with a hash suffix.
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);

  return null;
};

export default AnalyticsTracker;
