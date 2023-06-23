import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Ability, EvolutionChain, Pokemon, Species } from '@pokedex-md/domain';
import { forkJoin, switchMap } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EvolutionChainService } from '../../../api/evolution/evolution-chain.service';
import { AbilityService } from '../../../api/pokemon/ability.service';
import { PokemonService } from '../../../api/pokemon/pokemon.service';
import { SpeciesService } from '../../../api/pokemon/species.service';
import { getResourceId } from '../../../shared/utils/resource.utils';

export const pokemonDetailResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const pokemonService = inject(PokemonService);
  const speciesService = inject(SpeciesService);
  const evolutionChainService = inject(EvolutionChainService);
  const abilityService = inject(AbilityService);
  return pokemonService.fetchApiOne$(route.params['pokemon']).pipe(
    switchMap((pokemon) =>
      forkJoin({
        details: speciesService.fetchApiOne$(pokemon.species.name).pipe(
          switchMap((species) =>
            evolutionChainService.fetchApiOne$(getResourceId(species.evolution_chain.url)).pipe(
              map((evolutionChain) => ({
                pokemon,
                species,
                evolutionChain,
                abilities: [] as Ability[],
              })),
            ),
          ),
        ),
        abilities: forkJoin([...pokemon.abilities.map((ability) => abilityService.fetchApiOne$(ability.ability.name))]),
      }).pipe(
        tap((join) => (join.details.abilities = join.abilities)),
        map(({ details }) => details),
      ),
    ),
  );
};

export interface PokemonDetailResolverData {
  pokemon: Pokemon;
  species: Species;
  evolutionChain: EvolutionChain;
  abilities: Ability[];
}
