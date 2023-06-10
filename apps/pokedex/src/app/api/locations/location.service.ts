import { Injectable } from '@angular/core';
import { PokemonLocation, PxLocation } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends MultiTranslatedService<PokemonLocation, PxLocation> {
  protected get name(): string {
    return 'location';
  }

  protected _parseAllTranslations(resources: PxLocation[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (location, localized) => ({
        location: { [location.name]: localized },
      })),
    );
  }

  public findByName(name: string): PxLocation | undefined {
    return this.findOne((resource) => resource.name === name);
  }
}
