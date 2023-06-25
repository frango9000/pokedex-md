import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true,
})
export class InitialsPipe implements PipeTransform {
  transform(value: string, limit = -1, splitOn = ' ', joinWith = ''): string {
    return value
      .split(splitOn)
      .map((word) => word?.[0])
      .join(joinWith)
      .slice(0, limit)
      .toUpperCase();
  }
}
