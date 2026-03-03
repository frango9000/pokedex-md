import { Directive, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IsMobileService } from '../is-mobile.service';

@UntilDestroy()
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ifIsMobile]' })
export class IfIsMobileDirective implements OnInit {
  private readonly templateRef: TemplateRef<unknown> = inject(TemplateRef);
  private readonly viewContainer: ViewContainerRef = inject(ViewContainerRef);
  private readonly isMobileService: IsMobileService = inject(IsMobileService);

  ngOnInit(): void {
    this.isMobileService.isMobile$.pipe(untilDestroyed(this)).subscribe((isMobile) => {
      if (isMobile && !this.viewContainer.length) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
