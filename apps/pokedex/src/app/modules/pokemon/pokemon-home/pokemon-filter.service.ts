import { Injectable } from '@angular/core';
import { PxPokemon } from '@pokedex-md/domain';
import { distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters } from '../../../shared/utils/generic-datasource';

@Injectable()
export class PokemonFilterService extends FilterService<PxPokemon, PokemonFilterModel> {
  override get filters$(): Observable<Filters<PxPokemon>> {
    return super.filterModel$.pipe(
      distinctUntilChanged(),
      map((filterModel) => {
        const { search, types, typesExclusiveness, generations } = filterModel;
        const filters: Filters<PxPokemon> = {};
        if (search) {
          filters['search'] = [
            {
              property: 'name',
              type: 'contains',
              value: search,
            },
            {
              property: 'id',
              type: 'contains',
              value: search,
            },
          ];
        }
        if (types?.length) {
          filters['types'] = [
            {
              property: 'types',
              type: typesExclusiveness ? 'contains-all' : 'contains-any',
              value: types,
            },
          ];
        }
        if (generations?.length) {
          filters['generation'] = [
            {
              property: 'generation',
              type: 'among',
              value: generations,
            },
          ];
        }
        return filters;
      }),
    );
  }
}

export interface PokemonFilterModel {
  search?: string;
  types?: string[];
  typesExclusiveness?: boolean;
  generations?: string[];
}
