import React, { useEffect, useState } from 'react';
import { LocaleContext } from './locale-context';
import { SupportedLocale, SUPPORTED_LOCALES, TranslationSchema } from './locale.types';
import { deTranslation } from './translations/de';
import { enTranslation } from './translations/en';
import { esTranslation } from './translations/es';
import { frTranslation } from './translations/fr';
import { idTranslation } from './translations/id';
import { jaTranslation } from './translations/ja';

const translationsMap: Record<SupportedLocale, TranslationSchema> = {
  en: enTranslation,
  id: idTranslation,
  ja: jaTranslation,
  es: esTranslation,
  fr: frTranslation,
  de: deTranslation,
};

const LOCALE_STORAGE_KEY = 'basa_selected_locale';

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale | null;
    if (saved && saved in translationsMap) return saved;

    // Detect browser language
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang in translationsMap) {
      return browserLang as SupportedLocale;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
  };

  const t = translationsMap[locale] || translationsMap.en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, locales: SUPPORTED_LOCALES }}>
      {children}
    </LocaleContext.Provider>
  );
};

