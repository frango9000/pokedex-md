import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoModule } from '@jsverse/transloco';
import { Pokemon } from '@pokedex-md/domain';

@Component({
  selector: 'pokedex-pokemon-detail-info',
  standalone: true,
  imports: [MatDividerModule, TranslocoModule],
  templateUrl: './pokemon-detail-info.component.html',
  styleUrls: ['./pokemon-detail-info.component.scss'],
})
export class PokemonDetailInfoComponent {
  @Input({ required: true }) pokemon?: Pokemon | null;
}
