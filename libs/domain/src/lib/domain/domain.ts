import { Language } from './language';

export interface ApiEntity {
  id?: number;
  name?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ApiResource<T extends ApiEntity = ApiEntity> {
  url: string;
}

export interface NamedApiResource<T extends ApiEntity = ApiEntity> extends ApiResource<T> {
  name: string;
}

export interface ApiResourceList<T extends NamedApiResource = NamedApiResource> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface LocalizedApiEntity {
  language: NamedApiResource<Language>;
}

export interface ApiName extends LocalizedApiEntity {
  name: string;
}

export interface ApiDescription extends LocalizedApiEntity {
  description: string;
}

//Non Api Content

export interface LocalizedNames {
  [language: string]: string;
}

export interface LocalizedDescription {
  description: string;
  language: string;
}
