import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TypeDamagesComponent } from '../type-damages/type-damages.component';

@Component({
  selector: 'pokedex-type-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, TypeDamagesComponent],
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss'],
})
export class TypeDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {}
}
