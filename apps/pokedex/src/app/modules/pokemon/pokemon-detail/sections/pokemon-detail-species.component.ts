import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { PxVersionGroup, Species } from '@pokedex-md/domain';
import { Observable, pluck } from 'rxjs';
import { map } from 'rxjs/operators';
import { VersionGroupMenuComponent } from '../../../../shared/components/version-group-menu/version-group-menu.component';
import { VersionMenuComponent } from '../../../../shared/components/version-menu/version-menu.component';
import { PluckPipe } from '../../../../shared/directives/pluck.pipe';

@Component({
  selector: 'pokedex-pokemon-detail-species',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    TranslocoModule,
    VersionMenuComponent,
    VersionGroupMenuComponent,
    MatTooltipModule,
    PluckPipe,
  ],
  templateUrl: './pokemon-detail-species.component.html',
  styleUrls: ['./pokemon-detail-species.component.scss'],
})
export class PokemonDetailSpeciesComponent {
  public readonly species$: Observable<Species> = this.route.data.pipe(map(({ detail }) => detail.species));
  protected versionGroup?: PxVersionGroup;

  constructor(private readonly route: ActivatedRoute) {}

  protected readonly pluck = pluck;
}
