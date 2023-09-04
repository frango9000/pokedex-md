import { Route } from '@angular/router';
import { itemResolver } from './modules/item/item-detail/item.resolver';
import { moveResolver } from './modules/move/move-detail/move.resolver';
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
    resolve: { pokemonDetail: pokemonDetailResolver },
  },
  {
    path: 'move',
    pathMatch: 'full',
    loadChildren: () => import('./modules/move/move-home/move-home.module').then((m) => m.MoveHomeModule),
  },
  {
    path: 'move/:move',
    loadComponent: () => import('./modules/move/move-detail/move-detail.component').then((m) => m.MoveDetailComponent),
    outlet: 'sidebar',
    resolve: { move: moveResolver },
  },
  {
    path: 'item',
    pathMatch: 'full',
    loadChildren: () => import('./modules/item/item-home/item-home.module').then((m) => m.ItemHomeModule),
  },
  {
    path: 'item/:item',
    loadComponent: () => import('./modules/item/item-detail/item-detail.component').then((m) => m.ItemDetailComponent),
    outlet: 'sidebar',
    resolve: { item: itemResolver },
  },
];
