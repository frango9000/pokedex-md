import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import { Ability } from '@pokedex-md/domain';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-ability-detail-info',
  standalone: true,
  imports: [TranslocoModule, MatDividerModule, WithVersionGroupDirective],
  templateUrl: './ability-detail-info.component.html',
  styleUrls: ['./ability-detail-info.component.scss'],
})
export class AbilityDetailInfoComponent {
  @Input({ required: true }) ability?: Ability | null;
}
