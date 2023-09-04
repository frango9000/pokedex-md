import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { EvolutionChain, Pokemon, Species } from '@pokedex-md/domain';
import { Observable, switchMap } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { VersionGroupService } from '../../../api/games/version-group.service';
import { PokemonDetailResolverData } from './pokemon-detail.resolver';
import { PokemonDetailAbilitiesComponent } from './sections/pokemon-detail-abilities.component';
import { PokemonDetailEvolutionChainComponent } from './sections/pokemon-detail-evolution-chain.component';
import { PokemonDetailInfoComponent } from './sections/pokemon-detail-info.component';
import { PokemonDetailMovesComponent } from './sections/pokemon-detail-moves.component';
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
    PokemonDetailMovesComponent,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly versionGroupService: VersionGroupService = inject(VersionGroupService);

  public readonly detail$: Observable<PokemonDetailResolverData> = this.route.data.pipe(
    map(({ pokemonDetail }) => pokemonDetail),
  );
  public readonly pokemon$: Observable<Pokemon> = this.detail$.pipe(map(({ pokemon }) => pokemon));
  public readonly species$: Observable<Species> = this.detail$.pipe(map(({ species }) => species));
  public readonly evolutionChain$: Observable<EvolutionChain> = this.detail$.pipe(
    map(({ evolutionChain }) => evolutionChain),
  );

  public readonly abilities$: Observable<string[]> = this.pokemon$.pipe(
    map(({ abilities }) => abilities.map((value) => value.ability.name)),
  );

  public readonly movesByLearnMethods$: Observable<PokemonMovesByLearnMethods[]> = this.pokemon$.pipe(
    switchMap((pokemon) =>
      this.versionGroupService.versionGroup$.pipe(
        map((versionGroup) => ({
          moves: pokemon.moves,
          versionGroup,
        })),
      ),
    ),
    map(({ moves, versionGroup }) =>
      moves.reduce((accumulator: PokemonMovesByLearnMethods[], move) => {
        move.version_group_details
          .filter((versionGroupDetail) => versionGroupDetail.version_group.name === versionGroup.name)
          .forEach((versionGroupDetail) => {
            const moveLearnMethod = versionGroupDetail.move_learn_method.name;
            const moveLearnMethodIndex = accumulator.findIndex((value) => value.learnMethod === moveLearnMethod);
            if (moveLearnMethodIndex === -1) {
              accumulator.push({
                learnMethod: moveLearnMethod,
                moves: [
                  {
                    move: move.move.name,
                    versionGroup: versionGroupDetail.version_group.name,
                    levelLearnedAt: versionGroupDetail.level_learned_at,
                  },
                ],
              });
            } else {
              accumulator[moveLearnMethodIndex].moves.push({
                move: move.move.name,
                versionGroup: versionGroupDetail.version_group.name,
                levelLearnedAt: versionGroupDetail.level_learned_at,
              });
            }
          });
        return accumulator;
      }, []),
    ),
    tap((movesByMethod) =>
      movesByMethod.forEach(({ moves }) => moves.sort((a, b) => (a?.levelLearnedAt || 0) - (b?.levelLearnedAt || 0))),
    ),
  );
}

export interface PokemonMovesByLearnMethods {
  learnMethod: string;
  moves: MoveVersionGroupDetail[];
}

export interface MoveVersionGroupDetail {
  move: string;
  versionGroup: string;
  levelLearnedAt?: number;
}
