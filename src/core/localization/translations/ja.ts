import { TranslationSchema } from '../locale.types';

export const jaTranslation: TranslationSchema = {
  nav: {
    basa: 'Basa',
    aboutBasa: 'Basaとは？',
    sampler: 'デモ',
    aboutEuy: '.euyとは？',
    philosophy: '理念',
    society: '社会への期待',
    features: '主な機能',
    downloads: 'アプリ & .euy DL',
    inspector: 'デッキ検証ツール',
    github: 'GitHub',
  },
  hero: {
    headline: 'どんな言語も学べる。',
    headlineHighlight: 'すべての言葉を自分のものに。',
    subheadline:
      'Basaはクラウド追跡やサブスクリプションを排除した完全オフライン対応の語学学習アプリです。オープンな.euyフラッシュカード規格で自由に学習できます。',
    ctaApp: 'Basaアプリを入手',
    ctaDownloads: '.euyデッキを探す',
    ctaInspect: '.euyファイルを検証',
    mockCard: {
      deckTitle: 'スンダ語日常会話スラング',
      level: '初級',
      word: 'Kumaha Damang?',
      phonetic: '/ku-ma-ha da-mang/',
      meaning: 'お元気ですか？（親しみと敬意を込めた挨拶）',
      context: '西ジャワのスンダ地方で親しい友人や年長者と会った際に交わされる代表的な挨拶表現。',
      flipToReveal: 'カードをクリックして訳を表示',
      masteryRate: '定着スコア 94%',
    },
  },
  sampler: {
    title: 'インタラクティブ単語学習シミュレーター',
    subtitle:
      'ネイティブ音声発音、単語カード、オフライン分散反復学習（SRS）を直接体験してください。',
  },
  aboutBasa: {
    sectionTag: 'アプリについて',
    title: '個人の主権とプライバシーを守る学習環境',
    description:
      '学習データをクラウドに閉じ込める従来のアプリとは異なり、Basaは独立したSQLiteデータベースによりデバイス上で完結。AIロールプレイ機能や端末間直接データ転送も標準搭載されています。',
    pillar1Title: 'ローカルSQLite構造',
    pillar1Desc:
      '各単語デッキは端末内の独立したSQLiteファイルとして保持され、パスワードも外部トラッキングも不要です。',
    pillar2Title: 'P2P直接データ移行',
    pillar2Desc:
      '内蔵のローカルHTTPサーバーにより、同一Wi-Fi環境またはQRコードスキャンで全学習履歴を直接別端末へ転送できます。',
    pillar3Title: 'AIによる自動デッキ生成',
    pillar3Desc:
      '目的の言語や文脈、AIキャラクターの役割を設定するだけで、実用的な単語デッキを瞬時に生成可能です。',
    pillar4Title: '心地よい学習習慣形成',
    pillar4Desc:
      '過度なペナルティを課すことなく、毎日の学習継続を自然に応援するストリーク設計。',
  },
  aboutEuy: {
    sectionTag: 'ファイル形式',
    title: '.euyとは？ オープンな単語帳規格',
    description:
      '独自のバイナリやベンダーロックインを排除した、軽量で透明なJSONベースの単語帳フォーマットです。学習者自身がいつでも自由に閲覧、編集、共有できます。',
    culturalNoteTitle: 'なぜ「.euy」という名前なのか？',
    culturalNoteDesc:
      'インドネシア西ジャワ州のスンダ文化において、「Euy!（ウイ！）」は仲間同士で掛け合う親愛と情熱のこもった挨拶です。.euyフォーマットはその精神を受け継ぎ、誰もが親しみやすく共有しやすい規格を目指しています。',
    tabVisual: 'デッキの構造とカード構成',
    tabSchema: 'JSONスキーマ仕様',
    tabCode: '.euy生データサンプル',
    copyCode: 'JSONをコピー',
    copied: 'クリップボードにコピーしました！',
  },
  philosophy: {
    sectionTag: '私たちの理念',
    title: '自立した学習を支える4つの柱',
    subtitle: '学習ツールは企業の利益ではなく、学習者自身のためにあるべきです。',
    p1Title: 'デジタル主権の尊重',
    p1Desc:
      '学習履歴はあなただけのものです。Basaはユーザーアカウントの作成を要求せず、完全オフラインで動作します。',
    p2Title: '共有財産としての知識',
    p2Desc:
      '言語は人類共通の遺産です。単語教材が有料サブスクリプションや閉ざされたプラットフォームに囲い込まれるべきではありません。',
    p3Title: '穏やかで持続可能なデザイン',
    p3Desc:
      '目に優しいパステルトーンと無駄のない操作性。中毒性ではなく、本物の定着度を重視しています。',
    p4Title: '分散型P2Pネットワーク',
    p4Desc:
      'ローカルWi-FiやQRコードを通じて、学習教材が人から人へと自律的に広がっていきます。',
  },
  society: {
    sectionTag: '社会への貢献',
    title: 'Basaと.euyがもたらす社会の変革',
    subtitle: '国境や言語の壁を越え、学びをすべての人に開かれたものに。',
    e1Title: '地域言語・少数言語の保存と継承',
    e1Desc:
      '商用アプリが見過ごしがちな方言や地域言語も、.euyを使えばコミュニティ自身の手で記録・共有・継承できます。',
    e2Title: '有料の壁を取り払う教育の民主化',
    e2Desc:
      '質の高い学習ツールに月額費用を払う必要はありません。オープンかつ無料で誰でも利用できます。',
    e3Title: 'ネット環境のない教室での活用',
    e3Desc:
      '電波の届かない地域や教育機関でも、教師から生徒の端末へ瞬時に単語デッキを配布可能です。',
    e4Title: '教育現場におけるプライバシーの擁護',
    e4Desc:
      '生徒の行動履歴や学習データを広告ネットワークに販売することは一切ありません。',
  },
  features: {
    sectionTag: '高い学習効率を実現する機能群',
    title: '実践的な会話力を身につけるために設計',
    subtitle: '忘却曲線に基づき、必要な語彙を確実に記憶に定着させます。',
    f1Title: 'AIデッキ自動生成',
    f1Desc:
      '言語と学習難易度、場面を指定するだけで、発音記号やAI役割プロンプトを含む単語帳を作成します。',
    f2Title: '多様な練習モード',
    f2Desc:
      '間隔反復フラッシュカード、リスニング四択クイズ、翻訳、スペル記述に対応しています。',
    f3Title: 'Wi-Fi/QRコードによるP2P転送',
    f3Desc:
      '同一ネットワーク内の端末同士をQRコードでペアリングし、データをスムーズに直接移行できます。',
    f4Title: '学習分析と定着度判定',
    f4Desc:
      '連続学習日数、累積学習時間の記録に加え、定着度の低い苦手単語を優先して復習提示します。',
  },
  downloads: {
    sectionTag: 'リリース & ダウンロード',
    title: 'Basaアプリと学習デッキのダウンロード',
    subtitle:
      'プライバシーを守る完全ローカルアプリ「Basa」を入手し、オープンな単語帳形式（.euy）で語彙を広げましょう。',
    appDownloadTitle: 'Android版 Basa アプリ',
    appDownloadSubtitle:
      '個人の主権を守るオフライン第一のモバイルアプリ：独立したSQLite、Wi-FiローカルP2P同期、アカウント不要、ゼロ追跡。',
    downloadApkBtn: 'Android APKをダウンロード',
    viewReleasesBtn: 'GitHubリリースページ',
    appVersion: 'バージョン v0.1.0 · Android 8.0以上',
    deckCatalogTitle: '厳選された .euy 単語デッキカタログ',
    searchPlaceholder: 'デッキ名、言語、トピックで検索...',
    filterAll: 'すべてのデッキ',
    filterStarter: '公式スターターパック',
    filterReleases: 'GitHubリリース',
    downloadBtn: '.euyをダウンロード',
    cardCount: (count) => `${count} 単語カード`,
    sizeFormatted: (size) => `${size}`,
    directEuyBadge: '公式 .euy',
    noDecksFound: '一致するデッキが見つかりませんでした。',
    sourceGithub: 'GitHubリリース',
    sourceBundled: '公式スターター',
  },
  inspector: {
    sectionTag: 'インタラクティブ検証ツール',
    title: '.euyファイル検証＆カード閲覧',
    subtitle:
      'お持ちの.euyまたは.jsonファイルをドロップすると、公式スキーマに対する適合性を検査し、カード内容をプレビューできます。',
    dropzoneTitle: '.euyファイルをここにドラッグ＆ドロップ',
    dropzoneSubtitle: 'または端末のファイルから選択',
    dragActive: 'ファイルをドロップして検証を開始...',
    browseFiles: 'ファイルを選択',
    validDeck: '有効な.euyデッキスキーマです',
    invalidDeck: '無効な.euy形式です',
    deckDetails: 'デッキ詳細情報',
    cardsPreview: '収録カード一覧',
    rolePlay: 'AIペルソナプロンプト',
    totalCards: '収録単語数',
    closePreview: '別のファイルを検証',
  },
  footer: {
    tagline: 'すべての知的好奇心に、自立したオープンな語学学習環境を。',
    openSourceDesc: 'オープンソースプロジェクト。誰でも自由に学習、検証、改善、再配布できます。',
    builtWithLove: '世界中の語学学習者とオープンナレッジコミュニティのために制作。',
    quickLinks: 'クイックリンク',
    resources: 'リソース',
  },
};

