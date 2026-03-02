import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { Item } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { ItemDetailInfoComponent } from '../shared/components/item-detail-info.component';

@Component({
  selector: 'pokedex-item-detail',
  imports: [
    CommonModule,
    ImgFallbackDirective,
    MatCardModule,
    TranslocoDirective,
    NgOptimizedImage,
    MatDividerModule,
    ItemDetailInfoComponent,
  ],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  protected readonly item$: Observable<Item> = this.route.data.pipe(map(({ item }) => item));
}
