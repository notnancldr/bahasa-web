import { TranslationSchema } from '../locale.types';

export const enTranslation: TranslationSchema = {
  nav: {
    basa: 'Basa',
    aboutBasa: 'What is Basa?',
    sampler: 'Demo',
    aboutEuy: 'What is .euy?',
    philosophy: 'Philosophy',
    society: 'Our Vision',
    features: 'Features',
    downloads: 'Download App & .euy',
    inspector: 'Deck Inspector',
    github: 'GitHub',
  },
  hero: {
    headline: 'Learn Any Language.',
    headlineHighlight: 'Own Every Word.',
    subheadline:
      'Basa is an offline-first mobile app designed for lifelong mastery. Free from cloud tracking, paywalls, or accounts. Powered by the open .euy flashcard ecosystem.',
    ctaApp: 'Download Basa App',
    ctaDownloads: 'Explore .euy Decks',
    ctaInspect: 'Inspect .euy File',
    mockCard: {
      deckTitle: 'Sundanese Conversational Slang',
      level: 'Beginner',
      word: 'Kumaha Damang?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: 'How are you doing? (Polite / Warm Greeting)',
      context: 'Traditional Sundanese greeting used when meeting friends or elders in West Java.',
      flipToReveal: 'Click to reveal translation',
      masteryRate: '94% Retention Score',
    },
  },
  sampler: {
    title: 'Interactive Vocabulary Study Sampler',
    subtitle:
      'Experience Basa firsthand: native speech audio pronunciation, lexical cards, and automatic memory retention (SRS) without internet access.',
  },
  aboutBasa: {
    sectionTag: 'THE APPLICATION',
    title: 'A Privacy-First Sanctuary for Language Acquisition',
    description:
      'Unlike modern language apps that trap your learning streak in closed clouds, Basa runs entirely on your device with isolated SQLite storage, custom AI roleplays, and direct device-to-device transfer.',
    pillar1Title: 'Local SQLite Architecture',
    pillar1Desc:
      'Every deck is an isolated database on your phone. No passwords, no remote data mining, no telemetry.',
    pillar2Title: 'Direct P2P Migration',
    pillar2Desc:
      'Transfer your full profile, history, and decks over local Wi-Fi or QR codes using a built-in offline HTTP server.',
    pillar3Title: 'AI-Crafted Study Decks',
    pillar3Desc:
      'Generate vocabulary tailored to specific countries, scenarios, and AI dialogue personas in seconds.',
    pillar4Title: 'Mindful Gamification',
    pillar4Desc:
      'Streak metrics that encourage daily habit formation without punitive penalties or manipulative ads.',
  },
  aboutEuy: {
    sectionTag: 'THE FILE FORMAT',
    title: 'What is .euy? The Universal Open Deck Standard',
    description:
      'A lightweight, transparent JSON-based standard for flashcard interchange. No proprietary binary bloat, no subscription locks. Just pure structured knowledge that you can inspect, edit, and share forever.',
    culturalNoteTitle: 'Why the name ".euy"?',
    culturalNoteDesc:
      'In Sundanese culture (West Java, Indonesia), "Euy!" is an iconic, friendly exclamation exchanged between companions—conveying camaraderie, warmth, and excitement. The .euy format embodies that spirit: friendly, accessible, and community-driven.',
    tabVisual: 'Visual Deck Anatomy',
    tabSchema: 'JSON Schema Specification',
    tabCode: 'Raw .euy Sample',
    copyCode: 'Copy JSON',
    copied: 'Copied to Clipboard!',
  },
  philosophy: {
    sectionTag: 'OUR CORE PHILOSOPHY',
    title: 'Four Pillars of Sovereign Learning',
    subtitle: 'We believe learning tools should serve their humans, not corporate shareholders.',
    p1Title: 'Digital Sovereignty',
    p1Desc:
      'Your vocabulary progress belongs to you. Basa requires no user accounts, no tracking tokens, and functions 100% offline without internet connection.',
    p2Title: 'Open Knowledge Commons',
    p2Desc:
      'Human languages are a collective human heritage. Study decks shouldn’t be locked inside proprietary platforms or behind recurring microtransactions.',
    p3Title: 'Mindful Study Ergonomics',
    p3Desc:
      'Designed with calming pastels and gentle feedback loops. We measure true linguistic retention rather than addictive engagement loops.',
    p4Title: 'Decentralized Peer-to-Peer',
    p4Desc:
      'Study materials spread organically peer-to-peer via local Wi-Fi, QR codes, and portable files—surviving school firewalls and network outages.',
  },
  society: {
    sectionTag: 'EXPECTATION FOR SOCIETY',
    title: 'How Basa and .euy Empower Communities',
    subtitle: 'Reimagining how language education is created, shared, and preserved across borders.',
    e1Title: 'Preserving Regional & Indigenous Languages',
    e1Desc:
      'Mainstream commercial apps ignore regional dialects and minority tongues. With .euy, local communities can easily document, preserve, and distribute their mother tongues.',
    e2Title: 'Democratizing Education Without Paywalls',
    e2Desc:
      'Quality language study tools shouldn’t cost $15/month. Basa provides premium AI generation and spaced repetition completely free and open.',
    e3Title: 'Classrooms with Zero Connectivity',
    e3Desc:
      'In rural classrooms or internet-restricted environments, teachers can beam .euy decks directly to students’ devices in seconds over local Wi-Fi.',
    e4Title: 'Privacy as a Human Right in EdTech',
    e4Desc:
      'Educational software should never monetize student behavioral data or sell study habits to advertising exchanges.',
  },
  features: {
    sectionTag: 'ENGINEERED FOR MASTERY',
    title: 'Crafted for Real Conversational Fluency',
    subtitle: 'Every feature is tuned to help you recall words effortlessly under pressure.',
    f1Title: 'AI Deck Generator',
    f1Desc:
      'Specify target language, cultural context, and difficulty. Generate comprehensive decks with phonetic guides, audio URLs, and AI dialogue personas.',
    f2Title: 'Multi-Modal Practice Modes',
    f2Desc:
      'Spaced repetition flashcards, multi-choice listening quizzes, translation drills, and writing challenges with adaptive score weighting.',
    f3Title: 'Direct Local P2P Transfer',
    f3Desc:
      'Pair two devices instantly via camera QR scan or IP address. Stream profile states and decks across the local network seamlessly.',
    f4Title: 'Deep Habit & Retention Analytics',
    f4Desc:
      'Daily streak counters, cumulative active study time, and smart identification of your least-reviewed cards before memory decays.',
  },
  downloads: {
    sectionTag: 'RELEASES & DOWNLOADS',
    title: 'Download Basa App & Study Decks',
    subtitle:
      'Get the sovereign Basa mobile app for your device, then explore open flashcard decks (.euy) to enrich your vocabulary.',
    appDownloadTitle: 'Basa for Android',
    appDownloadSubtitle:
      'A sovereign, offline-first mobile app: isolated SQLite database, local peer-to-peer Wi-Fi synchronization, no account required, zero tracking.',
    downloadApkBtn: 'Download Android APK',
    viewReleasesBtn: 'All Releases on GitHub',
    appVersion: 'Version v0.1.0 · Android 8.0+',
    deckCatalogTitle: 'Curated .euy Study Deck Catalog',
    searchPlaceholder: 'Search decks by name, language, or topic...',
    filterAll: 'All Decks',
    filterStarter: 'Curated Starter Packs',
    filterReleases: 'GitHub Releases',
    downloadBtn: 'Download .euy',
    cardCount: (count) => `${count} vocabulary cards`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: 'Verified .euy',
    noDecksFound: 'No decks found matching your search criteria.',
    sourceGithub: 'GitHub Release',
    sourceBundled: 'Official Starter',
  },
  inspector: {
    sectionTag: 'INTERACTIVE TOOL',
    title: 'In-Browser .euy File Inspector & Validator',
    subtitle:
      'Have a .euy or .json deck file? Drop it here to inspect its validity against the official JSON schema, view metadata, and browse its card contents.',
    dropzoneTitle: 'Drag & drop your .euy file here',
    dropzoneSubtitle: 'or click to browse from your device storage',
    dragActive: 'Release to validate this deck...',
    browseFiles: 'Choose File',
    validDeck: 'Valid .euy Deck Schema',
    invalidDeck: 'Invalid .euy Schema',
    deckDetails: 'Deck Overview',
    cardsPreview: 'Card Catalog Preview',
    rolePlay: 'AI Persona Prompt',
    totalCards: 'Total Cards',
    closePreview: 'Inspect Another File',
  },
  footer: {
    tagline: 'Sovereign, open, and offline language learning for curious minds everywhere.',
    openSourceDesc: 'Open source project. Free to learn, inspect, modify, and distribute.',
    builtWithLove: 'Crafted with passion for language enthusiasts & open knowledge.',
    quickLinks: 'Navigation',
    resources: 'Resources',
  },
};

