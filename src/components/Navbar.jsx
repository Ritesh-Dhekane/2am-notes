import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, BookOpen, GitBranch } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-primary p-1.5 rounded-lg text-primary-foreground shadow-sm">
              <BookOpen size={20} />
            </div>
            <span>2AM <span className="text-primary">Notes</span></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar className="hidden md:block w-64" />

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-muted transition-all active:scale-95"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://github.com/Ritesh-Dhekane/2am-notes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-muted transition-all active:scale-95"
            title="View on GitHub"
          >
            <GitBranch size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
