import { NgModule } from '@angular/core';
import { IfIsDesktopDirective } from './directives/if-is-desktop.directive';
import { IfIsMobileDirective } from './directives/if-is-mobile.directive';
import { IsMobileClassDirective } from './directives/is-mobile-class.directive';
import { IsMobileDirective } from './directives/is-mobile.directive';
import { IsMobilePipe } from './is-mobile.pipe';
import { IsMobileService } from './is-mobile.service';

@NgModule({
  imports: [IsMobilePipe, IsMobileDirective, IfIsMobileDirective, IfIsDesktopDirective, IsMobileClassDirective],
  exports: [IsMobilePipe, IsMobileDirective, IfIsMobileDirective, IfIsDesktopDirective, IsMobileClassDirective],
  providers: [IsMobileService],
})
export class IsMobileModule {}
