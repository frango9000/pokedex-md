import { FlavorText } from '../domain/common';
import { ApiDescriptionLocalization, ApiNameLocalization, NamedApiEntity, NamedApiResource } from '../domain/domain';
import { Language } from '../domain/language';

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
  generation: NamedApiResource;
  growth_rate: NamedApiResource;
  habitat: NamedApiResource;
  shape: NamedApiResource;
  color: NamedApiResource;
  evolves_from_species: NamedApiResource;
  evolution_chain: NamedApiResource;
  egg_groups: NamedApiResource[];
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

export interface GrowthRate extends NamedApiEntity {
  formula: string;
  descriptions: ApiDescriptionLocalization[];
  levels: { level: number; experience: number }[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonColor extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonHabitat extends NamedApiEntity {
  names: ApiNameLocalization[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface PokemonShape extends NamedApiEntity {
  names: ApiNameLocalization[];
  awesome_names: AwesomeName[];
  pokemon_species: NamedApiResource<Species>[];
}

export interface AwesomeName {
  awesome_name: string;
  language: NamedApiResource<Language>;
}
