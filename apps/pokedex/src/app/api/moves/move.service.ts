import { Injectable } from '@angular/core';
import { Move, PxMove } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';
import { VersionGroupService } from '../games/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService extends TranslatedService<Move, PxMove> {
  protected get name(): string {
    return 'move';
  }

  constructor(private readonly versionGroupService: VersionGroupService) {
    super();
  }

  protected override _parseAllTranslations(resources: PxMove[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (move, localized) => ({
        move: { [move.name]: { name: localized } },
      })),
    );
  }

  protected override _parseOneTranslation(move: Move): Observable<MergingMap | null> {
    const translations = new MergingMap();
    move.effect_entries.forEach(({ language, effect, short_effect }) => {
      translations.merge(language.name, {
        move: { [move.name]: { effect_entry: { short: short_effect, effect: effect } } },
      });
    });
    const defaultFlavorText =
      move.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text || 'MOVE_TRANSLATE_ERROR_001';
    const versions = this.versionGroupService.getAll();
    versions.forEach((versionGroup) => {
      translations.merge('en', {
        move: { [move.name]: { flavor_text: { [versionGroup.name]: defaultFlavorText } } },
      });
    });
    move.flavor_text_entries.forEach((entry) => {
      translations.merge(entry.language.name, {
        move: { [move.name]: { flavor_text: { [entry.version_group.name]: entry.flavor_text } } },
      });
    });
    return of(translations);
  }
}
