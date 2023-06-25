import { Injectable } from '@angular/core';
import { EggGroup, PxEggGroup } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EggGroupService extends TranslatedService<EggGroup, PxEggGroup> {
  protected get name(): string {
    return 'egg-group';
  }

  protected override _parseAllTranslations(resources: PxEggGroup[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (eggGroup, localized) => {
        return {
          egg_group: { [eggGroup.name]: localized },
        };
      }),
    );
  }
}
