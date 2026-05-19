import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, GitBranch, Palette, Check } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { id: 'midnight', name: 'Midnight', color: 'bg-blue-600' },
    { id: 'dracula', name: 'Dracula', color: 'bg-purple-500' },
    { id: 'emerald', name: 'Emerald', color: 'bg-emerald-500' },
    { id: 'sunset', name: 'Sunset', color: 'bg-orange-500' },
    { id: 'obsidian', name: 'Obsidian', color: 'bg-zinc-900' },
    { id: 'minimal-light', name: 'Minimal', color: 'bg-zinc-100' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-theme">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-primary px-2.5 py-1 rounded-lg text-primary-foreground font-black text-sm tracking-wider shadow-sm transition-colors">
              2AM
            </div>
            <span>Notes</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar className="hidden md:block w-64" />

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-muted transition-all active:scale-95"
              title="Change theme"
            >
              <Palette size={18} />
            </button>

            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border bg-card p-2 shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                  <div className="grid gap-1">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all hover:bg-muted ${theme === t.id ? 'bg-muted font-bold text-primary' : 'text-muted-foreground'}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${t.color} border border-white/20`}></div>
                          {t.name}
                        </div>
                        {theme === t.id && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

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
