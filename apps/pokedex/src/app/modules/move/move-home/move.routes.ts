import { Route } from '@angular/router';
import { MoveFilterService } from './move-filter.service';

export const moveRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./move-list/move-list.component').then((m) => m.MoveListComponent),
  },
  {
    path: '',
    loadComponent: () => import('./move-filters/move-filters.component').then((m) => m.MoveFiltersComponent),
    outlet: 'bottom-bar',
  },
];

export const moveProviders = [MoveFilterService];
