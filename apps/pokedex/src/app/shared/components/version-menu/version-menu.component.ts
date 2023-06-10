import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { PxGameVersion } from '@pokedex-md/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VersionGroupService } from '../../../api/games/version-group.service';
import { VersionService } from '../../../api/games/version.service';

@Component({
  selector: 'pokedex-version-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, TranslocoModule],
  templateUrl: './version-menu.component.html',
  styleUrls: ['./version-menu.component.scss'],
})
export class VersionMenuComponent {
  protected readonly versions$: Observable<PxGameVersion[]> = this.versionService.getAll$();

  @Output() readonly version$ = new BehaviorSubject<PxGameVersion>(this.versionService.getAll()[0]);
  @Output() readonly versionName$ = this.version$.pipe(map((version) => version.name));

  @Output() readonly versionGroup$ = this.versionName$.pipe(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    map((versionName) => this.versionGroupService.findByVersion(versionName)!),
  );
  @Output() readonly versionGroupName$ = this.versionGroup$.pipe(map((version) => version?.name));

  constructor(
    private readonly versionService: VersionService,
    private readonly versionGroupService: VersionGroupService,
  ) {}
}
