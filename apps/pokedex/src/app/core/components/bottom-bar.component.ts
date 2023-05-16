import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BottomBarService } from '../services/bottom-bar.service';

@Component({
  selector: 'pokedex-bottom-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent {
  constructor(
    protected readonly bottomSheetRef: MatBottomSheetRef<BottomBarComponent>,
    protected readonly bottomBarService: BottomBarService,
  ) {}
}
