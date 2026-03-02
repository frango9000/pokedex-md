import { Route } from '@angular/router';
import { MachineFilterService } from './machine-filter.service';

export const machineRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./machine-list/machine-list.component').then((m) => m.MachineListComponent),
  },
  {
    path: '',
    loadComponent: () => import('./machine-filters/machine-filters.component').then((m) => m.MachineFiltersComponent),
    outlet: 'bottom-bar',
  },
];

export const machineProviders = [MachineFilterService];
