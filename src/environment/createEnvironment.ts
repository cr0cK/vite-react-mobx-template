import { QueryClient } from '@tanstack/react-query'
import { type Config, createConfiguration } from './config'

export interface Environment {
  config: Config
  queryClient: QueryClient
}

/**
 * Create the environment for the app that runs in the browser.
 * For tests, see createTestEnvironment().
 */
export function createEnvironment(): Environment {
  const config = createConfiguration()
  const queryClient = new QueryClient()

  return {
    config,
    queryClient
  }
}
