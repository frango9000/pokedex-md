import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BottomBarService } from '../../../core/services/bottom-bar.service';

@Component({
  selector: 'pokedex-bottom-bar-fab',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './bottom-bar-fab.component.html',
  styleUrls: ['./bottom-bar-fab.component.scss'],
})
export class BottomBarFabComponent {
  constructor(protected readonly bottomBarService: BottomBarService) {}
}
