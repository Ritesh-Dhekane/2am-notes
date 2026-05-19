import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import MarkdownRenderer from '../renderer/MarkdownRenderer';
import ContentSidebar from '../components/ContentSidebar';
import subjectsData from '../../data/subjects.json';
import navigationData from '../../data/navigation.json';
import { Menu, Search, Share2, Printer, Bookmark, ChevronRight } from 'lucide-react';
import { trackContentOpen } from '../utils/analytics';
import { resolveAssetUrl, buildCleanUrl, getMarkdownPathFromParams } from '../utils/path';
import { updatePageMetadata } from '../utils/seo';

const ContentViewer = () => {
  const { subjectId, category, itemId, unitId, topicId } = useParams();
  const location = useLocation();
  
  // Backward compatibility: If the legacy ?path=... query param is present,
  // parse it, build the clean URL, and redirect the user immediately!
  const searchParams = new URLSearchParams(location.search);
  const legacyPath = searchParams.get('path');
  
  if (legacyPath) {
    const cleanUrl = buildCleanUrl(legacyPath);
    return <Navigate to={cleanUrl} replace />;
  }

  // Resolve content path from clean parameters
  const contentPath = getMarkdownPathFromParams({ subjectId, category, itemId, unitId, topicId });
  
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const subject = subjectsData.find((s) => s.id === subjectId);
  const navigation = navigationData[subjectId];

  // Helper to validate paths against actual navigation metadata
  const isPathValid = (nav, path) => {
    if (!nav || !path) return false;
    const inUnits = Object.values(nav.units || {}).some(unit => 
      unit.topics && unit.topics.some(topic => topic.path === path)
    );
    if (inUnits) return true;
    const inExtras = nav.extras && nav.extras.some(extra => extra.path === path);
    return inExtras;
  };

  const hasActiveUnits = Object.values(navigation?.units || {}).some(
    (unit) => unit.topics && unit.topics.length > 0
  );
  const hasActiveExtras = navigation?.extras && navigation.extras.length > 0;
  const isEnabled = hasActiveUnits || hasActiveExtras;

  // Metadata retrieval function for custom page titles and social share descriptions
  const getDocumentMetadata = () => {
    if (!navigation || !subject) return { title: 'Study Notes', description: '' };

    if (unitId && topicId) {
      // Find the topic title
      const unit = navigation.units[unitId];
      const topic = unit?.topics?.find(t => t.id === topicId);
      if (topic) {
        return {
          title: topic.title,
          description: `Comprehensive exam preparation notes for "${topic.title}" under ${unit.title} of ${subject.title}. Master your syllabus with 2AM Notes.`
        };
      }
    }

    if (category && itemId) {
      const extra = navigation.extras?.find(e => e.id === itemId);
      if (extra) {
        let categoryLabel = 'Revision Notes';
        if (category === 'pyq-solutions') categoryLabel = 'Solved PYQ Solution';
        if (category === 'mindmaps') categoryLabel = 'Concept Mindmap';

        return {
          title: extra.title,
          description: `Master ${subject.title} with this complete "${extra.title}" (${categoryLabel}) on 2AM Notes. Exam-oriented prep, quick definitions, and key solutions.`
        };
      }
    }

    return { title: 'Study Notes', description: '' };
  };

  if (!subject || !isEnabled || !isPathValid(navigation, contentPath)) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    // Only fetch content if we have a valid path
    if (!contentPath) return;

    const fetchContent = async () => {
      try {
        setLoading(true);
        // Path is relative to public, e.g., content/stqa/...
        // Resolve path dynamically for GitHub Pages and local environments
        const response = await fetch(resolveAssetUrl(contentPath));
        if (!response.ok) throw new Error('Failed to load content');
        const text = await response.text();
        setContent(text);
        setError(null);
        trackContentOpen(contentPath, subjectId);

        // Update dynamic SEO page metadata
        const docMeta = getDocumentMetadata();
        updatePageMetadata({
          title: docMeta.title,
          description: docMeta.description,
          subjectTitle: subject.title
        });
      } catch (err) {
        console.error(err);
        setError('Failed to load study material. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
    window.scrollTo(0, 0);
  }, [contentPath, subjectId]);

  if (!subject) return <div className="p-20 text-center">Subject not found</div>;

  const docMeta = getDocumentMetadata();

  return (
    <div className="flex min-h-[calc(100vh-64px)] relative bg-background transition-theme">
      <ContentSidebar 
        subject={subject} 
        navigation={navigation} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activePath={contentPath}
      />

      <div className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-12 py-8 lg:py-16">
        {/* Mobile Nav Header */}
        <div className="flex items-center justify-between mb-8 lg:hidden bg-muted/30 p-3 rounded-2xl border border-border">
          <button onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Menu size={18} />
            Explore Units
          </button>
          <Link to="/search" className="p-2 hover:bg-card rounded-full transition-colors"><Search size={18} /></Link>
        </div>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <Link to={`/subject/${subject.id}`} className="hover:underline">{subject.title}</Link>
            <ChevronRight size={14} className="text-muted-foreground/40" />
            <span className="text-muted-foreground/60">{docMeta.title}</span>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-4 mb-12 border-b border-border pb-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter m-0 flex-1">
              {docMeta.title}
            </h1>
            <div className="flex items-center gap-2">
               <button className="p-2 hover:bg-muted rounded-full transition-colors" title="Save"><Bookmark size={20} /></button>
               <button className="p-2 hover:bg-muted rounded-full transition-colors" title="Share"><Share2 size={20} /></button>
               <button className="p-2 hover:bg-muted rounded-full transition-colors" title="Print" onClick={() => window.print()}><Printer size={20} /></button>
            </div>
          </div>

          <div className="min-h-[500px]">
            {loading ? (
              <div className="py-32 flex flex-col items-center justify-center space-y-6">
                <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <div className="text-center">
                   <p className="text-xl font-bold animate-pulse">Analyzing Subject Data...</p>
                   <p className="text-sm text-muted-foreground">Preparing your late-night revision session</p>
                </div>
              </div>
            ) : error ? (
              <div className="py-20 text-center bg-destructive/5 rounded-3xl border border-destructive/20 p-12">
                <div className="text-5xl mb-6">⚠️</div>
                <h3 className="text-2xl font-bold mb-2">Content Unavailable</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">{error}</p>
                <button onClick={() => window.location.reload()} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">Retry Connection</button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <MarkdownRenderer content={content} />
              </div>
            )}
          </div>
        </article>

        {/* Footer Navigation */}
        {!loading && !error && (
          <div className="mt-20 pt-10 border-t border-border flex justify-between items-center text-sm">
             <div className="text-muted-foreground">
                Last updated: {new RegExp(/APR-25|JAN-26/).test(content) ? 'Recently' : 'Scaffolded'}
             </div>
             <div className="flex gap-4">
                <Link to={`/subject/${subject.id}`} className="font-bold text-primary hover:underline">Back to Dashboard</Link>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentViewer;
