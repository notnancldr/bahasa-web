# AGENTS.md

Mandatory rules for AI agents in this React + Vite + TypeScript web application (`bahasa-web`). If a rule conflicts with a request, state the conflict and ask before proceeding.

## 0. File Locations

All agent files live in `.agents/`. Use these exact paths. Do NOT create them at the repo root or elsewhere. If a copy exists outside `.agents/`, do NOT edit it. Tell the user.

| File | Purpose | Load |
|---|---|---|
| `.agents/PROJECT.md` | Structure, layers, conventions, design tokens | Every non-trivial task |
| `.agents/MISTAKE.md` | Condensed mistake rules + recent raw entries | Every task |
| `.agents/archive/MISTAKE-<YYYY-MM-DD>.md` | Archived raw mistake entries | NEVER, unless the user asks |
| `.agents/REUSABLES.md` | Index of reusable category files (index only) | When a reuse trigger applies |
| `.agents/reusables/<category>.md` | Documented reusable components & hooks | Only relevant categories |
| `.agents/rules/*.md` | Detailed rules (Section 2) | Only when triggered |

## 1. Core Rules (Always Apply)

### Read first
- Read `.agents/PROJECT.md` and `.agents/MISTAKE.md` before any feature work, refactor, or structural change.
- Treat every rule under `## Rules` and every **Rule** line under `## Recent` in `MISTAKE.md` as a requirement. Do NOT repeat a logged mistake.
- Do NOT read `.agents/archive/` unless the user asks.

### Clean Architecture & Layer Boundaries (Mandatory & A Must)
- **Domain Layer (`src/domain/`)**: Pure TypeScript entities and repository contracts. ZERO React dependencies, zero UI imports, zero API clients.
- **Data Layer (`src/data/`)**: DTOs, schemas, data sources (GitHub Releases API, local starter decks), and repository implementations. Converts remote/raw JSON into domain entities.
- **Presentation Layer (`src/presentation/` & `src/core/`)**: Presentation only.
  - Hooks connect UI to Use Cases / Data.
  - Components render UI and receive props or typed hooks. Never perform direct `fetch` inside JSX or presentation components.

### Per-Component Architecture & Modularity
- Split code into small, focused, single-responsibility components, each in its own file.
- **Hard Limit**: No component file should exceed **200 lines of code**. If a component grows large, extract sub-components or presentation hooks immediately.
- Never write massive multi-thousand-line monolithic views.
- Place feature-specific subcomponents in `src/presentation/features/<feature>/components/`.
- Cross-cutting primitives (Buttons, Cards, Badges, Modals, Dropzones) belong in `src/core/components/`.

### Design Language Parity with Mobile App
- Strictly follow the mobile design system defined in `.agents/rules/design.md` and `PROJECT.md`.
- Typography: Nunito Sans with high-contrast slate colors (`#2F3A3F` for headings, `#7D8A8F` for subtitles).
- Color Palette: Soft Cyan Base (`#9FD5E8`), Teal Slate Border (`#4A8B9C`), Peach (`#FFD3B0`), Lavender (`#DDD6FE`), Canvas (`#FAFAF8` / `#0F1417` in dark mode).
- Tactile Buttons: Use `EmbossedButton` with subtle border stroke and tactile active state.

### Full Localization (Zero Hardcoded User-Facing Strings)
- Put EVERY translatable UI text in the localization dictionary (`src/core/localization/`).
- Supported locales: `en` (English), `id` (Indonesian), `ja` (Japanese), `es` (Spanish), `fr` (French), `de` (German).
- Never hardcode raw user-facing English/Indonesian strings directly in JSX elements. Use the type-safe `useTranslation()` hook.

### Code Consistency & Strict Quality
- Strictly typed TypeScript: `noImplicitAny: true`, strict null checks.
- Code must pass TypeScript compilation (`tsc --noEmit`) and build without errors.
- Document all public functions, hooks, and types with JSDoc comments (`/** ... */`).

## 2. On-Demand Rules

Read a rule file only when its trigger applies. Do NOT read them otherwise.

| Trigger | Read |
|---|---|
| Working with Domain, Data sources, Repositories, or state hooks | `.agents/rules/clean-architecture.md` |
| Creating a new component, splitting large files, or structuring features | `.agents/rules/component-splitting.md` |
| Adding or modifying user-facing text, labels, or multi-language copy | `.agents/rules/localization-rules.md` |
| Styling, theming, colors, buttons, cards, typography, or UI design | `.agents/rules/design.md` |

## 3. Workflow Checklist

1. Read `.agents/PROJECT.md` and `.agents/MISTAKE.md`.
2. Check Section 2 triggers and read matching rule files.
3. Implement following layer boundaries and clean architecture.
4. Extract small, atomic components (<200 LOC per file).
5. Ensure all UI copy is added to all 6 locale dictionaries (`en`, `id`, `ja`, `es`, `fr`, `de`).
6. Run `npm run build` or `npx tsc --noEmit` to verify type safety.
7. Document any reusable components in `.agents/REUSABLES.md`.
8. Log any mistake or user correction in `.agents/MISTAKE.md`.

