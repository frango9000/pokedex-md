import { Injectable } from '@angular/core';
import { PxMachine } from '@pokedex-md/domain';
import { FilterService } from '../../../shared/modules/filter/filter.service';
import { RangeFilterValue } from '../../../shared/utils/generic-datasource';

@Injectable()
export class MachineFilterService extends FilterService<PxMachine, MachineFilterModel> {}

export interface MachineFilterModel {
  search?: string;
  types?: string[];
  power?: RangeFilterValue;
  pp?: RangeFilterValue;
  accuracy?: RangeFilterValue;
}
