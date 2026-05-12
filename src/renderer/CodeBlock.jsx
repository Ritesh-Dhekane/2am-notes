import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, Terminal } from 'lucide-react';

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-[#1e1e1e]">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-zinc-800/50 select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            <Terminal size={12} />
            {language || 'text'}
          </div>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all active:scale-95 text-xs font-medium"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-500" />
              <span className="text-emerald-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="text-sm font-mono leading-relaxed relative overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            backgroundColor: 'transparent',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            maxHeight: '600px', // Prevent excessively long blocks
            overflow: 'auto',
          }}
          codeTagProps={{
            style: {
              fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              display: 'block', // Ensures horizontal scroll works on the code tag if needed
            }
          }}
          showLineNumbers={true}
          lineNumberStyle={{ 
            minWidth: '3em', 
            paddingRight: '1.5em', 
            color: '#4b4b4b', 
            textAlign: 'right',
            userSelect: 'none',
            borderRight: '1px solid #333',
            marginRight: '1rem'
          }}
          wrapLines={false} // Disable wrapping to allow horizontal scrolling as requested
        >
          {value}
        </SyntaxHighlighter>
      </div>

      {/* Subtle bottom gradient for long blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default CodeBlock;
