import { APP_INITIALIZER, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { EvolutionTriggerService } from '../../shared/services/api/evolution/evolution-trigger.service';
import { GenerationService } from '../../shared/services/api/games/generation.service';
import { VersionGroupService } from '../../shared/services/api/games/version-group.service';
import { VersionService } from '../../shared/services/api/games/version.service';
import { EggGroupService } from '../../shared/services/api/pokemon/egg-group.service';
import { GrowthRateService } from '../../shared/services/api/pokemon/growth-rate.service';
import { PokemonColorService } from '../../shared/services/api/pokemon/pokemon-color.service';
import { PokemonHabitatService } from '../../shared/services/api/pokemon/pokemon-habitat.service';
import { PokemonShapeService } from '../../shared/services/api/pokemon/pokemon-shape.service';
import { PokemonService } from '../../shared/services/api/pokemon/pokemon.service';
import { TypeService } from '../../shared/services/api/pokemon/type.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly pokemonTypeService: TypeService,
    private readonly generationService: GenerationService,
    private readonly languageService: LanguageService,
    private readonly versionService: VersionService,
    private readonly versionGroupService: VersionGroupService,
    private readonly eggGroupService: EggGroupService,
    private readonly growthRateService: GrowthRateService,
    private readonly pokemonColorService: PokemonColorService,
    private readonly pokemonShapeService: PokemonShapeService,
    private readonly pokemonHabitatService: PokemonHabitatService,
    private readonly evolutionTriggerService: EvolutionTriggerService,
  ) {}

  initialize(): Observable<unknown> {
    return forkJoin([
      this.languageService.initialize(),
      ...this._pokemonServices(),
      ...this._gameServices(),
      ...this._speciesServices(),
      this.evolutionTriggerService.initialize(),
    ]);
  }

  private _pokemonServices(): Observable<unknown>[] {
    return [this.pokemonService.initialize(), this.pokemonTypeService.initialize()];
  }

  private _gameServices(): Observable<unknown>[] {
    return [
      this.generationService.initialize(),
      this.versionService.initialize(),
      this.versionGroupService.initialize(),
    ];
  }

  private _speciesServices(): Observable<unknown>[] {
    return [
      this.eggGroupService.initialize(),
      this.growthRateService.initialize(),
      this.pokemonColorService.initialize(),
      this.pokemonShapeService.initialize(),
      this.pokemonHabitatService.initialize(),
    ];
  }
}

function initializeApp(appInitService: InitializationService) {
  return (): Observable<unknown> => {
    return appInitService.initialize();
  };
}

export const InitializationProvider = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  deps: [InitializationService],
  multi: true,
};
