import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterService } from '../../../shared/modules/filter/filter.service';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pokemon-list/pokemon-list.component').then((m) => m.PokemonListComponent),
  },
  {
    path: '',
    loadComponent: () => import('./pokemon-filters/pokemon-filters.component').then((m) => m.PokemonFiltersComponent),
    outlet: 'bottom-bar',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [FilterService],
})
export class PokemonHomeModule {}
