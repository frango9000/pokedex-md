import { ApiEntity, NamedApiResource } from '../domain/domain';
import { Generation } from './generation';
import { GameVersion } from './version';

export interface PxVersionGroup extends ApiEntity {
  generation?: number;
  order?: number;
  versions?: string[];
}

export interface VersionGroup extends ApiEntity {
  name: string;
  id: number;
  order: number;
  generation: NamedApiResource<Generation>;
  move_learn_method: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource<GameVersion>[];
}
