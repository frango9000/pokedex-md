import { ApiNameLocalization, LocalizedNames, NamedApiEntity } from './domain';

export interface Language extends NamedApiEntity {
  names: ApiNameLocalization[];
  official: boolean;
  iso639: string;
  iso3166: string;
}

export interface PxLanguage extends NamedApiEntity {
  iso3166: string;
  names: LocalizedNames;
}
