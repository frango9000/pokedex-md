import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly _isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly _isActive$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly _router: Router) {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._isSidebarConfigured(this._router.routerState.snapshot.root)),
        distinctUntilChanged(),
      )
      .subscribe((isActive: boolean) => {
        this._isActive$.next(isActive);
        if (isActive) {
          this._isOpen$.next(true);
        }
      });
  }

  public toggle(isOpen = !this._isOpen$.value) {
    this._isOpen$.next(isOpen);
  }

  get isOpen$(): Observable<boolean> {
    return combineLatest([this._isOpen$, this._isActive$]).pipe(map(([isOpen, isActive]) => isOpen && isActive));
  }

  get isActive$(): Observable<boolean> {
    return this._isActive$.asObservable();
  }

  private _isSidebarConfigured(route: ActivatedRouteSnapshot): boolean {
    return route.children.some((child) => this._isSidebarConfigured(child)) || route.outlet === 'sidebar';
  }
}
