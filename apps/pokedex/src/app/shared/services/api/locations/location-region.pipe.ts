import { Pipe, PipeTransform } from '@angular/core';
import { LocationService } from './location.service';

@Pipe({
  name: 'locationRegion',
  standalone: true,
})
export class LocationRegionPipe implements PipeTransform {
  constructor(private readonly locationService: LocationService) {}

  transform(location: string): string | undefined {
    return this.locationService.findByName(location)?.region;
  }
}
