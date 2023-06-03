import { ChangeDetectionStrategy, Component, inject, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { GenerationService } from '../../../services/api/games/generation.service';

export interface PokemonGenerationSelectFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
  type: 'pokemon-generation-select' | Type<PokemonGenerationSelectComponent>;
}

@Component({
  selector: 'pokedex-pokemon-generation-select',
  templateUrl: './pokemon-generation-select.component.html',
  styleUrls: ['./pokemon-generation-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonGenerationSelectComponent extends FieldType<FieldTypeConfig<FormlyFieldProps>> {
  protected readonly service: GenerationService = inject(GenerationService);
}
