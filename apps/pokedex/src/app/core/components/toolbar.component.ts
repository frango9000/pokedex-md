import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@jsverse/transloco';
import { VersionGroupPickerComponent } from '../../modules/version/shared/components/version-group-picker/version-group-picker.component';
import { IsMobileModule } from '../../shared/modules/is-mobile';
import { SidebarService } from '../services/sidebar.service';
import { SidenavService } from '../services/sidenav.service';
import { TitleService } from '../services/title.service';
import { LanguagePickerComponent } from './language-picker.component';
import { ThemePickerComponent } from './theme-picker.component';

@Component({
  selector: 'pokedex-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslocoModule,
    IsMobileModule,
    LanguagePickerComponent,
    ThemePickerComponent,
    VersionGroupPickerComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  protected readonly sidenavService = inject(SidenavService);
  protected readonly sidebarService = inject(SidebarService);
  protected readonly titleService = inject(TitleService);
}
