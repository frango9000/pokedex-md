import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { PxPokemon } from '@pokedex-md/domain';
import { FilterService } from '../../../../shared/modules/filter/filter.service';
import { PokemonGenerationSelectModule } from '../../../../shared/modules/filter/pokemon-generation-select/pokemon-generation-select.module';
import { PokemonTypeSelectModule } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
import { Filters } from '../../../../shared/utils/generic-datasource';

@Component({
  selector: 'pokedex-pokemon-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatToggleModule,
    PokemonTypeSelectModule,
    PokemonGenerationSelectModule,
  ],
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss'],
})
export class PokemonFiltersComponent {
  model: PokemonFilterModel = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'search',
      type: 'input',
      props: {
        label: 'Search',
        placeholder: 'Search',
        appearance: 'outline',
      },
    },
    {
      key: 'generations',
      type: 'pokemon-generation-select',
      props: {
        appearance: 'outline',
      },
    },
    {
      key: 'types',
      type: 'pokemon-type-select',
      props: {
        appearance: 'outline',
      },
    },
    {
      key: 'typesExclusiveness',
      type: 'toggle',
      props: {
        labelPosition: 'before',
        appearance: 'outline',
      },
      expressions: {
        'props.label': 'model.typesExclusiveness ? "Exclusive Types" : "Inclusive Types"',
      },
    },
  ];

  constructor(private readonly filterService: FilterService<PxPokemon>) {
    this.filterService.filters$.subscribe(console.log);
  }

  onChanges(filterModel: PokemonFilterModel) {
    const { search, types, typesExclusiveness, generations } = filterModel;
    const filters: Filters<PxPokemon> = {};
    if (search) {
      filters['search'] = [
        {
          property: 'name',
          type: 'contains',
          value: search,
        },
        {
          property: 'id',
          type: 'contains',
          value: search,
        },
      ];
    }
    if (types?.length) {
      filters['types'] = [
        {
          property: 'types',
          type: typesExclusiveness ? 'contains-all' : 'contains-any',
          value: types,
        },
      ];
    }
    if (generations?.length) {
      filters['generation'] = [
        {
          property: 'generation',
          type: 'among',
          value: generations,
        },
      ];
    }
    this.filterService.filters = filters;
  }
}

interface PokemonFilterModel {
  search?: string;
  types?: string[];
  typesExclusiveness?: boolean;
  generations?: string[];
}
