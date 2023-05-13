import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { PokemonGenerationSelectComponent } from './pokemon-generation-select.component';

@NgModule({
  declarations: [PokemonGenerationSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,

    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'pokemon-generation-select',
          component: PokemonGenerationSelectComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PokemonGenerationSelectModule {}
