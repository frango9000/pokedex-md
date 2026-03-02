import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IsMobileService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    distinctUntilChanged(),
    map((result) => result.matches),
    shareReplay(),
  );

  get isMobile$(): Observable<boolean> {
    return this.isHandset;
  }

  get isDesktop$(): Observable<boolean> {
    return this.isHandset.pipe(map((isMobile) => !isMobile));
  }
}
