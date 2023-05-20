import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TypeDetailService {
  constructor(private readonly dialog: MatDialog) {}

  openDialog(): void {
    from(import(`./type-detail.component`))
      .pipe(
        map((chunk) => Object.values(chunk)[0] as ComponentType<unknown>),
        switchMap((dialogComponent) => this.dialog.open(dialogComponent).afterClosed()),
      )
      .subscribe();
  }
}
