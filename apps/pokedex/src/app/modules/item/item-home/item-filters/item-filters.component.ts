import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { PokemonItemCategorySelectModule } from '../../../../shared/modules/filter/pokemon-item-category-select/pokemon-item-category-select.module';
import { PokemonItemPocketSelectModule } from '../../../../shared/modules/filter/pokemon-item-pocket-select/pokemon-item-pocket-select.module';
import { FormlyMatRangeSliderModule } from '../../../../shared/modules/filter/range-slider/range-slider.module';
import { ItemFilterModel, ItemFilterService } from '../item-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-item-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatRangeSliderModule,
    PokemonItemCategorySelectModule,
    PokemonItemPocketSelectModule,
  ],
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss'],
})
export class ItemFiltersComponent {
  model: ItemFilterModel = this.filterService.filterModel;
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
      key: 'categories',
      type: 'pokemon-item-category-select',
    },
    {
      key: 'pockets',
      type: 'pokemon-item-pocket-select',
    },
  ];

  constructor(
    protected readonly filterService: ItemFilterService,
    protected readonly bottomBarService: BottomBarService,
  ) {
    this.bottomBarService.onClear$.pipe(untilDestroyed(this)).subscribe(() => {
      this.model = {};
      this.filterService.filterModel = this.model;
    });
  }
}
