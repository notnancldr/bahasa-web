import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  copyLabel?: string;
  copiedLabel?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'json',
  copyLabel = 'Copy',
  copiedLabel = 'Copied!',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className={`relative rounded-2xl bg-[#0F1417] border border-[rgba(125,138,143,0.30)] overflow-hidden text-left ${className}`}>
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#171F23] border-b border-[rgba(125,138,143,0.20)] text-xs font-mono text-[#7D8A8F]">
        <span>{language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(125,138,143,0.15)] hover:bg-[rgba(125,138,143,0.25)] text-[#E8EFF1] transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#A8D5A2]" />
              <span className="text-[#A8D5A2] font-bold">{copiedLabel}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>{copyLabel}</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-xs md:text-sm font-mono text-[#E8EFF1] overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

