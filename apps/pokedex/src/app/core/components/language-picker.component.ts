import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'pokedex-language-picker',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, TranslocoModule, NgOptimizedImage],
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent {
  constructor(protected readonly languageService: LanguageService) {}
}
