import { Injectable } from '@angular/core';
import { ItemPocket, PxItemPocket } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemPocketService extends TranslatedService<ItemPocket, PxItemPocket> {
  protected override get name(): string {
    return 'item-pocket';
  }

  protected override _parseAllTranslations(pockets: PxItemPocket[]): Observable<MergingMap | null> {
    return of(
      MergingMap.ofMultipleResources(pockets, 'names', (pocket, localized) => ({
        item_pocket: { [pocket.name]: localized },
      })),
    );
  }
}
