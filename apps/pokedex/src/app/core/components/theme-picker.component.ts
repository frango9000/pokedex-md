import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgLetModule } from '../../shared/modules/ng-let';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'pokedex-theme-picker',
  imports: [CommonModule, MatIconModule, MatButtonModule, NgLetModule],
  templateUrl: './theme-picker.component.html',
})
export class ThemePickerComponent {
  protected readonly themeService = inject(ThemeService);
}
