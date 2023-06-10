import { Injectable } from '@angular/core';
import { EvolutionChain } from '@pokedex-md/domain';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EvolutionChainService extends BaseService<EvolutionChain, EvolutionChain> {
  protected get name(): string {
    return 'evolution-chain';
  }
}
