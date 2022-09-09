import { QuaLocalAppInfo } from '../types/app';

export interface QuaAssetsEndpointOpts {
  appInfo: QuaLocalAppInfo;
  baseUrl: string;
}

export class QuaAssetsEndpoint {
  private baseUrl: string;
  private appInfo: QuaLocalAppInfo;
  public constructor(opts: QuaAssetsEndpointOpts) {
    this.baseUrl = opts.baseUrl;
    this.appInfo = opts.appInfo;
  }

  get url(): string {
    return this.baseUrl + this.appInfo.localResourceVersion;
  }
  // TODO: build downloadable zip info based on endpoint info
}
