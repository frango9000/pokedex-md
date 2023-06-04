import { Injectable } from '@angular/core';
import { PokemonColor, PxPokemonColor } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../../utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonColorService extends MultiTranslatedService<PokemonColor, PxPokemonColor> {
  protected get name(): string {
    return 'pokemon-color';
  }

  protected _parseAllTranslations(resources: PxPokemonColor[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (color, localized) => {
        return {
          pokemon_color: { [color.name]: localized },
        };
      }),
    );
  }
}
