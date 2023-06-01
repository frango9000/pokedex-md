import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
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
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  constructor(private readonly route: ActivatedRoute) {
    this.route.data.subscribe(({ pokemon }) => console.log(pokemon));
  }
}
