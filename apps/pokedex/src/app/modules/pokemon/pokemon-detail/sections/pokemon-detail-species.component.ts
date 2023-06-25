import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { PxVersionGroup, Species } from '@pokedex-md/domain';
import { PluckPipe } from '../../../../shared/pipes/pluck.pipe';
import { VersionGroupMenuComponent } from '../../../version/shared/components/version-group-menu/version-group-menu.component';
import { VersionMenuComponent } from '../../../version/shared/components/version-menu/version-menu.component';

@Component({
  selector: 'pokedex-pokemon-detail-species',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    TranslocoModule,
    VersionMenuComponent,
    VersionGroupMenuComponent,
    MatTooltipModule,
    PluckPipe,
  ],
  templateUrl: './pokemon-detail-species.component.html',
  styleUrls: ['./pokemon-detail-species.component.scss'],
})
export class PokemonDetailSpeciesComponent {
  @Input({ required: true }) public species?: Species | null;
  protected versionGroup?: PxVersionGroup;
}
