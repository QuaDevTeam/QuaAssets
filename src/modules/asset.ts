import LRUCache from 'lru-cache';
import { QuaLocalAppInfo } from '../types/app';
import { CacheOptions } from '../types/cache';
import { createCache } from '../utils/cache';
import { QuaAssetsEndpoint } from './endpoint';

export interface QuaAssetBundleOpts {
  /**
   * Asset bundle name
   */
  name: string;
  appInfo: QuaLocalAppInfo;
  baseUrl: string;
  cache?: CacheOptions;
  // TODO: bind a zip manager reference from the parent group
}

export class QuaAssetBundle {
  public name: string;
  private appInfo: QuaLocalAppInfo;
  private endPoint: QuaAssetsEndpoint;
  private cache: LRUCache<string, Uint8Array>;
  // TODO: bind downloadable zip info to the class

  public constructor(opts: QuaAssetBundleOpts) {
    this.name = opts.name;
    this.appInfo = opts.appInfo;
    this.endPoint = new QuaAssetsEndpoint({
      appInfo: opts.appInfo,
      baseUrl: opts.baseUrl,
    });
    this.cache = createCache(opts.cache || {});
  }

  /**
   * Get asset by a certain key
   * @param key assetKey
   */
  public getAsset(key: string) {}

  /**
   * Load zip bundle by zip manager
   */
  public load() {}

  /**
   * Unload the bundle instance, release memory
   */
  public unload() {}

  /**
   * Destroy the bundle, also deleting the assets
   */
  public destroy() {}
}
