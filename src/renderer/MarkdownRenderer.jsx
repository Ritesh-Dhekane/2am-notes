import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';

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
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          );
        },
        h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 border-b pb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
        p: ({ children }) => <p className="mb-4 leading-relaxed text-foreground/90">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        table: ({ children }) => (
          <div className="overflow-x-auto my-6 rounded-lg border">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
        th: ({ children }) => <th className="border p-3 text-left font-bold">{children}</th>,
        td: ({ children }) => <td className="border p-3">{children}</td>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic my-6 rounded-r-lg">
            {children}
          </blockquote>
        ),
        img: ({ src, alt }) => (
          <div className="my-8 flex flex-col items-center">
            <img src={src} alt={alt} className="rounded-xl shadow-lg max-w-full h-auto" />
            {alt && <p className="text-sm text-muted-foreground mt-2 italic">{alt}</p>}
          </div>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-primary hover:underline underline-offset-4 font-medium transition-all" target="_blank" rel="noopener noreferrer">
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
