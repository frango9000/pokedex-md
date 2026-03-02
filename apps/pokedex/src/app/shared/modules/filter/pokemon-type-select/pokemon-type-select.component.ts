import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { TypeService } from '../../../../api/pokemon/type.service';
import { TypeButtonComponent } from '../../../../modules/type/shared/components/type-button/type-button.component';

export interface PokemonTypeSelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  type: 'pokemon-type-select' | Type<PokemonTypeSelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-type-select',
  templateUrl: './pokemon-type-select.component.html',
  styleUrls: ['./pokemon-type-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, TypeButtonComponent, FormlyModule, TranslocoModule],
})
export class PokemonTypeSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: TypeService = inject(TypeService);
}
