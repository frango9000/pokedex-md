import { Injectable } from '@angular/core';
import { Species } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';
import { VersionGroupService } from '../games/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService extends TranslatedService<Species> {
  protected override get name(): string {
    return 'pokemon-species';
  }

  constructor(private readonly versionGroupService: VersionGroupService) {
    super();
  }

  protected override _parseOneTranslation(specie: Species): Observable<MergingMap> {
    const translations = new MergingMap();
    specie.genera.forEach((name) =>
      translations.merge(name.language.name, { species: { [specie.name]: { genus: name.genus } } }),
    );
    const defaultFlavorText =
      specie.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ??
      specie.flavor_text_entries[0]?.flavor_text ??
      'SPECIE_TRANSLATE_ERROR_001';
    const versions = this.versionGroupService.getAll();
    versions.forEach((versionGroup) => {
      translations.merge('en', {
        species: { [specie.name]: { flavor_text: { [versionGroup.name]: defaultFlavorText } } },
      });
    });
    specie.flavor_text_entries.forEach((entry) => {
      const versionGroup = versions.find((value) => value.name == entry.version.name);
      if (versionGroup) {
        translations.merge(entry.language.name, {
          species: { [specie.name]: { flavor_text: { [versionGroup.name]: entry.flavor_text } } },
        });
      }
    });
    return of(translations);
  }
}
