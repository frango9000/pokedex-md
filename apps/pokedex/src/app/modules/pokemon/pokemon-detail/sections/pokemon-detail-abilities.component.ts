import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslocoModule } from '@ngneat/transloco';
import { AbilityDetailInfoComponent } from '../../../ability/shared/components/ability-detail-info.component';
import { AbilityResolverPipe } from '../../../ability/shared/pipes/ability-resolver.pipe';
import { PokemonDetailInfoComponent } from './pokemon-detail-info.component';

@Component({
  selector: 'pokedex-pokemon-detail-abilities',
  standalone: true,
  imports: [
    CommonModule,
    AbilityDetailInfoComponent,
    MatExpansionModule,
    MatIconModule,
    PokemonDetailInfoComponent,
    TranslocoModule,
    AbilityResolverPipe,
    MatProgressBarModule,
  ],
  templateUrl: './pokemon-detail-abilities.component.html',
  styleUrls: ['./pokemon-detail-abilities.component.scss'],
})
export class PokemonDetailAbilitiesComponent {
  @Input({ required: true }) public abilities?: string[] | null;
}
