import {
  Move,
  MoveDamageClass,
  MoveLearnMethod,
  PxMove,
  PxMoveDamageClass,
  PxMoveLearnMethod,
} from '@pokedex-md/domain';
import { filterAndMapDescriptions, filterAndMapNames, Generator } from '../model/generator';

export class MovesGenerator extends Generator<Move, PxMove> {
  constructor() {
    super('move');
  }

  protected override mapResource(resource: Move): PxMove {
    return {
      id: resource.id,
      name: resource.name,
      accuracy: resource.accuracy,
      crit_rate: resource.meta?.crit_rate,
      generation: resource.generation.name,
      names: filterAndMapNames(resource.names),
      power: resource.power,
      pp: resource.pp,
      type: resource.type.name,
    };
  }
}

export class MoveLearnMethodGenerator extends Generator<MoveLearnMethod, PxMoveLearnMethod> {
  constructor() {
    super('move-learn-method');
  }

  protected override mapResource(resource: MoveLearnMethod): PxMoveLearnMethod {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      descriptions: filterAndMapDescriptions(resource.descriptions),
    };
  }
}

export class MoveDamageClassGenerator extends Generator<MoveDamageClass, PxMoveDamageClass> {
  constructor() {
    super('move-damage-class');
  }

  protected override mapResource(resource: MoveDamageClass): PxMoveDamageClass {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      descriptions: filterAndMapDescriptions(resource.descriptions),
    };
  }
}
