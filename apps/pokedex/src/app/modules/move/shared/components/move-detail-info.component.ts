import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { Move } from '@pokedex-md/domain';
import { NgLetModule } from '../../../../shared/modules/ng-let';
import { ResourceIdPipe } from '../../../../shared/pipes/resource-id.pipe';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-move-detail-info',
  imports: [
    CommonModule,
    MatDividerModule,
    TranslocoDirective,
    WithVersionGroupDirective,
    TypeButtonComponent,
    NgLetModule,
    MatIcon,
    MatIconButton,
    ResourceIdPipe,
    RouterLink,
  ],
  templateUrl: './move-detail-info.component.html',
  styleUrls: ['./move-detail-info.component.scss'],
})
export class MoveDetailInfoComponent {
  @Input({ required: true }) move?: Move | null;
  public readonly showMachineLink = input(true);
}
