import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ApiResourceList, IdApiEntity, NamedApiResource } from '@pokedex-md/domain';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { MergingMap } from '../shared/utils/merge-map';

const API_URL = 'https://pokeapi.co/api/v2';

export abstract class BaseService<T extends IdApiEntity = IdApiEntity, P extends IdApiEntity = IdApiEntity> {
  private readonly _http: HttpClient = inject(HttpClient);
  protected readonly resources$: BehaviorSubject<P[]> = new BehaviorSubject<P[]>([]);

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

  public getOne(id: number): P | undefined {
    return this.getAll().find((resource) => resource.id === id);
  }

  public findOne(fn: (resource: P) => boolean): P | undefined {
    return this.getAll().find(fn);
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
    return this._http.get<T>(`${API_URL}/${this.name}/${id}`);
  }
}

export abstract class TranslatedService<
  T extends IdApiEntity = IdApiEntity,
  P extends IdApiEntity = IdApiEntity,
> extends BaseService<T, P> {
  protected readonly translocoService: TranslocoService = inject(TranslocoService);

  protected abstract _parseAllTranslations(resources: P[]): Observable<MergingMap>;

  protected abstract _parseOneTranslation(resource: T): Observable<MergingMap>;

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

  private _setTranslation(): (observable: Observable<MergingMap>) => Observable<MergingMap> {
    return (observable: Observable<MergingMap>) => {
      return observable.pipe(
        take(1),
        tap((translations) => {
          translations.forEach((translation, language) =>
            this.translocoService.setTranslation(translation, language, { merge: true }),
          );
        }),
      );
    };
  }
}

export abstract class SingleTranslatedService<T extends IdApiEntity = IdApiEntity> extends TranslatedService<T> {
  public override fetchApiOne$(id: string | number): Observable<T> {
    return super.fetchApiOne$(id).pipe(switchMap((resource) => this._translateOne(resource)));
  }

  public override _fetchAll$(): Observable<T[]> {
    return of([]);
  }

  protected override _parseAllTranslations(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class MultiTranslatedService<
  T extends IdApiEntity = IdApiEntity,
  P extends IdApiEntity = IdApiEntity,
> extends TranslatedService<T, P> {
  public override _fetchAll$(): Observable<P[]> {
    return super._fetchAll$().pipe(switchMap((resources) => this._translateAll(resources)));
  }

  protected override _parseOneTranslation(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class FullyTranslatedService<
  T extends IdApiEntity = IdApiEntity,
  P extends IdApiEntity = IdApiEntity,
> extends TranslatedService<T, P> {
  public override fetchApiOne$(id: string | number): Observable<T> {
    return super.fetchApiOne$(id).pipe(switchMap((resource) => this._translateOne(resource)));
  }

  public override _fetchAll$(): Observable<P[]> {
    return super._fetchAll$().pipe(switchMap((resources) => this._translateAll(resources)));
  }
}
