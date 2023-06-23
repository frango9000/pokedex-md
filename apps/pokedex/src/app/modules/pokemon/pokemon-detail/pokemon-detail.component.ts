import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Ability, EvolutionChain, Pokemon, Species } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetailResolverData } from './pokemon-detail.resolver';
import { PokemonDetailAbilitiesComponent } from './sections/pokemon-detail-abilities.component';
import { PokemonDetailEvolutionChainComponent } from './sections/pokemon-detail-evolution-chain.component';
import { PokemonDetailInfoComponent } from './sections/pokemon-detail-info.component';
import { PokemonDetailProfileComponent } from './sections/pokemon-detail-profile.component';
import { PokemonDetailSpeciesComponent } from './sections/pokemon-detail-species.component';
import { PokemonDetailStatsComponent } from './sections/pokemon-detail-stats.component';
import { PokemonDetailTypeDamagesComponent } from './sections/pokemon-detail-type-damages.component';

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
    PokemonDetailStatsComponent,
    PokemonDetailTypeDamagesComponent,
    PokemonDetailAbilitiesComponent,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  public readonly detail$: Observable<PokemonDetailResolverData> = this.route.data.pipe(map(({ detail }) => detail));
  public readonly pokemon$: Observable<Pokemon> = this.detail$.pipe(map(({ pokemon }) => pokemon));
  public readonly species$: Observable<Species> = this.detail$.pipe(map(({ species }) => species));
  public readonly evolutionChain$: Observable<EvolutionChain> = this.detail$.pipe(
    map(({ evolutionChain }) => evolutionChain),
  );

  public readonly abilities$: Observable<Ability[]> = this.detail$.pipe(map(({ abilities }) => abilities));

  constructor(private readonly route: ActivatedRoute) {}
}
