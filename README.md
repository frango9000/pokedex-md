# Pokedex MD

A modern, multilingual Pokédex web application built with Angular 21 and Nx. Browse Pokémon, moves, items, machines, and abilities with an intuitive interface and comprehensive filtering.

## Features

- **Pokémon Browser** — Search and filter through all Pokémon with detailed stats, types, and abilities
- **Moves & Items** — Explore moves and items with their effects and usage details
- **Machines** — Technical Machines (TMs) and Hidden Machines (HMs) database
- **Type System** — Complete type chart with effectiveness information
- **Multilingual** — Support for 9 languages: English, Spanish, French, German, Italian, Japanese (Hiragana/Roomaji), Korean, Simplified Chinese
- **Responsive Design** — Mobile-friendly interface powered by Angular Material
- **Infinite Scroll** — Smooth pagination for large datasets
- **Detail Views** — Sidebar layout for quick access to detailed information

## Tech Stack

- **Frontend:** Angular 21, Angular Material, RxJS
- **Build System:** Nx 22.6 (monorepo)
- **Forms:** ngx-formly (Material theme)
- **Internationalization:** Transloco
- **Build Tool:** Vite
- **Package Manager:** Yarn
- **Icons:** FontAwesome
- **Styling:** SCSS

## Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **Yarn** 3.6+

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd pokedex-md
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn start
```

The application will be available at `http://localhost:4200/`. The app automatically reloads when you change source files.

### 4. Build for production

```bash
yarn build
```

Output is generated in `dist/apps/pokedex/`.

## Key Scripts

| Script           | Description                                   |
|------------------|-----------------------------------------------|
| `yarn start`     | Start development server on port 4200         |
| `yarn build`     | Build for production                          |
| `yarn lint`      | Run ESLint on all projects                    |
| `yarn format`    | Format code with Prettier                     |
| `yarn validate`  | Run format check, lint, build, and trim tasks |
| `yarn build:api` | Rebuild API layer (skip cache)                |
| `yarn trim`      | Trim unused database entries                  |
| `nx graph`       | Visualize project dependencies                |

## Architecture

The application follows a monorepo structure with clear separation of concerns:

```
pokedex-md/
├── apps/
│   └── pokedex/
│       └── src/
│           ├── app/
│           │   ├── api/               # HTTP services for API calls
│           │   ├── core/              # Global services, initialization
│           │   ├── modules/           # Feature modules (pokemon, moves, items, etc.)
│           │   ├── shared/            # Shared components, pipes, and utilities
│           │   └── app.routes.ts      # Application routing config
│           ├── assets/
│           │   ├── api/               # JSON database (pokemon.json, moves.json, etc.)
│           │   ├── i18n/              # Translation files (9 languages)
│           │   └── images/
│           └── main.ts                # Application entry point
└── libs/
    ├── api/                           # Data providers and API layer
    └── domain/                        # TypeScript domain models and interfaces
```

### Feature Modules

- **pokemon** — Pokémon database with search, filtering, and detail views
- **move** — Move database with effects, accuracy, and power ratings
- **item** — Item database with categories and descriptions
- **machine** — Technical Machines and Hidden Machines
- **ability** — Pokémon abilities and their effects
- **type** — Type system and effectiveness chart
- **version** — Game versions and generation information

## Data Source

This application uses the **[PokéAPI](https://pokeapi.co/)** — a free, public REST API providing comprehensive Pokémon data. Data is fetched on application startup and cached locally for offline browsing.

### Data Initialization

On app launch, the initialization service (`InitializationService`) loads all reference data in parallel from PokéAPI:

- Pokémon information (stats, abilities, types)
- Moves and move effects
- Items and item categories
- Machines (TMs/HMs)
- Abilities, types, and species data
- Generations and game versions
- Locations and regions

This ensures the app has complete offline access to the Pokédex database once loaded.

## Configuration

### Environment Variables

The app does not require environment variables. All data is fetched from the public PokéAPI and cached locally. Language is configurable via the UI.

### Supported Languages

| Code      | Language              |
|-----------|-----------------------|
| `en`      | English               |
| `es`      | Spanish               |
| `fr`      | French                |
| `de`      | German                |
| `it`      | Italian               |
| `ja-Hrkt` | Japanese (Hiragana)   |
| `roomaji` | Japanese (Romaji)     |
| `ko`      | Korean                |
| `zh-Hant` | Chinese (Traditional) |

## Nx Workspace

Powered by [Nx](https://nx.dev) — smart, fast, and extensible build system.

### Common Nx Commands

```bash
# View project graph
nx graph

# Run lint on affected projects
nx lint --affected

# Build all projects
nx build --all

# Run specific target on specific project
nx run pokedex:serve
```

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Follow the commit format: `feat(<context>): <description>`
3. Run validation before pushing: `yarn validate`
4. Submit a pull request

Commit types:

- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation update
- `refactor` — code refactoring
- `style` — formatting (no logic change)
- `chore` — dependencies, config updates

## License

MIT
