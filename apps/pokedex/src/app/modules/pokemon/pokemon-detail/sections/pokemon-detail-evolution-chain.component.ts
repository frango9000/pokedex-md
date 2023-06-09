import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { EvolutionChain } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetailEvolutionChainLinkComponent } from './pokemon-detail-evolution-chain-link.component';

@Component({
  selector: 'pokedex-pokemon-detail-evolution-chain',
  standalone: true,
  imports: [CommonModule, PokemonDetailEvolutionChainLinkComponent, MatDividerModule],
  templateUrl: './pokemon-detail-evolution-chain.component.html',
  styleUrls: ['./pokemon-detail-evolution-chain.component.scss'],
})
export class PokemonDetailEvolutionChainComponent {
  public readonly evolutionChain$: Observable<EvolutionChain> = this.route.data.pipe(
    map(({ detail }) => detail.evolutionChain),
  );

  constructor(private readonly route: ActivatedRoute) {}
}
