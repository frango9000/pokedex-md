import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { IsMobileModule } from '../../shared/modules/is-mobile';
import { BottomBarService } from '../services/bottom-bar.service';
import { LanguageService } from '../services/language.service';
import { SidebarService } from '../services/sidebar.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'pokedex-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslocoModule,
    NgOptimizedImage,
    IsMobileModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    protected readonly sidenavService: SidenavService,
    protected readonly sidebarService: SidebarService,
    protected readonly bottomBarService: BottomBarService,
    protected readonly languageService: LanguageService,
  ) {}
}
