import {
  ApiDescription,
  ApiEntity,
  ApiName,
  ApiResourceList,
  LocalizedApiEntity,
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
  constructor(protected readonly resourceName: string) {}

  public generateResources({ limit = 9999, offset = 0, append = false } = {}): Observable<N[]> {
    return this._fetchList({ limit, offset }).pipe(
      tap((resources) => this._logResourceProgress(resources.length, 0)),
      concatMap((resources) =>
        from(resources).pipe(
          concatMap((namedResource, index) =>
            this.fetchResource(namedResource).pipe(
              tap(() => this._logResourceProgress(resources.length, index + 1, namedResource.name)),
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

  protected fetchResource(resource: NamedApiResource<T>): Observable<T> {
    return this._fetchOne<T>(resource);
  }

  protected mapResource(resource: T): N {
    return { ...resource } as unknown as N;
  }

  protected filterResource(resource: T): boolean {
    return !!resource;
  }

  protected _fetchOne<R extends ApiEntity>(resource: NamedApiResource<R>): Observable<R> {
    return Axios.get<R>(resource.url).pipe(
      retry(10),
      map((response: AxiosResponse<R>) => response.data),
    );
  }

  private _fetchList({ offset = 0, limit = 9999 }): Observable<NamedApiResource<T>[]> {
    return Axios.get<ApiResourceList<NamedApiResource<T>>>(`https://pokeapi.co/api/v2/${this.resourceName}`, {
      params: { offset, limit },
    }).pipe(map((response: AxiosResponse<ApiResourceList<NamedApiResource<T>>>) => response.data.results));
  }

  private _saveResourcesToFile(resources: N[], append: boolean): Observable<N[]> {
    const writeOrAppend = append ? fs.appendFile : fs.writeFile;
    const path = process.argv.find((arg) => arg.startsWith('--outputPath='))?.substring(13) || './dist/libs/api';

    return bindCallback(writeOrAppend)(`${path}/${this.resourceName}.json`, JSON.stringify(resources)).pipe(
      map(() => resources),
    );
  }

  private _logResourceProgress(length: number, count: number, name?: string): void {
    if (count === 0) {
      console.log(`\n \n`);
    }
    readline.moveCursor(process.stdout, 0, -2);
    readline.clearLine(process.stdout, 0);
    process.stdout.write(
      `${count === length ? '✅ ' : getClockEmojis(count)} Generat${count === length ? 'ed' : 'ing'} ${
        this.resourceName
      }${name?.length ? ' | ' + name : ''} | ${count}/${length} | ${Math.trunc((count * 100) / length)}%\n \n`,
    );
  }

  private _logError(): void {
    readline.moveCursor(process.stdout, 0, -4);
    process.stdout.write(`❌ `);
  }
}

function getClockEmojis(index: number): string {
  const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
  return clocks[index % clocks.length];
}

export function getGeneration(url: string): number {
  try {
    return Number(url?.split('/').reverse()[1]) || 0;
  } catch (e) {
    return 0;
  }
}

export function filterAndMapLocalizations<T extends LocalizedApiEntity, K extends keyof T>(
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

export function filterAndMapNames(names: ApiName[]): LocalizedNames {
  return filterAndMapLocalizations(names, 'name');
}

export function filterAndMapDescriptions(descriptions: ApiDescription[]): LocalizedNames {
  return filterAndMapLocalizations(descriptions, 'description');
}

export function mapResourcesName<T extends ApiEntity = ApiEntity>(resources: NamedApiResource<T>[]): string[] {
  return resources.map((resource) => resource.name);
}
