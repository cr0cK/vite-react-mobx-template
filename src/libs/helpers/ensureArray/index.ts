import { isDefined } from '../isDefined'
import type { Perhaps } from '../types'

/**
 * Ensure that an array is returned if v is null or undefined.
 */
export function ensureArray<T>(v: Perhaps<T | T[]>): T[] {
  if (!isDefined(v)) {
    return []
  }

  if (Array.isArray(v)) {
    return v
  }

  return [v]
}
