import { Provider } from '@angular/core';
import { provideFormlyConfig } from '@ngx-formly/core';
import { PokemonTypeSelectComponent } from './pokemon-type-select.component';

export function providePokemonTypeSelect(): Provider {
  return provideFormlyConfig({
    types: [
      {
        name: 'pokemon-type-select',
        component: PokemonTypeSelectComponent,
        wrappers: ['form-field'],
      },
    ],
  });
}
