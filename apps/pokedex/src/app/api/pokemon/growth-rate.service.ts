import { Injectable } from '@angular/core';
import { GrowthRate, PxGrowthRate } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class GrowthRateService extends MultiTranslatedService<GrowthRate, PxGrowthRate> {
  protected get name(): string {
    return 'growth-rate';
  }

  protected _parseAllTranslations(resources: PxGrowthRate[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'descriptions', (growthRate, localized) => {
        return {
          growth_rate: { [growthRate.name]: { description: localized, formula: growthRate.formula } },
        };
      }),
    );
  }
}
