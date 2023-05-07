import {
  ApiEntity,
  Item,
  ItemCategory,
  ItemPocket,
  NamedApiResource,
  PxItem,
  PxItemCategory,
  PxItemPocket,
} from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { filterAndMapNames, Generator } from '../model/generator';

export class ItemGenerator extends Generator<ItemWithCategory, PxItem> {
  constructor() {
    super('item');
  }

  protected override mapResource(resource: ItemWithCategory): PxItem {
    return {
      id: resource.item.id,
      name: resource.item.name,
      category: resource.item.category.name,
      cost: resource.item.cost,
      names: filterAndMapNames(resource.item.names),
      sprite: resource.item.sprites.default?.substring(71),
      pocket: resource.category.pocket.name,
    };
  }

  protected override fetchResource(namedApiResource: NamedApiResource<Item>): Observable<ItemWithCategory> {
    return this._fetchOne(namedApiResource).pipe(
      mergeMap((item: Item) => this._fetchOne(item.category).pipe(map((category) => ({ item, category })))),
    );
  }
}

interface ItemWithCategory extends ApiEntity {
  item: Item;
  category: ItemCategory;
}

export class ItemCategoryGenerator extends Generator<ItemCategory, PxItemCategory> {
  constructor() {
    super('item-category');
  }

  protected override mapResource(resource: ItemCategory): PxItemCategory {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
      pocket: resource.pocket.name,
    };
  }
}

export class ItemPocketGenerator extends Generator<ItemPocket, PxItemPocket> {
  constructor() {
    super('item-pocket');
  }

  protected override mapResource(resource: ItemPocket): PxItemPocket {
    return {
      id: resource.id,
      name: resource.name,
      names: filterAndMapNames(resource.names),
    };
  }
}
