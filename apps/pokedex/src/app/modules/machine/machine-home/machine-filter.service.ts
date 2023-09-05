import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PxMachine } from '@pokedex-md/domain';
import { combineLatestWith, distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VersionGroupService } from '../../../api/games/version-group.service';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { Filters, RangeFilterValue } from '../../../shared/utils/generic-datasource';

@Injectable()
export class MachineFilterService extends FilterService<PxMachine, MachineFilterModel> {
  private readonly translocoService: TranslocoService = inject(TranslocoService);
  private readonly versionGroupService: VersionGroupService = inject(VersionGroupService);

  override get filters$(): Observable<Filters<PxMachine>> {
    return this.filterModel$.pipe(
      distinctUntilChanged(),
      combineLatestWith(this.versionGroupService.versionGroup$),
      map(([filterModel, versionGroup]) => ({ ...filterModel, versionGroup: versionGroup.name })),
      map(this.mapFilterModel),
    );
  }

  protected mapFilterModel(filterModel: MachineFilterModel): Filters<PxMachine> {
    const { search, cost, types, power, pp, accuracy, versionGroup } = filterModel;
    const filters: Filters<PxMachine> = {};
    if (versionGroup) {
      filters['versionGroup'] = [
        {
          property: 'version_group',
          type: 'equal',
          value: versionGroup,
        },
      ];
    }
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
  versionGroup?: string;
  search?: string;
  cost?: RangeFilterValue;
  types?: string[];
  power?: RangeFilterValue;
  pp?: RangeFilterValue;
  accuracy?: RangeFilterValue;
}
