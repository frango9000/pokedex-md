import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslocoDirective } from '@ngneat/transloco';
import { MoveDetailInfoComponent } from '../../../move/shared/components/move-detail-info.component';
import { MoveResolverPipe } from '../../../move/shared/pipes/move-resolver.pipe';
import { MoveVersionGroupDetail } from '../pokemon-detail.component';

@Component({
  selector: 'pokedex-pokemon-detail-moves',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressBarModule,
    TranslocoDirective,
    MoveResolverPipe,
    MoveDetailInfoComponent,
  ],
  templateUrl: './pokemon-detail-moves.component.html',
  styleUrls: ['./pokemon-detail-moves.component.scss'],
})
export class PokemonDetailMovesComponent {
  @Input({ required: true }) public moves?: MoveVersionGroupDetail[] | null;
}
