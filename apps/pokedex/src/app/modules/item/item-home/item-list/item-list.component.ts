import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';
import { PxItem } from '@pokedex-md/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { ItemService } from '../../../../api/items/item.service';
import { BottomBarFabComponent } from '../../../../shared/components/bottom-bar-fab/bottom-bar-fab.component';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';
import { GenericDatasource } from '../../../../shared/utils/generic-datasource';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { ItemFilterService } from '../item-filter.service';

@Component({
  selector: 'pokedex-item-list',
  standalone: true,
  imports: [
    CommonModule,
    BottomBarFabComponent,
    InfiniteScrollModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    TranslocoDirective,
    TypeButtonComponent,
    ImgFallbackDirective,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  protected readonly dataSource: GenericDatasource<PxItem> = new GenericDatasource<PxItem>();
  protected readonly displayedColumns: string[] = ['id', 'sprite', 'name', 'cost', 'category', 'pocket'];

  constructor(private readonly itemService: ItemService, private readonly filterService: ItemFilterService) {
    this.itemService
      .getAll$()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources = data));
    this.filterService.filters$.subscribe((filters) => (this.dataSource.filters = filters));
  }
}
