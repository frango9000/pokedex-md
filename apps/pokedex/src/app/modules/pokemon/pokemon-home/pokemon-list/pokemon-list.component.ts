import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@ngneat/transloco';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PxPokemon } from '@pokedex-md/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { take } from 'rxjs/operators';
import { FilterService } from '../../../../shared/modules/filter/filter.service';
import { PokemonService } from '../../../../shared/services/api/pokemon.service';
import { GenericDatasource } from '../../../../shared/utils/generic-datasource';
import { TypeButtonComponent } from '../../../type/type-button/type-button.component';

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
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  protected readonly dataSource: GenericDatasource<PxPokemon> = new GenericDatasource<PxPokemon>();

  protected readonly displayedColumns: string[] = ['id', 'sprite', 'name', 'generation', 'types'];

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly filterService: FilterService<PxPokemon>,
  ) {
    this.pokemonService
      .getAll()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource.resources = data));
    this.filterService.filters$.subscribe((filters) => (this.dataSource.filters = filters));
  }
}
