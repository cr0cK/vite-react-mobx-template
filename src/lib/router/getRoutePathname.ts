import type { FileRoutesByPath } from '@tanstack/react-router'

/**
 * Identity function to validate that `pathname` is valid.
 */
export function getRoutePathname(pathname: keyof FileRoutesByPath) {
  return pathname
}
