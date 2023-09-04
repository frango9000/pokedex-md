import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';
import { Item } from '@pokedex-md/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { TypeButtonComponent } from '../../type/shared/components/type-button/type-button.component';
import { TypeSlotNamesPipe } from '../../type/shared/pipes/type-slot-names.pipe';
import { WithVersionGroupDirective } from '../../version/shared/directives/with-version-group.directive';

@Component({
  selector: 'pokedex-item-detail',
  standalone: true,
  imports: [
    CommonModule,
    ImgFallbackDirective,
    MatCardModule,
    TranslocoDirective,
    TypeButtonComponent,
    TypeSlotNamesPipe,
    NgOptimizedImage,
    MatDividerModule,
    WithVersionGroupDirective,
  ],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  protected readonly item$: Observable<Item> = this.route.data.pipe(map(({ item }) => item));
}
