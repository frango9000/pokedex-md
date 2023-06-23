import { APP_INITIALIZER, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { EvolutionTriggerService } from '../../api/evolution/evolution-trigger.service';
import { GenerationService } from '../../api/games/generation.service';
import { VersionGroupService } from '../../api/games/version-group.service';
import { VersionService } from '../../api/games/version.service';
import { ItemService } from '../../api/items/item.service';
import { LocationService } from '../../api/locations/location.service';
import { RegionService } from '../../api/locations/region.service';
import { MoveService } from '../../api/moves/move.service';
import { AbilityService } from '../../api/pokemon/ability.service';
import { EggGroupService } from '../../api/pokemon/egg-group.service';
import { GrowthRateService } from '../../api/pokemon/growth-rate.service';
import { PokemonColorService } from '../../api/pokemon/pokemon-color.service';
import { PokemonHabitatService } from '../../api/pokemon/pokemon-habitat.service';
import { PokemonShapeService } from '../../api/pokemon/pokemon-shape.service';
import { PokemonService } from '../../api/pokemon/pokemon.service';
import { StatService } from '../../api/pokemon/stat.service';
import { TypeService } from '../../api/pokemon/type.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly pokemonAbilityService: AbilityService,
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
    private readonly statService: StatService,
    private readonly itemService: ItemService,
    private readonly evolutionTriggerService: EvolutionTriggerService,
    private readonly moveService: MoveService,
    private readonly locationService: LocationService,
    private readonly regionService: RegionService,
  ) {}

  initialize(): Observable<unknown> {
    return forkJoin([
      this.languageService.initialize(),
      ...this._pokemonServices(),
      ...this._gameServices(),
      ...this._locationServices(),
      ...this._speciesServices(),
      this.itemService.initialize(),
      this.moveService.initialize(),
      this.evolutionTriggerService.initialize(),
    ]);
  }

  private _pokemonServices(): Observable<unknown>[] {
    return [
      this.pokemonService.initialize(),
      this.pokemonTypeService.initialize(),
      this.statService.initialize(),
      this.pokemonAbilityService.initialize(),
    ];
  }

  private _gameServices(): Observable<unknown>[] {
    return [
      this.generationService.initialize(),
      this.versionService.initialize(),
      this.versionGroupService.initialize(),
    ];
  }

  private _locationServices(): Observable<unknown>[] {
    return [this.regionService.initialize(), this.locationService.initialize()];
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
