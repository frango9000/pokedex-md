import { ApiEffectEntry, GenerationGameIndex, MachineVersionDetail, VersionGroupFlavorText } from '../domain/common';
import {
  ApiDescriptionLocalization,
  ApiNameLocalization,
  LocalizedNames,
  NamedApiEntity,
  NamedApiResource,
} from '../domain/domain';
import { EvolutionChain } from '../evolution/evolution-chain';
import { GameVersion } from '../games/version';
import { Pokemon } from '../pokemon/pokemon';

export interface PxItem extends NamedApiEntity {
  cost: number;
  sprite: string;
  names: LocalizedNames;
  category: string;
  pocket: string;
}

export interface Item extends NamedApiEntity {
  cost: number;
  fling_power: number;
  fling_effect: NamedApiResource;
  attributes: NamedApiResource<ItemAttribute>[];
  category: NamedApiResource<ItemCategory>;
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: ApiNameLocalization[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: NamedApiResource<EvolutionChain>;
  machines: MachineVersionDetail[];
}

export interface PxItemCategory extends NamedApiEntity {
  names: LocalizedNames;
  pocket: string;
}

export interface ItemCategory extends NamedApiEntity {
  items: NamedApiResource<Item>[];
  names: ApiNameLocalization[];
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

export interface PxItemAttribute extends NamedApiEntity {
  names: LocalizedNames;
  descriptions: LocalizedNames;
}

export interface ItemAttribute extends NamedApiEntity {
  names: ApiNameLocalization[];
  descriptions: ApiDescriptionLocalization[];
  items: NamedApiResource<Item>[];
}

export interface PxItemPocket extends NamedApiEntity {
  names: LocalizedNames;
}

export interface ItemPocket extends NamedApiEntity {
  categories: NamedApiResource<ItemCategory>[];
  names: ApiNameLocalization[];
}

export interface ItemCategory extends NamedApiEntity {
  names: ApiNameLocalization[];
  items: NamedApiResource<Item>[];
  pocket: NamedApiResource<ItemPocket>;
}

export interface ItemFlingEffect extends NamedApiEntity {
  items: NamedApiResource<Item>[];
  effect_entries: ApiEffectEntry[];
}
