import { Injectable } from '@angular/core';
import { Move, PxMove } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService extends MultiTranslatedService<Move, PxMove> {
  protected get name(): string {
    return 'move';
  }

  protected _parseAllTranslations(resources: PxMove[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (move, localized) => ({
        move: { [move.name]: { name: localized } },
      })),
    );
  }
}
