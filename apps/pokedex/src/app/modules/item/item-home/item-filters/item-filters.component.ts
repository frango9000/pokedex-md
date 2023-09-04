import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-item-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss'],
})
export class ItemFiltersComponent {}
