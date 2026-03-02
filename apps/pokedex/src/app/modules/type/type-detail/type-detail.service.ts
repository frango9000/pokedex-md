import { ComponentType } from '@angular/cdk/overlay';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TypeDetailService {
  private readonly dialog = inject(MatDialog);

  openTypesDialog({ types = [] as string[], attacking = false, defending = false }): void {
    from(import(`./type-detail.component`))
      .pipe(
        map((chunk) => Object.values(chunk)[0] as ComponentType<unknown>),
        switchMap((dialogComponent) =>
          this.dialog.open(dialogComponent, { data: { types, attacking, defending } }).afterClosed(),
        ),
      )
      .subscribe();
  }
}
