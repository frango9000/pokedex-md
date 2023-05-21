import { APP_INITIALIZER, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { GenerationService } from '../../shared/services/api/generation.service';
import { PokemonService } from '../../shared/services/api/pokemon.service';
import { TypeService } from '../../shared/services/api/type.service';
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
  ) {}

  initialize(): Observable<unknown> {
    return forkJoin([
      this.languageService.initialize(),
      this.pokemonTypeService.initialize(),
      this.pokemonService.initialize(),
      this.generationService.initialize(),
    ]);
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
