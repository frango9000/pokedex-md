import { ApiNameLocalization, LocalizedNames, NamedApiEntity, NamedApiResource } from '../domain/domain';

export interface PxGameVersion extends NamedApiEntity {
  names: LocalizedNames;
  version_group: string;
}

export interface GameVersion extends NamedApiEntity {
  names: ApiNameLocalization[];
  version_group: NamedApiResource<GameVersion>;
}
