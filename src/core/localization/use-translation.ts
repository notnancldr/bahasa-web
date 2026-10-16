import { useContext } from 'react';
import { LocaleContext, LocaleContextValue } from './locale-context';

export const useTranslation = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LocaleProvider');
  }
  return context;
};

