import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PxItem } from '@pokedex-md/domain';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters, RangeFilterValue } from '../../../shared/utils/generic-datasource';

@Injectable()
export class ItemFilterService extends FilterService<PxItem, ItemFilterModel> {
  private readonly translocoService: TranslocoService = inject(TranslocoService);

  protected override mapFilterModel(filterModel: ItemFilterModel): Filters<PxItem> {
    const { search, cost, categories, pockets } = filterModel;
    const filters: Filters<PxItem> = {};
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
    if (cost?.start || cost?.end) {
      filters['cost'] = [
        {
          property: 'cost',
          type: 'in-range',
          range: cost,
        },
      ];
    }
    if (categories?.length) {
      filters['category'] = [
        {
          property: 'category',
          type: 'among',
          value: categories,
        },
      ];
    }
    if (pockets?.length) {
      filters['pocket'] = [
        {
          property: 'pocket',
          type: 'among',
          value: pockets,
        },
      ];
    }
    return filters;
  }
}

export interface ItemFilterModel {
  search?: string;
  cost?: RangeFilterValue;
  pockets?: string[];
  categories?: string[];
}
