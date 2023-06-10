import { Injectable } from '@angular/core';
import { PxVersionGroup, VersionGroup } from '@pokedex-md/domain';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class VersionGroupService extends BaseService<VersionGroup, PxVersionGroup> {
  protected override get name(): string {
    return 'version-group';
  }

  public findByName(name: string): PxVersionGroup | undefined {
    return this.findOne((resource) => resource.name === name);
  }

  public findByVersion(version: string): PxVersionGroup | undefined {
    return this.findOne((resource) => resource.versions.includes(version));
  }
}
