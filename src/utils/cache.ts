import LRUCache from 'lru-cache';
import { DEFAULT_CACHE_TTL, DEFAULT_COUNT_LIMIT, DEFAULT_SIZE_LIMIT } from '../constant';
import { CacheOptions } from '../types/cache';

export const createCache = (opts: CacheOptions) =>
  new LRUCache<string, Uint8Array>({
    max: opts.countLimit ?? DEFAULT_COUNT_LIMIT,
    maxSize: opts.sizeLimit ?? DEFAULT_SIZE_LIMIT,
    ttl: opts.ttl ?? DEFAULT_CACHE_TTL,
    updateAgeOnGet: opts.updateAgeOnGet ?? true,
    sizeCalculation: (value) => {
      return value.byteLength;
    },
  });
