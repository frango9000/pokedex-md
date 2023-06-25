import { Injectable } from '@angular/core';
import { PokemonType, PxType } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService extends TranslatedService<PokemonType, PxType> {
  override get name(): string {
    return 'type';
  }

  protected override _parseAllTranslations(resources: PxType[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => ({
        type: { [type.name]: { name: localized } },
      })),
    );
  }
}
