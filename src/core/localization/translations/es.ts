import { TranslationSchema } from '../locale.types';

export const esTranslation: TranslationSchema = {
  nav: {
    aboutBasa: '¿Qué es Basa?',
    sampler: 'Simulación',
    aboutEuy: '¿Qué es .euy?',
    philosophy: 'Filosofía',
    society: 'Nuestra Visión',
    features: 'Funciones',
    downloads: 'Descargar app y .euy',
    inspector: 'Inspector de Decks',
    github: 'GitHub',
  },
  hero: {
    badge: 'Compañero de idiomas abierto, soberano y sin conexión',
    headline: 'Aprende cualquier idioma.',
    headlineHighlight: 'Haz tuyas las palabras.',
    subheadline:
      'Basa es una aplicación móvil offline-first pensada para el aprendizaje permanente. Sin rastreo en la nube, muros de pago ni cuentas obligatorias. Impulsada por el formato abierto .euy.',
    ctaApp: 'Descargar app Basa',
    ctaDownloads: 'Descargar mazos .euy',
    ctaInspect: 'Inspeccionar archivo .euy',
    mockCard: {
      deckTitle: 'Vocabulario coloquial sondanés',
      level: 'Principiante',
      word: 'Kumaha Damang?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: '¿Cómo estás? (Saludo cortés y amistoso)',
      context: 'Saludo tradicional sondanés utilizado al encontrarse con amigos o mayores en Java Occidental.',
      flipToReveal: 'Haz clic para descubrir la traducción',
      masteryRate: '94% de retención',
    },
  },
  sampler: {
    title: 'Muestrario interactivo de estudio de vocabulario',
    subtitle:
      'Experimenta Basa de primera mano: pronunciación con voz nativa, tarjetas de vocabulario y repetición espaciada (SRS) sin conexión.',
  },
  aboutBasa: {
    sectionTag: 'LA APLICACIÓN',
    title: 'Un santuario de aprendizaje que respeta tu privacidad',
    description:
      'A diferencia de las aplicaciones comerciales que secuestran tu progreso en nubes de pago, Basa se ejecuta enteramente en tu dispositivo con almacenamiento SQLite aislado, roles de IA y transferencia directa entre dispositivos.',
    pillar1Title: 'Arquitectura SQLite local',
    pillar1Desc:
      'Cada mazo es una base de datos aislada en tu teléfono. Sin contraseñas, sin recolección remota de datos ni telemetría.',
    pillar2Title: 'Migración P2P directa',
    pillar2Desc:
      'Transfiere tu perfil, historial y mazos mediante Wi-Fi local o códigos QR con su servidor HTTP offline integrado.',
    pillar3Title: 'Generación con IA personalizada',
    pillar3Desc:
      'Crea mazos adaptados a países, situaciones cotidianas y personajes conversacionales en cuestión de segundos.',
    pillar4Title: 'Gamificación consciente',
    pillar4Desc:
      'Métricas de racha que fomentan hábitos diarios saludables sin penalizaciones frustrantes ni anuncios invasivos.',
  },
  aboutEuy: {
    sectionTag: 'EL FORMATO DE ARCHIVO',
    title: '¿Qué es .euy? El estándar abierto y universal de mazos',
    description:
      'Un estándar ligero y transparente basado en JSON para intercambiar tarjetas de estudio. Sin formatos binarios propietarios ni ataduras. Conocimiento puro que puedes inspeccionar, editar y compartir para siempre.',
    culturalNoteTitle: '¿Por qué el nombre ".euy"?',
    culturalNoteDesc:
      'En la cultura sondanesa (Java Occidental, Indonesia), "¡Euy!" es una exclamación cálida y fraterna entre amigos. El formato .euy encarna ese espíritu: cercano, accesible y comunitario.',
    tabVisual: 'Anatomía visual del mazo',
    tabSchema: 'Especificación del JSON Schema',
    tabCode: 'Muestra en crudo de .euy',
    copyCode: 'Copiar JSON',
    copied: '¡Copiado al portapapeles!',
  },
  philosophy: {
    sectionTag: 'NUESTRA FILOSOFÍA',
    title: 'Cuatro pilares de aprendizaje soberano',
    subtitle: 'Creemos que las herramientas educativas deben servir a las personas, no a los inversores.',
    p1Title: 'Soberanía digital',
    p1Desc:
      'Tu progreso te pertenece. Basa no requiere registrarse, no incluye rastreadores y funciona 100% sin conexión a internet.',
    p2Title: 'Bienes comunes del conocimiento',
    p2Desc:
      'Los idiomas son patrimonio colectivo de la humanidad. El material de estudio no debe estar encerrado tras suscripciones abusivas.',
    p3Title: 'Ergonomía de estudio calmada',
    p3Desc:
      'Diseñada con tonos pastel relajantes y sin distracciones. Medimos la retención lingüística real, no la adicción a la pantalla.',
    p4Title: 'Intercambio descentralizado P2P',
    p4Desc:
      'El conocimiento se transmite orgánicamente de persona a persona mediante Wi-Fi local, códigos QR y archivos abiertos.',
  },
  society: {
    sectionTag: 'IMPACTO EN LA SOCIEDAD',
    title: 'Cómo Basa y .euy fortalecen a las comunidades',
    subtitle: 'Redefiniendo cómo se crea, comparte y preserva la educación lingüística en el mundo.',
    e1Title: 'Preservación de lenguas originarias y regionales',
    e1Desc:
      'Las aplicaciones tradicionales descuidan las lenguas minoritarias. Con .euy, las comunidades locales pueden documentar y difundir su lengua materna.',
    e2Title: 'Democratización educativa sin muros de pago',
    e2Desc:
      'Aprender un idioma no debería costar una suscripción mensual. Basa ofrece generación por IA y repetición espaciada totalmente libre.',
    e3Title: 'Aulas sin conexión a internet',
    e3Desc:
      'En escuelas rurales o zonas desconectadas, los profesores pueden enviar mazos .euy a los dispositivos del alumnado en segundos.',
    e4Title: 'Privacidad como derecho humano en educación',
    e4Desc:
      'El software educativo nunca debe monetizar la conducta del estudiante ni vender hábitos de estudio a intermediarios de publicidad.',
  },
  features: {
    sectionTag: 'DISEÑADO PARA LA FLUIDEZ',
    title: 'Creado para una verdadera comunicación cotidiana',
    subtitle: 'Cada herramienta está optimizada para que recuerdes el vocabulario en el momento oportuno.',
    f1Title: 'Generador de mazos con IA',
    f1Desc:
      'Elige idioma, contexto cultural y nivel de dificultad. Obtén mazos completos con guía fonética y roles de conversación.',
    f2Title: 'Práctica multi-modal',
    f2Desc:
      'Tarjetas con repetición espaciada, cuestionarios auditivos, ejercicios de traducción y retos de escritura.',
    f3Title: 'Transferencia local directa P2P',
    f3Desc:
      'Empareja dos dispositivos mediante escaneo QR o dirección IP para sincronizar perfiles y mazos al instante.',
    f4Title: 'Estadísticas de retención profunda',
    f4Desc:
      'Control de días consecutivos, tiempo de estudio acumulado y detección de tarjetas que requieren repaso prioritario.',
  },
  downloads: {
    sectionTag: 'LANZAMIENTOS Y DESCARGAS',
    title: 'Descarga la aplicación Basa y mazos .euy',
    subtitle:
      'Obtén la aplicación móvil soberana Basa para tu dispositivo y luego explora los mazos abiertos (.euy) para ampliar tu vocabulario.',
    appDownloadTitle: 'Basa para Android',
    appDownloadSubtitle:
      'Una aplicación móvil soberana y offline-first: base de datos SQLite aislada, sincronización local P2P por Wi-Fi, sin cuenta ni rastreo.',
    downloadApkBtn: 'Descargar APK para Android',
    viewReleasesBtn: 'Todos los lanzamientos en GitHub',
    appVersion: 'Versión v0.1.0 · Android 8.0+',
    deckCatalogTitle: 'Catálogo curado de mazos .euy',
    searchPlaceholder: 'Buscar mazos por nombre, idioma o tema...',
    filterAll: 'Todos los mazos',
    filterStarter: 'Paquetes de inicio',
    filterReleases: 'Versiones de GitHub',
    downloadBtn: 'Descargar .euy',
    cardCount: (count) => `${count} tarjetas de vocabulario`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: 'Formato .euy verificado',
    noDecksFound: 'No se encontraron mazos que coincidan con la búsqueda.',
    sourceGithub: 'Lanzamiento de GitHub',
    sourceBundled: 'Paquete oficial',
  },
  inspector: {
    sectionTag: 'HERRAMIENTA INTERACTIVA',
    title: 'Inspector y validador de archivos .euy',
    subtitle:
      '¿Tienes un archivo .euy o .json? Arrástralo aquí para validar su estructura con el esquema oficial, examinar metadatos y ver sus tarjetas.',
    dropzoneTitle: 'Arrastra y suelta tu archivo .euy aquí',
    dropzoneSubtitle: 'o haz clic para buscarlo en tu dispositivo',
    dragActive: 'Suelta el archivo para validar el mazo...',
    browseFiles: 'Seleccionar archivo',
    validDeck: 'Esquema .euy válido',
    invalidDeck: 'Esquema .euy no válido',
    deckDetails: 'Detalles del mazo',
    cardsPreview: 'Vista previa de tarjetas',
    rolePlay: 'Instrucción de IA / Persona',
    totalCards: 'Total de tarjetas',
    closePreview: 'Inspeccionar otro archivo',
  },
  footer: {
    tagline: 'Aprendizaje de idiomas soberano, abierto y sin conexión para mentes curiosas.',
    openSourceDesc: 'Proyecto de código abierto. Libre para aprender, inspeccionar, modificar y distribuir.',
    builtWithLove: 'Desarrollado con dedicación para estudiantes de idiomas y el conocimiento libre.',
    quickLinks: 'Navegación',
    resources: 'Recursos',
  },
};

