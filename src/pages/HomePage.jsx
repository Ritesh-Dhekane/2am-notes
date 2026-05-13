import React from 'react';
import SubjectCard from '../components/SubjectCard';
import subjectsData from '../../data/subjects.json';
import { Sparkles, Brain, Clock, Zap } from 'lucide-react';

const HomePage = () => {
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

      {/* Motivational Footer */}
      <div className="mt-32 p-12 rounded-[3rem] bg-card border border-border text-center overflow-hidden relative group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-110"></div>
         <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 italic">STOP PROCRASTINATING.</h2>
         <p className="text-muted-foreground mb-8 text-lg">Pick a subject and start your 2 AM session now.</p>
         <button className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-black tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
            BROWSE CATALOG
         </button>
      </div>
    </div>
  );
};

export default HomePage;
