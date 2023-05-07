import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly _isOpen$ = new BehaviorSubject(true);

  get isOpen$(): Observable<boolean> {
    return this._isOpen$.asObservable();
  }

  public toggle(isOpen = !this._isOpen$.value) {
    this._isOpen$.next(isOpen);
  }
}
