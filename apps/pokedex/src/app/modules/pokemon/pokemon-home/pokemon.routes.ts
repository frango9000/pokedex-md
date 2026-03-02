import { Route } from '@angular/router';
import { PokemonFilterService } from './pokemon-filter.service';

export const pokemonRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pokemon-list/pokemon-list.component').then((m) => m.PokemonListComponent),
  },
  {
    path: '',
    loadComponent: () => import('./pokemon-filters/pokemon-filters.component').then((m) => m.PokemonFiltersComponent),
    outlet: 'bottom-bar',
  },
];

export const pokemonProviders = [PokemonFilterService];
