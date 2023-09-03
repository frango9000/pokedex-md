import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoDirective } from '@ngneat/transloco';
import { Move } from '@pokedex-md/domain';
import { NgLetModule } from '../../../../shared/modules/ng-let';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-move-detail-info',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    TranslocoDirective,
    WithVersionGroupDirective,
    TypeButtonComponent,
    NgLetModule,
  ],
  templateUrl: './move-detail-info.component.html',
  styleUrls: ['./move-detail-info.component.scss'],
})
export class MoveDetailInfoComponent {
  @Input({ required: true }) move?: Move | null;
}
