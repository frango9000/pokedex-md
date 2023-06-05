import { EvolutionTrigger, PxEvolutionTrigger } from '@pokedex-md/domain';
import { filterAndMapNames, Generator } from '../model/generator';

export class EvolutionTriggerGenerator extends Generator<EvolutionTrigger, PxEvolutionTrigger> {
  constructor() {
    super('evolution-trigger');
  }

  protected override mapResource(resource: EvolutionTrigger): PxEvolutionTrigger {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}
