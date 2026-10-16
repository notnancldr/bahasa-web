import { TranslationSchema } from '../locale.types';

export const deTranslation: TranslationSchema = {
  nav: {
    aboutBasa: 'Was ist Basa?',
    sampler: 'Demo',
    aboutEuy: 'Was ist .euy?',
    philosophy: 'Philosophie',
    society: 'Gesellschaft',
    features: 'Funktionen',
    downloads: 'App & .euy herunterladen',
    inspector: 'Deck-Inspektor',
    github: 'GitHub',
  },
  hero: {
    badge: 'Offene, souveräne und 100 % offlinefähige Sprachbegleitung',
    headline: 'Lerne jede Sprache.',
    headlineHighlight: 'Mach jedes Wort zu deinem.',
    subheadline:
      'Basa ist eine Offline-First-Mobil-App für nachhaltiges Sprachenlernen. Frei von Cloud-Tracking, Paywalls oder Pflichtkonten. Angetrieben durch das offene .euy-Lernkartenformat.',
    ctaApp: 'Basa-App herunterladen',
    ctaDownloads: '.euy-Decks herunterladen',
    ctaInspect: '.euy-Datei prüfen',
    mockCard: {
      deckTitle: 'Sundanesischer Alltagswortschatz',
      level: 'Anfänger',
      word: 'Kumaha Damang?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: 'Wie geht es dir? (Höfliche, herzliche Begrüßung)',
      context: 'Traditioneller sundanesischer Gruß beim Treffen von Freunden oder Älteren in West-Java.',
      flipToReveal: 'Karte anklicken, um Übersetzung anzuzeigen',
      masteryRate: '94 % Behaltensquote',
    },
  },
  sampler: {
    title: 'Interaktiver Vokabel-Lernsampler',
    subtitle:
      'Erlebe Basa direkt: muttersprachliche Audio-Aussprache, Wortkarten und automatische Wiederholung (SRS) ohne Internetzugang.',
  },
  aboutBasa: {
    sectionTag: 'DIE ANWENDUNG',
    title: 'Ein geschützter Raum für echten Sprachgewinn',
    description:
      'Im Gegensatz zu kommerziellen Apps, die deinen Lernfortschritt in proprietären Clouds einsperren, läuft Basa vollständig lokal mit isolierten SQLite-Datenbanken, KI-Dialogrollen und direkter Datenübertragung.',
    pillar1Title: 'Lokale SQLite-Architektur',
    pillar1Desc:
      'Jedes Deck bildet eine isolierte Datenbank auf deinem Smartphone. Ohne Passwörter, ohne externe Überwachung.',
    pillar2Title: 'Direkte P2P-Migration',
    pillar2Desc:
      'Übertrage Profil, Verlauf und Decks via lokalem WLAN oder QR-Code dank integriertem Offline-HTTP-Server.',
    pillar3Title: 'KI-gestützte Deck-Erstellung',
    pillar3Desc:
      'Generiere Vokabeldecks passend zu Zielländern, Alltagsdialogen und KI-Personas in Sekundenschnelle.',
    pillar4Title: 'Achtsame Gewohnheitsbildung',
    pillar4Desc:
      'Tägliche Lernstreaks fördern die Routine, ganz ohne frustrierende Strafmechanismen oder Werbebanner.',
  },
  aboutEuy: {
    sectionTag: 'DAS DATEIFORMAT',
    title: 'Was ist .euy? Der universelle offene Deck-Standard',
    description:
      'Ein transparenter, leichtgewichtiger JSON-Standard für Karteikarten. Ohne proprietäre Binärformate oder Vendor-Lock-in. Pures Wissen, das du jederzeit prüfen, anpassen und weitergeben kannst.',
    culturalNoteTitle: 'Warum der Name „.euy“?',
    culturalNoteDesc:
      'In der sundanesischen Kultur (West-Java, Indonesien) ist „Euy!“ ein herzlicher Ausruf unter Gefährten – voller Wärme und Zusammenhalt. Das .euy-Format spiegelt diese Haltung wider: offen, nahbar und gemeinschaftlich.',
    tabVisual: 'Visueller Deck-Aufbau',
    tabSchema: 'JSON-Schema-Spezifikation',
    tabCode: 'Rohbeispiel einer .euy-Datei',
    copyCode: 'JSON kopieren',
    copied: 'In die Zwischenablage kopiert!',
  },
  philosophy: {
    sectionTag: 'UNSERE PHILOSOPHIE',
    title: 'Vier Säulen des souveränen Lernens',
    subtitle: 'Wir sind überzeugt: Lernwerkzeuge müssen Menschen dienen, keinen Renditeinteressen.',
    p1Title: 'Digitale Souveränität',
    p1Desc:
      'Dein Lernfortschritt gehört dir. Basa erfordert kein Benutzerkonto, sammelt keine Daten und funktioniert komplett offline.',
    p2Title: 'Wissen als Gemeinschaftsgut',
    p2Desc:
      'Sprachen sind ein weltweites Kulturgut. Lernmaterialien dürfen nicht hinter Aboschranken weggesperrt werden.',
    p3Title: 'Ruhige Lernergnomie',
    p3Desc:
      'Gestaltet in sanften Pastelltönen ohne Reizüberflutung. Wir messen echten Lerneffekt, nicht süchtig machende Bildschirmzeit.',
    p4Title: 'Dezentraler P2P-Austausch',
    p4Desc:
      'Lerninhalte verbreiten sich organisch von Mensch zu Mensch über lokales WLAN, QR-Codes und freie Dateien.',
  },
  society: {
    sectionTag: 'GESELLSCHAFTLICHER ANSPRUCH',
    title: 'Wie Basa und .euy Gemeinschaften stärken',
    subtitle: 'Sprachbildung neu gedacht: frei zugänglich, teilbar und grenzenlos haltbar.',
    e1Title: 'Schutz von Regional- und Minderheitensprachen',
    e1Desc:
      'Große Plattformen ignorieren lokale Mundarten. Mit .euy können Gemeinschaften ihre Muttersprachen einfach dokumentieren und lehren.',
    e2Title: 'Chancengleichheit ohne Kostenhürden',
    e2Desc:
      'Sprachkompetenz darf kein Privileg teurer Abonnements sein. Basa stellt KI-Generierung und Spaced Repetition kostenfrei bereit.',
    e3Title: 'Klassenzimmer ohne Internetanbindung',
    e3Desc:
      'In ländlichen Gebieten können Lehrkräfte .euy-Decks im lokalen WLAN binnen Sekunden an alle Schülergeräte verteilen.',
    e4Title: 'Datenschutz als Bildungsrecht',
    e4Desc:
      'Lernsoftware darf niemals Verhaltensmuster von Schülern monetarisieren oder an Werbenetzwerke verkaufen.',
  },
  features: {
    sectionTag: 'FÜR ECHTE FLÜSSIGKEIT ENTWICKELT',
    title: 'Entwickelt für den praktischen Sprachgebrauch',
    subtitle: 'Jedes Detail ist darauf ausgelegt, Wörter stressfrei und dauerhaft abrufbar zu machen.',
    f1Title: 'KI-Deck-Generator',
    f1Desc:
      'Zielsprache, Kontext und Niveau wählen: Erhalte fertige Decks mit Lautschrift und Dialog-Rollen.',
    f2Title: 'Vielfältige Übungsmodi',
    f2Desc:
      'Karteikarten mit Spaced Repetition, Hörverständnis-Quizze, Übersetzungen und Schreibübungen mit adaptiver Bewertung.',
    f3Title: 'Direkter P2P-Transfer',
    f3Desc:
      'Zwei Geräte per QR-Code oder IP koppeln und den gesamten Lernstand ohne Internetverbindung übertragen.',
    f4Title: 'Fundierte Lernanalysen',
    f4Desc:
      'Tages-Streaks, Gesamtzeit und automatische Hinweise auf selten geübte Vokabeln, bevor sie in Vergessenheit geraten.',
  },
  downloads: {
    sectionTag: 'RELEASES & DOWNLOADS',
    title: 'Basa-App & .euy-Lernkarten herunterladen',
    subtitle:
      'Hole dir die souveräne Basa-Mobil-App für dein Gerät und entdecke offene Lernkarten-Decks (.euy) zur Wortschatzerweiterung.',
    appDownloadTitle: 'Basa für Android',
    appDownloadSubtitle:
      'Eine souveräne, lokale Offline-First-Mobil-App: isolierte SQLite-Datenbank, lokale P2P-WLAN-Synchronisation, kein Benutzerkonto erforderlich, null Tracking.',
    downloadApkBtn: 'Android-APK herunterladen',
    viewReleasesBtn: 'Alle Releases auf GitHub',
    appVersion: 'Version v0.1.0 · Android 8.0+',
    deckCatalogTitle: 'Kuratierter .euy-Lernkartendeck-Katalog',
    searchPlaceholder: 'Nach Name, Sprache oder Thema suchen...',
    filterAll: 'Alle Decks',
    filterStarter: 'Kuratierte Starterdecks',
    filterReleases: 'GitHub-Releases',
    downloadBtn: '.euy herunterladen',
    cardCount: (count) => `${count} Vokabelkarten`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: 'Offizielles .euy',
    noDecksFound: 'Keine Decks gefunden, die deinen Suchkriterien entsprechen.',
    sourceGithub: 'GitHub-Release',
    sourceBundled: 'Offizielles Starterdeck',
  },
  inspector: {
    sectionTag: 'INTERAKTIVES WERKZEUG',
    title: 'Dateiprüfer & Inspektor für .euy-Decks',
    subtitle:
      'Ziehe deine .euy- oder .json-Datei hierher, um sie gegen das offizielle Schema zu validieren und die Karteninhalte zu prüfen.',
    dropzoneTitle: '.euy-Datei hierher ziehen und ablegen',
    dropzoneSubtitle: 'oder klicken, um eine Datei vom Gerät auszuwählen',
    dragActive: 'Loslassen, um das Deck zu prüfen...',
    browseFiles: 'Datei auswählen',
    validDeck: 'Gültiges .euy-Deck-Schema',
    invalidDeck: 'Ungültiges .euy-Schema',
    deckDetails: 'Deck-Übersicht',
    cardsPreview: 'Vorschau der Karten',
    rolePlay: 'KI-Persona-Prompt',
    totalCards: 'Karten gesamt',
    closePreview: 'Weitere Datei prüfen',
  },
  footer: {
    tagline: 'Souveränes, offenes und offlinefähiges Sprachenlernen für alle.',
    openSourceDesc: 'Open-Source-Projekt. Frei zu erforschen, zu prüfen, anzupassen und zu teilen.',
    builtWithLove: 'Entwickelt für Sprachbegeisterte und freies Wissen weltweit.',
    quickLinks: 'Navigation',
    resources: 'Ressourcen',
  },
};

