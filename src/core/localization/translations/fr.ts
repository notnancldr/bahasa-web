import { TranslationSchema } from '../locale.types';

export const frTranslation: TranslationSchema = {
  nav: {
    basa: 'Basa',
    aboutBasa: 'Qu’est-ce que Basa ?',
    sampler: 'Démo',
    aboutEuy: 'Qu’est-ce que .euy ?',
    philosophy: 'Philosophie',
    society: 'Notre Vision',
    features: 'Fonctionnalités',
    downloads: 'Télécharger app & .euy',
    inspector: 'Inspecteur de Deck',
    github: 'GitHub',
  },
  hero: {
    headline: 'Apprenez chaque langue.',
    headlineHighlight: 'Possédez chaque mot.',
    subheadline:
      'Basa est une application mobile hors-ligne conçue pour la maîtrise à long terme. Sans surveillance cloud, sans abonnements payants et sans compte imposé. Alimentée par l’écosystème ouvert .euy.',
    ctaApp: 'Télécharger l’application Basa',
    ctaDownloads: 'Télécharger les decks .euy',
    ctaInspect: 'Inspecter un fichier .euy',
    mockCard: {
      deckTitle: 'Argot et expressions soundanaises',
      level: 'Débutant',
      word: 'Kumaha Damang ?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: 'Comment allez-vous ? (Salutation polie et chaleureuse)',
      context: 'Salutation traditionnelle soundanaise lors d’une rencontre entre amis ou avec des aînés dans l’ouest de Java.',
      flipToReveal: 'Cliquez pour afficher la traduction',
      masteryRate: 'Taux de rétention de 94%',
    },
  },
  sampler: {
    title: 'Simulateur interactif d’apprentissage du vocabulaire',
    subtitle:
      'Découvrez Basa directement : prononciation vocale native, cartes lexicales et répétition espacée (SRS) sans connexion internet.',
  },
  aboutBasa: {
    sectionTag: 'L’APPLICATION',
    title: 'Un espace préservé pour l’apprentissage linguistique',
    description:
      'Contrairement aux applications commerciales qui enferment votre progression dans des nuages payants, Basa s’exécute entièrement sur votre appareil avec un stockage SQLite cloisonné, des jeux de rôle IA et un transfert direct entre appareils.',
    pillar1Title: 'Architecture SQLite locale',
    pillar1Desc:
      'Chaque deck forme une base de données isolée sur votre téléphone. Sans mot de passe, sans pistage distant ni télémétrie.',
    pillar2Title: 'Migration P2P directe',
    pillar2Desc:
      'Transférez profil, historique et decks via le Wi-Fi local ou un QR code grâce à son serveur HTTP intégré.',
    pillar3Title: 'Création de decks par IA',
    pillar3Desc:
      'Générez des fiches adaptées aux pays, contextes et personnages de dialogue en quelques secondes.',
    pillar4Title: 'Gamification bienveillante',
    pillar4Desc:
      'Un suivi quotidien encourageant sans sanctions punitives ni publicités intrusives.',
  },
  aboutEuy: {
    sectionTag: 'LE FORMAT DE FICHIER',
    title: 'Qu’est-ce que .euy ? Le standard ouvert de cartes mémoire',
    description:
      'Un standard JSON épuré et lisible pour échanger des cartes d’étude. Sans format binaire propriétaire ni verrouillage. Un savoir pur que vous pouvez examiner, modifier et transmettre librement.',
    culturalNoteTitle: 'Pourquoi ce nom « .euy » ?',
    culturalNoteDesc:
      'Dans la culture soundanaise (Java occidental, Indonésie), « Euy ! » est une exclamation amicale marquant la camaraderie et la complicité. Le format .euy incarne cette philosophie : accessible, chaleureux et communautaire.',
    tabVisual: 'Anatomie visuelle du deck',
    tabSchema: 'Spécification du schéma JSON',
    tabCode: 'Exemple de fichier .euy brut',
    copyCode: 'Copier le JSON',
    copied: 'Copié dans le presse-papiers !',
  },
  philosophy: {
    sectionTag: 'NOTRE PHILOSOPHIE',
    title: 'Quatre piliers pour un apprentissage souverain',
    subtitle: 'Les outils éducatifs doivent servir les humains, non les impératifs des annonceurs.',
    p1Title: 'Souveraineté numérique',
    p1Desc:
      'Vos acquis vous appartiennent. Basa ne requiert aucun compte utilisateur, ne piste rien et fonctionne intégralement hors ligne.',
    p2Title: 'Bien commun de la connaissance',
    p2Desc:
      'Les langues constituent un patrimoine humain collectif. Le savoir ne doit pas être enfermé derrière des abonnements coûteux.',
    p3Title: 'Ergonomie sereine',
    p3Desc:
      'Conçu dans des tons pastels apaisants. Nous mesurons la rétention mémorielle réelle, pas le temps d’écran captif.',
    p4Title: 'Partage décentralisé P2P',
    p4Desc:
      'Le contenu circule organiquement d’un individu à l’autre via le Wi-Fi local, les codes QR et des fichiers ouverts.',
  },
  society: {
    sectionTag: 'IMPACT DE SOCIÉTÉ',
    title: 'Comment Basa et .euy soutiennent les communautés',
    subtitle: 'Réinventer la création, le partage et la sauvegarde des langues dans le monde entier.',
    e1Title: 'Sauvegarde des langues régionales et autochtones',
    e1Desc:
      'Les applications commerciales négligent les dialectes. Avec .euy, les communautés locales documentent et partagent leur patrimoine linguistique.',
    e2Title: 'Démocratisation sans barrière financière',
    e2Desc:
      'Apprendre ne doit pas coûter 15 € par mois. Basa met à disposition la génération par IA et la répétition espacée gratuitement.',
    e3Title: 'Salles de classe sans connexion Internet',
    e3Desc:
      'En zone rurale ou isolée, les enseignants transmettent des decks .euy directement sur les appareils des élèves en quelques secondes.',
    e4Title: 'La vie privée comme droit fondamental',
    e4Desc:
      'L’éducation ne doit jamais commercialiser les comportements des apprenants ni monétiser leurs habitudes d’étude.',
  },
  features: {
    sectionTag: 'CONÇU POUR LA FLUIDITÉ',
    title: 'Pensé pour une réelle aisance conversationnelle',
    subtitle: 'Chaque outil est calibré pour mobiliser votre vocabulaire naturellement et sans stress.',
    f1Title: 'Générateur de decks par IA',
    f1Desc:
      'Indiquez la langue cible, le contexte culturel et le niveau. Obtenez des cartes complètes avec notation phonétique et rôles IA.',
    f2Title: 'Modes de pratique variés',
    f2Desc:
      'Cartes mémoires à répétition espacée, quiz audio, exercices de traduction et défis d’écriture adaptés.',
    f3Title: 'Transfert direct local P2P',
    f3Desc:
      'Appairez deux appareils par QR code ou adresse IP pour transférer instantanément vos profils et l’ensemble des decks.',
    f4Title: 'Statistiques et suivi de rétention',
    f4Desc:
      'Compteur de jours consécutifs, temps d’étude total et identification proactive des cartes à réviser en priorité.',
  },
  downloads: {
    sectionTag: 'VERSIONS ET TÉLÉCHARGEMENTS',
    title: 'Télécharger l’application Basa et les decks .euy',
    subtitle:
      'Obtenez l’application mobile souveraine Basa pour votre appareil, puis explorez les decks de vocabulaire ouverts (.euy).',
    appDownloadTitle: 'Basa pour Android',
    appDownloadSubtitle:
      'Une application mobile souveraine et 100% locale : base de données SQLite isolée, synchronisation Wi-Fi P2P locale, aucun compte requis, zéro pistage.',
    downloadApkBtn: 'Télécharger le fichier APK Android',
    viewReleasesBtn: 'Toutes les versions sur GitHub',
    appVersion: 'Version v0.1.0 · Android 8.0+',
    deckCatalogTitle: 'Catalogue sélectionné de decks .euy',
    searchPlaceholder: 'Rechercher par nom, langue ou thématique...',
    filterAll: 'Tous les decks',
    filterStarter: 'Packs de démarrage',
    filterReleases: 'Releases GitHub',
    downloadBtn: 'Télécharger .euy',
    cardCount: (count) => `${count} cartes de vocabulaire`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: 'Format .euy officiel',
    noDecksFound: 'Aucun deck ne correspond à votre recherche.',
    sourceGithub: 'Version GitHub',
    sourceBundled: 'Pack officiel',
  },
  inspector: {
    sectionTag: 'OUTIL INTERACTIF',
    title: 'Inspecteur et validateur de fichiers .euy',
    subtitle:
      'Glissez-déposez votre fichier .euy ou .json ici pour contrôler sa conformité avec le schéma officiel et parcourir ses cartes.',
    dropzoneTitle: 'Glissez-déposez votre fichier .euy ici',
    dropzoneSubtitle: 'ou cliquez pour parcourir les fichiers de votre appareil',
    dragActive: 'Relâchez pour vérifier ce deck...',
    browseFiles: 'Choisir un fichier',
    validDeck: 'Schéma .euy valide et conforme',
    invalidDeck: 'Schéma .euy non conforme',
    deckDetails: 'Détails du deck',
    cardsPreview: 'Aperçu du catalogue de cartes',
    rolePlay: 'Consigne / Persona IA',
    totalCards: 'Nombre total de cartes',
    closePreview: 'Inspecter un autre fichier',
  },
  footer: {
    tagline: 'Un apprentissage linguistique souverain, ouvert et hors-ligne pour tous.',
    openSourceDesc: 'Projet open source. Libre d’étudier, auditer, modifier et partager.',
    builtWithLove: 'Réalisé avec passion pour les apprenants de langues et le savoir libre.',
    quickLinks: 'Navigation',
    resources: 'Ressources',
  },
};

