import { QuaAssetBundle, QuaAssetBundleOpts } from './asset';

export class QuaAssetGroup {
  public name: string;
  private bundles: QuaAssetBundle[] = [];
  private bundleNameMap: Record<string, QuaAssetBundle> = {};

  // TODO: each group should have a zip manager

  public constructor(name: string) {
    this.name = name;
  }

  /**
   * Create a new bundle in the current group
   * @param opts Bundle options
   * @returns the created asset bundle
   */
  public createBundle(opts: QuaAssetBundleOpts) {
    if (this.bundleNameMap[opts.name]) {
      throw new Error("There's already a same name bundle.");
    }
    const bundle = new QuaAssetBundle(opts);
    this.bundles.push(bundle);
    return bundle;
  }

  /**
   * Add a existed bundle to this group
   * @param bundle some existed bundle
   */
  public addBundle(bundle: QuaAssetBundle) {}

  /**
   * Get bundle from the current group
   * @param name the name of bundle
   */
  public getBundle(name: string) {
    return this.bundleNameMap[name];
  }

  /**
   * Load a bundle by zip manager
   * @param name the name of the bundle which needs to be loaded
   */
  public loadBundle(name: string) {}

  /**
   * Get bundle from the current group
   * @param name the name of bundle
   */
  public unloadBundle(name: string) {
    if (!this.bundleNameMap[name]) {
      return;
    }
    this.bundleNameMap[name].unload();
    delete this.bundleNameMap[name];
  }

  public loadAll() {}

  public unloadAll() {}

  /**
   * DANGER: This methods will remove the bundle and also deleting all downloaded assets
   */
  public destroyBundle(name: string) {}

  /**
   * Get a certain asset in this bundle
   * @param key {bundleName}:${assetKey}
   */
  public getAsset(key: string) {}
}
