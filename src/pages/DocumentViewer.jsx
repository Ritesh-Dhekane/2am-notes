import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Info,
} from 'lucide-react';
import subjectsData from '../../data/subjects.json';
import dumpData from '../../data/dump-index.json';
import { resolveAssetUrl } from '../utils/path';
import {
  getRawDocumentCategoryLabel,
  RAW_DOCUMENT_NOTICE,
} from '../utils/rawDocuments';
import { updatePageMetadata } from '../utils/seo';

const getIcon = (type) => {
  const loweredType = type.toLowerCase();
  if (loweredType === 'pdf') return <GraduationCap size={18} className="text-purple-500" />;
  return <FileText size={18} className="text-blue-500" />;
};

const DocumentViewer = () => {
  const { subjectId, docId } = useParams();
  const [textPreview, setTextPreview] = useState('');
  const [textError, setTextError] = useState(null);
  const [loadingText, setLoadingText] = useState(false);

  const subject = subjectsData.find((entry) => entry.id === subjectId);
  const docs = dumpData[subjectId] || [];
  const doc = docs.find((entry) => entry.id === docId);

  const fileUrl = doc ? resolveAssetUrl(doc.path) : '';
  const previewMode = useMemo(() => {
    if (!doc) return 'missing';
    if (doc.type === 'pdf') return 'pdf';
    if (doc.type === 'txt') return 'text';
    return 'download';
  }, [doc]);

  useEffect(() => {
    if (!subject || !doc) return;

    updatePageMetadata({
      title: doc.name,
      description: `Reference document viewer for ${doc.name} under ${subject.title}.`,
      subjectTitle: subject.title,
    });
  }, [doc, subject]);

  useEffect(() => {
    if (previewMode !== 'text' || !fileUrl) return;

    const loadText = async () => {
      try {
        setLoadingText(true);
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error('Failed to load text file');
        const text = await response.text();
        setTextPreview(text);
        setTextError(null);
      } catch (error) {
        console.error(error);
        setTextError('Unable to load this text file preview right now.');
      } finally {
        setLoadingText(false);
      }
    };

    loadText();
  }, [fileUrl, previewMode]);

  if (!subject || !doc) {
    return <Navigate to={subject ? `/subject/${subjectId}` : '/'} replace />;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background transition-theme">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <Link
          to={`/subject/${subjectId}`}
          className="group mb-8 inline-flex items-center text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to {subject.title}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <div className="border-b border-border bg-muted/20 px-6 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {getIcon(doc.type)}
                    {getRawDocumentCategoryLabel(doc.category)}
                  </div>
                  <h1 className="break-words text-2xl font-black tracking-tight md:text-4xl">{doc.name}</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {doc.type.toUpperCase()} • {doc.size}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={fileUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-muted"
                  >
                    <ExternalLink size={16} />
                    Open File
                  </a>
                </div>
              </div>
            </div>

            <div className="min-h-[70vh] bg-muted/10">
              {previewMode === 'pdf' && (
                <iframe
                  title={doc.name}
                  src={fileUrl}
                  className="h-[70vh] w-full"
                />
              )}

              {previewMode === 'text' && (
                <div className="p-6">
                  {loadingText ? (
                    <div className="py-16 text-center text-sm text-muted-foreground">Loading text preview...</div>
                  ) : textError ? (
                    <div className="py-16 text-center text-sm text-destructive">{textError}</div>
                  ) : (
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border bg-background p-6 text-sm leading-7 text-foreground">
                      {textPreview}
                    </pre>
                  )}
                </div>
              )}

              {previewMode === 'download' && (
                <div className="flex h-[70vh] items-center justify-center p-8">
                  <div className="max-w-md rounded-3xl border border-dashed border-border bg-background/80 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                      <Info size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Preview not available in browser</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      This file type is stored in the dashboard and ready to download, but this viewer currently provides
                      inline preview only for PDF and TXT files.
                    </p>
                    <div className="mt-6">
                      <a
                        href={fileUrl}
                        download
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <Download size={16} />
                        Download File
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border bg-card p-6 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Document Details</h2>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Subject</p>
                  <p className="font-semibold text-foreground">{subject.title}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-semibold text-foreground">{getRawDocumentCategoryLabel(doc.category)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">File type</p>
                  <p className="font-semibold text-foreground">{doc.type.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Original folder</p>
                  <p className="break-all font-semibold text-foreground">{doc.sourceFolder}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 text-sm leading-relaxed text-amber-600 shadow-sm">
              <h2 className="mb-3 font-bold uppercase tracking-widest">Notice</h2>
              <p>{RAW_DOCUMENT_NOTICE}</p>
            </div>
          </aside>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground">
          The developer of this site is not claiming any rights over this file. It is shared here only for student reference.
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
