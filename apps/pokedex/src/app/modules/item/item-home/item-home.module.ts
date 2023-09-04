import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFilterService } from './item-filter.service';

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
  providers: [ItemFilterService],
})
export class ItemHomeModule {}
