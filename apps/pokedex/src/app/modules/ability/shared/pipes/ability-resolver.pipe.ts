import { inject, Pipe, PipeTransform } from '@angular/core';
import { Ability } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { AbilityService } from '../../../../api/pokemon/ability.service';

@Pipe({
  name: 'abilityResolver',
  standalone: true,
})
export class AbilityResolverPipe implements PipeTransform {
  private readonly service = inject(AbilityService);

  transform(abilityName: string): Observable<Ability> {
    return this.service.fetchApiOne$(abilityName);
  }
}
