import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import { Pokemon } from '@pokedex-md/domain';

@Component({
  selector: 'pokedex-pokemon-detail-stats',
  imports: [MatDividerModule, TranslocoModule],
  templateUrl: './pokemon-detail-stats.component.html',
  styleUrls: ['./pokemon-detail-stats.component.scss'],
})
export class PokemonDetailStatsComponent {
  @Input({ required: true }) pokemon?: Pokemon | null;
}
