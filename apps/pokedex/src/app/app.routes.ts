import { Route } from '@angular/router';
import { itemResolver } from './modules/item/item-detail/item.resolver';
import { machineDetailResolver } from './modules/machine/machine-detail/machine.resolver';
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
    data: { title: 'Pokemon' },
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
    data: { title: 'Move' },
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
    data: { title: 'Item' },
    loadChildren: () => import('./modules/item/item-home/item-home.module').then((m) => m.ItemHomeModule),
  },
  {
    path: 'item/:item',
    loadComponent: () => import('./modules/item/item-detail/item-detail.component').then((m) => m.ItemDetailComponent),
    outlet: 'sidebar',
    resolve: { item: itemResolver },
  },
  {
    path: 'machine',
    pathMatch: 'full',
    data: { title: 'Machine' },
    loadChildren: () => import('./modules/machine/machine-home/machine-home.module').then((m) => m.MachineHomeModule),
  },
  {
    path: 'machine/:machine',
    loadComponent: () =>
      import('./modules/machine/machine-detail/machine-detail.component').then((m) => m.MachineDetailComponent),
    outlet: 'sidebar',
    resolve: { machineDetail: machineDetailResolver },
  },
];
