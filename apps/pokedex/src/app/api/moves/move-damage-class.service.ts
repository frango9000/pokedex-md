import { Injectable } from '@angular/core';
import { MoveDamageClass, PxMoveDamageClass } from '@pokedex-md/domain';
import { Observable, of } from 'rxjs';
import { MergingMap } from '../../shared/utils/merge-map';
import { TranslatedService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MoveDamageClassService extends TranslatedService<MoveDamageClass, PxMoveDamageClass> {
  protected get name(): string {
    return 'move-damage-class';
  }

  protected override _parseAllTranslations(moveDamageClasses: PxMoveDamageClass[]): Observable<MergingMap | null> {
    return of(
      MergingMap.mergeMaps(
        MergingMap.ofMultipleResources(moveDamageClasses, 'names', (damageClass, localized) => ({
          move_damage_class: { [damageClass.name]: { name: localized } },
        })),
        MergingMap.ofMultipleResources(moveDamageClasses, 'descriptions', (damageClass, localized) => ({
          move_damage_class: { [damageClass.name]: { description: localized } },
        })),
      ),
    );
  }
}
