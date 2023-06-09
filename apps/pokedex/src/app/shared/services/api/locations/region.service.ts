import { Injectable } from '@angular/core';
import { PxRegion, Region } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../../utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class RegionService extends MultiTranslatedService<Region, PxRegion> {
  protected get name(): string {
    return 'region';
  }

  protected _parseAllTranslations(resources: PxRegion[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (region, localized) => ({
        region: { [region.name]: localized },
      })),
    );
  }
}
