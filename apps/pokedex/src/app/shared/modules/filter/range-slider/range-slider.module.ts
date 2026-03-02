import { Provider } from '@angular/core';
import { provideFormlyConfig } from '@ngx-formly/core';
import { FormlyFieldRangeSlider } from './range-slider.type';

export function provideFormlyMatRangeSlider(): Provider {
  return provideFormlyConfig({
    types: [
      {
        name: 'range-slider',
        component: FormlyFieldRangeSlider,
        wrappers: ['form-field'],
      },
    ],
  });
}
