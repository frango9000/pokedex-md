import {
  Ability,
  ApiEntity,
  EggGroup,
  GrowthRate,
  NamedApiResource,
  Pokemon,
  PokemonColor,
  PokemonHabitat,
  PokemonShape,
  PokemonType,
  PxAbility,
  PxEggGroup,
  PxGrowthRate,
  PxPokemon,
  PxPokemonColor,
  PxPokemonHabitat,
  PxPokemonShape,
  PxStat,
  PxType,
  Species,
  Stat,
} from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {
  fetchOne,
  filterAndMapDescriptions,
  filterAndMapLocalizations,
  filterAndMapNames,
  Generator,
} from '../model/generator';

export class PokemonGenerator extends Generator<PokemonWithSpecies, PxPokemon> {
  constructor() {
    super('pokemon');
  }

  protected override mapResource(resource: PokemonWithSpecies): PxPokemon {
    return {
      id: resource.pokemon.id,
      name: resource.pokemon.name,
      names: filterAndMapNames(resource.species.names),
      types: resource.pokemon.types.map((slot) => slot.type.name),
      generation: resource.species.generation.name,
    };
  }

  protected override fetchResource(resource: NamedApiResource<Pokemon>): Observable<PokemonWithSpecies> {
    return fetchOne<Pokemon>(resource).pipe(
      mergeMap((pokemon: Pokemon) =>
        fetchOne<Species>(pokemon.species).pipe(
          map((species) => ({
            pokemon,
            species,
          })),
        ),
      ),
    );
  }
}

interface PokemonWithSpecies extends ApiEntity {
  pokemon: Pokemon;
  species: Species;
}

export class TypeGenerator extends Generator<PokemonType, PxType> {
  constructor() {
    super('type');
  }

  protected override mapResource(resource: PokemonType): PxType {
    return {
      id: resource.id,
      name: resource.name,
      damage_relations: {
        double_damage_from: resource.damage_relations.double_damage_from.map((value) => value.name),
        double_damage_to: resource.damage_relations.double_damage_to.map((value) => value.name),
        half_damage_from: resource.damage_relations.half_damage_from.map((value) => value.name),
        half_damage_to: resource.damage_relations.half_damage_to.map((value) => value.name),
        no_damage_from: resource.damage_relations.no_damage_from.map((value) => value.name),
        no_damage_to: resource.damage_relations.no_damage_to.map((value) => value.name),
      },
      names: filterAndMapNames(resource.names),
      generation: resource.generation.name,
      move_damage_class: resource.move_damage_class?.name || 'special',
    };
  }
}

export class AbilitiesGenerator extends Generator<Ability, PxAbility> {
  constructor() {
    super('ability');
  }

  protected override mapResource(resource: Ability): PxAbility {
    return {
      id: resource.id,
      name: resource.name,
      generation: resource.generation.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class StatGenerator extends Generator<Stat, PxStat> {
  constructor() {
    super('stat');
  }

  protected override mapResource(resource: Stat): PxStat {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class GrowthRateGenerator extends Generator<GrowthRate, PxGrowthRate> {
  constructor() {
    super('growth-rate');
  }

  protected override mapResource(resource: GrowthRate): PxGrowthRate {
    return {
      id: resource.id,
      name: resource.name,
      formula: resource.formula,
      descriptions: filterAndMapDescriptions(resource.descriptions),
    };
  }
}

export class PokemonHabitatGenerator extends Generator<PokemonHabitat, PxPokemonHabitat> {
  constructor() {
    super('pokemon-habitat');
  }

  protected override mapResource(resource: PokemonHabitat): PxPokemonHabitat {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class PokemonShapeGenerator extends Generator<PokemonShape, PxPokemonShape> {
  constructor() {
    super('pokemon-shape');
  }

  protected override mapResource(resource: PokemonShape): PxPokemonShape {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      awesome_names: filterAndMapLocalizations(resource.awesome_names, 'awesome_name'),
    };
  }
}

export class PokemonColorGenerator extends Generator<PokemonColor, PxPokemonColor> {
  constructor() {
    super('pokemon-color');
  }

  protected override mapResource(resource: PokemonColor): PxPokemonColor {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class EggGroupGenerator extends Generator<EggGroup, PxEggGroup> {
  constructor() {
    super('egg-group');
  }

  protected override mapResource(resource: EggGroup): PxEggGroup {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}
