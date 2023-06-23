import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { EvolutionChain } from '@pokedex-md/domain';
import { PokemonDetailEvolutionChainLinkComponent } from './pokemon-detail-evolution-chain-link.component';

@Component({
  selector: 'pokedex-pokemon-detail-evolution-chain',
  standalone: true,
  imports: [CommonModule, PokemonDetailEvolutionChainLinkComponent, MatDividerModule],
  templateUrl: './pokemon-detail-evolution-chain.component.html',
  styleUrls: ['./pokemon-detail-evolution-chain.component.scss'],
})
export class PokemonDetailEvolutionChainComponent {
  @Input({ required: true }) evolutionChain?: EvolutionChain | null;
}
