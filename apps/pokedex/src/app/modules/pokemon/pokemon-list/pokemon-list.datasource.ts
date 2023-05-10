import { Sort } from '@angular/material/sort';
import { PxPokemon } from '@pokedex-md/domain';
import { AbstractDatasource, Filters } from '../../../shared/utils/abstract-datasource';

export class PokemonListDatasource extends AbstractDatasource<PxPokemon> {
  protected resourceFilterer(filters: Filters): (resource: PxPokemon) => boolean {
    return function (p1: PxPokemon) {
      return true;
    };
  }

  protected resourceSorter(sort: Sort | null): (a: PxPokemon, b: PxPokemon) => number {
    return function (p1: PxPokemon, p2: PxPokemon) {
      return 0;
    };
  }
}
