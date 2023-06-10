import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { TypeService } from '../../../../api/pokemon/type.service';

export interface PokemonTypeSelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  type: 'pokemon-type-select' | Type<PokemonTypeSelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-type-select',
  templateUrl: './pokemon-type-select.component.html',
  styleUrls: ['./pokemon-type-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonTypeSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: TypeService = inject(TypeService);
}
