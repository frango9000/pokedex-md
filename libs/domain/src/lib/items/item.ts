import { ApiEffectEntry, GenerationGameIndex, MachineVersionDetail, VersionGroupFlavorText } from '../domain/common';
import { ApiDescription, ApiEntity, ApiName, LocalizedNames, NamedApiResource } from '../domain/domain';
import { EvolutionChain } from '../evolution/evolution-chain';
import { GameVersion } from '../games/version';
import { Pokemon } from '../pokemon/pokemon';

export interface PxItem extends ApiEntity {
  id: number;
  name: string;
  cost: number;
  sprite: string;
  names: LocalizedNames;
  category: string;
  pocket: string;
}

export interface Item extends ApiEntity {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedApiResource;
  attributes: NamedApiResource<ItemAttribute>[];
  category: NamedApiResource<ItemCategory>;
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: ApiName[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: NamedApiResource<EvolutionChain>;
  machines: MachineVersionDetail[];
}

export interface PxItemCategory extends ApiEntity {
  id: number;
  name: string;
  names: LocalizedNames;
  pocket: string;
}

export interface ItemCategory extends ApiEntity {
  id: number;
  name: string;
  items: NamedApiResource<Item>[];
  names: ApiName[];
  pocket: NamedApiResource;
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: NamedApiResource<Pokemon>;
  version_details: ItemHolderPokemonVersionDetail;
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedApiResource<GameVersion>;
}

export interface PxItemAttribute extends ApiEntity {
  id: number;
  name: string;
  names: LocalizedNames;
  descriptions: LocalizedNames;
}

export interface ItemAttribute extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  descriptions: ApiDescription[];
  items: NamedApiResource<Item>[];
}

export interface PxItemPocket extends ApiEntity {
  id: number;
  name: string;
  names: LocalizedNames;
}

export interface ItemPocket extends ApiEntity {
  id: number;
  name: string;
  categories: NamedApiResource<ItemCategory>[];
  names: ApiName[];
}

export interface ItemCategory extends ApiEntity {
  id: number;
  name: string;
  names: ApiName[];
  items: NamedApiResource<Item>[];
  pocket: NamedApiResource<ItemPocket>;
}

export interface ItemFlingEffect extends ApiEntity {
  id: number;
  name: string;
  items: NamedApiResource<Item>[];
  effect_entries: ApiEffectEntry[];
}
