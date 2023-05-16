import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { IsMobileModule } from '../../shared/modules/is-mobile';
import { SidebarService } from '../services/sidebar.service';
import { SidenavService } from '../services/sidenav.service';
import { LanguagePickerComponent } from './language-picker.component';

@Component({
  selector: 'pokedex-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslocoModule,
    IsMobileModule,
    LanguagePickerComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(protected readonly sidenavService: SidenavService, protected readonly sidebarService: SidebarService) {}
}
