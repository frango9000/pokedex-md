import { GenerationGameIndex } from '../domain/common';
import { ApiNameLocalization, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';
import { Generation } from '../games/generation';
import { VersionGroup } from '../games/version-group';

export interface PxLocation extends NamedApiEntity {
  names: LocalizedNames;
  region?: string;
}

export interface PokemonLocation extends NamedApiEntity {
  region: NamedApiResource<Region>;
  names: ApiNameLocalization[];
  game_indices: GenerationGameIndex[];
  areas: NamedApiResource<LocationArea>[];
}

export interface LocationArea extends NamedApiEntity {
  game_index: number;
  encounter_method_rates: [];
  location: NamedApiResource<PokemonLocation>;
  names: ApiNameLocalization[];
  pokemon_encounters: [];
}

export interface PxRegion extends NamedApiEntity {
  names: LocalizedNames;
}

export interface Region extends NamedApiEntity {
  locations: NamedApiResource<PokemonLocation>[];
  names: ApiNameLocalization[];
  main_generation: NamedApiResource<Generation>;
  pokedexes: NamedApiResource[];
  version_groups: NamedApiResource<VersionGroup>[];
}
