import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { BottomBarService } from '../../../../core/services/bottom-bar.service';
import { PokemonGenerationSelectModule } from '../../../../shared/modules/filter/pokemon-generation-select/pokemon-generation-select.module';
import { PokemonTypeSelectModule } from '../../../../shared/modules/filter/pokemon-type-select/pokemon-type-select.module';
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
    FormlyMatSliderModule,
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
