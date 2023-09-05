import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PxPokemon } from '@pokedex-md/domain';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters } from '../../../shared/utils/generic-datasource';

@Injectable()
export class PokemonFilterService extends FilterService<PxPokemon, PokemonFilterModel> {
  private readonly translocoService: TranslocoService = inject(TranslocoService);

  protected override mapFilterModel(filterModel: PokemonFilterModel): Filters<PxPokemon> {
    const { search, types, typesExclusiveness, generations } = filterModel;
    const filters: Filters<PxPokemon> = {};
    if (search) {
      filters['search'] = [
        {
          property: 'names',
          type: 'contains',
          value: search,
          locale: this.translocoService.getActiveLang(),
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
  }
}

export interface PokemonFilterModel {
  search?: string;
  types?: string[];
  typesExclusiveness?: boolean;
  generations?: string[];
}
