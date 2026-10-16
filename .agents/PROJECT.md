# Project Overview & Architecture: bahasa-web

## 1. Architecture Summary
`bahasa-web` is the official web showcase and community portal for **Basa** and the **.euy** open deck format.
It adheres strictly to **Clean Architecture** and **Per-Component Single Responsibility**:
- **Domain Layer (`src/domain/`)**: Pure business entities (`EuyDeck`, `EuyCard`, `GithubRelease`, `PhilosophyPillar`) and repository contracts. No React imports, no third-party HTTP client dependencies.
- **Data Layer (`src/data/`)**: DTOs, mappers, API data sources (`GithubApiDataSource`), curated starter deck provider, and official `euy_schema.json` validator implementation.
- **Presentation Layer (`src/presentation/` & `src/core/`)**:
  - `core/components/`: Atomic design primitives (EmbossedButton, SurfaceCard, Badge, Dropzone, CodeBlock, TopNavBar).
  - `core/localization/`: Multi-language dictionary and `useTranslation()` hook.
  - `presentation/features/`: Feature modules (`hero`, `about-basa`, `about-euy`, `philosophy`, `society`, `features`, `downloads`, `inspector`).
  - `presentation/hooks/`: Hooks connecting Presentation to Domain/Data.

## 2. Directory Tree
```text
bahasa-web/
├── .agents/                                # AI agent governance & architectural guardrails
│   ├── AGENTS.md                           # Core agent rules & triggers
│   ├── PROJECT.md                          # Single source of truth for architecture & tokens
│   ├── MISTAKE.md                          # Systematic error tracking & learning
│   ├── REUSABLES.md                        # Catalog of reusable components & hooks
│   └── rules/
│       ├── clean-architecture.md           # Layer responsibilities & dependency inversion
│       ├── component-splitting.md          # Maximum LOC & modularity standards
│       ├── localization-rules.md           # Multi-language l10n enforcement
│       └── design.md                       # BASA official design system specification
├── public/
│   ├── sample-decks/                       # Ready-to-download .euy sample packs
│   │   ├── everyday-japanese.euy
│   │   ├── sundanese-slang.euy
│   │   ├── spanish-travel.euy
│   │   └── english-idioms.euy
│   └── favicon.svg
├── src/
│   ├── core/                               # Foundational cross-cutting infrastructure
│   │   ├── theme/                          # ThemeContext (light & dark mode)
│   │   ├── localization/                   # Typed i18n dictionaries (en, id, ja, es, fr, de)
│   │   ├── constants/                      # Brand tokens, github repo links
│   │   ├── utils/                          # Formatting, validation helpers
│   │   └── components/                     # Atomic design primitives
│   ├── domain/                             # Enterprise business models & contracts
│   │   ├── entities/                       # EuyDeck, EuyCard, GithubRelease, Locale
│   │   └── repositories/                   # ReleaseRepository, DeckValidatorRepository
│   ├── data/                               # Data persistence, schemas, & API clients
│   │   ├── models/                         # euy_schema.json, Release DTOs
│   │   ├── datasources/                    # GithubApiDataSource, StarterDecksDataSource
│   │   └── repositories/                   # Repository implementations
│   ├── presentation/                       # Visual components & UI feature slices
│   │   ├── hooks/                          # useReleases, useEuyValidator, useTheme
│   │   └── features/                       # Hero, About, Philosophy, Society, Downloads, etc.
│   ├── App.tsx                             # Page layout orchestration
│   ├── main.tsx                            # React entry point
│   └── index.css                           # Tailwind utilities & theme tokens
```

## 3. Design System Tokens (Parity with Mobile Flutter App)
- **Primary Color:** `#9FD5E8` (`--color-primary`)
- **Primary Dark / Border Stroke:** `#4A8B9C` (`--color-primary-dark`)
- **Secondary Accent:** `#FFD3B0` (`--color-secondary`)
- **Tertiary Accent:** `#DDD6FE` (`--color-tertiary`)
- **Light Canvas / Surface:** `#FAFAF8` / `#FFFFFF`
- **Dark Canvas / Surface:** `#0F1417` / `#171F23` (Elevated: `#1F292E`)
- **Text Headings:** `#2F3A3F` (Dark: `#E8EFF1`)
- **Text Muted:** `#7D8A8F` (Dark: `#9AA8AD`)
- **Typography:** Nunito Sans, with font weights 400, 600, 700, 800.
- **Button Styling:** Tactile `EmbossedButton` with solid `1.5px` border stroke and soft active depression.