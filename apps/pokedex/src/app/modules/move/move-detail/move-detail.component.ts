import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { Move } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoveDetailInfoComponent } from '../shared/components/move-detail-info.component';

@Component({
  selector: 'pokedex-move-detail',
  imports: [CommonModule, MoveDetailInfoComponent, MatCardModule, TranslocoDirective],
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss'],
})
export class MoveDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  public readonly move$: Observable<Move> = this.route.data.pipe(map(({ move }) => move));
}
