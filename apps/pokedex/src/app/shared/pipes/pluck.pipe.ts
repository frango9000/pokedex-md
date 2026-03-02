import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
})
export class PluckPipe implements PipeTransform {
  transform<T, K extends keyof T>(items: T[], property: K): T[K][] {
    if (!items || !property) {
      return [];
    }
    return items.map((item) => item[property]);
  }
}
