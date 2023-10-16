import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filters } from '../../utils/generic-datasource';

@Injectable()
export abstract class FilterService<T, M> {
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
    return this.filterModel$.pipe(distinctUntilChanged(), map(this.mapFilterModel.bind(this)));
  }

  protected abstract mapFilterModel(filterModel: M): Filters<T>;
}
