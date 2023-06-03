import { Injectable } from '@angular/core';
import { GameVersion, PxGameVersion } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../../utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class VersionService extends MultiTranslatedService<GameVersion, PxGameVersion> {
  protected override get name(): string {
    return 'version';
  }

  protected override _parseAllTranslations(resources: PxGameVersion[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => {
        return {
          version: { [type.name]: localized },
        };
      }),
    );
  }
}
