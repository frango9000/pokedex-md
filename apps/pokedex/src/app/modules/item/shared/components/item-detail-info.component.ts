import { Component, input, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { Item } from '@pokedex-md/domain';
import { ResourceIdPipe } from '../../../../shared/pipes/resource-id.pipe';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-item-detail-info',
  imports: [
    MatDividerModule,
    WithVersionGroupDirective,
    TranslocoDirective,
    MatIcon,
    MatIconButton,
    RouterLink,
    ResourceIdPipe,
  ],
  templateUrl: './item-detail-info.component.html',
  styleUrls: ['./item-detail-info.component.scss'],
})
export class ItemDetailInfoComponent {
  @Input({ required: true }) item?: Item | null;
  public readonly showMachineLink = input(true);
}
