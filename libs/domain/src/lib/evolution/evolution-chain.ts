import { ApiNameLocalization, IdApiEntity, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';
import { Item } from '../items/item';
import { PokemonLocation } from '../location/location';
import { Move } from '../moves/move';
import { Species } from '../pokemon/species';
import { PokemonType } from '../pokemon/type';

export interface EvolutionChain extends IdApiEntity {
  id: number;
  baby_trigger_item: NamedApiResource<Item>;
  chain: EvolutionChainLink;
}

export interface EvolutionChainLink {
  is_baby: boolean;
  species: NamedApiResource<Species>;
  evolution_details: EvolutionDetail[];
  evolves_to?: EvolutionChainLink[];
}

export interface EvolutionDetail {
  item: NamedApiResource<Item>;
  trigger: NamedApiResource<EvolutionTrigger>;
  gender: number;
  held_item: NamedApiResource<Item>;
  known_move_type: NamedApiResource<PokemonType>;
  known_move: NamedApiResource<Move>;
  location: NamedApiResource<PokemonLocation>;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource<Species>;
  party_type: NamedApiResource<PokemonType>;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResource<Species>;
  turn_upside_down: boolean;

  //Non Api Content, Used in templates
  // processed_details?: PokemonEvolutionTriggerDetails;
}

export interface EvolutionTrigger extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxEvolutionTrigger extends NamedApiEntity {
  names: LocalizedNames;
}

//Non Api Content, Used in templates

// export interface PokemonEvolutionTriggerDetails {
//   trigger: PokemonEvolutionTriggerDetail;
//   conditions: PokemonEvolutionTriggerDetail[];
// }
//
// export interface PokemonEvolutionTriggerDetail {
//   title: string;
//   value?: number | string;
//   translation?: string;
// }
