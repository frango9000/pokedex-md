import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Item, Machine, Move } from '@pokedex-md/domain';
import { forkJoin, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../../../api/items/item.service';
import { MachineService } from '../../../api/machine/machine.service';
import { MoveService } from '../../../api/moves/move.service';

export const machineDetailResolver: ResolveFn<MachineDetail> = (route: ActivatedRouteSnapshot) => {
  const moveService: MoveService = inject(MoveService);
  const itemService: ItemService = inject(ItemService);
  return inject(MachineService)
    .fetchApiOne$(route.params['machine'])
    .pipe(
      switchMap((machine) =>
        forkJoin([
          of(machine),
          moveService.fetchApiOne$(machine.move.name),
          itemService.fetchApiOne$(machine.item.name),
        ]),
      ),
      map(([machine, move, item]) => ({ machine, move, item })),
    );
};

export interface MachineDetail {
  machine: Machine;
  item: Item;
  move: Move;
}
