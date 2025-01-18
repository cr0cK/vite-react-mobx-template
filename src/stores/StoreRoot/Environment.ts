import { QueryClient } from '@tanstack/react-query'

export interface IEnvironment {
  queryClient: QueryClient
}

/**
 * Create the environment for the app that runs in the browser.
 * For tests, see createTestEnvironment().
 */
export function createEnvironment(): IEnvironment {
  const queryClient = new QueryClient()

  return {
    queryClient
  }
}
