import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import subjectsData from '../../data/subjects.json';
import navigationData from '../../data/navigation.json';
import dumpData from '../../data/dump-index.json';
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Zap,
  Brain,
  FileText,
  Lock,
  FolderDown,
  Download,
  ExternalLink,
  Copy,
  Check,
  Eye,
} from 'lucide-react';
import { buildCleanUrl } from '../utils/path';
import { updatePageMetadata } from '../utils/seo';
import {
  buildRawDocumentUrl,
  getRawDocumentCategoryLabel,
  RAW_DOCUMENT_NOTICE,
} from '../utils/rawDocuments';
import { isSubjectEnabled } from '../utils/subjectAvailability';

const DisclaimerBox = () => (
  <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs leading-relaxed text-amber-500/90">
    <p className="mb-1 font-bold">Copyright & Content Notice</p>
    <p>{RAW_DOCUMENT_NOTICE}</p>
  </div>
);

const RawDocCard = ({ doc, subjectId }) => {
  const [copied, setCopied] = React.useState(false);
  const fileUrl = `${import.meta.env.BASE_URL || '/'}${doc.path}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${import.meta.env.BASE_URL || '/'}#${buildRawDocumentUrl(subjectId, doc.id)}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const getFileIcon = (type) => {
    const loweredType = type.toLowerCase();
    if (loweredType === 'pdf') return <GraduationCap size={18} className="text-purple-500" />;
    if (['doc', 'docx', 'txt'].includes(loweredType)) return <FileText size={18} className="text-blue-500" />;
    return <FileText size={18} className="text-zinc-500" />;
  };

  return (
    <div className="rounded-xl border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <Link to={buildRawDocumentUrl(subjectId, doc.id)} className="flex min-w-0 flex-1 items-start gap-3">
          <div className="shrink-0 rounded-lg bg-muted p-2">{getFileIcon(doc.type)}</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{doc.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              {getRawDocumentCategoryLabel(doc.category)} • {doc.type} • {doc.size}
            </p>
            {doc.sourceFolder !== '.' && (
              <p className="mt-1 truncate text-[11px] text-muted-foreground/80">{doc.sourceFolder}</p>
            )}
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-1">
          <Link
            to={buildRawDocumentUrl(subjectId, doc.id)}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            title="View in app"
          >
            <Eye size={16} />
          </Link>
          {doc.type.toLowerCase() === 'pdf' && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              title="Open original file"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={fileUrl}
            download
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            title="Download raw file"
          >
            <Download size={16} />
          </a>
          <button
            onClick={handleCopyLink}
            className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            title="Copy viewer link"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

const TopicCard = ({ topic }) => (
  <Link
    to={buildCleanUrl(topic.path)}
    className="group flex items-center justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]"
  >
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="shrink-0 rounded-lg bg-muted p-2 text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <FileText size={18} />
      </div>
      <span className="truncate font-medium transition-colors group-hover:text-primary">{topic.title}</span>
    </div>
    <ChevronRight size={18} className="shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-primary" />
  </Link>
);

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = subjectsData.find((entry) => entry.id === subjectId);
  const navigation = navigationData[subjectId];

  useEffect(() => {
    if (subject) {
      updatePageMetadata({
        title: subject.title,
        description: `Unlock high-yield exam preparation resources for ${subject.title} at 2AM Notes.`,
        subjectTitle: 'Subject Hub',
      });
    }
  }, [subject, subjectId]);

  if (!subject) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Subject not found</h2>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const activeUnits = Object.entries(navigation?.units || {}).filter(
    ([, unit]) => unit.topics && unit.topics.length > 0
  );

  const rawDocs = dumpData[subjectId] || [];
  const rawDocGroups = rawDocs.reduce((groups, doc) => {
    const category = doc.category || 'other';
    groups[category] = groups[category] || [];
    groups[category].push(doc);
    return groups;
  }, {});

  const hasRawDocs = rawDocs.length > 0;
  const hasActiveUnits = activeUnits.length > 0;
  const hasActiveExtras = (navigation?.extras || []).length > 0;
  const isEnabled = isSubjectEnabled({ subject, navigation, dumpData });

  if (!isEnabled) {
    return <Navigate to="/" replace />;
  }

  const sections = [
    { id: 'pyq-solutions', title: 'Solved PYQs', icon: <GraduationCap size={20} className="text-purple-500" /> },
    { id: 'revision', title: 'Revision Notes', icon: <Zap size={20} className="text-amber-500" /> },
    { id: 'mindmaps', title: 'Concept Maps', icon: <Brain size={20} className="text-emerald-500" /> },
  ];
  const totalExtraItems = navigation?.extras?.length || 0;
  const totalTopics = activeUnits.reduce((count, [, unit]) => count + (unit.topics?.length || 0), 0);
  const totalResources = totalTopics + totalExtraItems + rawDocs.length;

  return (
    <div className="container mx-auto px-4 py-12 transition-theme">
      <Link
        to="/"
        className="group mb-12 inline-flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
        All Subjects
      </Link>

      <header className="mb-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <BookOpen size={14} />
              {totalResources > 0 ? `${totalResources} Study Resources Available` : 'Workspace Initializing'}
            </div>
            <h1 className="text-4xl font-black tracking-tighter md:text-6xl">{subject.title}</h1>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">{subject.description}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {hasActiveUnits ? (
            <div className="space-y-12">
              {activeUnits.map(([unitId, unit]) => (
                <section key={unitId} className="relative">
                  <div className="sticky top-20 z-10 mb-6 bg-background/80 py-4 backdrop-blur-sm">
                    <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                        {unitId.replace('unit', '')}
                      </span>
                      {unit.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {unit.topics.map((topic) => (
                      <TopicCard key={topic.id} topic={topic} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-muted/10 p-8 md:p-12">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-xl font-bold text-foreground">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
                    </span>
                    Knowledge Pipeline Initializing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Notes are still being structured. Raw documents below are already sorted and ready to review.
                  </p>
                </div>
                <div className="flex items-center gap-1 self-start rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500 md:self-auto">
                  <Lock size={12} />
                  In Progress
                </div>
              </div>
            </div>
          )}

          {hasRawDocs && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-black tracking-tight">
                <FolderDown className="text-primary" size={24} />
                Source Material Library
              </h2>
              <DisclaimerBox />
              <div className="space-y-8">
                {Object.entries(rawDocGroups).map(([category, docs]) => (
                  <div key={category}>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      {getRawDocumentCategoryLabel(category)}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {docs.map((doc) => (
                        <RawDocCard key={doc.id} doc={doc} subjectId={subjectId} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          {sections.map((section) => {
            const items = navigation?.extras?.filter((entry) => entry.category === section.id) || [];
            if (items.length === 0) return null;

            return (
              <div key={section.id} className="rounded-3xl border bg-card p-6 shadow-sm">
                <h3 className="mb-6 flex items-center gap-2 px-1 font-bold text-foreground">
                  {section.icon}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={buildCleanUrl(item.path)}
                        className="group flex items-center justify-between rounded-xl p-3 text-sm font-medium transition-all hover:bg-muted"
                      >
                        <span className="line-clamp-1 text-foreground transition-colors group-hover:text-primary">
                          {item.title}
                        </span>
                        <ChevronRight size={14} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
};

export default SubjectPage;
