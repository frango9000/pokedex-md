import { Injectable } from '@angular/core';
import { PxStat, Stat } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class StatService extends TranslatedService<Stat, PxStat> {
  override get name(): string {
    return 'stat';
  }

  protected override _parseAllTranslations(resources: PxStat[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (stat, localized) => ({
        stat: { [stat.name]: localized },
      })),
    );
  }
}
