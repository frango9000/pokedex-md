import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@ngneat/transloco';
import { PxMove } from '@pokedex-md/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { MoveService } from '../../../../api/moves/move.service';
import { BottomBarFabComponent } from '../../../../shared/components/bottom-bar-fab/bottom-bar-fab.component';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';
import { GenericDatasource } from '../../../../shared/utils/generic-datasource';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { MoveFilterService } from '../move-filter.service';

@Component({
  selector: 'pokedex-move-list',
  standalone: true,
  imports: [
    CommonModule,
    BottomBarFabComponent,
    ImgFallbackDirective,
    InfiniteScrollModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    NgOptimizedImage,
    TranslocoDirective,
    TypeButtonComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent {
  protected readonly dataSource: GenericDatasource<PxMove> = new GenericDatasource<PxMove>();
  protected readonly displayedColumns: string[] = ['id', 'name', 'generation', 'type', 'power', 'pp', 'accuracy'];

  constructor(
    private readonly moveService: MoveService,
    private readonly filterService: MoveFilterService,
  ) {
    this.moveService
      .getAll$()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources = data));
    this.filterService.filters$.subscribe((filters) => (this.dataSource.filters = filters));
  }
}
