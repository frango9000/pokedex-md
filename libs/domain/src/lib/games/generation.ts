import { ApiEntity, ApiName, LocalizedNames, NamedApiResource } from '../domain/domain';
import { Move } from '../moves/move';
import { Ability } from '../pokemon/ability';
import { Species } from '../pokemon/species';
import { PokemonType } from '../pokemon/type';
import { VersionGroup } from './version-group';

export interface PxGeneration extends ApiEntity {
  abilities: string[];
  names: LocalizedNames;
  main_region: string;
  moves: string[];
  pokemon_species: string[];
  types: string[];
  version_groups: string[];
}

export interface Generation extends ApiEntity {
  abilities: NamedApiResource<Ability>[];
  names: ApiName[];
  main_region: NamedApiResource;
  moves: NamedApiResource<Move>[];
  pokemon_species: NamedApiResource<Species>[];
  types: NamedApiResource<PokemonType>[];
  version_groups: NamedApiResource<VersionGroup>[];
}
