import {
  ApiEntity,
  ApiName,
  LocalizedName,
  NamedApiResource,
} from '../domain/domain';

export interface EncounterMethod extends ApiEntity {
  order: number;
  names: ApiName[];
}

export interface PxEncounterMethod extends ApiEntity {
  names: LocalizedName[];
}

export interface EncounterCondition extends ApiEntity {
  names: ApiName[];
  values: NamedApiResource<EncounterConditionValue>[];
}

export interface PxEncounterCondition extends ApiEntity {
  names: LocalizedName[];
}

export interface EncounterConditionValue extends ApiEntity {
  names: ApiName[];
  condition: NamedApiResource<EncounterCondition>;
}

export interface PxEncounterConditionValue extends ApiEntity {
  condition: string;
  names: LocalizedName[];
}
