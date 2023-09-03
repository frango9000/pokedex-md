import { Injectable } from '@angular/core';
import { MoveLearnMethod, PxMoveLearnMethod } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveLearnMethodService extends TranslatedService<MoveLearnMethod, PxMoveLearnMethod> {
  protected get name(): string {
    return 'move-learn-method';
  }

  protected override _parseAllTranslations(learnMethods: PxMoveLearnMethod[]): Observable<MergingMap | null> {
    return of(
      MergingMap.mergeMaps(
        MergingMap.ofMultipleResources(learnMethods, 'names', (method, localized) => ({
          move_learn_method: { [method.name]: { name: localized } },
        })),
        MergingMap.ofMultipleResources(learnMethods, 'descriptions', (method, localized) => ({
          move_learn_method: { [method.name]: { description: localized } },
        })),
      ),
    );
  }
}
