import { DataSource } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatestWith, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class GenericDatasource<T> implements DataSource<T> {
  private readonly _resources$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private readonly _filters$: BehaviorSubject<Filters> = new BehaviorSubject<Filters>({});
  private readonly _page$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly _pageSize: number = 40;
  private readonly _sort$: BehaviorSubject<Sort | null> = new BehaviorSubject<Sort | null>({
    active: 'id',
    direction: 'asc',
  });

  private readonly _datasource$: Observable<T[]> = this._resources$.pipe(
    combineLatestWith(this._filters$),
    map(([resources, filters]) => resources.filter(this._filter(filters))),
    combineLatestWith(this._sort$),
    map(([resources, sort]) => resources.sort(this._sort(sort))),
    combineLatestWith(this._page$),
    map(([resources, page]) => resources.slice(0, this._pageSize * (page + 1))),
    untilDestroyed(this, 'disconnect'),
  );

  connect(): Observable<T[]> {
    return this.datasource$;
  }

  disconnect(): void {
    this._resources$.complete();
    this._sort$.complete();
    this._filters$.complete();
    this._page$.complete();
  }

  get datasource$(): Observable<T[]> {
    return this._datasource$;
  }

  get length$(): Observable<number> {
    return this._resources$.pipe(map((page) => page.length));
  }

  get resources$(): Observable<T[]> {
    return this._resources$.asObservable();
  }

  set resources(resources: T[]) {
    this._resources$.next(resources);
  }

  get sort$(): Observable<Sort | null> {
    return this._sort$.asObservable();
  }

  set sort(sort: Sort) {
    this._sort$.next(sort);
  }

  get filters$(): Observable<Filters> {
    return this._filters$.asObservable();
  }

  set filters(filters: Filters) {
    this._filters$.next(filters);
  }

  get page$(): Observable<number> {
    return this._page$.asObservable();
  }

  nextPage(): void {
    this._page$.next(this._page$.value + 1);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _filter(filters: Filters): (resource: T) => boolean {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (e: T) {
      return true;
    };
  }

  protected _sort(sort: Sort | null): (a: T, b: T) => number {
    return function (a: T, b: T) {
      let comparison = 0;
      if (sort) {
        const propA = a[sort.active as keyof T];
        const propB = b[sort.active as keyof T];

        if (propA > propB) {
          comparison = 1;
        } else if (propA < propB) {
          comparison = -1;
        }

        if (sort.direction === 'desc') {
          comparison = comparison * -1;
        }
      }

      return comparison;
    };
  }
}

export interface Filters {
  [key: string]: unknown | undefined;
}
