import { concat } from 'rxjs';
import { TypeGenerator } from './generators/pokemon';

export function buildApi(): void {
  concat(
    // new PokemonGenerator().generateResources(),
    // new MovesGenerator().generateResources(),
    // new MoveLearnMethodGenerator().generateResources(),
    // new MoveDamageClassGenerator().generateResources(),
    // new MoveAilmentGenerator().generateResources(),
    // new MoveCategoryGenerator().generateResources(),
    // new MoveTargetGenerator().generateResources(),
    // new AbilitiesGenerator().generateResources(),
    // new VersionGroupGenerator().generateResources(),
    // new VersionGenerator().generateResources(),
    // new LanguageGenerator().generateResources(),
    new TypeGenerator().generateResources(),
    // new ItemGenerator().generateResources(),
    // new ItemCategoryGenerator().generateResources(),
    // new ItemPocketGenerator().generateResources(),
    // new ItemAttributeGenerator().generateResources(),
    // new MachineGenerator().generateResources(),
    // new GenerationGenerator().generateResources(),
    // new StatGenerator().generateResources(),
    // new EncounterMethodGenerator().generateResources(),
    // new EncounterConditionGenerator().generateResources(),
    // new EncounterConditionValueGenerator().generateResources(),
    // new GrowthRateGenerator().generateResources(),
    // new PokemonHabitatGenerator().generateResources(),
    // new PokemonColorGenerator().generateResources(),
    // new PokemonShapeGenerator().generateResources(),
    // new EggGroupGenerator().generateResources(),
    // new EvolutionTriggerGenerator().generateResources(),
    // new LocationGenerator().generateResources(),
    // new RegionGenerator().generateResources(),
  ).subscribe();
}
