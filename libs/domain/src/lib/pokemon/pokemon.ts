import { ApiEntity, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';
import { GameVersion } from '../games/version';
import { PxVersionGroup } from '../games/version-group';
import { Item } from '../items/item';
import { Move } from '../moves/move';
import { Ability } from './ability';
import { Species } from './species';
import { PokemonType } from './type';

export interface PxPokemon extends NamedApiEntity {
  types: string[];
  generation: string;
  names: LocalizedNames;
}

export interface Pokemon extends NamedApiEntity {
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  species: NamedApiResource<Species>;
  forms: NamedApiResource[];
  moves: PokemonMoves[];
  abilities: PokemonAbilities[];
  game_indices: PokemonGameIndices[];
  held_items: PokemonHeldItems[];
  location_area_encounters: string;
  sprites: PokemonSprites;
  stats: PokemonStats[];
  types: PokeSlotType[];
}

export interface PokeSlotType {
  slot: number;
  type: NamedApiResource<PokemonType>;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}

export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonEncounterVersionDetail {
  max_chance: number;
  encounter_details: {
    min_level: number;
    max_level: number;
    condition_values: NamedApiResource[];
    chance: number;
    method: NamedApiResource;
  }[];
  version: NamedApiResource<GameVersion>;
}

export interface PokemonLocationAreaEncounters {
  location_area: NamedApiResource;
  version_details: PokemonEncounterVersionDetail[];
}

export interface PxLocationAreaEncounter {
  location_area: NamedApiResource;
  version_detail: PokemonEncounterVersionDetail;
}

export interface PxEncountersByVersion {
  version: NamedApiResource<GameVersion>;
  version_location_encounters: PxLocationAreaEncounter[];
}

export interface PokemonHeldItems {
  item: NamedApiResource<Item>;
  version_details: {
    rarity: number;
    version: NamedApiResource<GameVersion>;
  }[];
}

export interface PokemonAbilities {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiResource<Ability>;
}

export interface PokemonGameIndices {
  game_index: number;
  version: NamedApiResource<GameVersion>;
}

export interface PokemonMoves {
  move: NamedApiResource<Move>;
  version_group_details: PokemonVersionGroupDetails[];
  version_group_detail?: PokemonVersionGroupDetails;
  type: string;
}

export interface PokemonVersionGroupDetails {
  level_learned_at: number;
  version_group: PxVersionGroup;
  move_learn_method: NamedApiResource;
}

export interface Gender extends NamedApiEntity {
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: NamedApiResource<Species>[];
}

export interface PokemonSpeciesGender extends ApiEntity {
  rate: number;
  pokemon_species: NamedApiResource<Species>;
}
