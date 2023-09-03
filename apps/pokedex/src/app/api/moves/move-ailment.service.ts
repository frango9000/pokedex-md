import { Injectable } from '@angular/core';
import { MoveAilment, PxMoveAilment } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveAilmentService extends TranslatedService<MoveAilment, PxMoveAilment> {
  protected get name(): string {
    return 'move-ailment';
  }

  protected override _parseAllTranslations(ailments: PxMoveAilment[]): Observable<MergingMap | null> {
    return of(
      MergingMap.ofMultipleResources(ailments, 'names', (ailment, localized) => ({
        move_ailment: { [ailment.name]: localized },
      })),
    );
  }
}
