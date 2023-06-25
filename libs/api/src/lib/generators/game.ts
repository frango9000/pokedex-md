import {
  ApiEntity,
  GameVersion,
  Generation,
  NamedApiResource,
  PxGameVersion,
  PxGeneration,
  PxVersionGroup,
  VersionGroup,
} from '@pokedex-md/domain';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { fetchOne, filterAndMapNames, Generator, mapResourcesName } from '../model/generator';

export class VersionGroupGenerator extends Generator<VersionGroupWithVersions, PxVersionGroup> {
  constructor() {
    super('version-group');
  }

  protected override mapResource(resource: VersionGroupWithVersions): PxVersionGroup {
    return {
      id: resource.versionGroup.id,
      name: resource.versionGroup.name,
      generation: resource.versionGroup.generation.name,
      order: resource.versionGroup.order,
      versions: mapResourcesName(resource.versionGroup.versions),
      names: this.mergeVersionsNames(resource.versions),
    };
  }

  private mergeVersionsNames(versions: GameVersion[]) {
    return versions
      .map((version) => filterAndMapNames(version.names))
      .reduce((acc, curr) => {
        for (const key in curr) {
          if (acc[key]?.length) {
            acc[key] += ` / ${curr[key]}`;
          } else {
            acc[key] = curr[key];
          }
        }
        return acc;
      }, {});
  }

  protected override fetchResource(resource: NamedApiResource<VersionGroup>): Observable<VersionGroupWithVersions> {
    return fetchOne<VersionGroup>(resource).pipe(
      mergeMap((versionGroup: VersionGroup) =>
        forkJoin(versionGroup.versions.map((version) => fetchOne<GameVersion>(version))).pipe(
          map((versions) => ({
            versionGroup,
            versions,
          })),
        ),
      ),
    );
  }
}

interface VersionGroupWithVersions extends ApiEntity {
  versionGroup: VersionGroup;
  versions: GameVersion[];
}

export class VersionGenerator extends Generator<GameVersion, PxGameVersion> {
  constructor() {
    super('version');
  }

  protected override mapResource(resource: GameVersion): PxGameVersion {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      version_group: resource.version_group.name,
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
