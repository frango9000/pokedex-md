import { Injectable } from '@angular/core';
import { PokemonColor, PxPokemonColor } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonColorService extends TranslatedService<PokemonColor, PxPokemonColor> {
  protected get name(): string {
    return 'pokemon-color';
  }

  protected override _parseAllTranslations(resources: PxPokemonColor[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (color, localized) => {
        return { pokemon_color: { [color.name]: localized } };
      }),
    );
  }
}
