import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { providePokemonItemCategorySelect } from '../../../../shared/modules/filter/pokemon-item-category-select/pokemon-item-category-select.module';
import { providePokemonItemPocketSelect } from '../../../../shared/modules/filter/pokemon-item-pocket-select/pokemon-item-pocket-select.module';
import { provideFormlyMatRangeSlider } from '../../../../shared/modules/filter/range-slider/range-slider.module';
import { ItemFilterModel, ItemFilterService } from '../item-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-item-filters',
  imports: [ReactiveFormsModule, FormlyForm],
  providers: [providePokemonItemCategorySelect(), providePokemonItemPocketSelect(), provideFormlyMatRangeSlider()],
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss'],
})
export class ItemFiltersComponent {
  protected readonly filterService: ItemFilterService = inject(ItemFilterService);
  protected readonly bottomBarService: BottomBarService = inject(BottomBarService);
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

  constructor() {
    this.bottomBarService.onClear$.pipe(untilDestroyed(this)).subscribe(() => {
      this.model = {};
      this.filterService.filterModel = this.model;
    });
  }
}
