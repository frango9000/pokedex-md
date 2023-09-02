import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deepPluck',
  standalone: true,
})
export class DeepPluckPipe implements PipeTransform {
  transform(items: never[], propertyPath: string): string[] {
    if (!items || !propertyPath) {
      return items;
    }

    return items.map((item) => this.deepPluckProperty(item, propertyPath));
  }

  private deepPluckProperty(obj: never, propertyPath: string): string {
    const properties = propertyPath.split('.');

    for (const element of properties) {
      const property = element;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-prototype-builtins
      if (!obj || !(obj as any).hasOwnProperty?.(property)) {
        return obj;
      }
      obj = obj[property];
    }

    return obj;
  }
}
