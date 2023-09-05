import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Machine } from '@pokedex-md/domain';
import { MachineService } from '../../../api/machine/machine.service';

export const machineResolver: ResolveFn<Machine> = (route: ActivatedRouteSnapshot) => {
  return inject(MachineService).fetchApiOne$(route.params['machine']);
};
