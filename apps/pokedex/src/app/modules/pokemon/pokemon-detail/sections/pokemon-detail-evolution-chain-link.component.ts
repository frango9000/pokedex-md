import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { EvolutionChainLink } from '@pokedex-md/domain';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';
import { ResourceIdPipe } from '../../../../shared/pipes/resource-id.pipe';

@Component({
  selector: 'pokedex-pokemon-detail-evolution-chain-link',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    ResourceIdPipe,
    NgOptimizedImage,
    RouterLink,
    ImgFallbackDirective,
    TranslocoModule,
  ],
  templateUrl: './pokemon-detail-evolution-chain-link.component.html',
  styleUrls: ['./pokemon-detail-evolution-chain-link.component.scss'],
})
export class PokemonDetailEvolutionChainLinkComponent {
  @Input({ required: true }) public link!: EvolutionChainLink;
}
