import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoDirective } from '@jsverse/transloco';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { PokemonItemPocketSelectComponent } from './pokemon-item-pocket-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    PokemonItemPocketSelectComponent,

    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'pokemon-item-pocket-select',
          component: PokemonItemPocketSelectComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    TranslocoDirective,
  ],
})
export class PokemonItemPocketSelectModule {}
