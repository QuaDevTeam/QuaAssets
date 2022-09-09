export interface QuaLocalAppInfo {
  /**
   * Local application version info (usable for downloading the diff patch)
   */
  localAppVersion?: string;
  localResourceVersion?: string;
}

export const DEFAULT_CACHE_LIMIT = 10;
