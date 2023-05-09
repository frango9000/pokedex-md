import { HttpClient } from '@angular/common/http';
import { TranslocoService } from '@ngneat/transloco';
import { ApiEntity, ApiResourceList, NamedApiResource } from '@pokedex-md/domain';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { MergingMap } from '../utils/merge-map';

const API_URL = 'https://pokeapi.co/api/v2';

export abstract class BaseService<T extends ApiEntity, P extends ApiEntity> {
  protected readonly resources$ = new BehaviorSubject<P[]>([]);

  protected constructor(protected readonly name: string, protected http: HttpClient) {}

  public initialize(): Observable<P[]> {
    return this._fetchAll().pipe(
      catchError(() => of([])),
      tap((resources) => this.resources$.next(resources)),
    );
  }

  public getAll(): Observable<P[]> {
    return this.resources$.asObservable();
  }

  public getAllIds$(): Observable<number[]> {
    return this.getAll().pipe(map((resources) => resources.map((resource) => resource.id)));
  }

  public _fetchAll(): Observable<P[]> {
    return this.http.get<P[]>(`assets/api/${this.name}.json`);
  }

  public fetchApiAll({ offset = 0, limit = 9999 } = {}): Observable<NamedApiResource<T>[]> {
    return this.http
      .get<ApiResourceList<NamedApiResource<T>>>(`${API_URL}/${this.name}`, { params: { offset, limit } })
      .pipe(map((value) => value.results));
  }

  public fetchApiOne(id: string | number): Observable<T> {
    return this.http.get<T>(`${API_URL}/${this.name}/${id}`);
  }
}

export abstract class TranslatedService<T extends ApiEntity, P extends ApiEntity> extends BaseService<T, P> {
  constructor(
    protected override name: string,
    protected override http: HttpClient,
    protected translocoService: TranslocoService,
  ) {
    super(name, http);
  }

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
          console.log(this.translocoService.getTranslation());
        }),
      );
    };
  }
}

export abstract class SingleTranslatedService<T extends ApiEntity> extends TranslatedService<T, T> {
  public override fetchApiOne(id: string | number): Observable<T> {
    return super.fetchApiOne(id).pipe(switchMap((resource) => this._translateOne(resource)));
  }

  public override _fetchAll(): Observable<T[]> {
    return of([]);
  }

  protected override _parseAllTranslations(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class MultiTranslatedService<T extends ApiEntity, P extends ApiEntity> extends TranslatedService<T, P> {
  public override _fetchAll(): Observable<P[]> {
    return super._fetchAll().pipe(switchMap((resources) => this._translateAll(resources)));
  }

  protected override _parseOneTranslation(): Observable<MergingMap> {
    return of(new MergingMap());
  }
}

export abstract class FullyTranslatedService<T extends ApiEntity, P extends ApiEntity> extends TranslatedService<T, P> {
  public override fetchApiOne(id: string | number): Observable<T> {
    return super.fetchApiOne(id).pipe(switchMap((resource) => this._translateOne(resource)));
  }

  public override _fetchAll(): Observable<P[]> {
    return super._fetchAll().pipe(switchMap((resources) => this._translateAll(resources)));
  }
}
