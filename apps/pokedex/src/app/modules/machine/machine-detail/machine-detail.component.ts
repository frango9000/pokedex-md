import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';
import { Item, Machine, Move } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { ItemDetailInfoComponent } from '../../item/shared/components/item-detail-info.component';
import { MoveDetailInfoComponent } from '../../move/shared/components/move-detail-info.component';

@Component({
  selector: 'pokedex-machine-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslocoDirective,
    ItemDetailInfoComponent,
    MoveDetailInfoComponent,
    ImgFallbackDirective,
    MatCardModule,
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
