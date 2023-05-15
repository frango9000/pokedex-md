import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { PokemonGenerationSelectModule } from '../../../../shared/modules/filter/pokemon-generation-select/pokemon-generation-select.module';
import { PokemonTypeSelectModule } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
import { PokemonFilterModel, PokemonFilterService } from '../pokemon-filter.service';

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

  constructor(protected readonly filterService: PokemonFilterService) {}
}
