import { PokemonLocation, PxLocation, PxRegion, Region } from '@pokedex-md/domain';
import { filterAndMapNames, Generator } from '../model/generator';

export class LocationGenerator extends Generator<PokemonLocation, PxLocation> {
  constructor() {
    super('location');
  }

  protected override mapResource(resource: PokemonLocation): PxLocation {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      region: resource.region?.name,
    };
  }
}

export class RegionGenerator extends Generator<Region, PxRegion> {
  constructor() {
    super('region');
  }

  protected override mapResource(resource: Region): PxRegion {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}
