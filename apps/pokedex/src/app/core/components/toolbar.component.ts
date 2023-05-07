import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'pokedex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(protected readonly sidenavService: SidenavService, protected readonly sidebarService: SidebarService) {}
}
