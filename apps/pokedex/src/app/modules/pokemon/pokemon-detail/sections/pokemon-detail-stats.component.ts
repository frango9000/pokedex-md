import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Pokemon } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pokedex-pokemon-detail-stats',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TranslocoModule],
  templateUrl: './pokemon-detail-stats.component.html',
  styleUrls: ['./pokemon-detail-stats.component.scss'],
})
export class PokemonDetailStatsComponent {
  public readonly pokemon$: Observable<Pokemon> = this.route.data.pipe(map(({ detail }) => detail.pokemon));

  constructor(private readonly route: ActivatedRoute) {}
}
