import { createContext } from 'react';
import { LocaleMetadata, SupportedLocale, TranslationSchema } from './locale.types';

export interface LocaleContextValue {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationSchema;
  locales: LocaleMetadata[];
}

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

