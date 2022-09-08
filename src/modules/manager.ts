import { QuaAssetGroup } from './group';

export class QuaAssetsManager {
  public static groups: QuaAssetGroup[] = [];
  private static groupNameMap: Record<string, QuaAssetGroup> = {};

  public static createAssetGroup(name: string) {
    if (QuaAssetsManager.groupNameMap[name]) {
      throw new Error("There's already a same name group.");
    }
    const assetGroup = new QuaAssetGroup(name);
    QuaAssetsManager.groups.push(assetGroup);
    return assetGroup;
  }

  /**
   * Add an existed asset group to the manager
   * @param group the existed asset group
   */
  public static addAssetGroup(group: QuaAssetGroup) {}

  /**
   * Remove an asset group from this manager
   * @param name the name of the asset group which will be removed
   */
  public static removeAssetGroup(name: string) {}

  /**
   * Unload all the assets under the specific group
   * @param groupName the name of the asset group
   */
  public static unloadAssetGroup(groupName: string) {}

  /**
   * Get asset group by name
   * @param name the name of some asset group
   */
  public static getAssetGroup(name: string) {}

  /**
   * Get a certain asset bundle with a key
   * @param key {groupName}:${bundleName}
   */
  public static getAssetBundle(key: string) {}

  /**
   * Get a certain asset with a key
   * @param key {groupName}:${bundleName}:${assetKey}
   */
  public static getAsset(key: string) {}

  /**
   * Auto generating groups, bundles based on some manifest
   */
  public static autoLoadByManifest() {}
}

/**
 * Get a certain asset group by name
 * @param name the name of some asset group
 */
export const useAssetsGroup = (name: string) => {};

/**
 * Get a certain asset bundle with a key
 * @param key {groupName}:${bundleName}
 */
export const useAssetBundle = (key: string) => {};

/**
 * Get a certain asset with a key
 * @param key {groupName}:${bundleName}:${assetKey}
 */
export const useAsset = (key: string) => {};
