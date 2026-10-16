# Component Splitting & Modularity Rules

## 1. Maximum File Size Limit
- **Rule**: No React component file should exceed **200 lines of code**.
- If a component exceeds 150 lines, review it for extraction opportunities:
  - Extract subcomponents into a `components/` subfolder adjacent to the feature.
  - Extract non-trivial presentation logic into a custom hook.
  - Extract static data, schemas, or helper formatters into separate utility files.

## 2. Directory Structure per Feature
Each feature slice under `src/presentation/features/<feature-name>/` should be organized as:
```text
<feature-name>/
├── components/          # Focused subcomponents (e.g. Card, Header, Tabs, List)
│   ├── sub-item-a.tsx
│   └── sub-item-b.tsx
├── <feature-name>.tsx   # Main section orchestrator (composes subcomponents only)
└── index.ts             # Clean export
```

## 3. Atomic Primitives vs Feature Components
- If a component is used across 2 or more features, place it in `src/core/components/`.
- If a component is unique to a single feature, place it inside that feature's `components/` directory.
- Avoid inline JSX trees deeper than 4 levels of nesting.

