import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ApiResourceList, IdApiEntity, NamedApiEntity, NamedApiResource } from '@pokedex-md/domain';
import { BehaviorSubject, Observable, of, shareReplay, switchMap } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { MergingMap } from '../shared/utils/merge-map';

const API_URL = 'https://pokeapi.co/api/v2';

export abstract class BaseService<T extends IdApiEntity = IdApiEntity, P extends IdApiEntity = T> {
  private readonly _http: HttpClient = inject(HttpClient);
  protected readonly resources$: BehaviorSubject<P[]> = new BehaviorSubject<P[]>([]);
  protected readonly fetchApiOneCache: { [key: string]: Observable<T> } = {};

  protected abstract get name(): string;

  public initialize(): Observable<P[]> {
    return this._fetchAll$().pipe(
      catchError(() => of([])),
      tap((resources) => this.resources$.next(resources)),
    );
  }

  public getAll$(): Observable<P[]> {
    return this.resources$.asObservable();
  }

  public getAll(): P[] {
    return this.resources$.getValue();
  }

  public getAllIds$(): Observable<number[]> {
    return this.getAll$().pipe(map((resources) => resources.map((resource) => resource.id)));
  }

  public findOne(fn: (resource: P) => boolean): P | undefined {
    return this.getAll().find(fn);
  }

  public findOneById(id: number): P | undefined {
    return this.findOne((resource) => resource.id === id);
  }

  public _fetchAll$(): Observable<P[]> {
    return this._http.get<P[]>(`assets/api/${this.name}.json`);
  }

  public fetchApiAll$({ offset = 0, limit = 9999 } = {}): Observable<NamedApiResource<T>[]> {
    return this._http
      .get<ApiResourceList<NamedApiResource<T>>>(`${API_URL}/${this.name}`, { params: { offset, limit } })
      .pipe(map((value) => value.results));
  }

  public fetchApiOne$(id: string | number): Observable<T> {
    if (!this.fetchApiOneCache[id]) {
      this.fetchApiOneCache[id] = this._http.get<T>(`${API_URL}/${this.name}/${id}`).pipe(shareReplay(1));
    }
    return this.fetchApiOneCache[id];
  }
}

export abstract class TranslatedService<
  T extends IdApiEntity = IdApiEntity,
  P extends IdApiEntity = T,
> extends BaseService<T, P> {
  protected readonly translocoService: TranslocoService = inject(TranslocoService);

  public override _fetchAll$(): Observable<P[]> {
    return super._fetchAll$().pipe(switchMap((resources) => this._translateAll(resources)));
  }

  public override fetchApiOne$(id: string | number): Observable<T> {
    return super.fetchApiOne$(id).pipe(switchMap((resource) => this._translateOne(resource)));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _parseAllTranslations(_: P[]): Observable<MergingMap | null> {
    return of(new MergingMap());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _parseOneTranslation(_: T): Observable<MergingMap | null> {
    return of(null);
  }

  protected _translateOne(resource: T): Observable<T> {
    return this._parseOneTranslation(resource).pipe(
      this._setTranslation(),
      map(() => resource),
    );
  }

  protected _translateAll(resources: P[]): Observable<P[]> {
    return this._parseAllTranslations(resources).pipe(
      this._setTranslation(),
      map(() => resources),
    );
  }

  private _setTranslation(): (observable: Observable<MergingMap | null>) => Observable<MergingMap | null> {
    return (observable: Observable<MergingMap | null>) => {
      return observable.pipe(
        take(1),
        tap((translations) => {
          translations?.forEach((translation, language) =>
            this.translocoService.setTranslation(translation, language, { merge: true }),
          );
        }),
      );
    };
  }
}

export abstract class BaseNamedService<
  T extends NamedApiEntity = NamedApiEntity,
  P extends NamedApiEntity = T,
> extends BaseService<T, P> {
  public findByName(name: string): P | undefined {
    return this.findOne((resource) => resource.name === name);
  }
}

export abstract class TranslatedNamedService<
  T extends NamedApiEntity = NamedApiEntity,
  P extends NamedApiEntity = T,
> extends TranslatedService<T, P> {
  public findByName(name: string): P | undefined {
    return this.findOne((resource) => resource.name === name);
  }
}
