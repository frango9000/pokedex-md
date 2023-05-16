import { Injectable } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BottomBarComponent } from '../components/bottom-bar.component';

@Injectable({
  providedIn: 'root',
})
export class BottomBarService {
  private readonly _isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly _isActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _bottomBar?: MatBottomSheetRef<BottomBarComponent>;
  private _dismissalSubscription?: Subscription;
  private readonly _onClear$: Subject<void> = new Subject<void>();

  constructor(private readonly _bottomSheet: MatBottomSheet, private readonly _router: Router) {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._isBottomBarConfigured(this._router.routerState.snapshot.root)),
        distinctUntilChanged(),
      )
      .subscribe((isActive: boolean) => this._isActive$.next(isActive));
  }

  public toggle(): MatBottomSheetRef<BottomBarComponent> | undefined {
    if (!this._bottomBar) {
      this._bottomBar = this._bottomSheet.open(BottomBarComponent, { hasBackdrop: false });
      this._dismissalSubscription?.unsubscribe();
      this._dismissalSubscription = this._bottomBar.afterDismissed().subscribe(() => {
        this._bottomBar = undefined;
        this._isOpen$.next(false);
      });
    } else {
      this._bottomBar.dismiss();
      this._bottomBar = undefined;
    }
    this._isOpen$.next(!!this._bottomBar);
    return this._bottomBar;
  }

  get isOpen$(): Observable<boolean> {
    return combineLatest([this._isOpen$, this._isActive$]).pipe(map(([isOpen, isActive]) => isOpen && isActive));
  }

  get isActive$(): Observable<boolean> {
    return this._isActive$.asObservable();
  }

  get onClear$(): Observable<void> {
    return this._onClear$.asObservable();
  }

  clear(): void {
    this._onClear$.next();
  }

  private _isBottomBarConfigured(route: ActivatedRouteSnapshot): boolean {
    return route.children.some((child) => this._isBottomBarConfigured(child)) || route.outlet === 'bottom-bar';
  }
}
