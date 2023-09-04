import { ChangeDetectionStrategy, Component, OnInit, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { FormlyFieldSlider } from '@ngx-formly/material/slider/slider.type';
import { startWith } from 'rxjs';

interface SliderProps extends FormlyFieldProps {
  displayWith?: (value: number) => string;
  discrete?: boolean;
  showTickMarks?: boolean;
}

export interface FormlySliderFieldConfig extends FormlyFieldConfig<SliderProps> {
  type: 'range-slider' | Type<FormlyFieldSlider>;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-field-mat-range-slider',
  template: `
    <mat-slider
      [id]="id"
      [style.width]="'100%'"
      [formlyAttributes]="field"
      [tabIndex]="props.tabindex"
      [discrete]="!!props.discrete"
      [showTickMarks]="!!props.showTickMarks"
      [color]="props.color"
      [displayWith]="props.displayWith || defaultDisplayWith"
      [max]="props.max"
      [min]="props.min"
      [step]="props.step"
    >
      <input [(ngModel)]="start" matSliderStartThumb (valueChange)="onRangeChange()" />
      <input [(ngModel)]="end" matSliderEndThumb (valueChange)="onRangeChange()" />
    </mat-slider>
    <button mat-icon-button aria-label="clear" (click)="clearRange($event)">
      <mat-icon>backspace</mat-icon>
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldRangeSlider extends FieldType<FieldTypeConfig<SliderProps>> implements OnInit {
  protected start = 0;
  protected end = 100;
  protected defaultDisplayWith = (value: number) => String(value);

  ngOnInit(): void {
    this.formControl.valueChanges.pipe(startWith(this.formControl.value)).subscribe((value) => {
      this.start = value?.start ?? this.props.min ?? 0;
      this.end = value?.end ?? this.props.max ?? 100;
    });
  }

  onRangeChange(): void {
    const start = this.start != this.props.min ? this.start : undefined;
    const end = this.end != this.props.max ? this.end : undefined;
    this.formControl.patchValue(start === undefined && end === undefined ? undefined : { start, end });
  }

  clearRange($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.start = this.props.min ?? 0;
    this.end = this.props.max ?? 100;
    this.onRangeChange();
  }
}
