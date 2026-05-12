import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="subject/:subjectId" element={<SubjectPage />} />
          <Route path="subject/:subjectId/topic/:topicId" element={<TopicPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
