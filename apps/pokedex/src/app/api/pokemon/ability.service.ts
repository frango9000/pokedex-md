import { Injectable } from '@angular/core';
import { Ability, PxAbility } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';
import { VersionGroupService } from '../games/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class AbilityService extends TranslatedService<Ability, PxAbility> {
  constructor(protected readonly versionGroupService: VersionGroupService) {
    super();
  }

  protected get name(): string {
    return 'ability';
  }

  protected override _parseAllTranslations(resources: PxAbility[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (ability, localized) => ({
        ability: { [ability.name]: { name: localized } },
      })),
    );
  }

  protected override _parseOneTranslation(ability: Ability): Observable<MergingMap> {
    const translations = new MergingMap();
    ability.effect_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        ability: { [ability.name]: { effect_entry: { short: entry.short_effect, effect: entry.effect } } },
      });
    });
    const defaultFlavorText =
      ability.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ||
      'ABILITY_TRANSLATE_ERROR_001';
    this.versionGroupService.getAll().forEach((versionGroup) => {
      translations.merge('en', {
        ability: { [ability.name]: { flavor_text: { [versionGroup.name]: defaultFlavorText } } },
      });
    });
    ability.flavor_text_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        ability: { [ability.name]: { flavor_text: { [entry.version_group.name]: entry.flavor_text } } },
      });
    });
    return of(translations);
  }
}
