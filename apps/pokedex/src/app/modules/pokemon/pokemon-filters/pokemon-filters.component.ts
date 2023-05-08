import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss'],
})
export class PokemonFiltersComponent {}
