import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search notes (e.g. Java, ML...)"
        className="h-10 w-full rounded-full border border-input bg-muted/50 px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-muted/80"
        onClick={() => navigate('/search')}
        readOnly
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
  );
};

export default SearchBar;
