import { Generation, PxGeneration, PxVersionGroup, VersionGroup } from '@pokedex-md/domain';
import { filterAndMapNames, Generator, mapResourcesName } from '../model/generator';

export class VersionGroupGenerator extends Generator<VersionGroup, PxVersionGroup> {
  constructor() {
    super('version-group');
  }

  protected override mapResource(resource: VersionGroup): PxVersionGroup {
    return {
      id: resource.id,
      name: resource.name,
      generation: resource.generation.name,
      order: resource.order,
      versions: mapResourcesName(resource.versions),
    };
  }
}

export class GenerationGenerator extends Generator<Generation, PxGeneration> {
  constructor() {
    super('generation');
  }

  protected override mapResource(resource: Generation): PxGeneration {
    return {
      id: resource.id,
      name: resource.name,
      abilities: mapResourcesName(resource.abilities),
      main_region: resource.main_region.name,
      moves: mapResourcesName(resource.moves),
      names: filterAndMapNames(resource.names),
      pokemon_species: mapResourcesName(resource.pokemon_species),
      types: mapResourcesName(resource.types),
      version_groups: mapResourcesName(resource.version_groups),
    };
  }
}
