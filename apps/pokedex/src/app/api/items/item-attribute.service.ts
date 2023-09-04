import { Injectable } from '@angular/core';
import { ItemAttribute, PxItemAttribute } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemAttributeService extends TranslatedService<ItemAttribute, PxItemAttribute> {
  protected override get name(): string {
    return 'item-attribute';
  }

  protected override _parseAllTranslations(attributes: PxItemAttribute[]): Observable<MergingMap | null> {
    return of(
      MergingMap.mergeMaps(
        MergingMap.ofMultipleResources(attributes, 'names', (attribute, localized) => ({
          item_attribute: { [attribute.name]: { name: localized } },
        })),
        MergingMap.ofMultipleResources(attributes, 'descriptions', (attribute, localized) => ({
          item_attribute: { [attribute.name]: { description: localized } },
        })),
      ),
    );
  }
}
