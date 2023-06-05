import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { PokemonDetailEvolutionChainComponent } from './sections/pokemon-detail-evolution-chain.component';
import { PokemonDetailInfoComponent } from './sections/pokemon-detail-info.component';
import { PokemonDetailProfileComponent } from './sections/pokemon-detail-profile.component';
import { PokemonDetailSpeciesComponent } from './sections/pokemon-detail-species.component';

@Component({
  selector: 'pokedex-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    PokemonDetailProfileComponent,
    PokemonDetailInfoComponent,
    PokemonDetailSpeciesComponent,
    TranslocoModule,
    PokemonDetailEvolutionChainComponent,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {}
