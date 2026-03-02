import { Route } from '@angular/router';
import { itemResolver } from './modules/item/item-detail/item.resolver';
import { itemProviders, itemRoutes } from './modules/item/item-home/item.routes';
import { machineDetailResolver } from './modules/machine/machine-detail/machine.resolver';
import { machineProviders, machineRoutes } from './modules/machine/machine-home/machine.routes';
import { moveResolver } from './modules/move/move-detail/move.resolver';
import { moveProviders, moveRoutes } from './modules/move/move-home/move.routes';
import { pokemonDetailResolver } from './modules/pokemon/pokemon-detail/pokemon-detail.resolver';
import { pokemonProviders, pokemonRoutes } from './modules/pokemon/pokemon-home/pokemon.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    children: pokemonRoutes,
    providers: pokemonProviders,
    data: { title: 'Pokemon' },
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
    children: moveRoutes,
    providers: moveProviders,
    data: { title: 'Move' },
  },
  {
    path: 'move/:move',
    loadComponent: () => import('./modules/move/move-detail/move-detail.component').then((m) => m.MoveDetailComponent),
    outlet: 'sidebar',
    resolve: { move: moveResolver },
  },
  {
    path: 'item',
    children: itemRoutes,
    providers: itemProviders,
    data: { title: 'Item' },
  },
  {
    path: 'item/:item',
    loadComponent: () => import('./modules/item/item-detail/item-detail.component').then((m) => m.ItemDetailComponent),
    outlet: 'sidebar',
    resolve: { item: itemResolver },
  },
  {
    path: 'machine',
    children: machineRoutes,
    providers: machineProviders,
    data: { title: 'Machine' },
  },
  {
    path: 'machine/:machine',
    loadComponent: () =>
      import('./modules/machine/machine-detail/machine-detail.component').then((m) => m.MachineDetailComponent),
    outlet: 'sidebar',
    resolve: { machineDetail: machineDetailResolver },
  },
];
