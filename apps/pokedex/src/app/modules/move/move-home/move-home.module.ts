import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveFilterService } from './move-filter.service';

const routes: Routes = [
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

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [MoveFilterService],
})
export class MoveHomeModule {}
