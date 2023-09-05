import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { PokemonTypeSelectModule } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
import { FormlyMatRangeSliderModule } from '../../../../shared/modules/filter/range-slider/range-slider.module';
import { MoveFilterModel } from '../../../move/move-home/move-filter.service';
import { MachineFilterService } from '../machine-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-machine-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatRangeSliderModule,
    PokemonTypeSelectModule,
  ],
  templateUrl: './machine-filters.component.html',
  styleUrls: ['./machine-filters.component.scss'],
})
export class MachineFiltersComponent {
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
      key: 'cost',
      type: 'range-slider',
      props: {
        label: 'Cost',
        discrete: true,
        step: 20,
        max: 100000,
      },
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
    protected readonly filterService: MachineFilterService,
    protected readonly bottomBarService: BottomBarService,
  ) {
    this.bottomBarService.onClear$.pipe(untilDestroyed(this)).subscribe(() => {
      this.model = {};
      this.filterService.filterModel = this.model;
    });
  }
}
