import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { EvolutionChain, Pokemon, Species } from '@pokedex-md/domain';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { EvolutionChainService } from '../../../api/evolution/evolution-chain.service';
import { PokemonService } from '../../../api/pokemon/pokemon.service';
import { SpeciesService } from '../../../api/pokemon/species.service';
import { getResourceId } from '../../../shared/utils/resource.utils';

export const pokemonDetailResolver: ResolveFn<PokemonDetailResolverData> = (route: ActivatedRouteSnapshot) => {
  const pokemonService = inject(PokemonService);
  const speciesService = inject(SpeciesService);
  const evolutionChainService = inject(EvolutionChainService);
  return pokemonService.fetchApiOne$(route.params['pokemon']).pipe(
    switchMap((pokemon) =>
      speciesService.fetchApiOne$(pokemon.species.name).pipe(
        switchMap((species) =>
          evolutionChainService.fetchApiOne$(getResourceId(species.evolution_chain.url)).pipe(
            map((evolutionChain) => ({
              pokemon,
              species,
              evolutionChain,
            })),
          ),
        ),
      ),
    ),
  );
};

export interface PokemonDetailResolverData {
  pokemon: Pokemon;
  species: Species;
  evolutionChain: EvolutionChain;
}
