import { FlavorText } from '../domain/common';
import {
  ApiDescriptionLocalization,
  ApiNameLocalization,
  ApiResource,
  LocalizedNames,
  NamedApiEntity,
  NamedApiResource,
} from '../domain/domain';
import { Language } from '../domain/language';
import { EvolutionChain } from '../evolution/evolution-chain';
import { Generation } from '../games/generation';

export interface Species extends NamedApiEntity {
  base_happiness: number;
  capture_rate: number;
  forms_switchable: boolean;
  gender_rate: number;
  genera: PokemonSpeciesGenera[];
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  order: number;
  generation: NamedApiResource<Generation>;
  growth_rate: NamedApiResource<GrowthRate>;
  habitat: NamedApiResource<PokemonHabitat>;
  shape: NamedApiResource<PokemonShape>;
  color: NamedApiResource<PokemonColor>;
  evolves_from_species: NamedApiResource<Species>;
  evolution_chain: ApiResource<EvolutionChain>;
  egg_groups: NamedApiResource<EggGroup>[];
  flavor_text_entries: FlavorText[];
  form_descriptions: {
    description: string;
    language: NamedApiResource;
  }[];
  names: ApiNameLocalization[];
  park_pal_encounters: {
    area: NamedApiResource;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedApiResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: NamedApiResource;
  }[];
}

export interface PokemonSpeciesGenera {
  genus: string;
  language: NamedApiResource;
}

export interface EggGroup extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxEggGroup extends NamedApiEntity {
  names: LocalizedNames;
}

export interface GrowthRate extends NamedApiEntity {
  formula: string;
  descriptions: ApiDescriptionLocalization[];
  levels: { level: number; experience: number }[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxGrowthRate extends NamedApiEntity {
  formula: string;
  descriptions: LocalizedNames;
}

export interface PokemonColor extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxPokemonColor extends NamedApiEntity {
  names: LocalizedNames;
}

export interface PokemonHabitat extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxPokemonHabitat extends NamedApiEntity {
  names: LocalizedNames;
}

export interface PokemonShape extends NamedApiEntity {
  names: ApiNameLocalization[];
  awesome_names: AwesomeName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PxPokemonShape extends NamedApiEntity {
  names: LocalizedNames;
  awesome_names: LocalizedNames;
}

export interface AwesomeName {
  awesome_name: string;
  language: NamedApiResource<Language>;
}
