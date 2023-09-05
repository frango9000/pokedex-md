import { ApiEntity, Item, Machine, Move, NamedApiResource, PxMachine } from '@pokedex-md/domain';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { fetchOne, filterAndMapNames, Generator } from '../model/generator';

export class MachineGenerator extends Generator<MachineWithItemAndMove, PxMachine> {
  constructor() {
    super('machine');
  }

  protected override mapResource(resource: MachineWithItemAndMove): PxMachine {
    return {
      id: resource.machine.id,
      version_group: resource.machine.version_group.name,
      item: {
        id: resource.item.id,
        name: resource.item.name,
        names: filterAndMapNames(resource.item.names),
        sprite: resource.item.sprites.default?.substring(71),
        cost: resource.item.cost,
      },
      move: {
        id: resource.move.id,
        name: resource.move.name,
        names: filterAndMapNames(resource.move.names),
        accuracy: resource.move.accuracy,
        pp: resource.move.pp,
        power: resource.move.power,
        type: resource.move.type.name,
      },
    };
  }

  protected override fetchResource(resource: NamedApiResource<Machine>): Observable<MachineWithItemAndMove> {
    return fetchOne<Machine>(resource).pipe(
      mergeMap((machine: Machine) =>
        forkJoin([of(machine), fetchOne<Item>(machine.item), fetchOne<Move>(machine.move)]),
      ),
      map(([machine, item, move]) => ({ machine, item, move })),
    );
  }
}

interface MachineWithItemAndMove extends ApiEntity {
  machine: Machine;
  item: Item;
  move: Move;
}
