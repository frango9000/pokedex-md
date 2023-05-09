import { HashMap } from '@ngneat/transloco/lib/types';
import { LocalizedNames } from '@pokedex-md/domain';
import { merge } from 'lodash-es';

export class MergingMap extends Map<string, HashMap> {
  static mergeMaps(maps: MergingMap[]): MergingMap {
    const merged = new MergingMap();
    maps.forEach((map) => map.forEach((value: HashMap, key: string) => merged.merge(key, value)));
    return merged;
  }

  // static ofSingleResource<R>(resources: R[], mergeIn: (resource: R) => MergingObject): MergingMap {
  //   const merged = new MergingMap();
  //   resources.map((resource) => mergeIn(resource)).forEach((value) => merged.merge(value.key, value.value));
  //   return merged;
  // }

  static ofMultipleResources<P extends Record<T, LocalizedNames>, T extends keyof P>(
    resources: P[],
    resourcesKey: T,
    getKey: (resource: P, value: string) => HashMap,
  ): MergingMap {
    const merged = new MergingMap();
    resources.forEach((resource) =>
      Object.keys(resource[resourcesKey]).forEach((lang) => merged.merge(lang, getKey(resource, lang))),
    );
    return merged;
  }

  merge(key: string, value: HashMap): Map<string, HashMap> {
    const existingKey = this.get(key);
    return super.set(key, existingKey ? merge(existingKey, value) : value);
  }
}

// export interface MergingObject<K = string, V = unknown> {
//   key: K;
//   value: V;
// }
