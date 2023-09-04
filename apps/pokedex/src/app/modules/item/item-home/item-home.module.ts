import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ItemHomeModule {}
