import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { providePokemonGenerationSelect } from '../../../../shared/modules/filter/pokemon-generation-select/pokemon-generation-select.module';
import { providePokemonTypeSelect } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
import { provideFormlyMatRangeSlider } from '../../../../shared/modules/filter/range-slider/range-slider.module';
import { MoveFilterModel, MoveFilterService } from '../move-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-move-filters',
  imports: [ReactiveFormsModule, FormlyForm],
  providers: [providePokemonGenerationSelect(), providePokemonTypeSelect(), provideFormlyMatRangeSlider()],
  templateUrl: './move-filters.component.html',
  styleUrls: ['./move-filters.component.scss'],
})
export class MoveFiltersComponent {
  protected readonly filterService: MoveFilterService = inject(MoveFilterService);
  protected readonly bottomBarService: BottomBarService = inject(BottomBarService);

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

  constructor() {
    this.bottomBarService.onClear$.pipe(untilDestroyed(this)).subscribe(() => {
      this.model = {};
      this.filterService.filterModel = this.model;
    });
  }
}
