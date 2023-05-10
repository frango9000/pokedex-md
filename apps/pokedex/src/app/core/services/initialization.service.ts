import { APP_INITIALIZER, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../../shared/services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(private readonly pokemonService: PokemonService) {}

  initialize(): Observable<unknown> {
    return this.pokemonService.initialize();
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
