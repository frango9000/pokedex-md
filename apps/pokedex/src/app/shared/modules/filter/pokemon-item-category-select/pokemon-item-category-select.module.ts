import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoDirective } from '@ngneat/transloco';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { PokemonItemCategorySelectComponent } from './pokemon-item-category-select.component';

@NgModule({
  declarations: [PokemonItemCategorySelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,

    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'pokemon-item-category-select',
          component: PokemonItemCategorySelectComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    TranslocoDirective,
  ],
})
export class PokemonItemCategorySelectModule {}
