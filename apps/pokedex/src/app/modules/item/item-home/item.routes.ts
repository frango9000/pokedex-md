import { Route } from '@angular/router';
import { ItemFilterService } from './item-filter.service';

export const itemRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./item-list/item-list.component').then((m) => m.ItemListComponent),
  },
  {
    path: '',
    loadComponent: () => import('./item-filters/item-filters.component').then((m) => m.ItemFiltersComponent),
    outlet: 'bottom-bar',
  },
];

export const itemProviders = [ItemFilterService];
