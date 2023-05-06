import { ApiEntity, ApiName, LocalizedNames, NamedApiResource } from '../domain/domain';
import { Move, MoveDamageClass } from '../moves/move';

export interface PxStat extends ApiEntity {
  id: number;
  name: string;
  names: LocalizedNames;
}

export interface Stat extends ApiEntity {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: NamedApiResource[]; //characteristic
  move_damage_class: NamedApiResource<MoveDamageClass>;
  names: ApiName[];
}

export interface MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
  change: number;
  move: NamedApiResource<Move>;
}

export interface NatureStatAffectSets {
  increase: NamedApiResource[]; //nature
  decrease: NamedApiResource[]; //nature
}
