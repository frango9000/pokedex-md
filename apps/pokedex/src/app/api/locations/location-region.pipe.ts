import { inject, Pipe, PipeTransform } from '@angular/core';
import { LocationService } from './location.service';

@Pipe({
  name: 'locationRegion',
})
export class LocationRegionPipe implements PipeTransform {
  private readonly locationService: LocationService = inject(LocationService);
  transform(location: string): string | undefined {
    return this.locationService.findByName(location)?.region;
  }
}
