import { ChangeDetectorRef, Directive, HostBinding, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IsMobileService } from '../is-mobile.service';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[isMobileClass]' })
export class IsMobileClassDirective {
  private readonly isMobileService: IsMobileService = inject(IsMobileService);
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  @HostBinding('class.mobile') private isMobile = false;

  constructor() {
    this.isMobileService.isMobile$.pipe(takeUntilDestroyed()).subscribe((isMobile) => {
      this.isMobile = isMobile;
      this.cdr.markForCheck();
    });
  }
}
