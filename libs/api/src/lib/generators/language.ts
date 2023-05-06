import { Language, PxLanguage } from '@pokedex-md/domain';
import { filterAndMapNames, Generator } from '../model/generator';

export class LanguageGenerator extends Generator<Language, PxLanguage> {
  constructor() {
    super('language');
  }

  protected override mapResource(resource: Language): PxLanguage {
    return {
      id: resource.id,
      name: resource.name,
      iso3166: resource.iso3166,
      names: filterAndMapNames(resource.names),
    };
  }

  protected override filterResource(resource: Language): boolean {
    return !!(super.filterResource(resource) && resource.names.length && resource.official);
  }
}
