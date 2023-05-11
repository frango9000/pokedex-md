import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { PxPokemon } from '@pokedex-md/domain';
import { FilterService } from '../../../../shared/services/filter.service';
import { Filter } from '../../../../shared/utils/generic-datasource';

@Component({
  selector: 'pokedex-pokemon-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyMaterialModule, ReactiveFormsModule],
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss'],
})
export class PokemonFiltersComponent {
  form = new FormGroup({});
  model: { search?: string } = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'search',
      type: 'input',
      props: {
        label: 'Search',
        placeholder: 'Search',
      },
    },
  ];

  constructor(private readonly filterService: FilterService<PxPokemon>) {
    this.filterService.filters$.subscribe(console.log);
  }

  onChanges($event: any) {
    const filters: Filter<PxPokemon>[] = [];
    if ($event.search) {
      filters.push({
        property: 'name',
        type: 'contains',
        value: $event.search,
      });
      filters.push({
        property: 'id',
        type: 'contains',
        value: $event.search,
      });
      filters.push({
        property: 'types',
        type: 'contains',
        value: $event.search,
      });
    }
    this.filterService.filters = filters;
  }
}
