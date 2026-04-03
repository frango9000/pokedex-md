import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@jsverse/transloco';
import { VersionGroupService } from '../../../../../api/games/version-group.service';
import { InitialsPipe } from '../../../../../shared/pipes/initials.pipe';

@Component({
  selector: 'pokedex-version-group-picker',
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule, InitialsPipe, TranslocoModule],
  templateUrl: './version-group-picker.component.html',
  styleUrls: ['./version-group-picker.component.scss'],
})
export class VersionGroupPickerComponent {
  protected readonly service: VersionGroupService = inject(VersionGroupService);
}
