import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { PxVersionGroup, Species } from '@pokedex-md/domain';
import { PluckPipe } from '../../../../shared/pipes/pluck.pipe';
import { WithVersionGroupDirective } from '../../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-pokemon-detail-species',
  imports: [CommonModule, MatDividerModule, TranslocoModule, MatTooltipModule, PluckPipe, WithVersionGroupDirective],
  templateUrl: './pokemon-detail-species.component.html',
  styleUrls: ['./pokemon-detail-species.component.scss'],
})
export class PokemonDetailSpeciesComponent {
  @Input({ required: true }) public species?: Species | null;
  protected versionGroup?: PxVersionGroup;
}
