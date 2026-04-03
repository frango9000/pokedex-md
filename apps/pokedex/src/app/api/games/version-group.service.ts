import { Injectable } from '@angular/core';
import { PxVersionGroup, VersionGroup } from '@pokedex-md/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedNamedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class VersionGroupService extends TranslatedNamedService<VersionGroup, PxVersionGroup> {
  private static readonly STORAGE_KEY = 'selected-version-group';

  private readonly _versionGroup$: BehaviorSubject<PxVersionGroup> = new BehaviorSubject<PxVersionGroup>(
    {} as PxVersionGroup,
  );

  protected override get name(): string {
    return 'version-group';
  }

  override initialize(): Observable<PxVersionGroup[]> {
    return super.initialize().pipe(
      tap((versionGroups) => {
        if (!versionGroups?.length) return;
        const savedName = localStorage.getItem(VersionGroupService.STORAGE_KEY);
        const restored = savedName ? versionGroups.find((vg) => vg.name === savedName) : undefined;
        this._versionGroup$.next(restored ?? versionGroups[0]);
      }),
    );
  }

  get versionGroup$(): Observable<PxVersionGroup> {
    return this._versionGroup$.asObservable();
  }

  set versionGroup(versionGroup: PxVersionGroup) {
    localStorage.setItem(VersionGroupService.STORAGE_KEY, versionGroup.name);
    this._versionGroup$.next(versionGroup);
  }

  public findByVersion(version: string): PxVersionGroup | undefined {
    return this.findOne((resource) => resource.versions.includes(version));
  }

  protected override _parseAllTranslations(resources: PxVersionGroup[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => ({
        'version-group': { [type.name]: localized },
      })),
    );
  }
}
