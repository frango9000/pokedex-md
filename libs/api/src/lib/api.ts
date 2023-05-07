import { concat } from 'rxjs';
import {
  EncounterConditionGenerator,
  EncounterConditionValueGenerator,
  EncounterMethodGenerator,
} from './generators/encounters';
import { GenerationGenerator, VersionGroupGenerator } from './generators/game';
import { ItemCategoryGenerator, ItemGenerator, ItemPocketGenerator } from './generators/item';
import { LanguageGenerator } from './generators/language';
import { MachineGenerator } from './generators/machine';
import { MoveDamageClassGenerator, MoveLearnMethodGenerator, MovesGenerator } from './generators/move';
import { AbilitiesGenerator, PokemonGenerator, StatGenerator, TypeGenerator } from './generators/pokemon';

export function buildApi(): void {
  concat(
    new PokemonGenerator().generateResources(),
    new MovesGenerator().generateResources(),
    new MoveLearnMethodGenerator().generateResources(),
    new MoveDamageClassGenerator().generateResources(),
    new AbilitiesGenerator().generateResources(),
    new VersionGroupGenerator().generateResources(),
    new LanguageGenerator().generateResources(),
    new TypeGenerator().generateResources(),
    new ItemGenerator().generateResources(),
    new ItemCategoryGenerator().generateResources(),
    new ItemPocketGenerator().generateResources(),
    new MachineGenerator().generateResources(),
    new GenerationGenerator().generateResources(),
    new StatGenerator().generateResources(),
    new EncounterMethodGenerator().generateResources(),
    new EncounterConditionGenerator().generateResources(),
    new EncounterConditionValueGenerator().generateResources(),
  ).subscribe();
}
