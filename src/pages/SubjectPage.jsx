import React from 'react';
import { useParams, Link } from 'react-router-dom';
import subjectsData from '../../data/subjects.json';
import navigationData from '../../data/navigation.json';
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap, Zap, Brain, FileText } from 'lucide-react';

const TopicCard = ({ subjectId, topic }) => (
  <Link
    to={`/subject/${subjectId}/viewer?path=${topic.path}`}
    className="group flex items-center justify-between p-4 rounded-xl border bg-card hover:border-primary/50 hover:shadow-md transition-all active:scale-[0.98]"
  >
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
        <FileText size={18} />
      </div>
      <span className="font-medium truncate group-hover:text-primary transition-colors">{topic.title}</span>
    </div>
    <ChevronRight size={18} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
  </Link>
);

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = subjectsData.find((s) => s.id === subjectId);
  const navigation = navigationData[subjectId];

  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Subject not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">Back to home</Link>
      </div>
    );
  }

  const sections = [
    { id: 'pyq-solutions', title: 'Solved PYQs', icon: <GraduationCap size={20} className="text-purple-500" /> },
    { id: 'revision', title: 'Revision Notes', icon: <Zap size={20} className="text-amber-500" /> },
    { id: 'mindmaps', title: 'Concept Maps', icon: <Brain size={20} className="text-emerald-500" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12 transition-theme">
      <Link to="/" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary mb-12 group transition-colors">
        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
        All Subjects
      </Link>

      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} />
              {subject.unitCount} Units Available
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">{subject.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {subject.description}
            </p>
          </div>
          
          <div className="flex gap-2">
            <div className="h-12 w-12 rounded-2xl bg-muted animate-pulse"></div>
            <div className="h-12 w-12 rounded-2xl bg-muted animate-pulse delay-75"></div>
            <div className="h-12 w-12 rounded-2xl bg-muted animate-pulse delay-150"></div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {subject.units.length > 0 ? (
            <div className="space-y-12">
              {subject.units.map((unit) => {
                const navUnit = navigation?.units[unit.id];
                return (
                  <section key={unit.id} className="relative">
                    <div className="sticky top-20 z-10 bg-background/80 backdrop-blur-sm py-4 mb-6">
                      <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                          {unit.id.replace('unit', '')}
                        </span>
                        {unit.title}
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(navUnit?.topics || unit.topics).map((topic) => (
                        <TopicCard key={topic.id} subjectId={subject.id} topic={topic} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border p-20 text-center bg-muted/5">
              <div className="text-4xl mb-4">🏗️</div>
              <p className="text-xl font-bold text-muted-foreground">Digital Knowledge Scaffolding in Progress</p>
              <p className="text-sm text-muted-foreground mt-2">AI is currently indexing sources for this subject.</p>
            </div>
          )}
        </div>

        <aside className="space-y-8">
          {sections.map(section => {
            const items = navigation?.extras?.filter(e => e.category === section.id) || [];
            if (items.length === 0) return null;

            return (
              <div key={section.id} className="rounded-3xl border bg-card p-6 shadow-sm">
                <h3 className="font-bold flex items-center gap-2 mb-6 px-1">
                  {section.icon}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link 
                        to={`/subject/${subject.id}/viewer?path=${item.path}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted text-sm font-medium transition-all group"
                      >
                        <span className="line-clamp-1 group-hover:text-primary transition-colors">{item.title}</span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/20">
             <h4 className="font-black text-2xl tracking-tighter mb-4 italic">2AM MODE</h4>
             <p className="text-sm opacity-90 leading-relaxed">
                Late-night study sessions are the most productive. Use the **Midnight** theme for maximum focus and minimum eye strain.
             </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SubjectPage;
