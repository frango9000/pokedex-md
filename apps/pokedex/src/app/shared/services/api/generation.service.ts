import { Injectable } from '@angular/core';
import { Generation, PxGeneration } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../utils/merge-map';
import { MultiTranslatedService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GenerationService extends MultiTranslatedService<Generation, PxGeneration> {
  override get name(): string {
    return 'generation';
  }

  protected _parseAllTranslations(resources: PxGeneration[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => {
        return {
          GENERATION: { [type.name]: { NAME: localized } },
        };
      }),
    );
  }
}
