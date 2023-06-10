import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeepPluckPipe } from '../../../../shared/pipes/deep-pluck.pipe';
import { PluckPipe } from '../../../../shared/pipes/pluck.pipe';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { TypeDamagesComponent } from '../../../type/shared/components/type-damages/type-damages.component';

@Component({
  selector: 'pokedex-pokemon-detail-type-damages',
  standalone: true,
  imports: [CommonModule, TypeDamagesComponent, PluckPipe, TypeButtonComponent, DeepPluckPipe],
  templateUrl: './pokemon-detail-type-damages.component.html',
  styleUrls: ['./pokemon-detail-type-damages.component.scss'],
})
export class PokemonDetailTypeDamagesComponent {
  public readonly pokemon$: Observable<Pokemon> = this.route.data.pipe(map(({ detail }) => detail.pokemon));

  constructor(private readonly route: ActivatedRoute) {}
}
