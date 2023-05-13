import {
  ApiDescriptionLocalization,
  ApiEntity,
  ApiLocalization,
  ApiNameLocalization,
  ApiResource,
  ApiResourceList,
  LocalizedNames,
  NamedApiResource,
} from '@pokedex-md/domain';
import { AxiosResponse } from 'axios';
import { Axios } from 'axios-observable';
import * as fs from 'fs';
import * as readline from 'readline';
import { bindCallback, filter, from, mergeMap, Observable } from 'rxjs';
import { concatMap, map, retry, tap, toArray } from 'rxjs/operators';

export const LANGUAGES = ['ja-Hrkt', 'roomaji', 'ko', 'zh-Hant', 'fr', 'de', 'es', 'it', 'en'];

export class Generator<T extends ApiEntity = ApiEntity, N extends ApiEntity = ApiEntity> {
  constructor(protected readonly name: string) {}

  public generateResources({ limit = 9999, offset = 0, append = false } = {}): Observable<N[]> {
    return fetchList({ name: this.name, limit, offset }).pipe(
      tap((resources) => this._logResourceProgress(resources.length, 0)),
      concatMap((resources) =>
        from(resources).pipe(
          concatMap((resource, index) =>
            this.fetchResource(resource).pipe(
              tap(() => this._logResourceProgress(resources.length, index + 1, (resource as NamedApiResource)?.name)),
            ),
          ),
        ),
      ),
      filter((resource: T) => this.filterResource(resource)),
      map((resource: T) => this.mapResource(resource)),
      toArray(),
      mergeMap((resources: N[]) => this._saveResourcesToFile(resources, append)),
      tap({
        next: (resources: N[]) => this._logResourceProgress(resources.length, resources.length),
        error: () => this._logError(),
      }),
    );
  }

  protected fetchResource(resource: ApiResource<T>): Observable<T> {
    return fetchOne<T>(resource);
  }

  protected mapResource(resource: T): N {
    return { ...resource } as unknown as N;
  }

  protected filterResource(resource: T): boolean {
    return !!resource;
  }

  private _saveResourcesToFile(resources: N[], append: boolean): Observable<N[]> {
    const writeOrAppend = append ? fs.appendFile : fs.writeFile;
    const path = process.argv.find((arg) => arg.startsWith('--outputPath='))?.substring(13) || './dist/libs/api';

    return bindCallback(writeOrAppend)(`${path}/${this.name}.json`, JSON.stringify(resources)).pipe(
      map(() => resources),
    );
  }

  private _logResourceProgress(length: number, count: number, name?: string): void {
    if (count === 0) {
      console.log(`\n \n`);
    }
    readline.moveCursor(process.stdout, 0, -2);
    readline.clearLine(process.stdout, 0);

    function getClockEmojis(index: number): string {
      const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
      return clocks[index % clocks.length];
    }

    process.stdout.write(
      `${count === length ? '✅ ' : getClockEmojis(count)} Generat${count === length ? 'ed' : 'ing'} ${this.name}${
        name?.length ? ' | ' + name : ''
      } | ${count}/${length} | ${Math.trunc((count * 100) / length)}%\n \n`,
    );
  }

  private _logError(): void {
    readline.moveCursor(process.stdout, 0, -4);
    process.stdout.write(`❌ `);
  }
}

export function fetchList<R extends ApiEntity = ApiEntity>({
  name = 'pokemon',
  offset = 0,
  limit = 9999,
} = {}): Observable<ApiResource<R>[]> {
  return Axios.get<ApiResourceList<NamedApiResource<R>>>(`https://pokeapi.co/api/v2/${name}`, {
    params: { offset, limit },
  }).pipe(map((response: AxiosResponse<ApiResourceList<NamedApiResource<R>>>) => response.data.results));
}

export function fetchOne<R extends ApiEntity = ApiEntity>(resource: ApiResource<R>): Observable<R> {
  return Axios.get<R>(resource.url).pipe(
    retry(10),
    map((response: AxiosResponse<R>) => response.data),
  );
}

export function mapResourcesName<T extends ApiEntity = ApiEntity>(resources: NamedApiResource<T>[]): string[] {
  return resources.map((resource) => resource.name);
}

export function filterAndMapNames(names: ApiNameLocalization[]): LocalizedNames {
  return filterAndMapLocalizations(names, 'name');
}

export function filterAndMapDescriptions(descriptions: ApiDescriptionLocalization[]): LocalizedNames {
  return filterAndMapLocalizations(descriptions, 'description');
}

export function filterAndMapLocalizations<T extends ApiLocalization, K extends keyof T>(
  entities: T[],
  propertyName: K,
): LocalizedNames {
  return entities
    .filter((entity) => LANGUAGES.includes(entity.language.name))
    .reduce((acc, entity) => {
      acc[entity.language.name] = entity[propertyName] as string;
      return acc;
    }, {} as LocalizedNames);
}
