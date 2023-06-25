import { Injectable } from '@angular/core';
import { Pokemon, PxPokemon } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends TranslatedService<Pokemon, PxPokemon> {
  protected override get name(): string {
    return 'pokemon';
  }

  protected override _parseAllTranslations(resources: PxPokemon[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (pokemon, localized) => {
        return {
          pokemon: { [pokemon.name]: localized },
        };
      }),
    );
  }
}
