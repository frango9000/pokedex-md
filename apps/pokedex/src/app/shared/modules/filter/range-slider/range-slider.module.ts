import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlyFieldRangeSlider } from './range-slider.type';

@NgModule({
  declarations: [FormlyFieldRangeSlider],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'range-slider',
          component: FormlyFieldRangeSlider,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FormlyMatRangeSliderModule {}
