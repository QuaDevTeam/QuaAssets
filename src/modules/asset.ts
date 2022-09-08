import { QuaLocalAppInfo } from '../types/app';
import { QuaAssetsEndpointInfo } from '../types/remote';
import { QuaAssetsEndpoint } from './endpoint';

export interface QuaAssetBundleOpts {
  /**
   * Asset bundle name
   */
  name: string;
  appInfo: QuaLocalAppInfo;
  // TODO: bind a zip manager reference from the parent group
}

export class QuaAssetBundle {
  public name: string;
  private appInfo: QuaLocalAppInfo;
  // TODO: bind downloadable zip info to the class
  // TODO: build a memory cache for faster data loading

  public constructor(opts: QuaAssetBundleOpts) {
    this.name = opts.name;
    this.appInfo = opts.appInfo;
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
