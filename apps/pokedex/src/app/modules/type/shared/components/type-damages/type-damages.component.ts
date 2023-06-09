import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TypeDamages } from '@pokedex-md/domain';
import { TypeService } from '../../../../../api/pokemon/type.service';
import { TypeDamagesMultiplierColorPipe } from '../../pipes/type-damage-multiplier-color.pipe';
import { TypeButtonComponent } from '../type-button/type-button.component';

@Component({
  selector: 'pokedex-type-damages',
  standalone: true,
  imports: [CommonModule, TranslocoModule, TypeButtonComponent, TypeDamagesMultiplierColorPipe],
  templateUrl: './type-damages.component.html',
  styleUrls: ['./type-damages.component.scss'],
})
export class TypeDamagesComponent implements OnChanges {
  @Input() public types: string[] = [];

  @Input() public defending: boolean | undefined = false;
  @Input() public attacking: boolean | undefined = false;
  @Input() public clickableTitle = false;
  @Input() public clickableEntries = false;

  protected typeDamages?: TypeDamages;

  constructor(private readonly typeService: TypeService) {}

  private generateTypeDamages(): TypeDamages {
    const allTypes = this.typeService.getAll();
    const pokeTypes = allTypes.filter((type) => this.types.includes(type.name));
    const defendingTypeDamages = allTypes.map((type) => ({ name: type.name, multiplier: 1 }));

    pokeTypes.forEach((type) => {
      type.damage_relations.double_damage_from.forEach((double) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === double);
        defendingTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_from.forEach((half) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === half);
        defendingTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_from.forEach((none) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === none);
        defendingTypeDamages[found].multiplier *= 0;
      });
    });

    const attackingTypeDamages = allTypes.map((value1) => ({ name: value1.name, multiplier: 1 }));
    pokeTypes.forEach((type) => {
      type.damage_relations.double_damage_to.forEach((double) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === double);
        attackingTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_to.forEach((half) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === half);
        attackingTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_to.forEach((none) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === none);
        attackingTypeDamages[found].multiplier *= 0;
      });
    });

    return {
      attacking: {
        weaknesses: attackingTypeDamages
          .filter((value) => value.multiplier < 1)
          .sort((a, b) => b.multiplier - a.multiplier),
        strengths: attackingTypeDamages
          .filter((value) => value.multiplier > 1)
          .sort((a, b) => a.multiplier - b.multiplier),
      },
      defending: {
        weaknesses: defendingTypeDamages
          .filter((value) => value.multiplier > 1)
          .sort((a, b) => b.multiplier - a.multiplier),
        resistances: defendingTypeDamages
          .filter((value) => value.multiplier < 1)
          .sort((a, b) => a.multiplier - b.multiplier),
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['types']) {
      this.typeDamages = this.generateTypeDamages();
    }
  }
}
