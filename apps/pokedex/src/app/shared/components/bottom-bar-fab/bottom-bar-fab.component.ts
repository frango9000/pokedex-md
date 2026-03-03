import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BottomBarService } from '../../../core/services/bottom-bar.service';

@Component({
  selector: 'pokedex-bottom-bar-fab',
  imports: [CommonModule, MatRippleModule, MatIconModule],
  templateUrl: './bottom-bar-fab.component.html',
  styleUrls: ['./bottom-bar-fab.component.scss'],
})
export class BottomBarFabComponent {
  @Input() routerLink: string | string[] | null = null;

  protected readonly bottomBarService = inject(BottomBarService);
}
