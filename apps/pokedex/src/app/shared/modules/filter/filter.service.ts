import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Filters } from '../../utils/generic-datasource';

@Injectable()
export class FilterService<T, M> {
  private readonly _filters: BehaviorSubject<M> = new BehaviorSubject<M>({} as M);

  get filterModel$(): Observable<M> {
    return this._filters.asObservable();
  }

  get filters$(): Observable<Filters<T>> {
    return of({});
  }

  set filters(filterModel: M) {
    this._filters.next(filterModel);
  }
}
