import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { IsMobileModule } from '../../shared/modules/is-mobile';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'pokedex-sidenav',
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, TranslocoModule, IsMobileModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  protected readonly sidenavService = inject(SidenavService);
}
