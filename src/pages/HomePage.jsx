import React, { useEffect } from 'react';
import SubjectCard from '../components/SubjectCard';
import subjectsData from '../../data/subjects.json';
import contentIndex from '../../data/content-index.json';
import navigationData from '../../data/navigation.json';
import { Terminal, Database } from 'lucide-react';
import { updatePageMetadata } from '../utils/seo';

const HomePage = () => {
  useEffect(() => {
    updatePageMetadata({
      title: 'Late Night Exam Prep',
      description: 'AI-generated, student-curated academic notes, solved PYQs, and revision materials for university exams. Fast, clean, and built for 2 AM studying.'
    });
  }, []);
  const totalRealItems = contentIndex.length;
  const totalSubjects = subjectsData.length;
  const activeSubjects = Object.keys(navigationData).filter(subId => {
    const nav = navigationData[subId];
    const hasTopics = nav?.units && Object.values(nav.units).some(unit => unit.topics && unit.topics.length > 0);
    const hasExtras = nav?.extras && nav.extras.length > 0;
    return hasTopics || hasExtras;
  }).length;

  const isWorkspaceEmpty = totalRealItems === 0;

  return (
    <div className="container mx-auto px-6 py-24 transition-theme max-w-6xl">
      {/* Elegant Header / Hero */}
      <div className="flex flex-col items-start mb-24 relative max-w-3xl">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted border border-border text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Terminal size={12} />
          {isWorkspaceEmpty ? 'Workspace Initializing' : 'Workspace Ready'}
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6 leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
          2AM NOTES.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          A minimalist study platform for high-pressure exam prep. Curated topic logs and verified PYQ solutions, optimized for late-night focus.
        </p>
      </div>

      {/* Grid of Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {subjectsData.map((subject, idx) => (
          <div key={subject.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 75}ms` }}>
            <SubjectCard subject={subject} />
          </div>
        ))}
      </div>

      {/* Minimal Database OS Dashboard Footer */}
      <div className="p-8 rounded-2xl bg-card/30 border border-border/80 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-1.5">
              <Database size={14} className="text-primary" />
              SYSTEM DASHBOARD
            </h2>
            <p className="text-xs text-muted-foreground max-w-md">
              Centralized index monitoring the status of markdown syllabus materials. Add notes to the ingestion layer to populate the workspace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <div className="border border-border/60 bg-muted/20 p-4 rounded-xl flex flex-col justify-between min-w-[160px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Indexing status</span>
              {isWorkspaceEmpty ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  Awaiting Content
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              )}
            </div>
            
            <div className="border border-border/60 bg-muted/20 p-4 rounded-xl flex flex-col justify-between min-w-[160px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Active Modules</span>
              <span className="text-xs font-bold text-foreground">
                {activeSubjects} / {totalSubjects} Modules
              </span>
            </div>
            
            <div className="border border-border/60 bg-muted/20 p-4 rounded-xl flex flex-col justify-between min-w-[160px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Active Logs</span>
              <span className="text-xs font-bold text-foreground">
                {totalRealItems} Files Indexed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
