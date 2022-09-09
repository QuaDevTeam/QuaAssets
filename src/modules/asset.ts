import { DEFAULT_CACHE_LIMIT, QuaLocalAppInfo } from '../types/app';
import { QuaAssetsEndpointInfo } from '../types/remote';
import { QuaAssetsEndpoint } from './endpoint';
import ZipManager from '@quajs/zip-manager';
import { LRUMap } from 'lru_map';

export interface QuaAssetBundleOpts {
  /**
   * Asset bundle name
   */
  name: string;
  appInfo: QuaLocalAppInfo;
  baseUrl: string;
  cacheLimit?: number;
  // TODO: bind a zip manager reference from the parent group
}

export class QuaAssetBundle {
  public name: string;
  private appInfo: QuaLocalAppInfo;
  private endPoint: QuaAssetsEndpoint;
  private cache: LRUMap<string, Uint8Array>;
  // TODO: bind downloadable zip info to the class
  // TODO: build a memory cache for faster data loading

  public constructor(opts: QuaAssetBundleOpts) {
    this.name = opts.name;
    this.appInfo = opts.appInfo;
    this.endPoint = new QuaAssetsEndpoint({
      appInfo: opts.appInfo,
      baseUrl: opts.baseUrl,
    });
    this.cache = new LRUMap<string, Uint8Array>(opts.cacheLimit ?? DEFAULT_CACHE_LIMIT);
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
