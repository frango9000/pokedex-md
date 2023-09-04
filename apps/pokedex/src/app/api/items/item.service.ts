import { inject, Injectable } from '@angular/core';
import { Item, PxItem } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';
import { VersionGroupService } from '../games/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends TranslatedService<Item, PxItem> {
  private readonly versionGroupService: VersionGroupService = inject(VersionGroupService);

  protected override get name(): string {
    return 'item';
  }

  protected override _parseAllTranslations(resources: PxItem[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (item, localized) => {
        return {
          item: { [item.name]: { name: localized } },
        };
      }),
    );
  }

  protected override _parseOneTranslation(item: Item): Observable<MergingMap> {
    const translations = new MergingMap();
    item.effect_entries.forEach((entry) =>
      translations.merge(entry.language.name, {
        item: { [item.name]: { effect_entry: { short: entry.short_effect, effect: entry.effect } } },
      }),
    );
    const defaultFlavorText =
      item.flavor_text_entries.find((value) => value.language.name === 'en')?.text || 'ITEM_TRANSLATE_ERROR_001';
    const versions = this.versionGroupService.getAll();
    versions.forEach((versionGroup) =>
      translations.merge('en', {
        item: { [item.name]: { flavor_text: { [versionGroup.name]: defaultFlavorText } } },
      }),
    );
    item.flavor_text_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        item: { [item.name]: { flavor_text: { [entry.version_group.name]: entry.text } } },
      });
    });
    return of(translations);
  }
}
