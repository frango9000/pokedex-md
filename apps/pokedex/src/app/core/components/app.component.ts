import { OverlayContainer } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IsMobileModule } from '../../shared/modules/is-mobile';
import { NgLetModule } from '../../shared/modules/ng-let';
import { BottomBarService } from '../services/bottom-bar.service';
import { SidebarService } from '../services/sidebar.service';
import { ThemeService } from '../services/theme.service';
import { SidenavComponent } from './sidenav.component';
import { ToolbarComponent } from './toolbar.component';

@UntilDestroy()
@Component({
  selector: 'pokedex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ToolbarComponent, SidenavComponent, IsMobileModule, NgLetModule],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark-mode') darkModeClass = false;

  constructor(
    protected readonly sidebarService: SidebarService,
    private readonly overlay: OverlayContainer,
    private readonly bottomBarService: BottomBarService,
    private readonly themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this._subscribeToThemeChanges();
  }

  private _subscribeToThemeChanges(): void {
    this.themeService.darkMode$.pipe(untilDestroyed(this)).subscribe((darkMode) => {
      const darkClassName = 'dark-mode';
      this.darkModeClass = darkMode;
      if (this.darkModeClass) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }
}
