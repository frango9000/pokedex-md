import { ApiEffectChange, ApiEffectEntry } from '../domain/common';
import { ApiNameLocalization, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';
import { Language } from '../domain/language';
import { VersionGroup } from '../games/version-group';

export interface PxAbility extends NamedApiEntity {
  generation: string;
  names: LocalizedNames;
}

export interface Ability extends NamedApiEntity {
  is_main_series: boolean;
  effect_changes: ApiEffectChange[];
  effect_entries: ApiEffectEntry[];
  flavor_text_entries: AbilityFlavorText[];
  generation: NamedApiResource;
  names: ApiNameLocalization[];
  pokemon: {
    is_hidden: boolean;
    pokemon: NamedApiResource;
    slot: number;
  }[];
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedApiResource<Language>;
  version_group: NamedApiResource<VersionGroup>;
}
