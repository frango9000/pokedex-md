import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { Item, Machine, Move } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { ItemDetailInfoComponent } from '../../item/shared/components/item-detail-info.component';
import { MoveDetailInfoComponent } from '../../move/shared/components/move-detail-info.component';

@Component({
  selector: 'pokedex-machine-detail',
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslocoDirective,
    ItemDetailInfoComponent,
    MoveDetailInfoComponent,
    ImgFallbackDirective,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.scss'],
})
export class MachineDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  protected readonly machine$: Observable<Machine> = this.route.data.pipe(
    map(({ machineDetail }) => machineDetail.machine),
  );
  protected readonly item$: Observable<Item> = this.route.data.pipe(map(({ machineDetail }) => machineDetail.item));
  protected readonly move$: Observable<Move> = this.route.data.pipe(map(({ machineDetail }) => machineDetail.move));
}
