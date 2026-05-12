import React from 'react';
import { useParams, Link } from 'react-router-dom';
import subjectsData from '../../data/subjects.json';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import TopicCard from '../components/TopicCard';


const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Subject not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to All Subjects
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-2xl text-primary">
            <BookOpen size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{subject.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {subject.description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {subject.units.length > 0 ? (
            <div className="space-y-8">
              {subject.units.map((unit) => (
                <section key={unit.id} className="rounded-2xl border bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-primary/50 text-lg">#</span> {unit.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {unit.topics.map((topic) => (
                      <TopicCard key={topic.id} subjectId={subject.id} topic={topic} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed p-12 text-center">
              <p className="text-muted-foreground">No notes available for this subject yet. AI is working on it!</p>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">PYQ Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Revision Notes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Formula Sheets</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Viva Questions</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SubjectPage;
