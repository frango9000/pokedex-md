import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-machine-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss'],
})
export class MachineListComponent {}
