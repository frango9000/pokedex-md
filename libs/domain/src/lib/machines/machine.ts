import { IdApiEntity, NamedApiResource } from '../domain/domain';
import { VersionGroup } from '../games/version-group';
import { Item } from '../items/item';
import { Move } from '../moves/move';

export interface PxMachine extends IdApiEntity {
  id: number;
  item: { id: number; name: string; cost: number; sprite: string };
  move: {
    id: number;
    name: string;
    accuracy?: number;
    power?: number;
    pp?: number;
    type: string;
  };
  version_group: string;
}

export interface Machine extends IdApiEntity {
  id: number;
  item: NamedApiResource<Item>;
  move: NamedApiResource<Move>;
  version_group: NamedApiResource<VersionGroup>;
}
