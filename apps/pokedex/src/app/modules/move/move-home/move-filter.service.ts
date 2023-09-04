import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PxMove } from '@pokedex-md/domain';
import { distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters, RangeFilterValue } from '../../../shared/utils/generic-datasource';

@Injectable()
export class MoveFilterService extends FilterService<PxMove, MoveFilterModel> {
  private readonly translocoService: TranslocoService = inject(TranslocoService);

  override get filters$(): Observable<Filters<PxMove>> {
    return super.filterModel$.pipe(
      distinctUntilChanged(),
      map((filterModel) => {
        const { search, types, generations, power, pp, accuracy } = filterModel;
        const filters: Filters<PxMove> = {};
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
          filters['type'] = [
            {
              property: 'type',
              type: 'among',
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
        if (power?.start || power?.end) {
          filters['power'] = [
            {
              property: 'power',
              type: 'in-range',
              range: power,
            },
          ];
        }
        if (pp?.start || pp?.end) {
          filters['pp'] = [
            {
              property: 'pp',
              type: 'in-range',
              range: pp,
            },
          ];
        }
        if (accuracy?.start || accuracy?.end) {
          filters['accuracy'] = [
            {
              property: 'accuracy',
              type: 'in-range',
              range: accuracy,
            },
          ];
        }
        return filters;
      }),
    );
  }
}

export interface MoveFilterModel {
  search?: string;
  types?: string[];
  generations?: string[];
  power?: RangeFilterValue;
  pp?: RangeFilterValue;
  accuracy?: RangeFilterValue;
}
