import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filters } from '../../utils/generic-datasource';

@Injectable()
export class FilterService<T> {
  private readonly _filters: BehaviorSubject<Filters<T>> = new BehaviorSubject<Filters<T>>({});

  set filters(filters: Filters<T>) {
    this._filters.next(filters);
  }

  get filters$(): Observable<Filters<T>> {
    return this._filters.asObservable();
  }
}
