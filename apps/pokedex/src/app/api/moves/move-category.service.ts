import { Injectable } from '@angular/core';
import { MoveCategory, PxMoveCategory } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveCategoryService extends TranslatedService<MoveCategory, PxMoveCategory> {
  protected get name(): string {
    return 'move-category';
  }

  protected override _parseAllTranslations(categories: PxMoveCategory[]): Observable<MergingMap | null> {
    return of(
      MergingMap.ofMultipleResources(categories, 'descriptions', (category, localized) => ({
        move_category: { [category.name]: localized },
      })),
    );
  }
}
