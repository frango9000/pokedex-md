import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { PokemonTypeSelectComponent } from './pokemon-type-select.component';

@NgModule({
  declarations: [PokemonTypeSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,

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
  ],
})
export class PokemonTypeSelectModule {}
