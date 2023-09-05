import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-machine-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-filters.component.html',
  styleUrls: ['./machine-filters.component.scss'],
})
export class MachineFiltersComponent {}
