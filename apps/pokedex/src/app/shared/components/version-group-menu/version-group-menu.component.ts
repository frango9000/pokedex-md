import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { PxVersionGroup } from '@pokedex-md/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VersionGroupService } from '../../../api/games/version-group.service';

@Component({
  selector: 'pokedex-version-group-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, TranslocoModule],
  templateUrl: './version-group-menu.component.html',
  styleUrls: ['./version-group-menu.component.scss'],
})
export class VersionGroupMenuComponent {
  protected readonly versionsGroups$: Observable<PxVersionGroup[]> = this.service.getAll$();

  @Output() readonly versionGroup$ = new BehaviorSubject<PxVersionGroup>(this.service.getAll()[0]);
  @Output() readonly versionGroupName$ = this.versionGroup$.pipe(map((version) => version.name));

  constructor(private readonly service: VersionGroupService) {}
}
