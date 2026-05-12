import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const SubjectCard = ({ subject }) => {
  const Icon = Icons[subject.icon] || Icons.Book;

  return (
    <Link to={`/subject/${subject.id}`} className="group">
      <div className="h-full rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{subject.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {subject.description}
        </p>
        <div className="mt-6 flex items-center text-sm font-medium text-primary">
          Explore Notes
          <Icons.ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
