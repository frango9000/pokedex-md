import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { PxMachine } from '@pokedex-md/domain';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { MachineService } from '../../../../api/machine/machine.service';
import { BottomBarFabComponent } from '../../../../shared/components/bottom-bar-fab/bottom-bar-fab.component';
import { GenericDatasource } from '../../../../shared/utils/generic-datasource';
import { TypeButtonComponent } from '../../../type/shared/components/type-button/type-button.component';
import { MachineFilterService } from '../machine-filter.service';

@Component({
  selector: 'pokedex-machine-list',
  imports: [
    MatCardModule,
    MatTableModule,
    MatSortModule,
    RouterLink,
    RouterLinkActive,
    BottomBarFabComponent,
    TypeButtonComponent,
    TranslocoDirective,
    NgOptimizedImage,
    InfiniteScrollDirective,
  ],
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss'],
})
export class MachineListComponent {
  private readonly machineService: MachineService = inject(MachineService);
  private readonly filterService: MachineFilterService = inject(MachineFilterService);
  protected readonly dataSource: GenericDatasource<PxMachine> = new GenericDatasource<PxMachine>();
  protected readonly displayedColumns: string[] = [
    'id',
    'item.sprite',
    'item.name',
    'item.cost',
    'move.name',
    'move.type',
    'move.power',
    'move.pp',
    'move.accuracy',
  ];

  constructor() {
    this.machineService
      .getAll$()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources = data));
    this.filterService.filters$.subscribe((filters) => (this.dataSource.filters = filters));
  }
}
