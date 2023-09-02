import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '@pokedex-md/domain';
import { PluckPipe } from '../../../../shared/pipes/pluck.pipe';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { TypeDamagesComponent } from '../../../type/shared/components/type-damages/type-damages.component';

@Component({
  selector: 'pokedex-pokemon-detail-type-damages',
  standalone: true,
  imports: [CommonModule, TypeDamagesComponent, PluckPipe, TypeButtonComponent],
  templateUrl: './pokemon-detail-type-damages.component.html',
  styleUrls: ['./pokemon-detail-type-damages.component.scss'],
})
export class PokemonDetailTypeDamagesComponent {
  @Input({ required: true }) pokemon?: Pokemon | null;
}
