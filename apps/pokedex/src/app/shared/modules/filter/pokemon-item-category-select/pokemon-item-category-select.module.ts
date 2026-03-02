import { Provider } from '@angular/core';
import { provideFormlyConfig } from '@ngx-formly/core';
import { PokemonItemCategorySelectComponent } from './pokemon-item-category-select.component';

export function providePokemonItemCategorySelect(): Provider {
  return provideFormlyConfig({
    types: [
      {
        name: 'pokemon-item-category-select',
        component: PokemonItemCategorySelectComponent,
        wrappers: ['form-field'],
      },
    ],
  });
}
