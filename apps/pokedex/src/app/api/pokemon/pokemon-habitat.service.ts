import { Injectable } from '@angular/core';
import { PokemonHabitat, PxPokemonHabitat } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonHabitatService extends TranslatedService<PokemonHabitat, PxPokemonHabitat> {
  protected get name(): string {
    return 'pokemon-habitat';
  }

  protected override _parseAllTranslations(resources: PxPokemonHabitat[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (habitat, localized) => {
        return {
          pokemon_habitat: { [habitat.name]: localized },
        };
      }),
    );
  }
}
