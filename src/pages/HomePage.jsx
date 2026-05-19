import React from 'react';
import SubjectCard from '../components/SubjectCard';
import subjectsData from '../../data/subjects.json';
import contentIndex from '../../data/content-index.json';
import navigationData from '../../data/navigation.json';
import { Sparkles, Brain, Clock, Zap } from 'lucide-react';

const HomePage = () => {
  const totalRealItems = contentIndex.length;
  const totalSubjects = subjectsData.length;
  const activeSubjects = Object.keys(navigationData).filter(subId => {
    const nav = navigationData[subId];
    const hasTopics = nav?.units && Object.values(nav.units).some(unit => unit.topics && unit.topics.length > 0);
    const hasExtras = nav?.extras && nav.extras.length > 0;
    return hasTopics || hasExtras;
  }).length;

  return (
    <div className="container mx-auto px-4 py-20 transition-theme">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-xs font-bold uppercase tracking-widest text-primary mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles size={14} />
          Powered by Academic AI
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-4 duration-700">
          MASTER YOUR <br />
          SYLLABUS AT <span className="text-primary italic">2 AM.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Curated markdown notes, solved PYQs, and revision modules designed for high-pressure exam prep.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
           <div className="flex items-center gap-2"><Brain size={18} className="text-primary" /> Active Recall Ready</div>
           <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Optimized for Speed</div>
           <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> Multi-Theme UI</div>
        </div>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {subjectsData.map((subject, idx) => (
          <div key={subject.id} className={`animate-in fade-in slide-in-from-bottom-8 duration-700`} style={{ animationDelay: `${idx * 100}ms` }}>
            <SubjectCard subject={subject} />
          </div>
        ))}
      </div>

      {/* System Status Dashboard Footer */}
      <div className="mt-32 p-8 md:p-12 rounded-[2rem] bg-card/50 border border-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
          <div>
            <h2 className="text-2xl font-black tracking-tighter mb-2 uppercase text-foreground">
              Study OS Database
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              A centralized, theme-aware knowledge platform serving markdown revision logs and verified PYQ solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <div className="border border-border/80 bg-muted/30 p-4 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Indexing status</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Fully Synced
              </span>
            </div>
            
            <div className="border border-border/80 bg-muted/30 p-4 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Active Modules</span>
              <span className="text-sm font-bold text-foreground">
                {activeSubjects} / {totalSubjects} Subjects
              </span>
            </div>
            
            <div className="border border-border/80 bg-muted/30 p-4 rounded-xl col-span-2 sm:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 block mb-1">Indexed Items</span>
              <span className="text-sm font-bold text-foreground">
                {totalRealItems} Active Logs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
