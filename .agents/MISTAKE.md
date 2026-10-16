# MISTAKE.md

Log of mistakes, false assumptions, and corrections to prevent recurrence.

## Rules
- Never hardcode user-facing copy directly into JSX components; always declare keys in `src/core/localization/`.
- Never import UI components or React hooks inside domain entities or data sources.
- Never write monolithic component files exceeding 200 lines of code; decompose into modular subcomponents.
- Always check that dark mode styling is applied across all surfaces (`dark:bg-dark-surface`, `dark:text-dark-text`).

## Recent Entries
- None logged yet.

