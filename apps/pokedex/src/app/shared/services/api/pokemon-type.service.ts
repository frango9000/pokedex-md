import { Injectable } from '@angular/core';
import { PokemonType, PxType } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../utils/merge-map';
import { MultiTranslatedService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService extends MultiTranslatedService<PokemonType, PxType> {
  override get name(): string {
    return 'type';
  }

  protected _parseAllTranslations(resources: PxType[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources(resources, 'names', (type, localized) => {
        return {
          TYPE: { [type.name]: { NAME: localized } },
        };
      }),
    );
  }
}
