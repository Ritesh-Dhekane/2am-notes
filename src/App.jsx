import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import ContentViewer from './pages/ContentViewer';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import AnalyticsTracker from './components/AnalyticsTracker';
import PWAInstallPrompt from './components/PWAInstallPrompt';

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <PWAInstallPrompt />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
           <Route path="subject/:subjectId" element={<SubjectPage />} />
          <Route path="subject/:subjectId/topic/:topicId" element={<TopicPage />} />
          <Route path="subject/:subjectId/units/:unitId/topics/:topicId" element={<ContentViewer />} />
          <Route path="subject/:subjectId/:category/:itemId" element={<ContentViewer />} />
          <Route path="subject/:subjectId/viewer" element={<ContentViewer />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
