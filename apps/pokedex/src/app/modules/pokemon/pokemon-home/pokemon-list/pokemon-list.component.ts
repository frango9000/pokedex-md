import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@ngneat/transloco';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PxPokemon } from '@pokedex-md/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { PokemonService } from '../../../../shared/services/api/pokemon.service';
import { GenericDatasource } from '../../../../shared/utils/generic-datasource';
import { TypeButtonComponent } from '../../../type/type-button/type-button.component';
import { PokemonFilterService } from '../pokemon-filter.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    NgOptimizedImage,
    InfiniteScrollModule,
    MatSortModule,
    TypeButtonComponent,
    TranslocoModule,
    MatCardModule,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  protected readonly dataSource: GenericDatasource<PxPokemon> = new GenericDatasource<PxPokemon>();

  protected readonly displayedColumns: string[] = ['id', 'sprite', 'name', 'generation', 'types'];

  constructor(private readonly pokemonService: PokemonService, private readonly filterService: PokemonFilterService) {
    this.pokemonService
      .getAll()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources = data));
    this.filterService.filters$.subscribe((filters) => (this.dataSource.filters = filters));
  }
}
