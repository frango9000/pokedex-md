import { Pipe, PipeTransform } from '@angular/core';
import { getResourceId } from '../utils/resource.utils';

@Pipe({
  name: 'resourceId',
  standalone: true,
})
export class ResourceIdPipe implements PipeTransform {
  transform(value: string): number {
    return getResourceId(value);
  }
}
