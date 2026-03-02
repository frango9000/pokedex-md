import { inject, Pipe, PipeTransform } from '@angular/core';
import { Move } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { MoveService } from '../../../../api/moves/move.service';

@Pipe({
  name: 'moveResolver',
  standalone: true,
})
export class MoveResolverPipe implements PipeTransform {
  private readonly service = inject(MoveService);

  transform(moveName: string): Observable<Move> {
    return this.service.fetchApiOne$(moveName);
  }
}
