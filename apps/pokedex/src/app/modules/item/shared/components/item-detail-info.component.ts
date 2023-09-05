import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoDirective } from '@ngneat/transloco';
import { Item } from '@pokedex-md/domain';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-item-detail-info',
  standalone: true,
  imports: [CommonModule, MatDividerModule, WithVersionGroupDirective, TranslocoDirective],
  templateUrl: './item-detail-info.component.html',
  styleUrls: ['./item-detail-info.component.scss'],
})
export class ItemDetailInfoComponent {
  @Input({ required: true }) item?: Item | null;
}
