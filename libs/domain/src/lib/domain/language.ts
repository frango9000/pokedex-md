import { ApiEntity, ApiName, LocalizedNames } from './domain';

export interface Language extends ApiEntity {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: ApiName[];
}

export interface PxLanguage extends ApiEntity {
  iso3166: string;
  names?: LocalizedNames;
}
