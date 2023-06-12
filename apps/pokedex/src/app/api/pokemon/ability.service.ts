import { Injectable } from '@angular/core';
import { Ability, PxAbility } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { FullyTranslatedService } from '../base.service';
import { VersionGroupService } from '../games/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class AbilityService extends FullyTranslatedService<Ability, PxAbility> {
  constructor(protected readonly versionGroupService: VersionGroupService) {
    super();
  }

  protected get name(): string {
    return 'ability';
  }

  protected _parseAllTranslations(resources: PxAbility[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (ability, localized) => ({
        type: { [ability.name]: { name: localized } },
      })),
    );
  }

  protected _parseOneTranslation(ability: Ability): Observable<MergingMap> {
    const translations = new MergingMap();
    ability.effect_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        ABILITY: { [ability.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
      });
    });
    const defaultFlavorText =
      ability.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ||
      'ABILITY_TRANSLATE_ERROR_001';
    this.versionGroupService.getAll().forEach((versionGroup) => {
      translations.merge('en', {
        ABILITY: { [ability.name]: { FLAVOR_TEXT: { [versionGroup.name]: defaultFlavorText } } },
      });
    });
    ability.flavor_text_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        ABILITY: { [ability.name]: { FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text } } },
      });
    });
    return of(translations);
  }
}
