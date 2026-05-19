import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import { resolveAssetUrl } from '../utils/path';
import { Info, AlertTriangle, Lightbulb, GraduationCap, CheckCircle } from 'lucide-react';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, '')}
              {...props}
            />
          ) : (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary font-medium" {...props}>
              {children}
            </code>
          );
        },
        // Callout Block Support
        blockquote: ({ children }) => {
          const text = React.Children.toArray(children)[0]?.props?.children;
          if (typeof text === 'string' && text.startsWith('[!')) {
            const match = text.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|PYQ)\]\n?(.*)/s);
            if (match) {
              const type = match[1];
              const rest = match[2];
              
              const styles = {
                NOTE: { icon: <Info size={20} />, class: 'callout-info', title: 'Note' },
                TIP: { icon: <Lightbulb size={20} />, class: 'callout-tip', title: 'Exam Tip' },
                IMPORTANT: { icon: <AlertTriangle size={20} />, class: 'callout-warning', title: 'Important' },
                WARNING: { icon: <AlertTriangle size={20} />, class: 'callout-warning', title: 'Warning' },
                CAUTION: { icon: <AlertTriangle size={20} />, class: 'callout-warning', title: 'Caution' },
                PYQ: { icon: <GraduationCap size={20} />, class: 'callout-pyq', title: 'Solved PYQ' },
              }[type] || { icon: <Info size={20} />, class: 'callout-info', title: 'Note' };

              return (
                <div className={`callout ${styles.class} transition-theme`}>
                  <div className="flex items-center gap-2 font-bold mb-2 uppercase text-xs tracking-wider">
                    {styles.icon}
                    {styles.title}
                  </div>
                  <div className="text-sm leading-relaxed">{rest || children}</div>
                </div>
              );
            }
          }
          return (
            <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic my-6 rounded-r-lg transition-theme">
              {children}
            </blockquote>
          );
        },
        h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight mt-12 mb-8">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold tracking-tight mt-10 mb-6 border-b pb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold tracking-tight mt-8 mb-4">{children}</h3>,
        p: ({ children }) => <p className="mb-6 leading-relaxed text-foreground/90">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
        li: ({ children }) => <li className="pl-1">{children}</li>,
        table: ({ children }) => (
          <div className="overflow-x-auto my-8 rounded-xl border border-border shadow-sm">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
        th: ({ children }) => <th className="border-b p-4 text-left font-bold text-muted-foreground">{children}</th>,
        td: ({ children }) => <td className="border-b p-4">{children}</td>,
        img: ({ src, alt }) => (
          <div className="my-10 flex flex-col items-center">
            <img src={resolveAssetUrl(src)} alt={alt} className="rounded-2xl shadow-2xl max-w-full h-auto border border-border" />
            {alt && <p className="text-sm text-muted-foreground mt-4 italic font-medium">{alt}</p>}
          </div>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-primary hover:underline underline-offset-4 font-semibold transition-all decoration-2" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
