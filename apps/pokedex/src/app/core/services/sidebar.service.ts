import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly _router = inject(Router);
  private readonly _isOpen$ = new BehaviorSubject(true);
  private readonly _isActive$ = new BehaviorSubject(false);

  constructor() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._isSidebarConfigured(this._router.routerState.snapshot.root)),
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
    return this._isOpen$.asObservable();
  }

  get isActive$(): Observable<boolean> {
    return this._isActive$.asObservable();
  }

  private _isSidebarConfigured(route: ActivatedRouteSnapshot): boolean {
    return route.children.some((child) => this._isSidebarConfigured(child)) || route.outlet === 'sidebar';
  }
}
