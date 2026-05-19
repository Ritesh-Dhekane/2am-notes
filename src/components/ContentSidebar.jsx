import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, FileText, GraduationCap, Zap, Brain, X, ArrowLeft } from 'lucide-react';
import { buildCleanUrl } from '../utils/path';

const ContentSidebar = ({ subject, navigation, isOpen, onClose, activePath }) => {
  if (!subject || !navigation) return null;

  const sections = [
    { id: 'units', title: 'Curriculum', icon: <FileText size={16} /> },
    { id: 'pyq-solutions', title: 'Solved PYQs', icon: <GraduationCap size={16} /> },
    { id: 'revision', title: 'Revision Hub', icon: <Zap size={16} /> },
    { id: 'mindmaps', title: 'Mindmaps', icon: <Brain size={16} /> },
  ];

  const getExtraItems = (category) => {
    return (navigation.extras || []).filter(item => item.category === category);
  };

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-card border-r transition-transform duration-300 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:translate-x-0 ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
      <div className="h-full flex flex-col p-4 overflow-y-auto custom-scrollbar">
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <span className="font-bold">Navigation</span>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors"><X size={20} /></button>
        </div>
        
        <Link to={`/subject/${subject.id}`} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group border rounded-xl hover:bg-muted">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Dashboard
        </Link>

        <div className="space-y-8">
          {/* Units */}
          {Object.values(navigation.units || {}).some(unit => unit.topics && unit.topics.length > 0) && (
            <div>
              <div className="flex items-center gap-2 px-3 mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                <FileText size={14} />
                Units
              </div>
              <div className="space-y-4">
                {Object.entries(navigation.units || {}).map(([unitId, unit]) => (
                  <div key={unitId} className="space-y-1">
                    <div className="px-3 text-xs font-semibold text-muted-foreground/80">{unit.title}</div>
                    <ul className="space-y-1">
                      {unit.topics.map((topic) => (
                        <li key={topic.id}>
                          <Link
                            to={buildCleanUrl(topic.path)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${activePath === topic.path ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                            onClick={onClose}
                          >
                            <ChevronRight size={14} className={activePath === topic.path ? 'opacity-100' : 'opacity-20'} />
                            <span className="line-clamp-1">{topic.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extras */}
          {sections.slice(1).map(section => {
            const items = getExtraItems(section.id);
            if (items.length === 0) return null;

            return (
              <div key={section.id}>
                <div className="flex items-center gap-2 px-3 mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  {section.icon}
                  {section.title}
                </div>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={buildCleanUrl(item.path)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${activePath === item.path ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                        onClick={onClose}
                      >
                        <ChevronRight size={14} className={activePath === item.path ? 'opacity-100' : 'opacity-20'} />
                        <span className="line-clamp-1">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ContentSidebar;
