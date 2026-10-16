# REUSABLES.md

Index of shared, reusable primitives and hooks across `bahasa-web`.

## Primitives (`src/core/components/`)
- `EmbossedButton`: Tactile primary/secondary button with subtle border stroke and push feedback.
- `SurfaceCard`: Rounded surface container with light/dark borders and optional interactive hover.
- `CategoryBadge`: Pastel badge container with icon and text (`cyan`, `peach`, `lavender`, `neutral`).
- `DifficultyBadge`: Specialized badge rendering beginner, intermediate, or expert difficulty with distinct pastels.
- `CodeBlock`: Syntax-highlighted code container with copy-to-clipboard action.
- `Dropzone`: Interactive drag-and-drop file target supporting `.euy` files.
- `TopNavBar`: Sticky header with logo, navigation links, language dropdown, and theme toggle.
- `LanguageDropdown`: Selector for switching between `en`, `id`, `ja`, `es`, `fr`, and `de`.
- `ThemeToggle`: Sun/Moon button switching between light and dark themes.

## Custom Hooks (`src/presentation/hooks/` & `src/core/`)
- `useTranslation()`: Type-safe localization hook returning current locale, dictionary, and switch function.
- `useTheme()`: Provides current theme (`light` | `dark`) and toggle function.
- `useReleases()`: Orchestrates fetching GitHub releases and fallback starter decks.
- `useEuyValidator()`: Handles file reading, schema validation, and deck parsing state.

