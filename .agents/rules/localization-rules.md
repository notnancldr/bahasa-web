# Localization (l10n) Rules

## 1. Zero Hardcoded Strings
- Never render raw text strings directly in JSX elements.
- Always use the `useTranslation()` hook from `src/core/localization/`:
  ```tsx
  const { t } = useTranslation();
  return <h1>{t.hero.title}</h1>;
  ```

## 2. Multi-Language Completeness
- Every key declared in `TranslationSchema` (`src/core/localization/locale.types.ts`) MUST be implemented in ALL 6 supported languages:
  1. `en` (English - default)
  2. `id` (Indonesian - Bahasa Indonesia)
  3. `ja` (Japanese - 日本語)
  4. `es` (Spanish - Español)
  5. `fr` (French - Français)
  6. `de` (German - Deutsch)
- TypeScript will enforce that no language dictionary is missing any key.

## 3. Dynamic Pluralization & Interpolation
- Use formatter helper functions for dynamic values (e.g. `{cards} cards`, `{size} KB`, `{days} days ago`).
- Keep sentence fragments intact rather than stitching together translated fragments.

