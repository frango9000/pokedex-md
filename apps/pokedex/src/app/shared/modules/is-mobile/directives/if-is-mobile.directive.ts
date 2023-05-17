import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IsMobileService } from '../is-mobile.service';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ifIsMobile]' })
export class IfIsMobileDirective implements OnInit {
  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef,
    private readonly isMobileService: IsMobileService,
  ) {}

  ngOnInit(): void {
    this.isMobileService.isMobile$.pipe(takeUntilDestroyed()).subscribe((isMobile) => {
      if (isMobile && !this.viewContainer.length) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
