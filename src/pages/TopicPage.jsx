import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../renderer/MarkdownRenderer';
import subjectsData from '../../data/subjects.json';
import { resolveAssetUrl } from '../utils/path';
import { ArrowLeft, ChevronRight, Menu, X, Share2, Printer, Bookmark, Search } from 'lucide-react';

const TopicPage = () => {
  const { subjectId, topicId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Find subject and topic dynamically
  const subject = subjectsData.find((s) => s.id === subjectId);
  
  let unit = null;
  let topic = null;

  if (subject) {
    for (const u of subject.units) {
      const t = u.topics.find((topic) => topic.id === topicId);
      if (t) {
        unit = u;
        topic = t;
        break;
      }
    }
  }

  useEffect(() => {
    const fetchContent = async () => {
      if (!topic?.path) {
        setError('Topic path not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Correctly handle paths for both local and GitHub Pages using resolveAssetUrl
        const response = await fetch(resolveAssetUrl(topic.path));
        if (!response.ok) throw new Error('Failed to load content');
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error(err);
        setError('Failed to load study material. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
    window.scrollTo(0, 0);
  }, [topic?.path]);

  if (!subject || !topic) return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold">Topic not found</h2>
      <Link to="/" className="text-primary hover:underline mt-4 inline-block">Back to home</Link>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-64px)] relative bg-background">
      {/* Sidebar for Navigation - GitBook Style */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-card border-r transition-transform duration-300 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col p-4 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="font-bold">Navigation</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          
          <Link to={`/subject/${subject.id}`} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4 group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            {subject.title}
          </Link>

          <div className="space-y-6">
            {subject.units.map((u) => (
              <div key={u.id}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-2 px-3">{u.title}</h4>
                <ul className="space-y-1">
                  {u.topics.map((t) => (
                    <li key={t.id}>
                      <Link
                        to={`/subject/${subject.id}/topic/${t.id}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${t.id === topicId ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {t.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-12 py-8 lg:py-16">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-8 lg:hidden bg-muted/30 p-3 rounded-xl">
          <button onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Menu size={18} />
            Navigation
          </button>
          <Link to="/search" className="p-2 hover:bg-muted rounded-full"><Search size={18} /></Link>
        </div>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <header className="mb-12 pb-8 border-b">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <span className="hover:underline"><Link to={`/subject/${subject.id}`}>{subject.title}</Link></span>
              <ChevronRight size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">{unit.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">{topic.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground border-t pt-6">
              <div className="flex items-center gap-4 ml-auto">
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Bookmark size={18} /> Save</button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm"><Share2 size={18} /> Share</button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors text-sm" onClick={() => window.print()}><Printer size={18} /> Print</button>
              </div>
            </div>
          </header>

          <div className="min-h-[400px]">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-4">
                <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-muted-foreground font-medium animate-pulse">Loading study material...</p>
              </div>
            ) : error ? (
              <div className="py-20 text-center bg-destructive/5 rounded-2xl border border-destructive/20 p-8">
                <p className="text-destructive font-bold text-lg mb-4">{error}</p>
                <button onClick={() => window.location.reload()} className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">Retry Fetch</button>
              </div>
            ) : (
              <MarkdownRenderer content={content} />
            )}
          </div>
        </article>

        {/* Next/Prev Navigation could be added here later */}
      </div>
    </div>
  );
};

export default TopicPage;
