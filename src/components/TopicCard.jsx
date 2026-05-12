import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';

const TopicCard = ({ subjectId, topic }) => {
  return (
    <Link
      to={`/subject/${subjectId}/topic/${topic.id}`}
      className="flex items-center justify-between p-4 rounded-xl border bg-muted/30 hover:bg-muted hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-3">
        <FileText size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="font-medium group-hover:text-primary transition-colors">{topic.title}</span>
      </div>
      <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
    </Link>
  );
};

export default TopicCard;
