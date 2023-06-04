import { Injectable } from '@angular/core';
import { EggGroup, PxEggGroup } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../../utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EggGroupService extends MultiTranslatedService<EggGroup, PxEggGroup> {
  protected get name(): string {
    return 'egg-group';
  }

  protected _parseAllTranslations(resources: PxEggGroup[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (eggGroup, localized) => {
        return {
          egg_group: { [eggGroup.name]: localized },
        };
      }),
    );
  }
}
