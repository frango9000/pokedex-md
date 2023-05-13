import { NamedApiEntity, NamedApiResource } from '../domain/domain';
import { Generation } from './generation';
import { GameVersion } from './version';

export interface PxVersionGroup extends NamedApiEntity {
  generation: string;
  order: number;
  versions: string[];
}

export interface VersionGroup extends NamedApiEntity {
  order: number;
  generation: NamedApiResource<Generation>;
  move_learn_method: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource<GameVersion>[];
}
