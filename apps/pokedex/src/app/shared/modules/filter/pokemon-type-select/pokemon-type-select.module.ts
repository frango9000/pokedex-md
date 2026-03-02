import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { TypeButtonComponent } from '../../../../modules/type/shared/components/type-button/type-button.component';
import { PokemonTypeSelectComponent } from './pokemon-type-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    PokemonTypeSelectComponent,

    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'pokemon-type-select',
          component: PokemonTypeSelectComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    TypeButtonComponent,
  ],
})
export class PokemonTypeSelectModule {}
