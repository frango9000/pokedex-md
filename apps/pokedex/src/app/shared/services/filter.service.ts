import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../utils/generic-datasource';

@Injectable()
export class FilterService<T> {
  private readonly _filters: BehaviorSubject<Filter<T>[]> = new BehaviorSubject<Filter<T>[]>([]);

  set filters(filters: Filter<T>[]) {
    this._filters.next(filters);
  }

  get filters$(): Observable<Filter<T>[]> {
    return this._filters.asObservable();
  }
}
