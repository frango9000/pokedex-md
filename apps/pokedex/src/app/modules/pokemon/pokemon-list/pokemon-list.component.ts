import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'pokedex-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  constructor(private readonly pokemonService: PokemonService) {
    this.pokemonService.initialize().subscribe((data) => {
      console.log(data);
      this.pokemonService.fetchApiOne(1).subscribe((data) => {
        console.log(data);
      });
    });
  }
}
