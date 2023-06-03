import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Pokemon } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { TypeSlotNamesPipe } from '../../../type/shared/pipes/type-slot-names.pipe';

@Component({
  selector: 'pokedex-pokemon-detail-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslocoModule, ImgFallbackDirective, TypeButtonComponent, TypeSlotNamesPipe],
  templateUrl: './pokemon-detail-profile.component.html',
  styleUrls: ['./pokemon-detail-profile.component.scss'],
})
export class PokemonDetailProfileComponent {
  public readonly pokemon$: Observable<Pokemon> = this.route.data.pipe(map(({ detail }) => detail.pokemon));

  constructor(private readonly route: ActivatedRoute) {}
}
