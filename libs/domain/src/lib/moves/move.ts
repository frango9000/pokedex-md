import { EffectChange, EffectEntry } from '../domain/common';
import {
  ApiDescriptionLocalization,
  ApiNameLocalization,
  LocalizedNames,
  NamedApiEntity,
  NamedApiResource,
} from '../domain/domain';
import { Language } from '../domain/language';
import { Generation } from '../games/generation';
import { VersionGroup } from '../games/version-group';
import { PokemonType } from '../pokemon/type';

export interface PxMove extends NamedApiEntity {
  accuracy?: number;
  power?: number;
  pp?: number;
  type: string;
  crit_rate?: number;
  generation: string;
  names: LocalizedNames;
}

export interface Move extends NamedApiEntity {
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;

  contest_combos: PokemonMoveContestCombos;
  contest_type: NamedApiResource;
  contest_effect: NamedApiResource;
  damage_class: NamedApiResource;
  effect_changes: EffectChange[];
  effect_entries: EffectEntry[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedApiResource<Generation>;
  machines: {
    machine: NamedApiResource;
    version_group: NamedApiResource;
  }[];
  meta: PokemonMoveMetadata;
  names: ApiNameLocalization[];
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

export interface MoveAilment extends NamedApiEntity {
  moves: NamedApiResource<Move>[];
  names: ApiNameLocalization[];
}

export interface MoveCategory extends NamedApiEntity {
  moves: NamedApiResource<Move>[];
  descriptions: ApiDescriptionLocalization[];
}

export interface MoveDamageClass extends NamedApiEntity {
  descriptions: ApiDescriptionLocalization[];
  moves: NamedApiResource<Move>[];
  names: ApiNameLocalization[];
}

export interface PxMoveDamageClass extends NamedApiEntity {
  names: LocalizedNames;
  descriptions: LocalizedNames;
}

export interface MoveLearnMethod extends NamedApiEntity {
  descriptions: ApiDescriptionLocalization[];
  names: ApiNameLocalization[];
  version_groups: NamedApiResource<VersionGroup>[];
}

export interface PxMoveLearnMethod extends NamedApiEntity {
  descriptions: LocalizedNames;
  names: LocalizedNames;
}

export interface MoveTarget extends NamedApiEntity {
  descriptions: ApiDescriptionLocalization[];
  moves: NamedApiResource<Move>[];
  names: ApiNameLocalization[];
}

export interface MoveFlavorText {
  flavor_text: string;
  language: NamedApiResource<Language>;
  version_group: NamedApiResource<VersionGroup>;
}
