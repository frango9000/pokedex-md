import { NgModule } from '@angular/core';
import { NgLetDirective } from './directives/ng-let.directive';

@NgModule({
  imports: [NgLetDirective],
  exports: [NgLetDirective],
})
export class NgLetModule {}
