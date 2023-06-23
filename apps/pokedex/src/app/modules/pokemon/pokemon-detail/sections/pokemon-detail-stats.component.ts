import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@ngneat/transloco';
import { Pokemon } from '@pokedex-md/domain';

@Component({
  selector: 'pokedex-pokemon-detail-stats',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TranslocoModule],
  templateUrl: './pokemon-detail-stats.component.html',
  styleUrls: ['./pokemon-detail-stats.component.scss'],
})
export class PokemonDetailStatsComponent {
  @Input({ required: true }) pokemon?: Pokemon | null;
}
