import {
  Move,
  MoveAilment,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
  PxMove,
  PxMoveAilment,
  PxMoveCategory,
  PxMoveDamageClass,
  PxMoveLearnMethod,
  PxMoveTarget,
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

export class MoveAilmentGenerator extends Generator<MoveAilment, PxMoveAilment> {
  constructor() {
    super('move-ailment');
  }

  protected override mapResource(resource: MoveAilment): PxMoveAilment {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class MoveCategoryGenerator extends Generator<MoveCategory, PxMoveCategory> {
  constructor() {
    super('move-category');
  }

  protected override mapResource(resource: MoveCategory): PxMoveCategory {
    return {
      id: resource.id,
      name: resource.name,
      descriptions: filterAndMapDescriptions(resource.descriptions),
    };
  }
}

export class MoveTargetGenerator extends Generator<MoveTarget, PxMoveTarget> {
  constructor() {
    super('move-target');
  }

  protected override mapResource(resource: MoveTarget): PxMoveTarget {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      descriptions: filterAndMapDescriptions(resource.descriptions),
    };
  }
}
