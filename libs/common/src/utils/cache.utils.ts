import * as stringify from 'json-stable-stringify';
import { hash } from './hash.utils';

/**
 * @description: Utility functions to support caching operations
 * @notes:
 *  - Uses json-stable-stringify (instead of JSON.Stringify) for determanistic string generation - regardless of parameter ordering
 *  - Uses custom hash function as significantly faster than cryptogaphic hashes
 */
export class CachingUtils {
  public static makeCacheKeyFromId(entityId: string): string {
    return this.makeCacheKeyFromProperty(entityId, 'id');
  }

  public static makeCacheKeyFromProperty(
    propertyName: string,
    propertyValue: string,
  ): string {
    return `CacheKey-${propertyName}-${propertyValue}`;
  }

  public static makeCacheKeyFromObject(object: object): string {
    return hash(stringify(object)).toString();
  }
}
