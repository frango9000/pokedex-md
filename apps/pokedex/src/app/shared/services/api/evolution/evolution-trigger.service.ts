import { Injectable } from '@angular/core';
import { EvolutionTrigger, PxEvolutionTrigger } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../../utils/merge-map';
import { MultiTranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EvolutionTriggerService extends MultiTranslatedService<EvolutionTrigger, PxEvolutionTrigger> {
  protected get name(): string {
    return 'evolution-trigger';
  }

  protected _parseAllTranslations(resources: PxEvolutionTrigger[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (evolutionTrigger, localized) => {
        return { evolution_trigger: { [evolutionTrigger.name]: localized } };
      }),
    );
  }
}
