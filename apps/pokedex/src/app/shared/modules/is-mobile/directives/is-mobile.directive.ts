import { Directive, EmbeddedViewRef, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IsMobileService } from '../is-mobile.service';

interface IsMobileContext {
  isMobile: boolean;
  $implicit: boolean;
}

@UntilDestroy()
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[isMobile]', standalone: true })
export class IsMobileDirective implements OnInit {
  private readonly templateRef: TemplateRef<IsMobileContext> = inject(TemplateRef);
  private readonly viewContainer: ViewContainerRef = inject(ViewContainerRef);
  private readonly isMobileService: IsMobileService = inject(IsMobileService);
  private readonly context: IsMobileContext = { isMobile: false, $implicit: false };
  private embeddedViewRef?: EmbeddedViewRef<IsMobileContext>;

  ngOnInit(): void {
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    this.isMobileService.isMobile$.pipe(untilDestroyed(this)).subscribe((isMobile) => {
      this.context.$implicit = this.context.isMobile = isMobile;
      this.embeddedViewRef?.rootNodes?.forEach((node) => node.classList?.toggle('mobile', isMobile));
      this.embeddedViewRef?.markForCheck();
    });
  }

  /**
   * Asserts the correct type of the context for the template that `NgLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgLet` structural directive renders its template with a specific context type.
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static ngTemplateContextGuard(dir: IsMobileDirective, ctx: IsMobileContext): ctx is IsMobileContext {
    return true;
  }
}
