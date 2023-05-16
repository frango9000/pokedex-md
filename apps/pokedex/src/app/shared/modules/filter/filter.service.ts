import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Filters } from '../../utils/generic-datasource';

@Injectable()
export class FilterService<T, M> {
  private readonly _filterModel: BehaviorSubject<M> = new BehaviorSubject<M>({} as M);

  get filterModel$(): Observable<M> {
    return this._filterModel.asObservable();
  }

  get filterModel(): M {
    return this._filterModel.getValue();
  }

  set filterModel(filterModel: M) {
    this._filterModel.next(filterModel);
  }

  get filters$(): Observable<Filters<T>> {
    return of({});
  }
}
