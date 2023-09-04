import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Move } from '@pokedex-md/domain';
import { MoveService } from '../../../api/moves/move.service';

export const moveResolver: ResolveFn<Move> = (route: ActivatedRouteSnapshot) => {
  return inject(MoveService).fetchApiOne$(route.params['move']);
};
