import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { ItemCategoryService } from '../../../../api/items/item-category.service';

export interface PokemonItemCategorySelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  item: 'pokemon-item-category-select' | Type<PokemonItemCategorySelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-item-category-select',
  templateUrl: './pokemon-item-category-select.component.html',
  styleUrls: ['./pokemon-item-category-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, FormlyModule, TranslocoModule],
})
export class PokemonItemCategorySelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: ItemCategoryService = inject(ItemCategoryService);
}
