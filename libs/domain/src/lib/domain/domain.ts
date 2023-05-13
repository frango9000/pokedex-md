import { HashMap } from '@ngneat/transloco';
import { Language } from './language';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApiEntity {}

export interface IdApiEntity extends ApiEntity {
  id: number;
}

export interface NamedApiEntity extends IdApiEntity {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ApiResource<T extends ApiEntity = ApiEntity> {
  url: string;
}

export interface NamedApiResource<T extends ApiEntity = ApiEntity> extends ApiResource<T> {
  url: string;
  name: string;
}

export interface ApiResourceList<T extends NamedApiResource = NamedApiResource> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface ApiLocalization {
  language: NamedApiResource<Language>;
}

export interface ApiNameLocalization extends ApiLocalization {
  name: string;
}

export interface ApiDescriptionLocalization extends ApiLocalization {
  description: string;
}

//Non Api Content

export type LocalizedNames = HashMap<string>;
