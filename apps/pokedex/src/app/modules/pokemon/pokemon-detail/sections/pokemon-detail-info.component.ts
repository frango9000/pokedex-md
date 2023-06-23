import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@ngneat/transloco';
import { Pokemon } from '@pokedex-md/domain';

@Component({
  selector: 'pokedex-pokemon-detail-info',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TranslocoModule],
  templateUrl: './pokemon-detail-info.component.html',
  styleUrls: ['./pokemon-detail-info.component.scss'],
})
export class PokemonDetailInfoComponent {
  @Input({ required: true }) pokemon?: Pokemon | null;
}
