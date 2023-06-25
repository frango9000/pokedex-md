import { Directive, EmbeddedViewRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PxVersionGroup } from '@pokedex-md/domain';
import { VersionGroupService } from '../../../../api/games/version-group.service';

interface WithVersionGroupContext {
  versionGroup?: PxVersionGroup;
  $implicit?: PxVersionGroup;
}

@UntilDestroy()
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[withVersionGroup]',
  standalone: true,
})
export class WithVersionGroupDirective implements OnInit {
  private readonly context: WithVersionGroupContext = {};
  private embeddedViewRef?: EmbeddedViewRef<WithVersionGroupContext>;

  constructor(
    private readonly templateRef: TemplateRef<WithVersionGroupContext>,
    private readonly viewContainer: ViewContainerRef,
    private readonly service: VersionGroupService,
  ) {}

  ngOnInit(): void {
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    this.service.versionGroup$.pipe(untilDestroyed(this)).subscribe((versionGroup) => {
      this.context.$implicit = this.context.versionGroup = versionGroup;
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
  static ngTemplateContextGuard(
    dir: WithVersionGroupDirective,
    ctx: WithVersionGroupContext,
  ): ctx is WithVersionGroupContext {
    return true;
  }
}
