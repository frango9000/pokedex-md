import { Injectable } from '@angular/core';
import { ItemCategory, PxItemCategory } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemCategoryService extends TranslatedService<ItemCategory, PxItemCategory> {
  protected override get name(): string {
    return 'item-category';
  }

  protected override _parseAllTranslations(categories: PxItemCategory[]): Observable<MergingMap | null> {
    return of(
      MergingMap.ofMultipleResources(categories, 'names', (category, localized) => ({
        item_category: { [category.name]: localized },
      })),
    );
  }
}
