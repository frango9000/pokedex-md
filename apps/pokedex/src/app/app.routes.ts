import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/pokemon/pokemon-list/pokemon-list.component').then((m) => m.PokemonListComponent),
      },
      {
        path: '',
        loadComponent: () =>
          import('./modules/pokemon/pokemon-filters/pokemon-filters.component').then((m) => m.PokemonFiltersComponent),
        outlet: 'bottom-bar',
      },
    ],
  },
  {
    path: 'pokemon/:pokemon',
    loadComponent: () =>
      import('./modules/pokemon/pokemon-detail/pokemon-detail.component').then((m) => m.PokemonDetailComponent),
    outlet: 'sidebar',
  },
];
