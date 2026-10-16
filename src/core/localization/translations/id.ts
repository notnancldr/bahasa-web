import { TranslationSchema } from '../locale.types';

export const idTranslation: TranslationSchema = {
  nav: {
    basa: 'Basa',
    aboutBasa: 'Apa itu Basa?',
    sampler: 'Simulasi',
    aboutEuy: 'Apa itu .euy?',
    philosophy: 'Filosofi',
    society: 'Visi sosial',
    features: 'Fitur',
    downloads: 'Unduh Aplikasi & .euy',
    inspector: 'Inspektor deck',
    github: 'GitHub',
  },
  hero: {
    headline: 'Pelajari bahasa apa saja.',
    headlineHighlight: 'Miliki setiap kosakatanya.',
    subheadline:
      'Basa adalah aplikasi seluler offline-first untuk pembelajaran seumur hidup. Bebas dari pelacakan cloud, langganan berbayar, atau pembuatan akun. Didukung oleh ekosistem kartu terbuka .euy.',
    ctaApp: 'Unduh Aplikasi Basa',
    ctaDownloads: 'Jelajahi Deck .euy',
    ctaInspect: 'Periksa berkas .euy',
    mockCard: {
      deckTitle: 'Percakapan sehari-hari bahasa Sunda',
      level: 'Pemula',
      word: 'Kumaha Damang?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: 'Bagaimana kabar Anda? (Sapaan akrab dan santun)',
      context: 'Sapaan khas masyarakat Sunda saat bertemu kerabat, teman, atau orang tua di Jawa Barat.',
      flipToReveal: 'Klik kartu untuk melihat terjemahan',
      masteryRate: 'Tingkat retensi 94%',
    },
  },
  sampler: {
    title: 'Simulasi Belajar Kosakata Interaktif',
    subtitle:
      'Rasakan pengalaman belajar langsung di Basa: pengucapan audio asli, kartu kosakata, dan algoritma retensi memori (SRS) tanpa koneksi internet.',
  },
  aboutBasa: {
    sectionTag: 'TENTANG APLIKASI',
    title: 'Ruang belajar yang menghormati privasi dan kedaulatan data',
    description:
      'Tidak seperti aplikasi komersial yang mengunci progres belajar Anda di cloud berbayar, Basa berjalan seutuhnya di perangkat Anda dengan basis data SQLite terisolasi, AI dialog kontekstual, dan transfer data langsung antar perangkat.',
    pillar1Title: 'Arsitektur SQLite lokal',
    pillar1Desc:
      'Setiap deck tersimpan dalam berkas basis data SQLite tersendiri di ponsel Anda. Tanpa kata sandi, tanpa pelacakan jarak jauh.',
    pillar2Title: 'Migrasi langsung peer-to-peer',
    pillar2Desc:
      'Pindahkan seluruh profil, riwayat, dan deck belajar via jaringan Wi-Fi lokal atau kode QR berkat server HTTP lokal bawaan.',
    pillar3Title: 'Generasi deck berbasis AI',
    pillar3Desc:
      'Buat deck kosakata sesuai negara tujuan, skenario percakapan, dan persona dialog AI dalam hitungan detik.',
    pillar4Title: 'Gamifikasi yang mindful',
    pillar4Desc:
      'Pelacakan streak harian yang memotivasi kebiasaan belajar tanpa sistem penalti yang membuat stres.',
  },
  aboutEuy: {
    sectionTag: 'FORMAT BERKAS TERBUKA',
    title: 'Apa itu .euy? Standar kartu kosakata terbuka',
    description:
      'Standar berbasis JSON yang transparan dan sangat ringan untuk pertukaran kartu belajar. Tanpa format biner tertutup, tanpa penguncian vendor. Pengetahuan terstruktur murni yang dapat Anda lihat, edit, dan bagikan selamanya.',
    culturalNoteTitle: 'Mengapa dinamai ".euy"?',
    culturalNoteDesc:
      'Dalam budaya Sunda (Jawa Barat, Indonesia), "Euy!" adalah seruan akrab yang diucapkan antar sahabat—mencerminkan kehangatan, kebersamaan, dan semangat persaudaraan. Format .euy membawa semangat tersebut: ramah, terbuka, dan milik bersama.',
    tabVisual: 'Anatomi visual deck',
    tabSchema: 'Spesifikasi skema JSON',
    tabCode: 'Contoh berkas .euy mentah',
    copyCode: 'Salin JSON',
    copied: 'Tersalin ke papan klip!',
  },
  philosophy: {
    sectionTag: 'FILOSOFI DASAR KAMI',
    title: 'Empat pilar pembelajaran yang berdaulat',
    subtitle: 'Kami percaya alat belajar seharusnya melayani manusianya, bukan algoritma pengiklan.',
    p1Title: 'Kedaulatan digital penuh',
    p1Desc:
      'Progres dan catatan belajar Anda adalah milik Anda seutuhnya. Basa tidak membutuhkan akun pengguna, tanpa pelacak, dan 100% bekerja offline.',
    p2Title: 'Pengetahuan milik publik',
    p2Desc:
      'Bahasa adalah warisan bersama umat manusia. Bahan ajar tidak boleh dikurung dalam platform berbayar atau sistem langganan mikro.',
    p3Title: 'Ergonomi belajar yang tenang',
    p3Desc:
      'Dirancang dengan warna pastel yang menenangkan dan alur bebas distraksi. Kami mengukur retensi ingatan nyata, bukan kecanduan layar.',
    p4Title: 'Pertukaran desentralisasi',
    p4Desc:
      'Materi belajar tersebar secara organik dari orang ke orang melalui Wi-Fi lokal, kode QR, dan berkas mandiri.',
  },
  society: {
    sectionTag: 'EKSPEKTASI BAGI MASYARAKAT',
    title: 'Bagaimana Basa dan .euy memberdayakan masyarakat',
    subtitle: 'Membuka babak baru dalam penciptaan, distribusi, dan pelestarian bahasa di ranah publik.',
    e1Title: 'Melestarikan bahasa daerah dan komunitas',
    e1Desc:
      'Aplikasi komersial sering mengabaikan bahasa daerah. Dengan .euy, komunitas lokal dapat dengan mudah mendokumentasikan dan membagikan bahasa ibu mereka.',
    e2Title: 'Demokratisasi akses tanpa dinding bayar',
    e2Desc:
      'Akses ke materi belajar bahasa berkualitas tinggi tidak boleh dibatasi biaya bulanan mahal. Basa dan .euy dapat diakses gratis oleh siapa saja.',
    e3Title: 'Mendukung kelas tanpa koneksi internet',
    e3Desc:
      'Di sekolah pedesaan atau daerah minim sinyal, guru dapat mengirim deck .euy langsung ke gawai para siswa dalam hitungan detik.',
    e4Title: 'Privasi sebagai hak asasi dalam edukasi',
    e4Desc:
      'Teknologi pendidikan tidak boleh memperjualbelikan data perilaku siswa kepada jaringan periklanan digital.',
  },
  features: {
    sectionTag: 'DIRANCANG UNTUK PENGUASAAN NYATA',
    title: 'Dibuat untuk kelancaran bicara yang sesungguhnya',
    subtitle: 'Setiap fitur dirancang agar Anda dapat mengingat dan memakai kosakata secara alami.',
    f1Title: 'AI generator deck pintar',
    f1Desc:
      'Tentukan bahasa sasaran, nuansa budaya, dan tingkat kesulitan. Hasilkan deck lengkap dengan panduan fonetik dan persona dialog.',
    f2Title: 'Mode latihan multi-modal',
    f2Desc:
      'Kartu hafalan spaced repetition, kuis mendengarkan, latihan terjemahan, dan tantangan menulis dengan skor retensi adaptif.',
    f3Title: 'Transfer langsung P2P tanpa internet',
    f3Desc:
      'Hubungkan dua ponsel secara instan menggunakan pemindai QR kamera atau alamat IP untuk mentransfer profil dan seluruh deck belajar.',
    f4Title: 'Analisis kebiasaan dan ingatan mendalam',
    f4Desc:
      'Penghitung streak hari belajar beruntun, total waktu aktif, dan rekomendasi otomatis kartu yang jarang diulang agar tidak terlupakan.',
  },
  downloads: {
    sectionTag: 'RILIS & UNDUHAN',
    title: 'Unduh Aplikasi Basa & Deck Pembelajaran',
    subtitle:
      'Dapatkan aplikasi Basa untuk ponsel Anda dan jelajahi deck kosakata terbuka (.euy) untuk memperkaya kosakata Anda.',
    appDownloadTitle: 'Aplikasi Basa untuk Android',
    appDownloadSubtitle:
      'Aplikasi seluler offline-first berdaulat: basis data SQLite terisolasi, sinkronisasi lokal peer-to-peer, tanpa akun, dan bebas pelacakan.',
    downloadApkBtn: 'Unduh Android APK',
    viewReleasesBtn: 'Semua Rilis di GitHub',
    appVersion: 'Versi v0.1.0 · Android 8.0+',
    deckCatalogTitle: 'Koleksi Deck Kosakata .euy',
    searchPlaceholder: 'Cari deck berdasarkan nama, bahasa, atau topik...',
    filterAll: 'Semua deck',
    filterStarter: 'Paket pemula pilihan',
    filterReleases: 'Rilis GitHub',
    downloadBtn: 'Unduh .euy',
    cardCount: (count) => `${count} kartu kosakata`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: 'Format .euy resmi',
    noDecksFound: 'Tidak ada deck yang sesuai dengan pencarian Anda.',
    sourceGithub: 'Rilis GitHub',
    sourceBundled: 'Paket bawaan',
  },
  inspector: {
    sectionTag: 'ALAT INTERAKTIF',
    title: 'Inspektor dan validator berkas .euy',
    subtitle:
      'Punya berkas .euy atau .json? Tarik dan lepas ke sini untuk menguji kesesuaiannya dengan skema resmi, memeriksa metadata, dan melihat isi kartunya.',
    dropzoneTitle: 'Tarik dan lepas berkas .euy Anda ke sini',
    dropzoneSubtitle: 'atau klik untuk memilih dari penyimpanan perangkat',
    dragActive: 'Lepaskan untuk memeriksa deck ini...',
    browseFiles: 'Pilih berkas',
    validDeck: 'Skema .euy sah dan valid',
    invalidDeck: 'Skema .euy tidak valid',
    deckDetails: 'Informasi deck',
    cardsPreview: 'Pratinjau daftar kartu',
    rolePlay: 'Persona AI dialog',
    totalCards: 'Total kartu',
    closePreview: 'Periksa berkas lain',
  },
  footer: {
    tagline: 'Pembelajaran bahasa yang berdaulat, terbuka, dan offline untuk siapa saja.',
    openSourceDesc: 'Proyek sumber terbuka. Bebas untuk dipelajari, ditinjau, dimodifikasi, dan disebarkan.',
    builtWithLove: 'Dibuat dengan cinta untuk para pembelajar bahasa dan pengetahuan terbuka.',
    quickLinks: 'Navigasi',
    resources: 'Sumber daya',
  },
};
