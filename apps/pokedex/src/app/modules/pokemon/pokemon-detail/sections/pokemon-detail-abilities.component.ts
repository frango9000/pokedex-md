import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { Ability } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { AbilityService } from '../../../../api/pokemon/ability.service';
import { AbilityDetailInfoComponent } from '../../../ability/shared/components/ability-detail-info.component';
import { PokemonDetailInfoComponent } from './pokemon-detail-info.component';

@Pipe({
  name: 'pokemonAbility$',
  standalone: true,
})
export class PokemonAbilityPipe implements PipeTransform {
  constructor(private readonly service: AbilityService) {}

  transform(abilityName: string): Observable<Ability> {
    return this.service.fetchApiOne$(abilityName);
  }
}

@Component({
  selector: 'pokedex-pokemon-detail-abilities',
  standalone: true,
  imports: [
    CommonModule,
    AbilityDetailInfoComponent,
    MatExpansionModule,
    MatIconModule,
    PokemonDetailInfoComponent,
    TranslocoModule,
    PokemonAbilityPipe,
  ],
  templateUrl: './pokemon-detail-abilities.component.html',
  styleUrls: ['./pokemon-detail-abilities.component.scss'],
})
export class PokemonDetailAbilitiesComponent {
  @Input({ required: true }) public abilities?: string[] | null;
}
