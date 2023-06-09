import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TypeButtonComponent } from '../shared/components/type-button/type-button.component';
import { TypeDamagesComponent } from '../shared/components/type-damages/type-damages.component';

@Component({
  selector: 'pokedex-type-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    TypeDamagesComponent,
    TypeButtonComponent,
    MatDialogModule,
  ],
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypeDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    protected readonly data: {
      types: string[];
      attacking?: boolean;
      defending?: boolean;
    },
  ) {}
}
