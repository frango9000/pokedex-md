import { Route } from '@angular/router';
import { pokemonDetailResolver } from './modules/pokemon/pokemon-detail/pokemon-detail.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pokemon/pokemon-home/pokemon-home.module').then((m) => m.PokemonHomeModule),
  },
  {
    path: 'pokemon/:pokemon',
    loadComponent: () =>
      import('./modules/pokemon/pokemon-detail/pokemon-detail.component').then((m) => m.PokemonDetailComponent),
    outlet: 'sidebar',
    resolve: {
      detail: pokemonDetailResolver,
    },
  },
];
