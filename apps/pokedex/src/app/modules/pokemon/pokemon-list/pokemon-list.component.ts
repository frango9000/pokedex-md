import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UntilDestroy } from '@ngneat/until-destroy';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { PokemonListDatasource } from './pokemon-list.datasource';

@UntilDestroy()
@Component({
  selector: 'pokedex-pokemon-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, NgOptimizedImage, InfiniteScrollModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  protected readonly dataSource: PokemonListDatasource = new PokemonListDatasource();

  protected readonly displayedColumns: string[] = ['id', 'sprite', 'name', 'generation', 'types'];

  constructor(private readonly pokemonService: PokemonService) {
    this.pokemonService
      .getAll()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources$ = data));
  }
}
