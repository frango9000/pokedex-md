import { Injectable } from '@angular/core';
import { EvolutionTrigger, PxEvolutionTrigger } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EvolutionTriggerService extends TranslatedService<EvolutionTrigger, PxEvolutionTrigger> {
  protected get name(): string {
    return 'evolution-trigger';
  }

  protected override _parseAllTranslations(resources: PxEvolutionTrigger[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (evolutionTrigger, localized) => {
        return { evolution_trigger: { [evolutionTrigger.name]: localized } };
      }),
    );
  }
}
