import { DataSource } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { untilDestroyed } from '@ngneat/until-destroy';
import { LocalizedNames } from '@pokedex-md/domain';
import { BehaviorSubject, combineLatestWith, Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

export class GenericDatasource<T> implements DataSource<T> {
  private readonly _resources$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private readonly _filters$: BehaviorSubject<Filters<T>> = new BehaviorSubject<Filters<T>>({});
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
    map(([resources, sort]) => [...resources].sort(this._sort(sort))),
    combineLatestWith(this._page$),
    map(([resources, page]) => resources.slice(0, this._pageSize * (page + 1))),
    untilDestroyed(this, 'disconnect'),
    shareReplay(1),
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

  get filters$(): Observable<Filters<T>> {
    return this._filters$.asObservable();
  }

  set filters(filter: Filters<T>) {
    this._filters$.next(filter);
  }

  get page$(): Observable<number> {
    return this._page$.asObservable();
  }

  nextPage(): void {
    this._page$.next(this._page$.value + 1);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _filter(filters: Filters<T>): (resource: T) => boolean {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (resource: T) => {
      const exclusive = Object.keys(filters);
      return (
        !exclusive.length ||
        exclusive.every((key) => {
          const inclusive = filters[key]?.filter((filter) => filter.value !== undefined || filter.range !== undefined);
          return (
            !inclusive?.length ||
            inclusive.some((filter) => {
              const actual = filter.locale
                ? (resource[filter.property] as LocalizedNames)[filter.locale]
                : resource[filter.property];
              switch (filter.type) {
                case 'equal':
                  return actual === filter.value;

                case 'contains':
                  return Array.isArray(actual)
                    ? actual.includes(filter.value)
                    : String(actual).toLowerCase().includes(String(filter.value).toLowerCase());

                case 'among':
                  if (Array.isArray(actual) && Array.isArray(filter.value)) {
                    return actual.every((item) => (filter.value as (string | number)[]).includes(item));
                  } else if (typeof filter.value === 'string' || Array.isArray(filter.value)) {
                    return filter.value.includes(actual as string);
                  } else return false;

                case 'any-contains':
                  return (
                    Array.isArray(actual) &&
                    !Array.isArray(filter.value) &&
                    actual.some((v) => v.includes(filter.value))
                  );

                case 'contains-any':
                  return (
                    Array.isArray(actual) && Array.isArray(filter.value) && filter.value.some((v) => actual.includes(v))
                  );

                case 'contains-all':
                  return (
                    Array.isArray(actual) &&
                    Array.isArray(filter.value) &&
                    filter.value.every((v) => actual.includes(v))
                  );

                case 'greater-than':
                  return !filter.value || filter.value < actual;

                case 'less-than':
                  return !filter.value || filter.value > actual;

                case 'greater-than-or-equal':
                  return !filter.value || filter.value <= actual;

                case 'less-than-or-equal':
                  return !filter.value || filter.value >= actual;

                case 'in-range': {
                  if (!filter.range) return true;
                  const { start, end, exclusiveStart, exclusiveEnd } = filter.range;
                  return (
                    (start === undefined || (exclusiveStart ? actual > start : actual >= start)) &&
                    (end === undefined || (exclusiveEnd ? actual < end : actual <= end))
                  );
                }

                case 'custom':
                  return typeof filter.filterFn !== 'function' || filter.filterFn(resource);

                default:
                  throw new Error(`Invalid filter type: ${filter.type}`);
              }
            })
          );
        })
      );
    };
  }

  protected _sort(sort: Sort | null): (a: T, b: T) => number {
    return function (a: T, b: T) {
      let comparison = 0;
      if (sort && sort.direction !== '') {
        const keys = sort.active.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let propA: any = a;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let propB: any = b;

        for (const key of keys) {
          propA = propA?.[key];
          propB = propB?.[key];
        }

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

export type Filters<T> = Record<string, PropFilter<T>[] | undefined>;

export interface PropFilter<T> {
  type:
    | 'equal'
    | 'contains'
    | 'among'
    | 'any-contains'
    | 'contains-any'
    | 'contains-all'
    | 'greater-than'
    | 'greater-than-or-equal'
    | 'less-than'
    | 'less-than-or-equal'
    | 'in-range'
    | 'custom';
  property: keyof T;
  value?: string | number | (string | number)[];
  range?: RangeFilterValue;
  locale?: string;
  filterFn?: (resource: T) => boolean;
}

export interface RangeFilterValue {
  start?: string | number;
  end?: string | number;
  exclusiveStart?: boolean;
  exclusiveEnd?: boolean;
}
