import { Injectable } from '@angular/core';
import { Pokemon, PxPokemon } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../utils/merge-map';
import { MultiTranslatedService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends MultiTranslatedService<Pokemon, PxPokemon> {
  override get name(): string {
    return 'pokemon';
  }

  protected _parseAllTranslations(resources: PxPokemon[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (pokemon, localized) => {
        return {
          POKEMON: { [pokemon.name]: { NAME: localized } },
        };
      }),
    );
  }
}
