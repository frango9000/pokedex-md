import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { ItemPocketService } from '../../../../api/items/item-pocket.service';

export interface PokemonItemPocketSelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  item: 'pokemon-item-pocket-select' | Type<PokemonItemPocketSelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-item-pocket-select',
  templateUrl: './pokemon-item-pocket-select.component.html',
  styleUrls: ['./pokemon-item-pocket-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemPocketSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: ItemPocketService = inject(ItemPocketService);
}
