import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { MoveDetailInfoComponent } from '../../../move/shared/components/move-detail-info.component';
import { MoveResolverPipe } from '../../../move/shared/pipes/move-resolver.pipe';
import { MoveVersionGroupDetail } from '../pokemon-detail.component';

@Component({
  selector: 'pokedex-pokemon-detail-moves',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressBarModule,
    TranslocoDirective,
    MoveResolverPipe,
    MoveDetailInfoComponent,
    MatIconButton,
    MatIcon,
    RouterLink,
  ],
  templateUrl: './pokemon-detail-moves.component.html',
  styleUrls: ['./pokemon-detail-moves.component.scss'],
})
export class PokemonDetailMovesComponent {
  @Input({ required: true }) public moves?: MoveVersionGroupDetail[] | null;
}
