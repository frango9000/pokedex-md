import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Pokemon, Species } from '@pokedex-md/domain';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonService } from '../../../shared/services/api/pokemon/pokemon.service';
import { SpeciesService } from '../../../shared/services/api/pokemon/species.service';

export const pokemonDetailResolver: ResolveFn<PokemonDetailResolverData> = (route: ActivatedRouteSnapshot) => {
  const pokemonService = inject(PokemonService);
  const speciesService = inject(SpeciesService);
  return pokemonService.fetchApiOne$(route.params['pokemon']).pipe(
    switchMap((pokemon) =>
      speciesService.fetchApiOne$(pokemon.species.name).pipe(
        map((species) => ({
          pokemon,
          species,
        })),
      ),
    ),
  );
};

export interface PokemonDetailResolverData {
  pokemon: Pokemon;
  species: Species;
}
