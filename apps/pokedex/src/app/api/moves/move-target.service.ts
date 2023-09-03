import { Injectable } from '@angular/core';
import { MoveTarget, PxMoveTarget } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveTargetService extends TranslatedService<MoveTarget, PxMoveTarget> {
  protected get name(): string {
    return 'move-target';
  }

  protected override _parseAllTranslations(moveTargets: PxMoveTarget[]): Observable<MergingMap | null> {
    return of(
      MergingMap.mergeMaps(
        MergingMap.ofMultipleResources(moveTargets, 'names', (target, localized) => ({
          move_target: { [target.name]: { name: localized } },
        })),
        MergingMap.ofMultipleResources(moveTargets, 'descriptions', (target, localized) => ({
          move_target: { [target.name]: { description: localized } },
        })),
      ),
    );
  }
}
