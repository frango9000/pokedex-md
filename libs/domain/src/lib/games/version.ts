import { ApiEntity, ApiNameLocalization } from '../domain/domain';
import { VersionGroup } from './version-group';

export interface GameVersion extends ApiEntity {
  names: ApiNameLocalization[];
  version_group: VersionGroup;
}
