import { Pipe, PipeTransform } from '@angular/core';
import { PokeSlotType } from '@pokedex-md/domain';

@Pipe({
  name: 'typeSlotNames',
  standalone: true,
})
export class TypeSlotNamesPipe implements PipeTransform {
  transform(types: PokeSlotType[]): string[] {
    return types.map((type) => type.type.name);
  }
}
