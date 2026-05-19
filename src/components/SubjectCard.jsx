import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import navigationData from '../../data/navigation.json';

const SubjectCard = ({ subject }) => {
  const Icon = Icons[subject.icon] || Icons.Book;

  const nav = navigationData[subject.id];
  const hasTopics = nav?.units && Object.values(nav.units).some(unit => unit.topics && unit.topics.length > 0);
  const hasExtras = nav?.extras && nav.extras.length > 0;
  const isEnabled = hasTopics || hasExtras;

  const cardContent = (
    <div className={`h-full rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 ${
      isEnabled 
        ? 'hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1' 
        : 'opacity-60 border-border bg-card/40 cursor-not-allowed'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
          isEnabled 
            ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
        }`}>
          <Icon size={24} />
        </div>
        {!isEnabled && (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted border border-border text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80">
            <Icons.Lock size={10} />
            In Progress
          </div>
        )}
      </div>
      <h3 className={`text-xl font-bold mb-2 transition-colors ${
        isEnabled ? 'group-hover:text-primary' : 'text-muted-foreground'
      }`}>
        {subject.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {subject.description}
      </p>
      
      <div className="mt-6 flex items-center text-sm font-medium">
        {isEnabled ? (
          <>
            <span className="text-primary">Explore Notes</span>
            <Icons.ArrowRight size={16} className="ml-2 text-primary transition-transform group-hover:translate-x-1" />
          </>
        ) : (
          <span className="text-muted-foreground/60 flex items-center gap-1">
            Pipeline Initializing...
          </span>
        )}
      </div>
    </div>
  );

  if (!isEnabled) {
    return <div className="h-full select-none">{cardContent}</div>;
  }

  return (
    <Link to={`/subject/${subject.id}`} className="group block h-full">
      {cardContent}
    </Link>
  );
};

export default SubjectCard;
