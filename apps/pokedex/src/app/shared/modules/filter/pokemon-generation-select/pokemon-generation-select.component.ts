import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { GenerationService } from '../../../../api/games/generation.service';

export interface PokemonGenerationSelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  type: 'pokemon-generation-select' | Type<PokemonGenerationSelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-generation-select',
  templateUrl: './pokemon-generation-select.component.html',
  styleUrls: ['./pokemon-generation-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, FormlyModule, TranslocoModule],
})
export class PokemonGenerationSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: GenerationService = inject(GenerationService);
}
