import { Injectable } from '@angular/core';
import { Item, PxItem } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends MultiTranslatedService<Item, PxItem> {
  protected override get name(): string {
    return 'item';
  }

  protected _parseAllTranslations(resources: PxItem[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (item, localized) => {
        return {
          item: { [item.name]: { name: localized } },
        };
      }),
    );
  }
}
