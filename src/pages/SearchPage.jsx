import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Book, ChevronRight, FileText, Command, Target, Brain, Code2, Search, BarChart2, CheckSquare } from 'lucide-react';
import contentIndex from '../../data/content-index.json';
import subjectsData from '../../data/subjects.json';
import { trackSearchQuery } from '../utils/analytics';
import { buildCleanUrl } from '../utils/path';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const getSubjectIcon = (id) => {
    const subject = subjectsData.find(s => s.id === id);
    if (!subject) return <Book size={18} />;
    switch (subject.icon) {
      case 'Code2': return <Code2 size={18} />;
      case 'Search': return <Search size={18} />;
      case 'Brain': return <Brain size={18} />;
      case 'Target': return <Target size={18} />;
      case 'BarChart2': return <BarChart2 size={18} />;
      case 'CheckSquare': return <CheckSquare size={18} />;
      default: return <Book size={18} />;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const filtered = contentIndex.filter(item => {
      const contentToSearch = `${item.title} ${item.subjectId} ${item.unitId || ''} ${item.type}`.toLowerCase();
      return searchTerms.every(term => contentToSearch.includes(term));
    }).slice(0, 20); // Limit to 20 results for performance

    setResults(filtered);

    const timer = setTimeout(() => {
      trackSearchQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-[calc(100vh-160px)] transition-theme">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Search Knowledge Base</h1>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border">
            <Command size={12} />
            <span>K to focus</span>
          </div>
        </div>
        
        <div className="relative group">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={22} />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            placeholder="Search for PYQs, topics, or units..."
            className="w-full h-16 pl-14 pr-6 rounded-2xl border bg-card text-xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">{results.length} results found</p>
            {results.map((result, idx) => {
              const subject = subjectsData.find(s => s.id === result.subjectId);
              return (
                <Link
                  key={idx}
                  to={buildCleanUrl(result.path)}
                  className="block p-6 rounded-2xl border bg-card hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {getSubjectIcon(result.subjectId)}
                    </div>
                    <div className="flex items-center text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                      <span>{subject?.title || result.subjectId}</span>
                      {result.unitId && (
                        <>
                          <ChevronRight size={12} className="mx-2 opacity-50" />
                          <span>{result.unitId}</span>
                        </>
                      )}
                      <ChevronRight size={12} className="mx-2 opacity-50" />
                      <span className="text-primary">{result.type}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                    {result.title.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 italic">
                    Access {result.type} for {result.title} in {subject?.title}...
                  </p>
                </Link>
              );
            })}
          </div>
        ) : query ? (
          <div className="text-center py-24 bg-muted/20 rounded-3xl border border-dashed border-border">
            <SearchIcon size={48} className="mx-auto text-muted-foreground/20 mb-4" />
            <h3 className="text-xl font-bold mb-2">No matching notes</h3>
            <p className="text-muted-foreground">We couldn't find anything matching "{query}". Try different keywords.</p>
          </div>
        ) : (
          <div className="text-center py-24 bg-card border border-border rounded-3xl">
            <Book size={48} className="mx-auto text-primary/30 mb-6" />
            <h3 className="text-xl font-bold mb-2">Knowledge Base Search</h3>
            <p className="text-muted-foreground max-w-sm mx-auto text-sm">
              Search all indexed study units, revision logs, and solved PYQ solutions once materials are ingested.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
