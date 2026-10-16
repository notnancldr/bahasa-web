import { Check, ChevronDown, Globe } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SupportedLocale } from '../../localization/locale.types';
import { useTranslation } from '../../localization/use-translation';

export const LanguageDropdown: React.FC = () => {
  const { locale, setLocale, locales } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocaleMeta = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLocale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] text-xs font-bold text-[#2F3A3F] dark:text-[#E8EFF1] hover:border-[#5B93AE] transition-colors cursor-pointer shadow-xs"
      >
        <span className="text-sm">{currentLocaleMeta.flag}</span>
        <span className="hidden sm:inline">{currentLocaleMeta.nativeName}</span>
        <span className="sm:hidden uppercase">{currentLocaleMeta.code}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#FAFAF8] dark:bg-[#171F23] border border-[rgba(125,138,143,0.30)] shadow-lg py-2 z-50">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#7D8A8F] border-b border-[rgba(125,138,143,0.20)] flex items-center gap-1.5">
            <Globe className="w-3 h-3" />
            <span>Select Language</span>
          </div>
          <div className="py-1">
            {locales.map((item) => (
              <button
                key={item.code}
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                  locale === item.code
                    ? 'bg-[#A9D6E5]/20 text-[#5B93AE] dark:text-[#A9D6E5] font-bold'
                    : 'text-[#2F3A3F] dark:text-[#E8EFF1] hover:bg-[rgba(125,138,143,0.12)]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.flag}</span>
                  <div>
                    <div>{item.nativeName}</div>
                    <div className="text-[10px] text-[#7D8A8F]">{item.name}</div>
                  </div>
                </div>
                {locale === item.code && <Check className="w-3.5 h-3.5 text-[#5B93AE] dark:text-[#A9D6E5]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
