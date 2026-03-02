import { Provider } from '@angular/core';
import { provideFormlyConfig } from '@ngx-formly/core';
import { PokemonItemPocketSelectComponent } from './pokemon-item-pocket-select.component';

export function providePokemonItemPocketSelect(): Provider {
  return provideFormlyConfig({
    types: [
      {
        name: 'pokemon-item-pocket-select',
        component: PokemonItemPocketSelectComponent,
        wrappers: ['form-field'],
      },
    ],
  });
}
