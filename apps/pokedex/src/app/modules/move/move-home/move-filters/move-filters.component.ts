import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { PokemonGenerationSelectModule } from '../../../../shared/modules/filter/pokemon-generation-select/pokemon-generation-select.module';
import { PokemonTypeSelectModule } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
import { FormlyMatRangeSliderModule } from '../../../../shared/modules/filter/range-slider/range-slider.module';
import { MoveFilterModel, MoveFilterService } from '../move-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-move-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FormlyMatRangeSliderModule,
    PokemonTypeSelectModule,
    PokemonGenerationSelectModule,
  ],
  templateUrl: './move-filters.component.html',
  styleUrls: ['./move-filters.component.scss'],
})
export class MoveFiltersComponent {
  model: MoveFilterModel = this.filterService.filterModel;
  fields: FormlyFieldConfig[] = [
    {
      key: 'search',
      type: 'input',
      props: {
        label: 'Search',
        placeholder: 'Search',
      },
    },
    {
      key: 'generations',
      type: 'pokemon-generation-select',
    },
    {
      key: 'types',
      type: 'pokemon-type-select',
    },
    {
      key: 'power',
      type: 'range-slider',
      props: {
        label: 'Power',
        discrete: true,
        max: 300,
      },
    },
    {
      key: 'pp',
      type: 'range-slider',
      props: {
        label: 'PP',
        discrete: true,
        max: 40,
      },
    },
    {
      key: 'accuracy',
      type: 'range-slider',
      props: {
        label: 'Accuracy',
        discrete: true,
      },
    },
  ];

  constructor(
    protected readonly filterService: MoveFilterService,
    protected readonly bottomBarService: BottomBarService,
  ) {
    this.bottomBarService.onClear$.pipe(untilDestroyed(this)).subscribe(() => {
      this.model = {};
      this.filterService.filterModel = this.model;
    });
  }
}
