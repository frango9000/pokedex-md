import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PxMachine } from '@pokedex-md/domain';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters, RangeFilterValue } from '../../../shared/utils/generic-datasource';

@Injectable()
export class MachineFilterService extends FilterService<PxMachine, MachineFilterModel> {
  private readonly translocoService: TranslocoService = inject(TranslocoService);

  protected mapFilterModel(filterModel: MachineFilterModel): Filters<PxMachine> {
    const { search, cost, types, power, pp, accuracy } = filterModel;
    const filters: Filters<PxMachine> = {};
    if (search) {
      filters['search'] = [
        {
          property: 'id',
          type: 'contains',
          value: search,
        },
        {
          property: 'move.id',
          type: 'contains',
          value: search,
        },
        {
          property: 'move.names',
          type: 'contains',
          value: search,
          locale: this.translocoService.getActiveLang(),
        },
        {
          property: 'item.id',
          type: 'contains',
          value: search,
        },
        {
          property: 'item.names',
          type: 'contains',
          value: search,
          locale: this.translocoService.getActiveLang(),
        },
      ];
    }
    if (cost?.start || cost?.end) {
      filters['cost'] = [
        {
          property: 'item.cost',
          type: 'in-range',
          range: cost,
        },
      ];
    }
    if (types?.length) {
      filters['type'] = [
        {
          property: 'move.type',
          type: 'among',
          value: types,
        },
      ];
    }
    if (power?.start || power?.end) {
      filters['power'] = [
        {
          property: 'move.power',
          type: 'in-range',
          range: power,
        },
      ];
    }
    if (pp?.start || pp?.end) {
      filters['pp'] = [
        {
          property: 'move.pp',
          type: 'in-range',
          range: pp,
        },
      ];
    }
    if (accuracy?.start || accuracy?.end) {
      filters['accuracy'] = [
        {
          property: 'move.accuracy',
          type: 'in-range',
          range: accuracy,
        },
      ];
    }
    return filters;
  }
}

export interface MachineFilterModel {
  search?: string;
  cost?: RangeFilterValue;
  types?: string[];
  power?: RangeFilterValue;
  pp?: RangeFilterValue;
  accuracy?: RangeFilterValue;
}
