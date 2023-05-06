import { ApiEffectChange, ApiEffectEntry } from '../domain/common';
import { ApiDescription, ApiEntity, ApiName, LocalizedNames, NamedApiResource } from '../domain/domain';
import { Language } from '../domain/language';
import { Generation } from '../games/generation';
import { VersionGroup } from '../games/version-group';
import { PokemonType } from '../pokemon/type';

export interface PxMove extends ApiEntity {
  accuracy?: number;
  power?: number;
  pp?: number;
  type: string;
  crit_rate?: number;
  generation: number;
  names: LocalizedNames;
}

export interface Move extends ApiEntity {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;

  contest_combos: PokemonMoveContestCombos;
  contest_type: NamedApiResource;
  contest_effect: NamedApiResource;
  damage_class: NamedApiResource;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedApiResource<Generation>;
  machines: {
    machine: NamedApiResource;
    version_group: NamedApiResource;
  }[];
  meta: PokemonMoveMetadata;
  names: ApiName[];
  past_values: [];
  stat_changes: {
    change: number;
    stat: NamedApiResource;
  }[];
  super_contest_effect: NamedApiResource;
  target: NamedApiResource;
  type: NamedApiResource<PokemonType>;
}

interface PokemonMoveMetadata {
  ailment: NamedApiResource;
  category: NamedApiResource;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

interface PokemonMoveContestCombos {
  normal: {
    use_after: NamedApiResource[];
    use_before: NamedApiResource[];
  };
  super: {
    use_after: NamedApiResource[];
    use_before: NamedApiResource[];
  };
}

export interface MoveAilment extends ApiEntity {
  id: number;
  name: string;
  moves: NamedApiResource<Move>[];
  names: ApiName[];
}

export interface MoveCategory extends ApiEntity {
  id: number;
  name: string;
  moves: NamedApiResource<Move>[];
  descriptions: ApiDescription[];
}

export interface MoveDamageClass extends ApiEntity {
  id: number;
  name: string;
  descriptions: ApiDescription[];
  moves: NamedApiResource<Move>[];
  names: ApiName[];
}

export interface PxMoveDamageClass extends ApiEntity {
  names: LocalizedNames;
  descriptions: LocalizedNames;
}

export interface MoveLearnMethod extends ApiEntity {
  id: number;
  name: string;
  descriptions: ApiDescription[];
  names: ApiName[];
  version_groups: NamedApiResource<VersionGroup>[];
}

export interface PxMoveLearnMethod extends ApiEntity {
  id: number;
  name: string;
  descriptions: LocalizedNames;
  names: LocalizedNames;
}

export interface MoveTarget extends ApiEntity {
  id: number;
  name: string;
  descriptions: ApiDescription[];
  moves: NamedApiResource<Move>[];
  names: ApiName[];
}

export interface MoveFlavorText {
  flavor_text: string;
  language: NamedApiResource<Language>;
  version_group: NamedApiResource<VersionGroup>;
}
