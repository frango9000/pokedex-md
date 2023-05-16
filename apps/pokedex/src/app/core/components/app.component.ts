import { Component } from '@angular/core';
import { BottomBarService } from '../services/bottom-bar.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'pokedex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(protected readonly sidebarService: SidebarService, private readonly bottomBarService: BottomBarService) {}
}
