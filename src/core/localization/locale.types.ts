export type SupportedLocale = 'en' | 'id' | 'ja' | 'es' | 'fr' | 'de';

export interface LocaleMetadata {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LOCALES: LocaleMetadata[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
];

export interface TranslationSchema {
  nav: {
    aboutBasa: string;
    sampler: string;
    aboutEuy: string;
    philosophy: string;
    society: string;
    features: string;
    downloads: string;
    inspector: string;
    github: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaApp: string;
    ctaDownloads: string;
    ctaInspect: string;
    mockCard: {
      deckTitle: string;
      level: string;
      word: string;
      phonetic: string;
      meaning: string;
      context: string;
      flipToReveal: string;
      masteryRate: string;
    };
  };
  sampler: {
    title: string;
    subtitle: string;
  };
  aboutBasa: {
    sectionTag: string;
    title: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  aboutEuy: {
    sectionTag: string;
    title: string;
    description: string;
    culturalNoteTitle: string;
    culturalNoteDesc: string;
    tabVisual: string;
    tabSchema: string;
    tabCode: string;
    copyCode: string;
    copied: string;
  };
  philosophy: {
    sectionTag: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  society: {
    sectionTag: string;
    title: string;
    subtitle: string;
    e1Title: string;
    e1Desc: string;
    e2Title: string;
    e2Desc: string;
    e3Title: string;
    e3Desc: string;
    e4Title: string;
    e4Desc: string;
  };
  features: {
    sectionTag: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  downloads: {
    sectionTag: string;
    title: string;
    subtitle: string;
    appDownloadTitle: string;
    appDownloadSubtitle: string;
    downloadApkBtn: string;
    viewReleasesBtn: string;
    appVersion: string;
    deckCatalogTitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterStarter: string;
    filterReleases: string;
    downloadBtn: string;
    cardCount: (count: number) => string;
    sizeFormatted: (size: string) => string;
    directEuyBadge: string;
    noDecksFound: string;
    sourceGithub: string;
    sourceBundled: string;
  };
  inspector: {
    sectionTag: string;
    title: string;
    subtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    dragActive: string;
    browseFiles: string;
    validDeck: string;
    invalidDeck: string;
    deckDetails: string;
    cardsPreview: string;
    rolePlay: string;
    totalCards: string;
    closePreview: string;
  };
  footer: {
    tagline: string;
    openSourceDesc: string;
    builtWithLove: string;
    quickLinks: string;
    resources: string;
  };
}

