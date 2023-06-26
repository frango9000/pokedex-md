import { Injectable } from '@angular/core';
import { Generation, PxGeneration } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class GenerationService extends TranslatedService<Generation, PxGeneration> {
  override get name(): string {
    return 'generation';
  }

  protected override _parseAllTranslations(resources: PxGeneration[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => {
        return {
          generation: { [type.name]: localized },
        };
      }),
    );
  }
}
