import { concat } from 'rxjs';
import {
  EncounterConditionGenerator,
  EncounterConditionValueGenerator,
  EncounterMethodGenerator,
} from './generators/encounters';
import { EvolutionTriggerGenerator } from './generators/evolution';
import { GenerationGenerator, VersionGenerator, VersionGroupGenerator } from './generators/game';
import { ItemCategoryGenerator, ItemGenerator, ItemPocketGenerator } from './generators/item';
import { LanguageGenerator } from './generators/language';
import { MachineGenerator } from './generators/machine';
import { MoveDamageClassGenerator, MoveLearnMethodGenerator, MovesGenerator } from './generators/move';
import {
  AbilitiesGenerator,
  EggGroupGenerator,
  GrowthRateGenerator,
  PokemonColorGenerator,
  PokemonGenerator,
  PokemonHabitatGenerator,
  PokemonShapeGenerator,
  StatGenerator,
  TypeGenerator,
} from './generators/pokemon';

export function buildApi(): void {
  concat(
    new PokemonGenerator().generateResources(),
    new MovesGenerator().generateResources(),
    new MoveLearnMethodGenerator().generateResources(),
    new MoveDamageClassGenerator().generateResources(),
    new AbilitiesGenerator().generateResources(),
    new VersionGroupGenerator().generateResources(),
    new VersionGenerator().generateResources(),
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
    new GrowthRateGenerator().generateResources(),
    new PokemonHabitatGenerator().generateResources(),
    new PokemonColorGenerator().generateResources(),
    new PokemonShapeGenerator().generateResources(),
    new EggGroupGenerator().generateResources(),
    new EvolutionTriggerGenerator().generateResources(),
  ).subscribe();
}
