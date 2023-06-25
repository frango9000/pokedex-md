import { Injectable } from '@angular/core';
import { PxRegion, Region } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class RegionService extends TranslatedService<Region, PxRegion> {
  protected get name(): string {
    return 'region';
  }

  protected override _parseAllTranslations(resources: PxRegion[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (region, localized) => ({
        region: { [region.name]: localized },
      })),
    );
  }
}
