import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineFilterService } from './machine-filter.service';

const routes: Routes = [
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

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [MachineFilterService],
})
export class MachineHomeModule {}
