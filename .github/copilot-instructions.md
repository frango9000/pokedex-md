---
description: 'Project-level GitHub Copilot instructions for Pokedex MD — domain context, conventions, and tech stack guidance'
applyTo: '**'
---

# Pokedex MD — GitHub Copilot Instructions

## Project Purpose

**Pokedex MD** is a modern, multilingual web application for browsing and exploring Pokémon data. The app fetches comprehensive Pokémon information from the public PokéAPI, caches data locally for offline access, and provides an intuitive interface for searching and filtering Pokémon, moves, items, machines, and abilities across 9 languages.

## Tech Stack

| Component          | Technology               | Version |
|--------------------|--------------------------|---------|
| Language           | TypeScript               | 5.9.3   |
| Frontend Framework | Angular                  | 21.2.7  |
| Build System       | Nx (monorepo)            | 22.6.4  |
| Build Tool         | Vite                     | 7.0.0   |
| UI Component Lib   | Angular Material         | 21.2.5  |
| Forms              | ngx-formly               | 7.1.0   |
| i18n               | Transloco                | 8.2.1   |
| Data Flow          | RxJS                     | 7.8.2   |
| HTTP Client        | axios + axios-observable | 1.14.0  |
| Package Manager    | Yarn                     | 4.x     |
| Styling            | SCSS                     | -       |
| Icons              | FontAwesome              | 7.2.0   |
| Lifecycle          | @ngneat/until-destroy    | 10.0.0  |

## Domain Vocabulary

| Term                   | Definition                                                                 |
|------------------------|----------------------------------------------------------------------------|
| **Pokémon**            | Individual creature with stats, types, abilities, and moves                |
| **Move**               | Attack or action a Pokémon can learn; has power, accuracy, effect          |
| **Type**               | Elemental classification (Fire, Water, Grass, etc.); affects effectiveness |
| **Ability**            | Passive skill affecting battle mechanics or interactions                   |
| **Machine (TM/HM)**    | Technical Machine (TM) or Hidden Machine (HM) used to teach moves          |
| **Item**               | Consumable or held object affecting gameplay or Pokémon                    |
| **Generation**         | Game series generation (Gen 1–9)                                           |
| **Version/Game**       | Specific game release (Red, Blue, Sword, etc.)                             |
| **Stat**               | Base attribute (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)              |
| **Species/Evolution**  | Pokémon evolutionary family; evolves via level, item, or trade             |
| **Encounter/Location** | Where Pokémon appear in the game world                                     |

## Architecture Overview

### Folder Structure

```
pokedex-md/
├── apps/
│   └── pokedex/                    # Main Angular 21 application
│       ├── src/
│       │   ├── app/
│       │   │   ├── api/            # HTTP services (PokéAPI integration)
│       │   │   ├── core/           # Global services (initialization, routing)
│       │   │   ├── modules/        # Feature modules (pokemon, move, item, machine, ability, type, version)
│       │   │   │   ├── pokemon/    # Pokémon list/detail views
│       │   │   │   ├── move/       # Move database
│       │   │   │   ├── item/       # Item database
│       │   │   │   ├── machine/    # TM/HM database
│       │   │   │   └── ...
│       │   │   ├── shared/         # Shared components, pipes, directives, utilities
│       │   │   └── app.routes.ts   # Standalone routing config
│       │   ├── assets/
│       │   │   ├── api/            # Cached JSON data (pokemon.json, moves.json, etc.)
│       │   │   ├── i18n/           # Translation JSONs (en.json, es.json, ja-Hrkt.json, etc.)
│       │   │   └── images/         # Static images
│       │   ├── main.ts             # Bootstrap & ApplicationConfig
│       │   └── index.html
│       └── project.json            # Nx project config
├── libs/
│   ├── api/                        # Data providers and API generation
│   │   ├── src/lib/api.ts          # API factory
│   │   └── src/lib/generators/     # Data generation from PokéAPI
│   └── domain/                     # TypeScript domain models & interfaces
│       ├── src/lib/domain/         # Common types
│       └── src/lib/pokemon/        # Pokémon-related types
├── .github/
│   ├── workflows/                  # GitHub Actions CI/CD
│   └── copilot-instructions.md     # This file
└── nx.json                         # Nx workspace config
```

### Data Flow

1. **App Initialization** (`main.ts` → `app.config.ts`)

- Registers providers: router, HTTP client, Transloco, ngx-formly, error handlers
- `InitializationService` runs before bootstrap

2. **Data Loading** (`InitializationService`)

- Parallel `forkJoin` calls to all API services
- Services fetch data from PokéAPI
- JSON responses cached in `assets/api/*.json` for offline access
- Language service initializes UI language from browser/UI selection

3. **Routing** (`app.routes.ts`)

- Standalone routing: `pokemon`, `move`, `item`, `machine` (main outlets)
- Sidebar outlet: detail views (`pokemon/:pokemon`, `move/:move`, etc.)
- Lazy loading of detail components
- Resolvers pre-fetch data before component initialization

4. **Modules** (feature-based organization)

- Each module manages list & detail views for one entity type
- Smart components handle state via services
- Presentational components receive data via `@Input` / `@Output`
- RxJS `takeUntil(destroy$)` for subscription cleanup

## Development Conventions

### Naming & File Placement

- **File naming:** Kebab-case for files (`user-list.component.ts`, `pokemon.service.ts`)
- **Class naming:** PascalCase (`UserListComponent`, `PokemonService`)
- **Method naming:** camelCase, imperative verbs (`fetchPokemon`, `handleFilter`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS_PER_PAGE`, `DEFAULT_PAGE_SIZE`)
- **Type/Interface naming:** PascalCase with suffix (`User`, `PokemonResponse`, `FilterOptions`)
- **Colocate related files:** Component + spec + styles + types in same folder

### TypeScript Best Practices

- **Explicit types:** Always type function returns and parameters (`function getPokemon(id: number): Observable<Pokemon>`)
- **No `any`:** Use specific types or `unknown` with type guards
- **RxJS patterns:**
  - Use `switchMap` to cancel previous requests when new filter applied
  - Use `mergeMap` for non-cancellable operations
  - Use `debounceTime(300)` on user input (search, scroll)
  - Use `shareReplay(1)` for multi-subscriber streams
  - Always unsubscribe via `takeUntil(destroy$)` or async pipe

### Angular-Specific

- **Change Detection:** Use `ChangeDetectionStrategy.OnPush` on all components
- **Smart vs Presentational:**
  - Smart (container) components: manage state, inject services, handle side effects
  - Presentational (dumb) components: receive data via `@Input`, emit events via `@Output`, no service injection
- **Lazy Loading:** Detail components loaded via `loadComponent` in routes
- **Pipes & Directives:** Shared utilities live in `shared/pipes/` and `shared/directives/`
- **Icons:** FontAwesome; use `<fa-icon [icon]="faUser" />` (not `<i class="fa fa-user">`))
- **Transloco:** Hierarchical keys (`pokemon.list.title`), never show raw keys in UI

### Forms & Validation

- **ngx-formly:** Define form structure in JSON via `expressionProperties` for field dependencies
- **Validation:** Built into field definitions; avoid inline JS validation
- **Material Theme:** All formly fields styled with Angular Material

### Testing

- **Framework:** Vitest (Jest-compatible)
- **Structure:** `*.spec.ts` colocated with source file
- **Pattern:** Arrange-Act-Assert; meaningful test names (e.g., `shouldReturn404WhenPokemonNotFound`)
- **Mocking:** ng-mocks for component testing; mock services with jasmine spies
- **Coverage:** Aim for 70%+ on critical paths; 100% is not the goal

### Styling & Responsive Design

- **SCSS:** Use variables, nesting, mixins; avoid inline styles
- **Material Design:** Leverage Angular Material components and spacing tokens
- **Responsive:** Mobile-first approach; test on real devices
- **A11y:** Semantic HTML, keyboard navigation, ARIA labels where needed

## Key Entry Points

| File                                             | Purpose                                 |
|--------------------------------------------------|-----------------------------------------|
| `main.ts`                                        | Application bootstrap                   |
| `app.config.ts`                                  | Provider configuration, services setup  |
| `app.routes.ts`                                  | Routing structure, module instantiation |
| `core/services/initialization.service.ts`        | Parallel data loading on app start      |
| `modules/pokemon/pokemon-home/pokemon.routes.ts` | Pokemon feature routing                 |
| `api/pokemon/pokemon.service.ts`                 | HTTP service for Pokémon data           |
| `shared/components/`                             | Reusable UI components                  |

## Nx Monorepo Usage

- **Affected Targets:** `nx affected --target=build --base=origin/main` (CI/CD)
- **Project Graph:** `nx graph` to visualize dependencies
- **Buildable Libs:** `libs/api` and `libs/domain` are buildable; app depends on them
- **Package Manager:** Always use `yarn`; never `npm`
- **Enforcement:** ESLint boundary rules prevent cross-module imports

## What NOT to Do

❌ **Don't:**

- Use `any` types; be explicit
- Swallow exceptions silently; log with context
- Commit secrets, API keys, or credentials
- Use magic numbers/strings; extract to named constants
- Create deeply nested components (max nesting 3–4 levels)
- Subscribe without unsubscribing (use `takeUntil`)
- Mutate objects directly in services; return new instances
- Use `OnPush` without immutable data patterns
- Hardcode URLs; use environment config
- Log sensitive data (passwords, tokens, PII)
- Ignore Prettier/ESLint; always format and lint before commit

## Code Quality Standards

- **Functions:** < 25 lines; single responsibility
- **Comments:** Explain *why*, not *what*; use JSDoc on public APIs
- **Error Handling:** Fail fast; validate inputs early
- **Performance:**
  - Paginate unbounded collections
  - Debounce user input (300 ms minimum)
  - Avoid N+1 queries (batch or join)
  - Cache read-heavy, slow-changing data
- **Testing:** High coverage on critical paths; meaningful test names
- **Security:** No SQL injection, XSS, secrets in code

## Git Workflow

- **Commit Format:** `<type>(<context>): <description>` (e.g., `feat(pokemon): add type filter` or `fix(api): handle null responses`)
- **Types:** `feat`, `fix`, `docs`, `refactor`, `style`, `chore`
- **Branch Flow:** `feature/*` → `development` → `rc` → `master`
- **Hotfixes:** `hotfix/*` for production patches
- **PR Checklist:** What changed, scope, testing, breaking changes, screenshots (if UI)

## Working with Copilot

### Context Signals

- Keep related files open in tabs (e.g., component + service + spec)
- Position cursor near the code you want help with
- Use Chat mode for complex multi-file tasks
- Reference existing patterns: "Follow the same pattern as `pokemon.service.ts`"

### Prompting

- **Good:** "Add a filter for Pokémon type in the pokemon-list component, following the existing pattern from the move-list search"
- **Bad:** "Add a filter"
- **Multi-file:** Describe scope first: "I need to update the Pokémon model, API service, and component"

### Common Patterns to Reference

- `apps/pokedex/src/app/modules/pokemon/` — full feature module example
- `apps/pokedex/src/app/api/pokemon/pokemon.service.ts` — API service pattern
- `apps/pokedex/src/app/shared/components/` — reusable component structure

## Debugging & Troubleshooting

- **Type Errors:** Check `tsconfig.json`; use strict mode
- **Route Issues:** Verify `app.routes.ts`; check outlet names in components
- **Styling:** Check `styles.scss` for global vars; inspect Material theme
- **i18n:** Verify translation keys exist in `assets/i18n/*.json`
- **Performance:** Use Angular DevTools profiler; check for unnecessary re-renders
- **Data Issues:** Verify PokéAPI response format in `libs/domain/` types

## References

- [Nx Documentation](https://nx.dev)
- [Angular Docs](https://angular.io)
- [RxJS Best Practices](https://rxjs.dev)
- [Transloco Docs](https://jsverse.gitbook.io/transloco)
- [ngx-formly](https://formly.dev)
- [Angular Material](https://material.angular.io)
- [PokéAPI](https://pokeapi.co)
