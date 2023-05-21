import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TypeDamages } from '@pokedex-md/domain';
import { TypeService } from '../../../shared/services/api/type.service';

@Component({
  selector: 'pokedex-type-damages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-damages.component.html',
  styleUrls: ['./type-damages.component.scss'],
})
export class TypeDamagesComponent implements OnInit {
  @Input() public types: string[] = [];

  @Input() public showDefending = false;
  @Input() public showAttacking = false;
  @Input() public clickableTitle = false;
  @Input() public clickableEntries = false;

  protected typeDamages?: TypeDamages;

  constructor(private readonly typeService: TypeService) {}

  ngOnInit(): void {
    this.typeDamages = this.generateTypeDamages();
  }

  private generateTypeDamages(): TypeDamages {
    const allTypes = this.typeService.getAll();
    const pokeTypes = allTypes.filter((type) => this.types.includes(type.name));
    let defendingTypeDamages = allTypes.map((type) => ({ name: type.name, multiplier: 1 }));

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
    defendingTypeDamages = defendingTypeDamages.filter((value) => value.multiplier !== 1);

    let attackingTypeDamages = allTypes.map((value1) => ({ name: value1.name, multiplier: 1 }));
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
    attackingTypeDamages = attackingTypeDamages.filter((value) => value.multiplier !== 1);

    return {
      attacking: {
        weaknesses: attackingTypeDamages.filter((value) => value.multiplier < 1),
        strengths: attackingTypeDamages.filter((value) => value.multiplier > 1),
      },
      defending: {
        weaknesses: defendingTypeDamages.filter((value) => value.multiplier > 1),
        resistances: defendingTypeDamages.filter((value) => value.multiplier < 1),
      },
    };
  }
}
