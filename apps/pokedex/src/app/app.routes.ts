import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { PokemonService } from './shared/services/api/pokemon.service';

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
      pokemon: (route: ActivatedRouteSnapshot) => inject(PokemonService).fetchApiOne$(route.params['pokemon']),
    },
  },
];
