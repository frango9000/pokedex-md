import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EvolutionChainLink } from '@pokedex-md/domain';

@Component({
  selector: 'pokedex-pokemon-detail-evolution-chain-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail-evolution-chain-link.component.html',
  styleUrls: ['./pokemon-detail-evolution-chain-link.component.scss'],
})
export class PokemonDetailEvolutionChainLinkComponent {
  @Input({ required: true }) public evolutionLink!: EvolutionChainLink;
}
