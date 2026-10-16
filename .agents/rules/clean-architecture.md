# Clean Architecture Rules for React & TypeScript

## 1. Core Principles
- **Dependency Inversion**: Dependencies point strictly inwards: `Presentation` -> `Domain` <- `Data`.
- **Domain Independence**: The `domain/` folder must never import anything from `react`, `react-dom`, external UI libraries, or HTTP clients. It contains only pure TypeScript interfaces, entities, and business logic.
- **Contract-Based Access**: Presentation components and hooks interact with data through Repository interfaces defined in `domain/repositories/`.

## 2. Layer Responsibilities
### Domain Layer (`src/domain/`)
- `entities/`: Core data structures (e.g. `EuyDeck`, `EuyCard`, `GithubRelease`, `ReleaseAsset`).
- `repositories/`: Interface contracts declaring available data operations (e.g. `IReleaseRepository`, `IDeckValidatorRepository`).

### Data Layer (`src/data/`)
- `datasources/`: Concrete network callers, mock providers, and local file storage access.
- `models/` & `dtos/`: Raw API structures and schemas.
- `repositories/`: Implementations of domain repository interfaces (e.g. `ReleaseRepositoryImpl`). Responsible for mapping DTOs into domain entities.

### Presentation Layer (`src/presentation/` & `src/core/`)
- `hooks/`: Custom React hooks that consume repositories and provide reactive state to views.
- `features/`: Feature modules composed of atomic subcomponents.
- Components must NEVER invoke `fetch()` directly in a `useEffect` or button handler. They must delegate through custom hooks or repositories.

