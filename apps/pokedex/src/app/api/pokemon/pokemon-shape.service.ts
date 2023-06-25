import { Injectable } from '@angular/core';
import { PokemonShape, PxPokemonShape } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonShapeService extends TranslatedService<PokemonShape, PxPokemonShape> {
  protected get name(): string {
    return 'pokemon-shape';
  }

  protected override _parseAllTranslations(resources: PxPokemonShape[]): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps(
        MergingMap.ofMultipleResources(resources, 'names', (shape, localized) => {
          return {
            pokemon_shape: { [shape.name]: { name: localized } },
          };
        }),
        MergingMap.ofMultipleResources(resources, 'awesome_names', (shape, localized) => {
          return {
            pokemon_shape: { [shape.name]: { awesome_name: localized } },
          };
        }),
      ),
    );
  }
}
