import { DataSource } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, combineLatestWith, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class AbstractDatasource<T> implements DataSource<T> {
  private readonly _resources$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private readonly _sort$: BehaviorSubject<Sort | null> = new BehaviorSubject<Sort | null>({
    active: 'id',
    direction: 'desc',
  });
  private readonly _filters$: BehaviorSubject<Filters> = new BehaviorSubject<Filters>({});

  private readonly _page$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly _pageSize: number = 40;

  private readonly _datasource$: Observable<T[]> = this._resources$.pipe(
    combineLatestWith(this._filters$),
    map(([resources, filters]) => resources.filter(this.resourceFilterer(filters))),
    combineLatestWith(this._sort$),
    map(([resources, sort]) => resources.sort(this.resourceSorter(sort))),
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
  }

  get datasource$(): Observable<T[]> {
    return this._datasource$;
  }

  get length$(): Observable<number> {
    return this._resources$.pipe(map((page) => page.length));
  }

  set resources$(resources: T[]) {
    this._resources$.next(resources);
  }

  set sort(sort: Sort) {
    this._sort$.next(sort);
  }

  set filters(filters: Filters) {
    this._filters$.next(filters);
  }

  public nextPage(): void {
    this._page$.next(this._page$.value + 1);
  }

  protected abstract resourceFilterer(filters: Filters): (resource: T) => boolean;

  protected abstract resourceSorter(sort: Sort | null): (a: T, b: T) => number;
}

export interface Filters {
  [key: string]: unknown | undefined;
}
