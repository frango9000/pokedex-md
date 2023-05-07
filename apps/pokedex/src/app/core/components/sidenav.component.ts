import { Component } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'pokedex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(protected readonly sidenavService: SidenavService) {}
}
