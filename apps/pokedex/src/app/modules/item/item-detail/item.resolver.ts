import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Item } from '@pokedex-md/domain';
import { ItemService } from '../../../api/items/item.service';

export const itemResolver: ResolveFn<Item> = (route: ActivatedRouteSnapshot) => {
  return inject(ItemService).fetchApiOne$(route.params['item']);
};
