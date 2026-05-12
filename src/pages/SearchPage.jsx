import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Book, ChevronRight, FileText, Command } from 'lucide-react';
import subjectsData from '../../data/subjects.json';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Keyboard shortcut to focus search
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

    const filtered = [];
    const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);

    subjectsData.forEach(subject => {
      subject.units.forEach(unit => {
        unit.topics.forEach(topic => {
          const contentToSearch = `${subject.title} ${unit.title} ${topic.title} ${subject.description || ''}`.toLowerCase();
          const matches = searchTerms.every(term => contentToSearch.includes(term));
          
          if (matches) {
            filtered.push({
              subject,
              unit,
              topic
            });
          }
        });
      });
    });

    setResults(filtered);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-[calc(100vh-160px)]">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Search Knowledge Base</h1>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded border">
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
            placeholder="Search for topics, units, or keywords..."
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
            {results.map((result, idx) => (
              <Link
                key={idx}
                to={`/subject/${result.subject.id}/topic/${result.topic.id}`}
                className="block p-6 rounded-2xl border bg-card hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FileText size={18} />
                  </div>
                  <div className="flex items-center text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                    <span>{result.subject.title}</span>
                    <ChevronRight size={12} className="mx-2 opacity-50" />
                    <span>{result.unit.title}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">{result.topic.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1 italic">
                  Explore unit notes for {result.topic.title} in {result.subject.title}...
                </p>
              </Link>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-24 bg-muted/20 rounded-3xl border border-dashed border-muted-foreground/20">
            <SearchIcon size={48} className="mx-auto text-muted-foreground/20 mb-4" />
            <h3 className="text-xl font-bold mb-2">No matching notes</h3>
            <p className="text-muted-foreground">We couldn't find anything matching "{query}". Try different keywords.</p>
          </div>
        ) : (
          <div className="text-center py-24 bg-primary/5 rounded-3xl border border-primary/10">
            <Book size={64} className="mx-auto text-primary/20 mb-6" />
            <h3 className="text-2xl font-bold mb-2">Quick Search</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Access Java, ML, and other subject notes instantly by typing a keyword above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
