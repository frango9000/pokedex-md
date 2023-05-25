import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeDamagesMultiplierColor',
  standalone: true,
})
export class TypeDamagesMultiplierColorPipe implements PipeTransform {
  transform(multiplier: number): string {
    switch (multiplier) {
      case 0:
        return '#05F';
      case 0.25:
        return '#007a0c';
      case 0.5:
        return '#7ba600';
      case 2:
        return '#F50';
      case 4:
        return '#F00';
      default:
        return '#000';
    }
  }
}
