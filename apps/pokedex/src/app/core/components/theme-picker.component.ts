import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgLetModule } from '../../shared/modules/ng-let';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'pokedex-theme-picker',
  standalone: true,
  imports: [CommonModule, NgLetModule, MatButtonModule, MatIconModule],
  templateUrl: './theme-picker.component.html',
})
export class ThemePickerComponent {
  constructor(protected readonly themeService: ThemeService) {}
}
