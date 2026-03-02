import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
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
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, FormlyModule, TranslocoModule],
})
export class PokemonItemPocketSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: ItemPocketService = inject(ItemPocketService);
}
