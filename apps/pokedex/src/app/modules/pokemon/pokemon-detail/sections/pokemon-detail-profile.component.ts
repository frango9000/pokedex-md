import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Pokemon } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { TypeSlotNamesPipe } from '../../../type/shared/pipes/type-slot-names.pipe';

@Component({
  selector: 'pokedex-pokemon-detail-profile',
  imports: [CommonModule, MatCardModule, TranslocoModule, ImgFallbackDirective, TypeButtonComponent, TypeSlotNamesPipe],
  templateUrl: './pokemon-detail-profile.component.html',
  styleUrls: ['./pokemon-detail-profile.component.scss'],
})
export class PokemonDetailProfileComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  public readonly pokemon$: Observable<Pokemon> = this.route.data.pipe(
    map(({ pokemonDetail }) => pokemonDetail.pokemon),
  );
}
