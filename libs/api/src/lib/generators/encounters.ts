import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
  PxEncounterCondition,
  PxEncounterConditionValue,
  PxEncounterMethod,
} from '@pokedex-md/domain';
import { filterAndMapNames, Generator } from '../model/generator';

export class EncounterMethodGenerator extends Generator<EncounterMethod, PxEncounterMethod> {
  constructor() {
    super('encounter-method');
  }

  protected override mapResource(resource: EncounterMethod): PxEncounterMethod {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class EncounterConditionGenerator extends Generator<EncounterCondition, PxEncounterCondition> {
  constructor() {
    super('encounter-condition');
  }

  protected override mapResource(resource: EncounterCondition): PxEncounterCondition {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}

export class EncounterConditionValueGenerator extends Generator<EncounterConditionValue, PxEncounterConditionValue> {
  constructor() {
    super('encounter-condition-value');
  }

  protected override mapResource(resource: EncounterConditionValue): PxEncounterConditionValue {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      condition: resource.condition.name,
    };
  }
}
