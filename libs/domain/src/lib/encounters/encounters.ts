import { ApiNameLocalization, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';

export interface EncounterMethod extends NamedApiEntity {
  order: number;
  names: ApiNameLocalization[];
}

export interface PxEncounterMethod extends NamedApiEntity {
  names: LocalizedNames;
}

export interface EncounterCondition extends NamedApiEntity {
  names: ApiNameLocalization[];
  values: NamedApiResource<EncounterConditionValue>[];
}

export interface PxEncounterCondition extends NamedApiEntity {
  names: LocalizedNames;
}

export interface EncounterConditionValue extends NamedApiEntity {
  names: ApiNameLocalization[];
  condition: NamedApiResource<EncounterCondition>;
}

export interface PxEncounterConditionValue extends NamedApiEntity {
  condition: string;
  names: LocalizedNames;
}
