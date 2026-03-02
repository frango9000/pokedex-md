import { Provider } from '@angular/core';
import { provideFormlyConfig } from '@ngx-formly/core';
import { PokemonGenerationSelectComponent } from './pokemon-generation-select.component';

export function providePokemonGenerationSelect(): Provider {
  return provideFormlyConfig({
    types: [
      {
        name: 'pokemon-generation-select',
        component: PokemonGenerationSelectComponent,
        wrappers: ['form-field'],
      },
    ],
  });
}
